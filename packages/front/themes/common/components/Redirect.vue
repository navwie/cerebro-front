<template>
    <div id="redirect">
        <div class="redirect-wrap">
            <div class="d-flex justify-content-center">
                <div class="spinner-grow" role="status">
                </div>
                <div class="spinner-grow" role="status">
                </div>
                <div class="spinner-grow" role="status">
                </div>
            </div>
            <div class="d-flex justify-content-center  pt-5">
                <p>You will be redirected to the&nbsp;<a href="#" @click="redirectHandler" id="link">link</a>&nbsp;in&nbsp;<span
                        id="timer"></span>&nbsp;seconds</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Redirect",
    data() {
        return {
            url: '',
            decision_id: '',
            request_id_mark: 0
        };
    },
    methods:{
        redirectHandler(){
            let url = import.meta.env.VITE_API_MARK_REDIRECTED;
            url += '?' + new URLSearchParams({
                id: this.decision_id,
                request_id_mark: this.request_id_mark,
            });
            fetch(url, {
                "headers": new Headers({
                    'Authorization': "Bearer " + document.querySelector('meta[name="form-token"]').content,
                }),
            }).then(() => {
                window.location.href = this.url;
            }).catch((error) => {
                console.log(error);
                window.location.href = this.url;
            });
        }
    },
    mounted() {
        let el = document.querySelector('Redirect');
        this.url = el.dataset.url;
        this.decision_id = el.dataset.decisionId;
        if (el.dataset.requestIdMark) {
            this.request_id_mark = el.dataset.requestIdMark;
        }
        let seconds = 5;
        document.getElementById('timer').innerHTML = seconds;
        let interval = setInterval(() => {
            seconds--;
            document.getElementById('timer').innerHTML = seconds;
            if (seconds <= 0) {
                clearInterval(interval);
                document.getElementById('link').click();
            }
        }, 1000);
    }
}
</script>

<style lang="scss" scoped>
html {
    body {
        #app {
            #redirect {
                min-height: 60vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .spinner-grow {
                margin: 0 5px;
            }

            .redirect-wrap a {
                color: #0d6efd !important;
            }
        }
    }
}
</style>

