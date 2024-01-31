<template>
    <div>
        <CardForm v-show="showForm" @showCardItems="showCardItems"></CardForm>
        <CardItems v-show="showCards"></CardItems>
        <CountVisitor></CountVisitor>
    </div>
</template>

<script>

import {findGetParameter, handleGetParams} from "../../../common/js/commonGeneral";

export default {
    name: "CardApp",
    data() {
        return {
            showForm: true,
            showCards: false,
        };
    },
    async mounted() {
        //await handleGetParams(this);
        document.addEventListener('DOMContentLoaded', () => {
            if(this.showForm) {
                document.getElementById('footer').classList.add('d-none');
            }
        });
        if(this.$cookies.isKey('customer_id') && this.$cookies.get('customer_id') !== '0') {
            this.showCardItems();
        }
        if(findGetParameter('showOffers') === '1') {
            this.showCardItems();
            this.$cookies.set('customer_id',0,60 * 60);
        }
    },
    methods: {
        showCardItems(customer_id = false) {
            this.showForm = false;
            this.showCards = true;
            if(document.getElementById('footer')) {
                document.getElementById('footer').classList.remove('d-none');
            }
            if(customer_id) {
                this.$cookies.set('customer_id',customer_id,60 * 60);
            }
        }
    }
}
</script>
