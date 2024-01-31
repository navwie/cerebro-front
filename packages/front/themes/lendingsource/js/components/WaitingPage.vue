<template>
    <div v-show="waiting" class="row" id="waitingPage">
        <div style="width: 100vw; margin: auto; padding-top: 50px">
            <div
                class="GSC_waiting loader"
                :style="mainColor"
                style="
                    width: 100px;
                    height: 100px;
                    margin: auto;
                    margin-top: 50px;
                    background-color: rgb(255, 255, 255);
                  "
            ></div>
            <div
                style="
            width: 200px;
            height: 50px;
            margin: auto;

            background-color: rgb(255, 255, 255);
          "
            >
                <p
                    style="
              text-align: center;
              margin: auto;
              margin-top: 20px;
              font-size: 22px;
              font-weight: bold;
            "
                >
                    {{ waitingPercentage }}%
                </p>
            </div>
            <div style="padding: 5px;">
                <p style="text-align: center; margin: auto;">
                    Please wait while we work to connect you with a {{lead_type}} loan...
                </p>
                <p style="text-align: center; margin: auto;">
                    Due to the number of available lenders, this can take up to 5 minutes
                </p>
                <p style="text-align: center; margin: auto;">
                    <b>DO NOT</b> close your browser or press your “back” button
                </p>
                <br/>
                <p style="text-align: center; margin: auto;">
                    If approved, you could get your funds from lenders as soon as the next business day.
                </p>
                <br/>
                <br/>
                <p style="text-align: center; margin: auto; margin-bottom: 5px;">
                    To speed up your process, please be sure to:
                </p>
                <p style="text-align: center; margin: auto;">
                    -Answer your phone-Your lender will be contacting you to verify your information shortly.
                </p>
                <p style="text-align: center; margin: auto;">
                    -Check your SMS messages and Email for Notifications from your lender.
                </p>
                <p style="text-align: center; margin: auto;">
                    -Review and sign the loan documents provided by your lender.
                </p>

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
    methods:{
        calculateDelay(){
            return this.processing_time / (31 * 20);
        },
        setNewTimer(delay,maxPercentage){
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
                if(response.data.processing_time != null){
                    this.processing_time = response.data.processing_time;
                }
                this.setNewTimer(this.calculateDelay() * 1000,20);
            });
        },
        stopTimer(callback_after_stop_timer = false) {
            window.onbeforeunload = null;
            clearInterval(this.timer);
            this.timer = setInterval( () => {
                this.waitingPercentage += 1;
                if (this.waitingPercentage >= 99){
                    clearInterval(this.timer);
                    this.$parent.waiting = this.waiting = false;
                    if(callback_after_stop_timer && !this.called_stop_timer){
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
