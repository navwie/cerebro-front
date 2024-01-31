<template>
    <div class="modal fade modal-xl" id="privacy" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <Privacy :user="user"></Privacy>
            </div>
        </div>
    </div>
    <div class="modal fade modal-xl" id="terms" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <Terms :user="user"></Terms>
            </div>
        </div>
    </div>
    <div class="modal fade modal-xl" id="ccpa" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <CCPA :user="user"></CCPA>
            </div>
        </div>
    </div>
    <div class="modal fade modal-xl" id="econsent" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <Econsent :user="user"></Econsent>
            </div>
        </div>
    </div>
    <div class="modal fade modal-xl" id="credit_disclosure" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <CreditDisclosure :user="user"></CreditDisclosure>
            </div>
        </div>
    </div>
    <div class="modal fade modal-xl" id="unsubscribe" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <Unsubscribe :user="user"></Unsubscribe>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
const user = ref(null);
async function getUser() {
    axios.defaults.headers.common["Authorization"] = "Bearer " + document.querySelector('meta[name="form-token"]').content;
    const res = await axios.get(import.meta.env.VITE_API_GET_USER);
    user.value = res.data;
}
getUser()
</script>

<script>

export default {
    name: "Modals",
}
</script>
