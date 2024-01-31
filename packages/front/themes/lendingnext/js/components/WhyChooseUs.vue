<template>
    <div class="GSC_main" :style="mainColors">
        <div class="container">
            <section class="page-section">
                <div class="row">
                    <div class="col">
                        <GreenLabel :title="'WHY CHOOSE US'" :color="'var(--main-color)'"/>
                    </div>
                </div>
                <WhiteBlock 
                    :title="'Made by a team of researchers, analysts, dedicated to making the financial world  more inviting.'" 
                    :description="'LoanUp was created to simplify and improve the process of learning about and finding personal loan options. By connecting readers to the top lenders in our network, we\'ve made LoanUp™ the one-stop-shop for all your personal loan needs.'" 
                    :img="'./img/coppa-1.png'" />
                <div class="row testimonies">
                    <div class="col">
                        <h2>Testimonies from our clients.</h2>
                        <p>Hear from our users and what they have to say about their experience with LendingMutual.</p>
                    </div>
                </div>

                <div class="row reviews-756">
                    <div class="col-md-6 text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>
                    <div class="col-md-6">
                        <img :src="'./img/young-man-1.png'"/>
                    </div>

                    <div class="col-md-6 text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>
                    <div class="col-md-6">
                        <img :src="'./img/black-woman-portrait-1.png'"/>
                    </div>

                    <div class="col-md-6 text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>
                    <div class="col-md-6">
                        <img :src="'./img/face-portait-1.png'"/>
                    </div>

                    <div class="col-md-6 text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>
                    <div class="col-md-6">
                        <img :src="'./img/smile-portrait-1.png'"/>
                    </div>

                </div>

                <!---------------------------------------------->

                <div class="row reviews">

                    <div class="col-md-6 flex-column justify-content-center text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>
                    <div class="col-md-6">
                        <img :src="'./img/young-man-1.png'"/>
                    </div>

                    <div class="col-md-6">
                        <img :src="'./img/black-woman-portrait-1.png'"/>
                    </div>
                    <div class="col-md-6 flex-column justify-content-center text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>

                    <div class="col-md-6 flex-column justify-content-center text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>
                    <div class="col-md-6">
                        <img :src="'./img/face-portait-1.png'"/>
                    </div>

                    <div class="col-md-6">
                        <img :src="'./img/smile-portrait-1.png'"/>
                    </div>
                    <div class="col-md-6 flex-column justify-content-center text">
                        <h3>Jonathan Smith</h3>
                        <p>“Super easy. I filled out the form and was able to connect with a lender within a few minutes. They provided the exact fund amount that I needed.“</p>
                        <div class="rating">★★★★★</div>
                    </div>

                </div>

                <div class="row mutual">
                    <div class="col-12">
                        <h2>LendingMutual is the most connected lending platform in the US.</h2>
                        <p>
                            If we can’t find you a loan, nobody can! LendingMutual — is the most connected lending platform in the US. We partner with lenders across the country and provide financial help on the best terms within a few clicks. That’s simple!
                        </p>
                        <div class="btn-container">
                            <GetStartedButton :text="'Check If I Qualify'"/>
                        </div>
                    </div>

                    <div class="delimiter"></div>
                    
                    <div class="col-md-6 mt-5">
                        <h2>We help you navigate the best path to your personal loan.</h2>
                        <p>We connect you with a whole list of lenders, and we help you navigate the best path to move forward with your personal loan. Whether you're just educating yourself on personal loans or finding the best lender for your situation, LendingMutual is committed to bringing consumers and lenders together.</p>
                    </div>

                    <div class="col-md-6 image-container">
                    
                        <!-- <img :src="'./img/navigate-1.png'" /> -->
                    </div>

                </div>
            </section>
        </div>
        <div class="container-fluid">
            <section class="page-section p-0">
                <BrownBlock />
            </section>
        </div>
    </div>
</template>

<script>

import GreenLabel from "../components/GreenLabel.vue"
import WhiteBlock from "../components/WhiteBlock.vue"
import BrownBlock from "../components/BrownBlock.vue"
import GetStartedButton from "./GetStartedButton.vue";

export default {
    name: "WhyChooseUs",
    components: {
        GreenLabel,
        WhiteBlock,
        BrownBlock,
        GetStartedButton
    },
    data() {
        return {
            app_name: document.querySelector('title').text,
            mainColor: siteSettings.general.main_color.value,
        };
    },
    computed: {
        mainColors() {
            return {
                '--main-color': this.mainColor,
            };
        },
    },
    mounted() {
        this.app_name =  document.querySelector('title').text
        this.mainColor = siteSettings.general.main_color.value
    },
    methods: {
        getMetaContent(name) {
            const element = document.querySelector(`meta[name="${name}"]`);
            return element && element.content ? element.content : '';
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sass/pages.scss";
</style>