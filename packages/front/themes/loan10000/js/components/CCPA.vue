<template>
    <section class="GSC_ccpa" :style="mainColor">
        <h2 class="mb-5 d-flex justify-content-between align-items-center">
            CALIFORNIA “DON’T SELL MY INFO” PRIVACY NOTICE
            <svg type="button" data-bs-dismiss="modal" width="18" height="18" viewBox="0 0 18 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.8516 8.59375L16.7378 3.70752C17.3374 3.10791 17.3374 2.13574 16.7378 1.53564L15.6519 0.449707C15.0522 -0.149902 14.0801 -0.149902 13.48 0.449707L8.59375 5.33594L3.70752 0.449707C3.10791 -0.149902 2.13574 -0.149902 1.53564 0.449707L0.449707 1.53564C-0.149902 2.13525 -0.149902 3.10742 0.449707 3.70752L5.33594 8.59375L0.449707 13.48C-0.149902 14.0796 -0.149902 15.0518 0.449707 15.6519L1.53564 16.7378C2.13525 17.3374 3.10791 17.3374 3.70752 16.7378L8.59375 11.8516L13.48 16.7378C14.0796 17.3374 15.0522 17.3374 15.6519 16.7378L16.7378 15.6519C17.3374 15.0522 17.3374 14.0801 16.7378 13.48L11.8516 8.59375Z"
                    fill="#4B4B4B"/>
            </svg>
        </h2>
        <p>
            IF YOU ARE NOT A RESIDENT OF CALIFORNIA, THIS POLICY DOES NOT APPLY TO YOU AND PLEASE DO NOT
            CONTINUE.</p>
        <p class="mb-4">This privacy notice is supplemental to the information contained
            in {{ app_name }}’s (“site,” “we,” “us,” or “our”) <span
                data-bs-toggle="modal" data-bs-target="#privacy" type="button">Privacy
                Policy</span> and applies solely to Residents of California (“Consumers” or “you”) who
            access and
            use, provide their information, or interact with our infomediary services and the site. This
            privacy
            notice is in full compliance with the California Consumer Privacy Act of 2018 (“CCPA”) and
            other
            applicable privacy laws of California. The terminology defined in CCPA shall have the same
            meaning
            when used herein. As part of site’s commitment to full transparency with its consumers, this
            privacy
            notice contains information regarding our practices for the collection, use, transfer,
            disclosure
            and sale of Personal Information from consumers who submit their information on this site
            and also
            provides instructions on how to exercise your statutory rights under CCPA. Statutory rights
            under
            CCPA only exist for California residents. </p>
        <p class="mb-1"><b>CALIFORNIA RESIDENT PRIVACY RIGHTS.</b></p>
        <p class="mb-4">Only California residents, or their authorized registered designated agents, can
            submit
            a CCPA request pertaining to their Personal Information for verification and processing.</p>
        <p class="mb-1"><b>REQUEST TO KNOW HOW PERSONAL INFORMATION IS COLLECTED, DISCLOSED, OR
            SOLD.</b></p>
        <p class="mb-4">California consumers have the right to request that we inform them on what
            Personal
            Information is collect, used, disclosed, and sold by this site that belongs to them.
            Consumers can
            submit their CCPA requests to be verified by this site and request to obtain the specific
            Personal
            Information we have collected about them by emailing us directly at
            <EmailForm :user="user"></EmailForm>
            . Upon receipt of a
            consumers CCPA request, we are required by statute to verify that the requester is the same
            consumer
            with whom we have the information in our databases. To verify a consumer’s identify, we will
            ask the
            consumer’s to provide limited types of information to us for the sole purpose of verifying,
            which
            will include, but not limited to: full name, address, email address, and the last four
            digits of a
            social security number. Once we verify your CCPA request, we will disclose to you the
            following: (a)
            the categories of Personal Information we collected about you; (b) the categories of sources
            for the
            Personal Information we collected about you; (c) our business and/or commercial purpose for
            collecting or selling the Personal Information; and (d) the categories of third-parties with
            whom we
            passed and shared that Personal Information. To summarize, our privacy practices, as set
            forth in
            our <span data-bs-toggle="modal" data-bs-target="#privacy">Privacy Policy</span>, we collect several types of information about
            consumers,
            either individually or in combinations, when they access and utilize the site, including
            Personal
            Information, demographic information, behavioral information, and indirect information.
            Personal
            Information is collected directly and indirectly from your use of this site and your
            interactions or
            communications with the site, such as your loan request to connect with third-party lenders
            or
            financial service providers. Further, this site has received monetary compensation for its
            disclosure or sharing of consumer’s Personal Information with: (a) affiliated entities; (b)
            service
            providers; (c) information aggregators; (d) lenders, including tribal lenders; (e)
            advertisers; and
            (f) third-parties who you have authorized disclosure to in order to be connected with
            services or
            goods. The sharing or disclosure of Personal Information was made for the following business
            and
            commercial purposes: (a) to obtain the financial services or short-term loan products you
            have
            requested on this Website; (b) to allow third-parties to market goods and services to you;
            (c) to
            resolve consumer inquiries or marketing opt-out requests; (d) to enhance this site and its
            user
            experience; (e) to preserve the security of the site and its services; or (f) to respond to
            any
            regulatory body or government requests which we are required by law to respond to. For the
            avoidance
            of doubt, Personal Information under CCPA does not include:(a) publicly available
            information from
            public or government records; (b) de-identified consumer information; (c) Information not
            included
            in the scope of CCPA; or (d) Personal Information covered by certain industry specific
            privacy laws,
            including the Fair Credit Reporting Act (“FRCA”), the Gramm-Leach-Bliley Act (“GLBA”), or
            California
            Financial Information Privacy Act (“FIPA”).
        </p>
        <p class="mb-1"><b>REQUEST FOR DELETION OF PERSONAL INFORMATION.</b></p>
        <p class="mb-4">You have a statutory right under CCPA to request the deletion of your Personal
            Information if we have collected or maintained it in the past twelve (12) months. You can
            request
            deletion of your Personal Information from this site by directly contacting us at
            <EmailCcpaForm :user="user"></EmailCcpaForm>
            with
            the Subject Line <b>“CCPA Right to Delete”</b>. Once we are able to verify you and process
            your CCPA
            request, we will archive your Information in a secure and encrypted, separate database
            scheduled for
            destruction in three (3) years from the date you provided the said information to the site.
            At this
            time, Your Information will be protected and no longer utilized. We are precluded from
            processing
            deletion immediately by contractual and statutory prohibitions set forth in the Telephone
            Consumer
            Protection Act, CANSPAM Act of 2003, and California Business and Professions Code Section
            17529.5.
        </p>
        <p class="mb-1"><b>OPT-OUT OF THE SALE OF PERSONAL INFORMATION.</b></p>
        <p class="mb-4">Consumers have the right to opt-out of any sale of their personal information by
            a
            business. If a consumer is initially requesting a product or service, such as on this site,
            this is
            an exemption from this right, and we will process your request. However, thereafter,
            consumers have
            the right to cease all further sharing of information.</p>
        <p class="mb-1"><b>NON-DISCRIMINATION.</b></p>
        <p class="mb-4">Consumers have a right not to receive discriminatory treatment by this site for
            the
            exercise of these privacy rights conferred by the CCPA. This site will not deny you services
            and if
            applicable, will not charge you different price points or rates for services or provide you
            a
            different quality of service. However, if you exercise your statutory rights under CCPA to
            opt-out
            of the sharing or selling of your information pursuant to the practices herein, this site
            will not
            be able to provide you its services, such as passing your information to third-party Lenders
            or
            financial service providers who may secure you a short-term loan or other financial
            products. This
            is because you are requesting to opt-out of sharing of your Personal Information and not due
            to
            discriminatory reasons.</p>

        <p class="mb-1"><b>LIMITATIONS.</b></p>
        <p class="mb-4">Consumers may only submit a CCPA request to be verified by this site twice
            within a
            twelve month period. The verifiable consumer request must: (a) provide sufficient
            information that
            enables this site to reasonably verify you are the individual about whom site collected
            Personal
            Information; (b) describe the request with adequate detail that allows this site to properly
            understand, evaluate, and respond to you, specifically whether you are requesting to know,
            requesting not to sell, or requesting to delete. Unfortunately, for security and privacy
            reasons,
            this site cannot respond to your CCPA request or provide you with Personal Information if we
            cannot
            verify your identity or confirm the Personal Information relates to you; The Personal
            Information
            you provide in a CCPA request to be verified will only be used to verify the requestor’s
            identity or
            authority.</p>
        <p class="mb-1"><b>RESPONSE TIME.</b></p>
        <p class="mb-4">This site reasonably endeavors to respond and process verified consumer request
            within
            the statutory proscribed time of forty-five (45) days of its receipt. Should our site
            require more
            time to process your request, we will provide you written notice and further information
            about the
            disposition and extension. This notice will be provided by electronic mail to the contact
            you
            provide. Further, any disclosures this site provides will only cover the twelve (12) month
            period
            preceding a verifiable consumer request’s receipt by the site.</p>
        <p class="mb-1"><b>MODIFICATIONS.</b></p>
        <p class="mb-4">This site reserves the right to modify, replace, and amend this privacy notice
            at any
            time and for any reason and when modifications are implemented, they will take into effect
            immediately upon publication and shall replace and supersede any previous policy. Your
            continued use
            of the site after such modifications shall constitute your acceptance and thus, you are
            encouraged
            to review this page each time you access or use the site.</p>
        <p class="mb-1"><b>CONTACT.</b></p>
        <p class="mb-4">If you have any questions about this privacy notice, please contact us at:
            <EmailCcpaForm :user="user"></EmailCcpaForm>
        </p>
    </section>
</template>

<script>
export default {
    name: "CCPA",
    data() {
        return {
            app_name: document.querySelector('title').text,
            mainButtonColor: siteSettings.general.main_button_color.value,
            mainColor: siteSettings.general.main_color.value,
        };
    },
    props: {
        user: Object,
    },
    computed: {
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.mainButtonColor,
            };
        },
    },
}
</script>
