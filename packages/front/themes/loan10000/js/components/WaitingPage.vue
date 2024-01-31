<template>
    <div v-show="waiting" class="GSC_waiting row" :style="mainColor" id="waitingPage">
        <div class="d-flex justify-content-center waiting-page-div-1 mt-5">
            <p class="title-step mt-auto bd-highlight" style="width: 400px;">PLEASE DON’T LEAVE THIS PAGE WHILE YOUR REQUEST IS PROCESSING!</p>
        </div>
        <div class="d-flex justify-content-center form-div-2">
            <div class="d-flex flex-column bd-highlight">
                <div class="form-wrapper">
                    <p class="waiting-font">If interrupted, the process likely to fall.</p>
                    <p class="percentages">
                        {{ waitingPercentage }}%
                    </p>
                    <p class="done">DONE</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'WaitingPage',
    data() {
        return {
            lead_type: '',
            timer: '',
            waiting: false,
            waitingPercentage: 0,
            processing_time: 300,
            called_stop_timer: false,
            mainColor: siteSettings.general.main_color.value,
        }
    },
    computed: {
        mainColor() {
            return {
                '--main-color': this.mainColor,
            };
        },
    },
    methods: {
        calculateDelay(){
            return this.processing_time / (31 * 20);
        },
        setNewTimer(delay, maxPercentage) {
            this.timer = setInterval(() => {
                this.waitingPercentage += 1;
                if (this.waitingPercentage >= 99) {
                    clearInterval(this.timer);
                    return;
                }
                if (this.waitingPercentage >= maxPercentage) {
                    clearInterval(this.timer);
                    this.setNewTimer(delay * 2, maxPercentage + 20);
                }
            }, delay);
        },
        startTimer() {
            window.onbeforeunload = function(){
                return 'Are you sure you want to leave?';
            };
            this.called_stop_timer = false;
            this.$parent.waiting = this.waiting = true;
            this.lead_type = this.$parent.fields.lead_type;
            this.waitingPercentage = 0;
            location.href = "#waitingPage";
            axios.defaults.headers.common["Authorization"] = "Bearer " + this.$parent.token;
            axios.get(import.meta.env.VITE_API_GET_USER).then((response) => {
                if (response.data.processing_time != null) {
                    this.processing_time = response.data.processing_time;
                }
                this.setNewTimer(this.calculateDelay() * 1000,20);
            });
        },
        stopTimer(callback_after_stop_timer = false, hide = true) {
            window.onbeforeunload = null;
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.waitingPercentage += 1;
                if (this.waitingPercentage >= 99) {
                    clearInterval(this.timer);
                    if(hide) {
                        this.$parent.waiting = this.waiting = false;
                    }
                    if (callback_after_stop_timer && !this.called_stop_timer) {
                        this.called_stop_timer = true;
                        callback_after_stop_timer(this.$parent);
                    }
                }
            }, 15);
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/waiting.scss";
</style>
