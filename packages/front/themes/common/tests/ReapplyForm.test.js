import {mount, createLocalVue} from '@vue/test-utils'
import ReapplyForm from "./ReapplyForm.vue";
import axios from "axios";
import DatePicker from '@vuepic/vue-datepicker';
import $ from 'jquery';
import WaitingPage from "./WaitingPage";

const localVue = createLocalVue();
localVue.use(DatePicker);
localVue.use(WaitingPage);
const pay_frequency = ["Weekly", "Every 2 Weeks", "Twice A Month", "Monthly"];

jest.mock('axios')

axios.get.mockImplementation((url) => {
    switch (url) {
        case import.meta.env.VITE_API_PAY_FREQUENCY:
            return Promise.resolve({data: pay_frequency})
        default:
            return Promise.resolve({data: []})
    }
})

axios.post.mockImplementation((url) => {
    switch (url) {
        case import.meta.env.VITE_API_UPDATE_REAPPLY:
            return Promise.reject({
                response: {
                    status: 422,
                    data: {
                        "message": "User not found.",
                    }
                },
            })
        default:
            return Promise.resolve({data: []})
    }
})

let dotenv;
let dotenvExpand;
let env;
let wrapper;

describe('Reapply Form', () => {
    // beforeAll(() => {
    //     dotenv = require('dotenv');
    //     dotenvExpand = require('dotenv-expand');
    //     env = dotenv.config()
    //     dotenvExpand.expand(env);
    // });
    //
    // beforeEach(() => {
    //     localStorage.setItem('requestedamount', 1000);
    //     localStorage.setItem('customerDataReapply', JSON.stringify({
    //         "customer_id": 2,
    //         "credit_score": 999,
    //         "email": "fizikman339@gmail.com",
    //         "first_name": "firstname",
    //         "job_title": "What's your job title?",
    //         "second_pay_day": "05-13-2022",
    //         "next_pay_day": "05-06-2022",
    //         "net_month_income": "1000",
    //         "pay_frequency": "Weekly"
    //     }));
    //     wrapper = mount(ReapplyForm, {
    //         localVue
    //     });
    // });
    //mounted
    // test('mounted reapply form', () => {
    //     expect(wrapper.vm.pay_frequency).toBe(pay_frequency);
    //     expect(parseInt(wrapper.vm.fields.requested_amount)).toBe(1000);
    // });

    //nextPayDayChange
    test('nextPayDayChange', async () => {
        // let nextPayDayInput = wrapper.find('input[name=next_pay_day]');
        // let nextPayDayValue = nextPayDayInput.element.value;
        // nextPayDayInput.setValue('05-07-2022');
        // nextPayDayInput.trigger('change');
        // expect(wrapper.vm.fields.next_pay_day).toBe(nextPayDayValue);//not changed because weekend
        //
        // nextPayDayInput.setValue('05-06-2022');
        // nextPayDayInput.trigger('change');
        // expect(wrapper.vm.fields.next_pay_day).toBe('05-06-2022');
        // await wrapper.vm.$nextTick();
        // let options = wrapper.findAll('select[id=pay_frequency] option');
        // let option;
        // for (let i = 0; i < options.length; i++) {
        //     option = options.at(i);
        //     option.setSelected();
        //     wrapper.vm.nextPayDayChange();
        //     if (option.element.value === 'Weekly') {
        //         expect(wrapper.vm.fields.second_pay_day).toBe('05-13-2022');
        //     } else if (option.element.value === 'Every 2 Weeks') {
        //         expect(wrapper.vm.fields.second_pay_day).toBe('05-20-2022');
        //     } else if (option.element.value === 'Twice A Month') {
        //         expect(wrapper.vm.fields.second_pay_day).toBe('05-20-2022');
        //     } else if (option.element.value === 'Monthly') {
        //         expect(wrapper.vm.fields.second_pay_day).toBe('06-06-2022');
        //     }
        // }
    });
    // //selects
    // test('selects', () => {
    //     let selects = wrapper.findAll('select');
    //     let select;
    //     let field;
    //     let options;
    //     let option;
    //     for (let i = 0; i < selects.length; i++) {
    //         select = selects.at(i);
    //         field = select.element.getAttribute('id');
    //         options = wrapper.findAll('select[id=' + field + '] option');
    //         for (let ii = 0; ii < options.length; ii++) {
    //             option = options.at(ii);
    //             option.setSelected();
    //             expect(wrapper.vm.fields[field]).toBe(option.element.value);
    //         }
    //     }
    // });
    // //inputs
    // test('inputs', () => {
    //     let inputs = wrapper.findAll('input');
    //     let input;
    //     let field;
    //     for (let i = 0; i < inputs.length; i++) {
    //         input = inputs.at(i);
    //         field = input.element.getAttribute('id');
    //         if (field == 'next_pay_day') {
    //             input.setValue('');
    //             input.trigger('change');
    //             expect(wrapper.vm.fields[field]).toBeNull();
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//required
    //             input.setValue('05-17-2022');
    //             input.trigger('change');
    //             expect(wrapper.vm.fields[field]).toBe('05-17-2022');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeFalsy();
    //         } else if (field == 'second_pay_day') {
    //             input.setValue('');
    //             input.trigger('change');
    //             expect(wrapper.vm.fields[field]).toBeNull();
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//required
    //             input.setValue('05-17-2022');
    //             input.trigger('change');
    //             expect(wrapper.vm.fields[field]).toBe('05-17-2022');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeFalsy();
    //         } else if (field == 'job_title') {
    //             input.setValue('');
    //             expect(wrapper.vm.fields[field]).toBe('');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//required
    //             input.setValue('test job title');
    //             expect(wrapper.vm.fields[field]).toBe('test job title');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeFalsy();
    //         } else if (field == 'ssn') {
    //             input.setValue('');
    //             expect(wrapper.vm.fields[field]).toBe('');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//required
    //             input.setValue('asd');
    //             expect(wrapper.vm.fields[field]).toBe('asd');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//only numerics
    //             input.setValue('123');
    //             expect(wrapper.vm.fields[field]).toBe('123');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//4 digits
    //             input.setValue('12345');
    //             expect(wrapper.vm.fields[field]).toBe('12345');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeTruthy();//4 digits
    //             input.setValue('1234');
    //             expect(wrapper.vm.fields[field]).toBe('1234');
    //             wrapper.vm.v$.fields[field].$touch();
    //             expect(wrapper.vm.v$.fields[field].$error).toBeFalsy();
    //         }
    //     }
    // });
    // //submit
    // test('submit',async () => {
    //     expect(wrapper.vm.attempts).toBe(4);//init state
    //     wrapper.vm.submit();
    //     //await wrapper.vm.$nextTick();
    //     expect(wrapper.vm.attempts).toBe(4);//ssn required
    //     expect(wrapper.vm.v$.fields.ssn.$invalid).toBeTruthy();//ssn required
    //     wrapper.find('input[id=ssn]').setValue(123);
    //     wrapper.vm.submit();
    //     expect(wrapper.vm.attempts).toBe(4);//ssn not correct
    //     wrapper.find('input[id=ssn]').setValue(1234);
    //     await wrapper.vm.submit();
    //     await wrapper.vm.$nextTick();
    //     expect(wrapper.vm.attempts).toBe(3);//attempt decrement
    // });
    // //refill
    // test('refill', () => {
    //
    // });
});
