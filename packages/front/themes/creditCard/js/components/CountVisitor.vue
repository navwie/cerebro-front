<template>

</template>

<script>
import axios from 'axios';
import { findGetParameter } from '../../../common/js/commonGeneral';
export default {
    name: "CountVisitor",
    data() {
        return {
            token: document.querySelector('meta[name="form-token"]').content,
            click_id_changed: false,
        }
    },
    mounted() {
        if(findGetParameter('showOffers') !== '1'){
            const click_id = findGetParameter('clickId');
            if (click_id != null && click_id !== this.$cookies.get('click_id')) {
                this.$cookies.set('click_id', click_id, 60 * 60 * 24 * 90);
                this.click_id_changed = true;
            }
            if (!this.$cookies.isKey('visit_id') || this.click_id_changed) {
                this.$cookies.remove('visit_id');
                this.$cookies.remove('customer_id');
                this.sendCountVisitorRequest();
            }
        }
    },
    methods: {
        sendCountVisitorRequest() {
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
            axios.post(import.meta.env.VITE_API_URL_CREDIT_CARD_VISIT, {
                'click_id': this.$cookies.get('click_id'),
                'sub_ids': JSON.stringify(this.$cookies.get('sub_ids')),
                'source_url': document.referrer,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(
                response => {
                    this.$cookies.set('visit_id', response.data, 60 * 60);
                }
            );
        }
    }
}
</script>

