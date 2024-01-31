import {mount, createLocalVue} from '@vue/test-utils'
import MainForm from "./MainForm.vue";
import axios from "axios";
import DatePicker from '@vuepic/vue-datepicker';
import WaitingPage from './WaitingPage.vue';
import Vue from 'vue'
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
Vue.component('WaitingPage', WaitingPage)
const localVue = createLocalVue();

localVue.use(DatePicker);

const reasons_for_loan = ["Debt Consolidation", "Emergency Situation", "Auto Repair", "Auto Purchase", "Moving", "Home Improvement", "Medical", "Business", "Vacation", "Taxes", "Rent Or Mortgage", "Wedding", "Major Purchase", "Student Loan Refinance", "Credit Card Consolidation", "Other"];
const contact_time = ["Anytime", "Morning", "Afternoon", "Evening"];
const income_type = ["Job Income", "Self Employed", "Benefits", "Pension", "Social Security", "Disability Income", "Military", "Other"];
const pay_frequency = ["Weekly", "Every 2 Weeks", "Twice A Month", "Monthly"];

function testIncorrectValue(value, field, wrapper, wrappedElement) {
    wrappedElement.setValue(value);
    expect(wrapper.vm.fields[field]).toBe(value);
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
}

function testAlpha(field, wrapper, wrappedElement) {
    testIncorrectValue('', field, wrapper, wrappedElement);//required
    wrappedElement.setValue('        ');
    expect(wrapper.vm.fields[field]).toBe('');
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();//required
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/', '\'', '\\', '~', '`', '[', ']', '{', '}', '|', '.', ',', '_', '=', '+', '-', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let i = 0; i < symbols.length; i++) {
        testIncorrectValue('test' + symbols[i], field, wrapper, wrappedElement);
    }
}

function testPhone(field, wrapper, wrappedElement) {
    testIncorrectValue('', field, wrapper, wrappedElement);//required
    wrappedElement.setValue('        ');
    expect(wrapper.vm.fields[field]).toBe('');
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();//required
    testIncorrectValue('123-132-1123', field, wrapper, wrappedElement);//first digit can't be 1
    testIncorrectValue('023-132-1123', field, wrapper, wrappedElement);//first digit can't be 0
    wrappedElement.setValue('323-132-1123');
    expect(wrapper.vm.fields[field]).toBe('323-132-1123');
}

function testPhoneMask(field, wrapper, wrappedElement) {
    wrappedElement.setValue('123');
    expect(wrapper.vm.fields[field]).toBe('123');
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
    wrappedElement.setValue('1234');
    wrapper.vm.phoneMask(field);
    expect(wrapper.vm.fields[field]).toBe('123-4');
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
    wrappedElement.setValue('1234567');
    wrapper.vm.phoneMask(field);
    expect(wrapper.vm.fields[field]).toBe('123-456-7');
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
    wrappedElement.setValue('asdasd' + 123123 + 'asdasdxzc' + 1234 + 'asdasdxzc');
    wrapper.vm.phoneMask(field);
    expect(wrapper.vm.fields[field]).toBe('123-123-1234');
    wrappedElement.setValue('!@#$%^&*()_+-={}[]\\|"\'/.,:;~`№' + 123123 + '!@#$%^&*()_+-={}[]\\|"\'/.,:;~`№' + 1234 + '!@#$%^&*()_+-={}[]\\|"\'/.,:;~`№');
    wrapper.vm.phoneMask(field);
    expect(wrapper.vm.fields[field]).toBe('123-123-1234');
    wrappedElement.setValue('');
}

function testDate(field, wrapper, wrappedElement) {
    wrappedElement.setValue('test');
    wrappedElement.trigger('change');
    expect(wrapper.vm.fields[field]).toBe(null);
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/', '\'', '\\', '~', '`', '[', ']', '{', '}', '|', '.', ',', '_', '=', '+', '-', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let i = 0; i < symbols.length; i++) {
        wrappedElement.setValue('test' + symbols[i]);
        expect(wrapper.vm.fields[field]).toBe(null);
        expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
    }
}

