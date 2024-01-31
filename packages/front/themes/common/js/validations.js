export function zip(value) {
    return (/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value));
}

export function city(value) {
    return (/^[a-zA-Z ]*$/i.test(value));
}

export function phone(value) {
    if (value[0] === 1 || value[0] === 0) {
        return false;
    }
    return (/(^\d{10}$)/.test(value.replace(/\D/g, '')));
}

export function age_more_then_18(value) {
    let dob = new Date(value.split('-').join('/'));
    let ageDifMs = Date.now() - dob.getTime();
    let ageDate = new Date(ageDifMs);
    let age = ageDate.getUTCFullYear() - 1970;
    return (age >= 18);
}

export function age_less_than_100(value) {
    let dob = new Date(value.split('-').join('/'));
    let ageDifMs = Date.now() - dob.getTime();
    let ageDate = new Date(ageDifMs);
    let age = ageDate.getUTCFullYear() - 1970;
    return (age < 100);
}

export function next_pay_day(value) {
    if (next_pay_day === null) {
        return false;
    }
    const next_pay_day_milliseconds = new Date(value.split('-').join('/')).getTime();
    const yesterday_milliseconds = new Date().getTime() - 24 * 60 * 60 * 1000;
    return yesterday_milliseconds < next_pay_day_milliseconds;
}

export function second_pay_day(value, fields) {
    const next_pay_day = fields.next_pay_day;
    if (next_pay_day === null) {
        return false;
    }
    const next_pay_day_milliseconds = new Date(next_pay_day.split('-').join('/')).getTime();
    const second_pay_day_milliseconds = new Date(value.split('-').join('/')).getTime();

    return next_pay_day_milliseconds < second_pay_day_milliseconds;
}

export function onlyLatinAlphabetsNumeric(value) {
    return (!/[^0-9a-zA-Z` -]/g.test(value));
}

export function alphabets(value) {
    return (!/[^a-zA-Z` -]/g.test(value));
}

export function address(value) {
    return (!/[^0-9a-zA-Z` .,-]/g.test(value));
}

export function containNumbers(value) {
    return /\d/.test(value);
}

export function containLetters(value) {
    return /[a-zA-Z]/g.test(value);
}

export function emailSymbols(value) {
    let mail = value.split('@');
    return (!((/[^0-9a-zA-Z`._-]/g.test(mail[0])) || (/[^a-zA-Z.]/g.test(mail[1]))));
}
