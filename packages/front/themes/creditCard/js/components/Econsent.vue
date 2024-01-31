<template>
    <section id="content" :style="mainColor">
        <div class="content-wrap text-justify">
            <div class="container" style="">
                <div class="row col-mb-50">
                    <div class="col-12">
                        <p class="mb-4"><b>CONSENT FOR ELECTRONIC SIGNATURES, RECORDS, AND DISCLOSURES. </b>
                            You are submitting a request to be connected with credit card companies, financial service providers,
                            advertisers, and marketers who may secure the products, goods, and services that you have requested
                            to be connected to or are related to your request. (together, "Third-Parties"). In order to offer you
                            services, these independent, third-parties need your consent to use and accept electronic signatures,
                            records, and disclosures ("E-Consent"). This disclosure notifies you of your rights when receiving electronic
                            disclosures, notices, and information. By clicking on the link consenting to our terms, you acknowledge
                            that you received this E-Consent and that you consent to conduct transactions using electronic signatures,
                            electronic disclosures, electronic records, and electronic contract documents ("Disclosures").</p>
                        <p class="mb-4"><b>OPTION FOR PAPER OR NON-ELECTRONIC RECORDS. </b>You may request any Disclosures in paper copy
                            form by contacting the third-party who has provided you a service directly. They may provide paper copies at
                            no charge and will likely retain all Disclosures as required by applicable data privacy and retention laws.
                        </p>
                        <p class="mb-4"><b>SCOPE OF E-CONSENT. </b>This E-Consent applies to all interactions online concerning you and the third parties,
                            including those interactions engaged in on any mobile device such as smart-phones and tablets. By exercising this E-Consent,
                            third parties may process the information that you provide and interact during all online interactions with you electronically.
                            Third-parties may also send you notices electronically related to its interactions and transactions. To summarize, by agreeing
                            to this E-Consent, you are consenting to third-parties contacting you electronically for any transaction. Before you decide
                            to do business electronically with a third-party, you should consider whether you have the required equipment, hardware,
                            and software capabilities described below.
                        </p>
                        <p class="mb-4"><b>HARDWARE AND SOFTWARE REQUIREMENTS. </b>To access and retain the Disclosures electronically, you may need to
                            use the following computer software and hardware: A PC or MAC compatible computer or other device capable of accessing the
                            Internet, access to an e-mail account, and an Internet Browser software program that supports at least 128-bit encryption,
                            such as Internet Explorer. To read some documents, you may need a PDF file reader like Adobe. You may need a printer or a
                            long-term storage device, such as your computer's disk drive, to retain a copy of the Disclosures for future reference.
                            You may send any questions regarding the hardware and software requirements directly to the third-party lender or financial
                            service provider.
                        </p>
                        <p class="mb-4"><b>CHANGES TO YOUR CONTACT INFORMATION. </b>You are highly encouraged to keep any third parties you may be connected
                            through this website informed of any change or update in your electronic address or mailing address. You may update such
                            information by logging into the third party's website or by sending the third party a written update by mail.
                        </p>
                        <p class="mb-4"><b>WITHDRAWING CONSENT. </b>Your E-Consent for this website’s services is irrevocable because it is a one-time transaction.
                            If you are connected with third parties through this website, you are able to withdraw your E-Consent from them directly at no charge.
                        </p>
                        <p class="mb-4"><b>CONSENT. </b>BY CLICKING THE LINK OR SUBMITTING YOUR INFORMATION ON THIS WEBSITE, YOU ACKNOWLEDGE YOU HAVE READ THIS
                            INFORMATION ABOUT ELECTRONIC SIGNATURES, RECORDS, DISCLOSURES, AND DOING BUSINESS ELECTRONICALLY AND CONSENT TO THESE TERMS. YOU ACKNOWLEDGE
                            THAT YOU CAN ACCESS THE DISCLOSURES IN THE DESIGNATED FORMATS AS DESCRIBED ABOVE. YOU CONSENT TO USING ELECTRONIC SIGNATURES, HAVING
                            ALL DISCLOSURES PROVIDED OR MADE AVAILABLE TO YOU IN ELECTRONIC FORM AND TO DOING BUSINESS WITH ANY THIRD PARTIES ELECTRONICALLY.
                            YOU ACKNOWLEDGE THAT YOU MAY REQUEST A PAPER COPY OF THE ELECTRONIC RECORDS AND DISCLOSURES, WHICH WILL BE PROVIDED TO YOU AT NO CHARGE.
                            IF YOU REFRAIN FROM PROCEEDING THEN YOU NEITHER WISH TO USE ELECTRONIC SIGNATURES NOR CONDUCT THIS TRANSACTION ELECTRONICALLY.
                            YOU ALSO ACKNOWLEDGE THAT YOUR CONSENT TO ELECTRONIC DISCLOSURES IS REQUIRED TO RECEIVE SERVICES FROM THIRD PARTIES OVER THE INTERNET.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Econsent",
    data() {
        return {
            app_name: document.querySelector('meta[name="title"]').content,
        };
    },
}
</script>