function testNumeric(field, wrapper, wrappedElement){
    testIncorrectValue('', field, wrapper, wrappedElement);//required
    wrappedElement.setValue('        ');
    expect(wrapper.vm.fields[field]).toBe('');
    expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();//required
    testIncorrectValue('test', field, wrapper, wrappedElement);//only numeric
    testIncorrectValue('123test123', field, wrapper, wrappedElement);//only numeric
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '/', '\'', '\\', '~', '`', '[', ']', '{', '}', '|', '.', ',', '_', '=', '+', '-'];
    for (let i = 0; i < symbols.length; i++) {
        testIncorrectValue('123' + symbols[i], field, wrapper, wrappedElement);
    }
}

function testInput(field, wrapper, wrappedElement, element) {
    if (field === 'bank_name' || field === 'bank_phone') {
        return;
    }
    expect(wrapper.vm.v$.fields[field].$error).toBeFalsy();//no errors when just go to this step
    wrapper.vm.v$.fields[field].$touch();
    expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//error because not fill text field
    if (element.getAttribute('id') === 'email') {
        testIncorrectValue('', field, wrapper, wrappedElement);
        testIncorrectValue('test', field, wrapper, wrappedElement);
        testIncorrectValue('test@test', field, wrapper, wrappedElement);
        testIncorrectValue('test@@test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test№@test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test;@test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test(@test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test)@test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test:@test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test"@test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@#test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@$test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@(test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@)test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@*test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@(test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@)test.test', field, wrapper, wrappedElement);
        testIncorrectValue('test@*test.test', field, wrapper, wrappedElement);
        wrappedElement.setValue('test@test.test')//fill text field for email
        expect(wrapper.vm.fields[field]).toBe('test@test.test');
    } else if (element.getAttribute('id') === 'first_name') {
        testIncorrectValue('', field, wrapper, wrappedElement);
        testIncorrectValue('My name is Vlad', field, wrapper, wrappedElement);
        testAlpha(field, wrapper, wrappedElement);
        wrappedElement.setValue('MyMameIsVlad');
        expect(wrapper.vm.fields[field]).toBe('MyMameIsVlad');
    } else if (element.getAttribute('id') === 'last_name') {
        testIncorrectValue('', field, wrapper, wrappedElement);
        testIncorrectValue('My name is Vlad', field, wrapper, wrappedElement);
        testAlpha(field, wrapper, wrappedElement);
        wrappedElement.setValue('MyMameIsVlad');
        expect(wrapper.vm.fields[field]).toBe('MyMameIsVlad');
    } else if (element.getAttribute('id') === 'address') {
        testIncorrectValue('', field, wrapper, wrappedElement);
        testIncorrectValue('test', field, wrapper, wrappedElement);//min length 5
        testIncorrectValue('ttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', field, wrapper, wrappedElement);
        //<128 symbols
        wrappedElement.setValue('tests');
        expect(wrapper.vm.fields[field]).toBe('tests');
    } else if (element.getAttribute('id') === 'zip') {
        testIncorrectValue('', field, wrapper, wrappedElement);
        testNumeric(field, wrapper, wrappedElement);
        testIncorrectValue('1001', field, wrapper, wrappedElement);//length 5
        testIncorrectValue('100144', field, wrapper, wrappedElement);//length 5
        wrappedElement.setValue('10014');
        expect(wrapper.vm.fields[field]).toBe('10014');
    } else if (element.getAttribute('id') === 'state') {
        testIncorrectValue('', field, wrapper, wrappedElement);
        testIncorrectValue('asd', field, wrapper, wrappedElement);//length 2
        testIncorrectValue('a', field, wrapper, wrappedElement);//length 2
        testAlpha(field, wrapper, wrappedElement);
        wrappedElement.setValue('NY');
        expect(wrapper.vm.fields[field]).toBe('NY');
    } else if (element.getAttribute('id') === 'city') {
        testIncorrectValue('', field, wrapper, wrappedElement);
        testIncorrectValue('ttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', field, wrapper, wrappedElement);
        //<128 symbols
        testIncorrectValue('a', field, wrapper, wrappedElement);//length > 2
        testAlpha(field, wrapper, wrappedElement);
        wrappedElement.setValue('NEW YORK');
        expect(wrapper.vm.fields[field]).toBe('NEW YORK');
    } else if (element.getAttribute('id') === 'home_phone') {
        testPhone(field, wrapper, wrappedElement);
    } else if (element.getAttribute('id') === 'emp_phone') {
        testPhone(field, wrapper, wrappedElement);
    } else if (element.getAttribute('id') === 'dob') {
        testDate(field, wrapper, wrappedElement);
        let date = new Date();
        let month = date.getMonth() + 1;//getMonth return month from 0 to 11
        let day = date.getDate() + 1;//first incorrect day
        let year = date.getFullYear() - 18;
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        wrappedElement.setValue(month + '-' + day + '-' + year);
        wrappedElement.trigger('change');
        expect(wrapper.vm.fields[field]).toBe(month + '-' + day + '-' + year);
        expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
        day--;
        if (day < 10) {
            day = '0' + day;
        }
        wrappedElement.setValue(month + '-' + day + '-' + year);
        wrappedElement.trigger('change');
        expect(wrapper.vm.fields[field]).toBe(month + '-' + day + '-' + year);
    } else if (element.getAttribute('id') === 'next_pay_day') {
        testDate(field, wrapper, wrappedElement);
        let date = new Date();
        let month = date.getMonth() + 1;//getMonth return month from 0 to 11
        let day = date.getDate() - 1;//first incorrect day
        let year = date.getFullYear();
        if(date.getDay() == 0){
            day-=1;
        }
        if(date.getDay() == 1){
            day-=2;
        }
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        wrappedElement.setValue(month + '-' + day + '-' + year);
        wrappedElement.trigger('change');
        expect(wrapper.vm.fields[field]).toBe(month + '-' + day + '-' + year);
        expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
        day++;
        if(date.getDay() == 6){
            day+=2;
        }
        if(date.getDay() == 0){
            day+=2;
        }
        if(date.getDay() == 1){
            day+=2;
        }
        if (day < 10) {
            day = '0' + day;
        }
        if (day < 10) {
            day = '0' + day;
        }
        wrappedElement.setValue(month + '-' + day + '-' + year);
        wrappedElement.trigger('change');
        expect(wrapper.vm.fields[field]).toBe(month + '-' + day + '-' + year);
        wrapper.find('input[id=second_pay_day]').setValue('');
        wrapper.find('input[id=second_pay_day]').trigger('change');
    } else if (element.getAttribute('id') === 'second_pay_day') {
        testDate(field, wrapper, wrappedElement);
        let date = new Date();
        let month = date.getMonth() + 1;//getMonth return month from 0 to 11
        let day = date.getDate();//first incorrect day
        let year = date.getFullYear();
        if(date.getDay() == 0){
            day+=1;
        }
        if(date.getDay() == 6){
            day+=2;
        }
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        wrappedElement.setValue(month + '-' + day + '-' + year);
        wrappedElement.trigger('change');
        expect(wrapper.vm.fields[field]).toBe(month + '-' + day + '-' + year);
        expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();
        day++;
        if(date.getDay() == 5){
            day+=2;
        }
        if(date.getDay() == 6){
            day+=1;
        }
        if (day < 10) {
            day = '0' + day;
        }
        wrappedElement.setValue(month + '-' + day + '-' + year);
        wrappedElement.trigger('change');
        expect(wrapper.vm.fields[field]).toBe(month + '-' + day + '-' + year);
    } else if (element.getAttribute('id') === 'routing_number') {
        testNumeric(field, wrapper, wrappedElement);
        testIncorrectValue('12345678', field, wrapper, wrappedElement);//9 digital
        testIncorrectValue('1234567890', field, wrapper, wrappedElement);//9 digital
        wrappedElement.setValue('122105278');
        expect(wrapper.vm.fields[field]).toBe('122105278');
        wrapper.vm.fields.bank_phone = "8007452426";
        wrapper.vm.fields.bank_name = "WELLS FARGO BANK NA (ARIZONA)";
    } else if (element.getAttribute('id') === 'account_number') {
        testNumeric(field, wrapper, wrappedElement);
        testIncorrectValue('123', field, wrapper, wrappedElement);//4-30 digital
        testIncorrectValue('1234567890123456789012345678901', field, wrapper, wrappedElement);//4-30 digital
        wrappedElement.setValue('1234');
        expect(wrapper.vm.fields[field]).toBe('1234');
    } else if (element.getAttribute('id') === 'ssn') {
        testNumeric(field, wrapper, wrappedElement);
        testIncorrectValue('12345678', field, wrapper, wrappedElement);//9 digital
        testIncorrectValue('1234567890', field, wrapper, wrappedElement);//9 digital
        wrappedElement.setValue('123456789');
        expect(wrapper.vm.fields[field]).toBe('123456789');
    } else {
        testIncorrectValue('', field, wrapper, wrappedElement);//required
        wrappedElement.setValue('        ');
        expect(wrapper.vm.fields[field]).toBe('');
        expect(wrapper.vm.v$.fields[field].$invalid).toBeTruthy();//required
        testIncorrectValue('ttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest', field, wrapper, wrappedElement);
        //<128 symbols
        wrappedElement.setValue('testValue');
        expect(wrapper.vm.fields[field]).toBe('testValue');
    }
    expect(wrapper.vm.v$.fields[field].$invalid).toBeFalsy();//expect error is resolved
}

