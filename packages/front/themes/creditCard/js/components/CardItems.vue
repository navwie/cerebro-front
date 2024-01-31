<template>
    <div class="container-card-items">
        <div v-for="(item, index) of items"
             :key="index">
            <div class="card-item d-flex">
                <div class="d-flex flex-column first-col">
                    <img class="card-image" :src="item.image" alt="Card Image">
                    <div class="card-btn d-flex align-items-center" :style="'--btn-card-color-first:' + item.btn_color_first + ';--btn-card-color-second:' + item.btn_color_second" @click="newTab(item.btn_url, item.id)">
                        <div class="d-flex justify-content-center">
                            {{ item.btn_text }}
                        </div>
                        <span class="d-flex card-btn-span ms-auto justify-content-center">
                            <svg width="18" height="50" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.498 7.53613V11.7031H0.929688V7.53613H17.498ZM11.4883 0.978516V18.5762H6.95605V0.978516H11.4883Z" fill="#F6F6F6"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="second-col w-100">
                    <h3>{{ item.name }}</h3>
                    <p class="description"> {{ item.description }}</p>
                    <hr/>
                    <h4>Earning Rewards</h4>
                    <p class="benefits"  v-for="(benefit, index) of item.benefits"> {{ benefit }}</p>
                    <div class="d-flex justify-content-end mt-20">
                        Editors Choice:
                        <template v-for="n in 5">
                            <svg v-if="n <= parseInt(item.stars)" class="card-star" width="29" height="23" viewBox="0 0 23 32" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="1.5" fill="" stroke="#F0F0F0"/>
                                <path d="M16.4433 4L19.237 12.5981H28.2776L20.9636 17.912L23.7573 26.5102L16.4433 21.1962L9.12932 26.5102L11.923 17.912L4.60902 12.5981H13.6496L16.4433 4Z" fill="#FEB623"/>
                            </svg>
                            <svg v-else class="card-star" width="29" height="23" viewBox="0 0 23 32" fill="#F0F0F0" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="1.5" fill="" stroke="#F0F0F0"/>
                                <path d="M16.4433 4L19.237 12.5981H28.2776L20.9636 17.912L23.7573 26.5102L16.4433 21.1962L9.12932 26.5102L11.923 17.912L4.60902 12.5981H13.6496L16.4433 4Z" fill="#fff"/>
                            </svg>
                        </template>
                    </div>
                </div>
            </div>
            <hr v-if="index + 1 < items.length"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CardItems",
    data() {
        return {
            token: document.querySelector('meta[name="form-token"]').content,
            items: [],
        };
    },
    methods: {
        newTab(link, itemId) {
            if(this.$cookies.get('customer_id') !== '0'){
                this.sendCountClickRequest(itemId);
            }
            if (!link.match(/^https?:\/\//i)) {
                link = 'https://' + link;
            }
            window.open(link, '_blank').focus();
        },
        sendCountClickRequest(itemId) {
            if (this.$cookies.isKey('visit_id') && this.$cookies.isKey('customer_id')) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
                axios.post(import.meta.env.VITE_API_URL_CREDIT_CARD_CLICK, {
                    visit_id: this.$cookies.get('visit_id'),
                    customer_id: this.$cookies.get('customer_id'),
                    item_id: itemId
                });
            }
        },
    },
    mounted() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + this.token;
        axios.get(import.meta.env.VITE_API_CREDIT_CARD).then((response) => {
            this.items = response.data;
        });
    }
}
</script>
