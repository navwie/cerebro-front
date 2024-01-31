//relate to all pages
import { useLoading } from "vue-loading-overlay";
import axios from "axios";
import * as Sentry from "@sentry/vue";

export function SentryInit (app) {
    Sentry.init({
        app,
        dsn: document.querySelector('meta[name="sentry-dns"]').content,
        // This sets the sample rate to be 10%. You may want this to be 100% while
        // in development and sample at a lower rate in production
        replaysSessionSampleRate: 1.0,
        // If the entire session is not sampled, use the below sample rate to sample
        // sessions when an error occurs.
        replaysOnErrorSampleRate: 1.0,
        integrations: [
            new Sentry.Replay({
                // Additional SDK configuration goes in here, for example:
                maskAllText: false,
                blockAllMedia: true,
                networkDetailAllowUrls: [/api\/v1\/*/],
                networkRequestHeaders: ['X-Custom-Header'],
                networkResponseHeaders: ['X-Custom-Header'],
            }),
        ],
    });
}

export function findGetParameter(parameterName) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    for (const key of urlParams.keys()) {
        if (parameterName.toLowerCase() === key.toLowerCase()) {
            return urlParams.get(key);
        }
    }
    return null;
}

export async function checkPhone(home_phone, first_name) {
    let useLoader = useLoading();
    let loader = useLoader.show({
        container: this.$refs.formContainer
    });
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    await axios
        .post(import.meta.env.VITE_API_CHECK_PHONE, {
            home_phone: home_phone,
            first_name: first_name,
        })
        .then((response) => {
            if (response.data.status === 'not found') {
                this.$cookies.remove('requestedamount');
                loader.hide();
            } else {
                this.$cookies.set('requestedamount', this.fields.requested_amount);
                this.$cookies.set('email', response.data.customerDataReapply.email, 60 * 60 * 24 * 90);
                this.$cookies.set('share_cookies', 1, 600);
                loader.hide();
                let click_id = this.$cookies.get('click_id');
                window.location.href = '/reapply' + (click_id === null ? '' : '?click_id=' + click_id);
            }
        })
        .catch((error) => {
            loader.hide();
        });
}

export function saveError(e) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    if (e.message === "Network Error") {
        setTimeout(() => {
            this.$toast.error("Internet connection lost. Please, do not refresh the page.")
        }, 200);
    }
    const error = {
        'message': e.message,
        'stack': e.stack,
        'url': window.location.href
    };
    axios.post(import.meta.env.VITE_API_SAVE_ERROR, error);
}

export function saveVariable(savingVariable) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
    const variable = {
        'message': JSON.stringify(savingVariable),
        'stack': 'variable',
        'url': window.location.href
    };
    axios.post(import.meta.env.VITE_API_SAVE_ERROR, variable);
}

export async function handleGetParams(vue) {
    const uid = findGetParameter('uid');
    const offer = findGetParameter('offer');

    if (offer !== null && uid !== null) {
        let offer_params = {
            "uid": uid,
            "offer": offer,
            "utm_source": findGetParameter('utm_source'),
            "utm_medium": findGetParameter('utm_medium'),
        };
        vue.$cookies.set('offer_params', JSON.stringify(offer_params), 60 * 60);
        axios.defaults.headers.common["Authorization"] = "Bearer " + vue.token;
        await axios.post(import.meta.env.VITE_API_GET_CLICK_ID, offer_params, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            vue.$cookies.set('click_id', response.data.click_id, 60 * 60);
        })
    }

    const urlParams = new URLSearchParams(window.location.search);
    const entries = urlParams.entries();
    let sub_ids = {};
    for (const entry of entries) {
        if (entry[0].toLowerCase() === 'subid' || entry[0].toLowerCase() === 'subid2' ||
            entry[0].toLowerCase() === 'subid3' || entry[0].toLowerCase() === 'subid4' ||
            entry[0].toLowerCase() === 'subid5'
        ) {
            sub_ids[entry[0]] = entry[1];
        }
    }
    if (JSON.stringify(sub_ids) !== '{}' || !vue.$cookies.isKey('sub_ids')) {
        vue.$cookies.set('sub_ids', JSON.stringify(sub_ids), 60 * 60);
    }

    if (!vue.$cookies.isKey('flow_id')) {
        vue.$cookies.set('flow_id', document.querySelector('meta[name="flow-id"]').content, 60 * 60);
    }
}

export async function countVisitor(vue) {
    const click_id = findGetParameter('clickId');
    let click_id_changed = false;
    if (click_id != null && click_id !== vue.$cookies.get('click_id')) {
        vue.$cookies.set('click_id', click_id, 60 * 60 * 24 * 90);
        click_id_changed = true;
    }

    if (!vue.$cookies.isKey('visit') || click_id_changed) {
        if (!vue.$cookies.isKey('email')) {
            vue.$cookies.set('visit', true, 60 * 60);
            axios.defaults.headers.common["Authorization"] = "Bearer " + vue.token;
            await axios.get(import.meta.env.VITE_API_COUNT_VISITOR, {
                params: {
                    'click_id': vue.$cookies.get('click_id'),
                    'sub_ids': JSON.stringify(vue.$cookies.get('sub_ids')),
                    'click': 0,
                    'ref_url': document.referrer,
                    'flow_id': vue.$cookies.get('flow_id'),
                    'cookie_mark': 0
                }
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                vue.$cookies.set('visit_id', response.data, 60 * 60);
            });
        }
    }
}

export async function countClick(vue, fromReapply = 0) {
    const click_id = findGetParameter('clickId');
    let click_id_changed = false;
    if (click_id != null && click_id !== vue.$cookies.get('click_id')) {
        vue.$cookies.set('click_id', click_id, 60 * 60 * 24 * 90);
        click_id_changed = true;
        vue.$cookies.remove('visit')
    }

    if (!vue.$cookies.isKey('click') || click_id_changed) {
        if ((vue.$cookies.isKey('email') && fromReapply) || (!fromReapply && !vue.$cookies.isKey('email'))) {
            vue.$cookies.set('click', true, 60 * 60);
            axios.defaults.headers.common["Authorization"] = "Bearer " + vue.token;
            if (!vue.$cookies.isKey('visit')) {
                vue.$cookies.set('visit', true, 60 * 60);
                if(fromReapply){
                    vue.$cookies.set('cookie_mark', true, 60 * 60);
                }
                await axios.get(import.meta.env.VITE_API_COUNT_VISITOR, {
                    params: {
                        'click_id': vue.$cookies.get('click_id'),
                        'sub_ids': JSON.stringify(vue.$cookies.get('sub_ids')),
                        'click': 1,
                        'ref_url': document.referrer,
                        'flow_id': vue.$cookies.get('flow_id'),
                        'cookie_mark': fromReapply
                    }
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    vue.$cookies.set('visit_id', response.data, 60 * 60);
                });
            } else {
                await axios.get(import.meta.env.VITE_API_COUNT_CLICK, {
                    params: {
                        'visit_id': vue.$cookies.get('visit_id'),
                    }
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        }
    }
}

export async function sendVisitorActionTypeRequest(vue) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + vue.token;
    if(vue.$cookies.isKey('visit_id')) {
        await axios.post(import.meta.env.VITE_API_ACTION_TYPE_VISITOR, {
            'visitor_id': vue.$cookies.get('visit_id'),
            'action_type': vue.action_type,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export function phoneMask(field) {
    if (this.fields[field] != null) {
        let number = this.fields[field].replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.fields[field] = number[1];
        if (number[2].length > 0) {
            this.fields[field] = number[1] + '-' + number[2];
            if (number[3].length > 0) {
                this.fields[field] += '-' + number[3];
            }
        }
    }
}

export async function triggerReapplyForm(vue) {
    let email = findGetParameter('subid2');
    if (email !== null) {
        vue.fields.email = email;
        await vue.checkEmail(true);
    }
    email = findGetParameter('email');
    if (email !== null) {
        vue.fields.email = email;
        await vue.checkEmail(true);
    }

    let first_name = findGetParameter('first_name');
    let home_phone = findGetParameter('home_phone');
    if (home_phone !== null && first_name !== null && email === null) {
        await vue.checkPhone(home_phone, first_name);
    }
}

export function removeRefillData() {
    this.$cookies.remove('fieldsGetStarted');
    this.$cookies.remove('customerDataMain');
    this.$cookies.remove('customerState');
}

export function mountedHomePage(vue) {
    if(vue.$cookies.isKey('email')) {
        let click_id = vue.$cookies.get('click_id');
        window.location.href = '/reapply' + (click_id === null ? '' : '?click_id=' + click_id);
    }
}

export function applyStylesAndAttributes(siteSettings) {
    const elementsSettings = siteSettings.elements;

    for (const id in elementsSettings) {
        const element = document.getElementById(id);
        if (!!element === false) {
            continue;
        }

        const attributes = elementsSettings[id];

        for (const key in attributes) {
            const attributeValue = attributes[key];

            if (!attributeValue && typeof attributeValue !== "number") {
                continue;
            }

            // Check if the property is a child element's class
            if (key.startsWith('CE_')) {
                const childElements = element.getElementsByClassName(key);
                for (const childElement of childElements) {
                    for (const cssProperty in attributeValue) {
                        if (cssProperty !== 'label') {;
                            if (cssProperty === 'fill') {
                                childElement.setAttribute('fill', attributeValue[cssProperty]);
                            } else if (cssProperty === 'src') {
                                childElement.src = attributeValue[cssProperty]
                            }
                             else {
                                childElement.style.setProperty(
                                    cssProperty,
                                    attributeValue[cssProperty]
                                );
                            }

                        }
                    }
                }
            }

            // Check if the property is a pseudo-class
            if (key.startsWith(":")) {
                // Apply styles to pseudo-class (hover, active, etc.)
                const pseudoStyles = attributes[key];
                for (const styleKey in pseudoStyles) {
                    const styleValue = pseudoStyles[styleKey];
                    if (styleValue.variable) {
                        // Assuming we're setting CSS variables on the element
                        element.style.setProperty(
                            styleValue.variable,
                            styleValue.value
                        );
                    }
                }
            }

            if (key === "src") {
                element.src = attributeValue;
            }

            if (key === "content") {
                element.textContent = attributeValue;
            }

            if (typeof attributeValue === "object" && attributeValue.hasOwnProperty("value")) {
                // If the value is an object with a 'value' key, use that value
                element.style[key] = attributeValue.value;
            } else {
                if (key === 'color') {
                    const paths = element.getElementsByTagName('path');
                    for (const path of paths) {
                        path.setAttribute('stroke', attributeValue);
                    }
                }
                element.style[key] = attributeValue;
            }
        }

    }

    const generalSettings = siteSettings.general;

    if (!!generalSettings === false) {
        return;
    }

    const favicon = generalSettings.favicon
    document.querySelector('link[rel=icon]').href = favicon
    // const generalStyleElements = document.querySelectorAll('[class^="GSC_"]');

    // if (!!generalStyleElements === false) {
    //     return;
    // }

    // generalStyleElements.forEach(element => {

    //     for (const key in generalSettings) {
    //         const setting = generalSettings[key];
    //         // console.log(element)
    //         if (typeof setting === 'object' && setting.variable && setting.value) {
    //             element.style.setProperty(setting.variable, setting.value);
    //         } else {

    //         }
    //     }
    // });
}