jest.mock('axios')

axios.get.mockImplementation((url,config) => {
    switch (url) {
        case import.meta.env.VITE_API_REASONS:
            return Promise.resolve({data: reasons_for_loan})
        case import.meta.env.VITE_API_CONTACT_TIME:
            return Promise.resolve({data: contact_time})
        case import.meta.env.VITE_API_INCOME_TYPE:
            return Promise.resolve({data: income_type})
        case import.meta.env.VITE_API_PAY_FREQUENCY:
            return Promise.resolve({data: pay_frequency})
        case import.meta.env.VITE_URL_GET_BANK:
            if(config.params.rn === 122105278){
                return Promise.resolve({data: {
                        code: 200,
                        customer_name:'WELLS FARGO BANK NA (ARIZONA)',
                        telephone:'800-745-2426',
                    }})
            }else{
                return Promise.resolve({data: {
                        code: 404
                    }})
            }
        case import.meta.env.VITE_URL_GET_LOCATION:
            if(config.params.zip === 10014 && config.params.address === '560 Hudson St'){
                return Promise.resolve({data: {
                    "Address":{
                        "City":"NEW YORK",
                        "State":"NY"}
                }})
            }else{
                return Promise.resolve({data: {
                    'Address':{
                        "Error":{
                            "Description":"bla-bla-bla"
                            }
                    }
                }})
            }
        case import.meta.env.VITE_API_SEARCH_REAPPLY:
            return Promise.reject({
                response: {
                    status: 422,
                    data: {
                        "message": "No data found"
                    }
                }
            })
        default:
            return Promise.resolve({data: []})
    }
})

axios.post.mockImplementation((url,config) => {
    switch (url) {
        case import.meta.env.VITE_API_STORE:
            if(config.first_name === 'RESOLVE'){
                return Promise.resolve({
                    data: {
                        data:{
                            id: "0",
                            status: "test",
                            message: "ACCEPTED",
                            price: "1",
                            redirect: "https://dnmstats.com/lead/sign/0",
                            decision_id: 7
                        }
                    }
                })
            }else{
                return Promise.reject({
                    response: {
                        status: 422,
                        data: {
                            "message": "The given data was invalid.",
                            "errors": {
                                "ssn": [
                                    "The ssn has already been taken."
                                ],
                                "email": [
                                    "The email has already been taken."
                                ]
                            }
                        }
                    }
                })
            }
        default:
            return Promise.resolve({data: []})
    }
})

let dotenv;
let dotenvExpand;
let env;
let wrapper;
describe('Main Form', () => {
    beforeAll(() => {
        dotenv = require('dotenv');
        dotenvExpand = require('dotenv-expand');
        env = dotenv.config()
        dotenvExpand.expand(env);
    });

    beforeEach(() => {
        wrapper = mount(MainForm, {
            localVue
        });
    });

//mounted
    test('mounted main form', () => {
        expect(wrapper.vm.reasons_for_loan).toBe(reasons_for_loan);
        expect(wrapper.vm.contact_time).toBe(contact_time);
        expect(wrapper.vm.income_type).toBe(income_type);
        expect(wrapper.vm.pay_frequency).toBe(pay_frequency);
    });

//phoneMask
    test('phoneMask fields', () => {
        testPhoneMask('emp_phone', wrapper, wrapper.find("input[name=emp_phone]"));
        testPhoneMask('home_phone', wrapper, wrapper.find("input[name=home_phone]"));
    });

//nextPayDayChange
    test('nextPayDayChange', async () => {
        let nextPayDayInput = wrapper.find('input[name=next_pay_day]');
        nextPayDayInput.setValue('05-07-2022');
        nextPayDayInput.trigger('change');
        expect(wrapper.vm.fields.next_pay_day).toBeNull();//weekend

        nextPayDayInput.setValue('05-06-2022');
        nextPayDayInput.trigger('change');
        expect(wrapper.vm.fields.next_pay_day).toBe('05-06-2022');
        expect(wrapper.vm.fields.second_pay_day).toBe('05-13-2022');// +1 week

        await wrapper.vm.$nextTick();
        pay_frequency.forEach(function (value, index) {
            wrapper.find('input[id=pay_frequency-' + index + ']').setChecked();
            if (value === 'Weekly') {
                expect(wrapper.vm.fields.second_pay_day).toBe('05-13-2022');
            } else if (value === 'Every 2 Weeks') {
                expect(wrapper.vm.fields.second_pay_day).toBe('05-20-2022');
            } else if (value === 'Twice A Month') {
                expect(wrapper.vm.fields.second_pay_day).toBe('05-20-2022');
            } else if (value === 'Monthly') {
                expect(wrapper.vm.fields.second_pay_day).toBe('06-06-2022');
                nextPayDayInput.setValue('06-16-2022');
                nextPayDayInput.trigger('change');
                expect(wrapper.vm.fields.next_pay_day).toBe('06-16-2022');
                expect(wrapper.vm.fields.second_pay_day).toBe('07-18-2022');// 07-16-2022 and 07-17-2022 weekend
                nextPayDayInput.setValue('01-31-2024');
                nextPayDayInput.trigger('change');
                expect(wrapper.vm.fields.next_pay_day).toBe('01-31-2024');
                expect(wrapper.vm.fields.second_pay_day).toBe('03-04-2024');
                nextPayDayInput.setValue('01-30-2024');
                nextPayDayInput.trigger('change');
                expect(wrapper.vm.fields.next_pay_day).toBe('01-30-2024');
                expect(wrapper.vm.fields.second_pay_day).toBe('03-01-2024');
                nextPayDayInput.setValue('01-31-2028');
                nextPayDayInput.trigger('change');
                expect(wrapper.vm.fields.next_pay_day).toBe('01-31-2028');
                expect(wrapper.vm.fields.second_pay_day).toBe('03-02-2028');
                nextPayDayInput.setValue('12-26-2022');
                nextPayDayInput.trigger('change');
                expect(wrapper.vm.fields.next_pay_day).toBe('12-26-2022');
                expect(wrapper.vm.fields.second_pay_day).toBe('01-26-2023');
                nextPayDayInput.setValue('03-31-2023');
                nextPayDayInput.trigger('change');
                expect(wrapper.vm.fields.next_pay_day).toBe('03-31-2023');
                expect(wrapper.vm.fields.second_pay_day).toBe('05-01-2023');
            }
        })
    });

//client flow
    test('client flow', async () => {
        const step_to_fields = wrapper.vm.step_to_fields
        let fields_on_step;
        let inputsArray;
        let element;
        let wrappedElement;
        let options;
        let option;
        for (let step in step_to_fields) {
            expect(parseInt(wrapper.vm.step)).toBe(parseInt(step));
            fields_on_step = step_to_fields[step];
            fields_on_step.forEach(function (field) {
                inputsArray = wrapper.findAll('input[name=' + field + '], select[name=' + field + ']');
                for (let i = 0; i < inputsArray.length; i++) {
                    element = inputsArray.at(i).element;
                    wrappedElement = inputsArray.at(i);
                    if (element.tagName === 'INPUT') {
                        if (element.getAttribute('type') === 'text') {
                            testInput(field, wrapper, inputsArray.at(i), element, step);
                        } else if (element.getAttribute('type') === 'radio') {
                            wrappedElement.setChecked();
                            expect(wrapper.vm.fields[field].toString()).toBe(element.value);
                            wrapper.vm.nextStep();
                            expect(parseInt(wrapper.vm.step)).toBe(parseInt(step) + 1);
                            wrapper.vm.prevStep();
                            expect(parseInt(wrapper.vm.step)).toBe(parseInt(step));
                        }
                    } else if (element.tagName === 'SELECT') {
                        options = wrappedElement.findAll('option');
                        for (let ii = 0; ii < options.length; ii++) {
                            option = options.at(ii);
                            option.setSelected();
                            expect(wrapper.vm.fields[field].toString()).toBe(option.element.value);
                            if (step != 23) {
                                wrapper.vm.nextStep();
                                expect(parseInt(wrapper.vm.step)).toBe(parseInt(step) + 1);
                                wrapper.vm.prevStep();
                                expect(parseInt(wrapper.vm.step)).toBe(parseInt(step));
                            }
                        }
                    }
                }
            });
            if(wrapper.vm.step !== wrapper.vm.allSteps){
                await wrapper.vm.nextStep();
            }
        }
        await wrapper.vm.submit();
        await wrapper.vm.$nextTick();
        let interval = setTimeout(function () {
            console.log('test');
        }, 10);
        // expect(parseInt(wrapper.vm.step)).toBe(2);
        // expect(wrapper.vm.errors.ssn[0]).toBe("The ssn has already been taken.");
        // expect(wrapper.vm.errors.email[0]).toBe("The email has already been taken.");
        // wrapper.vm.nextStep();
        // expect(parseInt(wrapper.vm.step)).toBe(22);
        //
        //
        // wrapper.vm.fields.first_name = 'RESOLVE';
        // const fields = wrapper.vm.fields;
        //
        // await wrapper.vm.submit();
        // for(let field in fields){
        //     expect(wrapper.vm.fields[field]).toBeUndefined();
        // }
    });

    //autocompleteAba
    test('autocompleteAba', async () => {
        wrapper.vm.fields.routing_number = 123;
        expect(await wrapper.vm.autocompleteAba()).toBeFalsy();

        wrapper.vm.fields.routing_number = '123asd';
        expect(await wrapper.vm.autocompleteAba()).toBeFalsy();

        wrapper.vm.fields.routing_number = '123asd123';
        expect(await wrapper.vm.autocompleteAba()).toBeFalsy();

        wrapper.vm.fields.routing_number = '         ';
        expect(await wrapper.vm.autocompleteAba()).toBeFalsy();

        wrapper.vm.fields.routing_number = 122105278;
        expect(await wrapper.vm.autocompleteAba()).toBeUndefined();
        expect(wrapper.vm.fields.bank_name).toBe('WELLS FARGO BANK NA (ARIZONA)');
        expect(wrapper.vm.fields.bank_phone).toBe('8007452426');

        wrapper.vm.fields.routing_number = 123456789;
        expect(await wrapper.vm.autocompleteAba()).toBeUndefined();
        expect(wrapper.vm.fields.bank_name).toBeNull();
        expect(wrapper.vm.fields.bank_phone).toBeNull();
    });

    //autocompleteLocation
    test('autocompleteLocation', async () => {
        wrapper.vm.fields.zip = 10014;
        wrapper.vm.fields.address = '    '
        expect(await wrapper.vm.locationChange()).toBeFalsy();

        wrapper.vm.fields.address = 'asda';
        expect(await wrapper.vm.locationChange()).toBeFalsy();
        wrapper.vm.fields.address = 'ttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest';
        expect(await wrapper.vm.locationChange()).toBeFalsy();

        wrapper.vm.fields.address = '560 Hudson St';
        wrapper.vm.fields.zip = 1234;
        expect(await wrapper.vm.locationChange()).toBeFalsy();

        wrapper.vm.fields.zip = 123456;
        expect(await wrapper.vm.locationChange()).toBeFalsy();

        wrapper.vm.fields.zip = 'a1234';
        expect(await wrapper.vm.locationChange()).toBeFalsy();

        wrapper.vm.fields.zip = 10014;
        expect(await wrapper.vm.locationChange()).toBeUndefined();
        expect(wrapper.vm.fields.state).toBe('NY');
        expect(wrapper.vm.fields.city).toBe('NEW YORK');

        await wrapper.vm.$nextTick();

        wrapper.find('input[id=city]').setValue('test');
        wrapper.find('input[id=state]').setValue('test');
        expect(wrapper.vm.fields.state).toBe('NY');
        expect(wrapper.vm.fields.city).toBe('NEW YORK');

        wrapper.vm.fields.zip = 55555;
        expect(await wrapper.vm.locationChange()).toBeUndefined();
        await wrapper.vm.$nextTick();
        wrapper.find('input[id=city]').setValue('test');
        wrapper.find('input[id=state]').setValue('test');
        expect(wrapper.vm.fields.state).toBe('test');
        expect(wrapper.vm.fields.city).toBe('test');
    });
});
