<template>
    <div :style="mainColor" class="GSC_main vh-100">
        <heade id="header">
            <img :src="logoSource" height="40" width="177" alt="Logo">
        </heade>
        <WaitingPage name="WaitingPage" ref="WaitingPage" :waiting="false"></WaitingPage>
        <div v-show="!waiting">
            <div class="d-flex justify-content-center form-div">
                <div class="d-flex flex-column bd-highlight" style="width: 450px;max-width: 100%;padding:0 8px;">
                    <div class="d-flex justify-content-between">
                        <div class="range-slider">
                            <div id="done" class="done" :style="progressBar"></div>
                        </div>
                        <div class="completed">
                            <span>{{ Math.round(step / allSteps * 100) }}%</span> Completed
                        </div>
                    </div>
                    <div class="specialist-wrapper">
                        <div class="d-flex justify-content-between">
                            <span>{{ assistant_steps[step] }}</span>
                            <div class="specialist-separator">
                                >
                                <span></span>
                            </div>
                            <img :src="'/img/specialists/'+specialist+'.jpg'" class="rounded-circle" alt=""
                                 width="90" height="90">
                        </div>
                    </div>
                    <div class="form-separator"></div>
                    <div class="form-section">
                        <div class="form-title">
                            {{ titles[step] }}
                        </div>
                        <div class="form-wrapper" v-show="step === 1">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.requested_amount.$error}">
                                <select class="form-select" v-model="fields.requested_amount" aria-invalid="false"
                                        v-bind:class="{'not-valid': v$.fields.requested_amount.$error}"
                                        id="requested_amount">
                                    <option value="500">$100 - $500</option>
                                    <option value="800">$500 - $1000</option>
                                    <option value="1000">$1000 - $1500</option>
                                    <option value="1500">$1500 - $2000</option>
                                    <option value="2500">$2000 - $3000</option>
                                    <option value="3500">$3000 - $4000</option>
                                    <option value="4500">$4000 - $5000</option>
                                    <option value="6000">$5000 - $7000</option>
                                    <option value="8000">$7000 - $10000</option>
                                </select>
                                <span class="input-group-text">
                                    <svg width="29" height="32" viewBox="0 0 29 32" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_446)">
                                            <path
                                                d="M13.314 6V8.395H11.518C9.889 8.395 8.524 9.76 8.524 11.389V12.587C8.524 14.216 9.578 15.557 11.135 15.964L17.266 17.545C17.602 17.641 18.081 18.239 18.081 18.599V19.796C18.081 20.132 17.817 20.395 17.482 20.395H11.494C11.207 20.395 10.991 20.299 10.895 20.252V18H8.5V20.395C8.5 21.21 8.979 21.904 9.554 22.264C10.105 22.647 10.799 22.79 11.494 22.79H13.29V25.186H15.686V22.79H17.482C19.135 22.79 20.476 21.449 20.476 19.796V18.599C20.476 16.97 19.422 15.629 17.865 15.222L11.734 13.641C11.398 13.545 10.919 12.946 10.919 12.587V11.389C10.919 11.054 11.183 10.79 11.518 10.79H17.506C17.769 10.79 18.009 10.886 18.105 10.934V13.186H20.5V10.79C20.5 9.976 20.021 9.281 19.446 8.922C18.895 8.539 18.201 8.395 17.506 8.395H15.71V6H13.314Z"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 2">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.email.$error}">
                                <input type="text" v-model.lazy="fields.email" id="email" v-bind:class="{'not-valid': v$.fields.email.$error}"
                                       class="form-control" placeholder="Enter your Email" autocomplete="on">
                                <span class="input-group-text">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.18129 17.9027C7.74639 17.9027 6.46893 17.707 5.3489 17.3157C4.22887 16.9289 3.28202 16.3598 2.50835 15.6087C1.73467 14.862 1.14542 13.9489 0.74059 12.8693C0.33576 11.7898 0.133345 10.5618 0.133345 9.18537C0.133345 7.82694 0.33576 6.59446 0.74059 5.48793C1.14992 4.38139 1.74592 3.43229 2.52859 2.64062C3.31126 1.84446 4.2671 1.23272 5.39613 0.805397C6.52965 0.378077 7.82061 0.164417 9.269 0.164417C10.6094 0.164417 11.8059 0.360085 12.8585 0.751421C13.9155 1.14276 14.8107 1.70052 15.5439 2.42472C16.2815 3.14441 16.8416 4.0013 17.2239 4.99538C17.6107 5.98497 17.8019 7.08026 17.7974 8.28125C17.8019 9.1089 17.7299 9.86908 17.5815 10.5618C17.4331 11.2545 17.1992 11.8595 16.8798 12.3768C16.5649 12.8896 16.1511 13.2966 15.6383 13.598C15.1255 13.8949 14.5048 14.0636 13.7761 14.104C13.2543 14.1445 12.8315 14.1063 12.5076 13.9893C12.1838 13.8724 11.9364 13.6992 11.7654 13.4698C11.599 13.2359 11.4911 12.9638 11.4416 12.6534H11.3606C11.2527 12.9233 11.0413 13.1684 10.7264 13.3888C10.4115 13.6048 10.0269 13.7734 9.57262 13.8949C9.12281 14.0118 8.64376 14.0546 8.13548 14.0231C7.6047 13.9916 7.10091 13.8679 6.62411 13.652C6.15181 13.4361 5.73124 13.1235 5.36239 12.7141C4.99805 12.3048 4.71017 11.7988 4.49876 11.196C4.29184 10.5933 4.18614 9.89607 4.18164 9.1044C4.18614 8.32173 4.29634 7.64027 4.51225 7.06001C4.73266 6.47976 5.02279 5.99171 5.38264 5.59588C5.74698 5.20005 6.15181 4.88968 6.59712 4.66477C7.04244 4.43987 7.49 4.29593 7.93981 4.23295C8.44809 4.15649 8.92939 4.15649 9.3837 4.23295C9.83801 4.30942 10.2203 4.43312 10.5307 4.60405C10.8456 4.77498 11.0413 4.9594 11.1177 5.15732H11.2122V4.40163H13.324V10.9869C13.3285 11.2972 13.3983 11.5379 13.5332 11.7088C13.6681 11.8797 13.8503 11.9652 14.0797 11.9652C14.3901 11.9652 14.6487 11.828 14.8556 11.5536C15.0671 11.2792 15.2245 10.8587 15.3279 10.2919C15.4359 9.72514 15.4899 9.0032 15.4899 8.12607C15.4899 7.28042 15.3774 6.53823 15.1525 5.8995C14.9321 5.25627 14.6217 4.70975 14.2214 4.25994C13.8256 3.80563 13.3645 3.43679 12.8382 3.15341C12.312 2.87003 11.7407 2.66312 11.1245 2.53267C10.5127 2.40223 9.88299 2.337 9.23526 2.337C8.11523 2.337 7.1369 2.50793 6.30025 2.84979C5.4636 3.18714 4.76639 3.66169 4.20863 4.27344C3.65086 4.88518 3.23254 5.60263 2.95366 6.42578C2.67927 7.24444 2.53983 8.13731 2.53533 9.1044C2.53983 10.1705 2.68827 11.1151 2.98065 11.9382C3.27752 12.7569 3.71384 13.4451 4.2896 14.0028C4.86535 14.5606 5.57605 14.9834 6.4217 15.2713C7.26734 15.5592 8.23893 15.7031 9.33647 15.7031C9.85375 15.7031 10.3598 15.6649 10.8546 15.5884C11.3494 15.5165 11.7969 15.4265 12.1973 15.3185C12.5976 15.2151 12.9192 15.1139 13.1621 15.0149L13.8301 16.9716C13.5467 17.1335 13.1621 17.2842 12.6763 17.4237C12.195 17.5676 11.6507 17.6823 11.0435 17.7678C10.4408 17.8577 9.82002 17.9027 9.18129 17.9027ZM8.87092 11.8033C9.41969 11.8033 9.856 11.6976 10.1799 11.4862C10.5082 11.2747 10.7421 10.9621 10.8816 10.5483C11.0255 10.13 11.093 9.61494 11.084 9.0032C11.0795 8.46342 11.0098 8.00687 10.8748 7.63352C10.7444 7.25568 10.5172 6.97005 10.1934 6.77663C9.87399 6.57872 9.42868 6.47976 8.85742 6.47976C8.35813 6.47976 7.93306 6.58546 7.58221 6.79688C7.23585 7.00829 6.97047 7.30516 6.78604 7.6875C6.60612 8.06534 6.51391 8.51065 6.50941 9.02344C6.51391 9.50024 6.59038 9.9523 6.73881 10.3796C6.88725 10.8024 7.1324 11.1465 7.47425 11.4119C7.81611 11.6728 8.28166 11.8033 8.87092 11.8033Z"
                                            />
                                        </svg>
                                </span>
                            </div>
                            <div id="invalid-email" class="text-start text-danger"></div>
                            <div id="invalid-validation-email"
                                 v-for="error of v$.fields.email.$errors"
                                 :key="error.$uid"
                            >
                                <span class="text-start text-danger">{{ error.$message }}</span>
                            </div>
                            <p>
                                <small>
                                    By clicking “Next Step”, you agree to our
                                    <span data-bs-toggle="modal" data-bs-target="#terms" type="button">
                                        Terms & Conditions
                                    </span>
                                    ,
                                    <span data-bs-toggle="modal" data-bs-target="#privacy" type="button">
                                        Privacy Policy
                                    </span>
                                    ,
                                    <span data-bs-toggle="modal" data-bs-target="#credit_disclosure" type="button">
                                        Credit Disclosure
                                    </span>
                                    , and to receive important notices and other communications electronically.
                                </small>
                            </p>
                        </div>
                        <div class="form-wrapper" v-show="step === 3">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.reason_for_loan.$error}" >
                                <select class="form-select" v-model.lazy="fields.reason_for_loan"
                                        id="reason_for_loan" v-bind:class="{'not-valid': v$.fields.reason_for_loan.$error}">
                                    <option value="">Choose purpose of loan</option>
                                    <option v-for="t in this.reasons_for_loan" :value="t"
                                            :key="'reason_for_loan'+t">
                                        {{ t }}
                                    </option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
                                        <path d="M19.9838 7.22573L18.55 5.79187C18.4525 5.69442 18.2941 5.69442 18.1966 5.79187L14.1809 9.80809C14.083 9.90555 14.083 10.0635 14.1809 10.1614L15.6143 11.5948C15.7117 11.6928 15.8702 11.6928 15.9676 11.5948L19.9838 7.57908C20.0813 7.48162 20.0813 7.32319 19.9838 7.22573ZM18.9608 1.38481C18.9608 0.833056 18.513 0.385254 17.9612 0.385254H1.96831C1.41605 0.385254 0.96875 0.833056 0.96875 1.38481V9.88105C0.96875 10.4333 1.41605 10.8806 1.96831 10.8806H11.3717C11.4191 10.8136 18.9608 3.26098 18.9608 3.26098V1.38481ZM4.77656 4.78082L6.02701 5.42403C6.71671 5.77887 7.08204 6.50756 6.95859 7.28022C6.85714 7.91194 6.44532 8.40571 5.87558 8.61912V8.8815C5.87558 9.22684 5.5957 9.50622 5.25085 9.50622C4.90601 9.50622 4.62613 9.22684 4.62613 8.8815V8.65959C4.0214 8.49067 3.50563 8.06036 3.24375 7.45763C3.10631 7.14127 3.25124 6.77293 3.56809 6.6355C3.88495 6.49856 4.2523 6.644 4.38974 6.95936C4.54167 7.3087 4.89252 7.52161 5.27785 7.48662L5.34032 7.47962C5.63719 7.43214 5.70815 7.18675 5.72464 7.0833C5.75413 6.89988 5.69867 6.66049 5.45477 6.53505L4.20432 5.89182C3.50763 5.53298 3.13679 4.77182 3.28172 3.99717C3.41566 3.28248 3.93543 2.76121 4.62613 2.61828V2.38437C4.62613 2.03952 4.90601 1.75965 5.25085 1.75965C5.5957 1.75965 5.87558 2.03952 5.87558 2.38437V2.75121C6.35736 2.96062 6.76169 3.34595 6.98359 3.85622C7.12103 4.17208 6.97609 4.54043 6.65923 4.67787C6.34287 4.8153 5.97504 4.66936 5.8376 4.354C5.68567 4.00466 5.33082 3.79276 4.94949 3.82674C4.61264 3.86222 4.53017 4.11861 4.51018 4.22706C4.49319 4.31602 4.4632 4.61939 4.77656 4.78082ZM12.2373 7.75699H9.23859C8.89324 7.75699 8.61387 7.47762 8.61387 7.13227C8.61387 6.78742 8.89324 6.50755 9.23859 6.50755H12.2373C12.5821 6.50755 12.862 6.78742 12.862 7.13227C12.862 7.47762 12.5821 7.75699 12.2373 7.75699ZM14.2364 5.2581H9.23859C8.89324 5.2581 8.61387 4.97872 8.61387 4.63338C8.61387 4.28853 8.89324 4.00865 9.23859 4.00865H14.2364C14.5812 4.00865 14.8611 4.28853 14.8611 4.63338C14.8611 4.97872 14.5812 5.2581 14.2364 5.2581ZM13.2748 11.066C13.1773 10.9686 13.0204 10.9676 12.923 11.065C12.76 11.2275 12.5261 11.4604 12.4157 11.5718C12.3737 11.6138 12.3502 11.6678 12.3452 11.7268L12.2208 13.3445C12.2088 13.501 12.3427 13.6299 12.4987 13.6119L14.053 13.433C14.1089 13.4265 14.1614 13.4015 14.2009 13.3615L14.7092 12.8537C14.8066 12.7563 14.8066 12.5979 14.7092 12.5004L13.2748 11.066Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-reason_for_loan" class="d-none error"></div>
                            <div id="invalid-validation-reason_for_loan">
                                <p
                                    v-for="error of v$.fields.reason_for_loan.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="reason_for_loan"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 4">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.debt_amount.$error}">
                                <select class="form-select" name="debt_amount"
                                        id="debt_amount" v-model.lazy="fields.debt_amount"
                                        v-bind:class="{'not-valid': v$.fields.debt_amount.$error}"
                                        @change="onChangeDebtAmount">
                                    <option value="">Choose Debt Amount</option>
                                    <option value="0">No debt</option>
                                    <option value="7500">Under $7,500</option>
                                    <option value="10000">$7,500 - $10,000</option>
                                    <option value="15000">$10,000 - $15,000</option>
                                    <option value="20000">$15,000 - $20,000</option>
                                    <option value="25000">$20,000 - $25,000</option>
                                    <option value="30000">$25,000 - $30,000</option>
                                    <option value="35000">$30,000 - $35,000</option>
                                    <option value="40000">$35,000 - $40,000</option>
                                    <option value="45000">$40,000 - $45,000</option>
                                    <option value="50000">$45,000 +</option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <path d="M5.98346 6.93506C5.89971 6.82269 5.73527 6.79232 5.62217 6.87553C3.92327 8.12072 3.69708 10.5576 5.13616 12.0901L9.49191 16.7289L8.70573 17.7821C8.31203 18.31 7.69153 18.5991 7.03129 18.627C5.91377 18.6744 4.83049 19.2606 4.20815 20.3241C3.37551 21.7485 3.7307 23.6339 5.01939 24.6695C5.63928 25.167 6.39122 25.4288 7.16823 25.4288C7.33757 25.4288 7.50813 25.416 7.6787 25.3911C8.58347 25.2575 9.38187 24.7813 9.92657 24.0518C10.5813 23.1747 10.7445 22.0862 10.4694 21.1089C10.2769 20.4256 10.5073 19.6924 10.9946 19.1737L11.3907 18.7516L11.3956 18.7564V14.1893L5.98346 6.93506ZM8.65744 23.1158L8.65682 23.1164C8.364 23.5094 7.93362 23.7657 7.44639 23.838C6.95854 23.9109 6.47314 23.7888 6.07639 23.4972C5.25965 22.8953 5.08786 21.7455 5.69308 20.9334C6.05499 20.4487 6.61314 20.1923 7.17801 20.1923C7.55949 20.1923 7.94462 20.3089 8.27352 20.5519C9.09087 21.1538 9.26327 22.3037 8.65744 23.1158Z"/>
                                        <path d="M19.0253 19.7464C18.5282 19.7464 18.1254 20.1473 18.1254 20.6411C18.1254 21.135 18.5282 21.5359 19.0253 21.5359C19.5223 21.5359 19.9257 21.135 19.9257 20.6411C19.9257 20.1473 19.5223 19.7464 19.0253 19.7464ZM19.0253 11.9273C19.5223 11.9273 19.9257 11.5264 19.9257 11.0326C19.9257 10.5388 19.5223 10.1385 19.0253 10.1385C18.5282 10.1385 18.1254 10.5388 18.1254 11.0326C18.1254 11.5264 18.5282 11.9273 19.0253 11.9273ZM19.0253 13.4349C17.2872 13.4349 16.2626 14.51 16.2626 15.8372C16.2626 17.1637 17.2872 18.2389 19.0253 18.2389C20.7413 18.2389 21.7885 17.1637 21.7885 15.8372C21.7885 14.51 20.7413 13.4349 19.0253 13.4349ZM24.0192 6.57178H14.0313C13.3557 6.57178 12.8086 7.11541 12.8086 7.78659V23.8871C12.8086 24.5583 13.3557 25.1019 14.0313 25.1019H24.0192C24.6948 25.1019 25.2419 24.5583 25.2419 23.8871V7.78659C25.2419 7.11541 24.6948 6.57178 24.0192 6.57178ZM23.7136 21.3178C23.6647 21.3148 23.6188 21.3008 23.5687 21.3008C22.3796 21.3008 21.4162 22.2581 21.4162 23.4395C21.4162 23.4893 21.4302 23.5348 21.4333 23.5834H16.6172C16.6209 23.5348 16.6343 23.4893 16.6343 23.4395C16.6343 22.2581 15.6709 21.3008 14.4824 21.3008C14.4323 21.3008 14.3858 21.3148 14.3369 21.3178V10.3559C14.3858 10.359 14.4323 10.3729 14.4824 10.3729C15.6709 10.3729 16.6343 9.41566 16.6343 8.23486C16.6343 8.18505 16.6209 8.13889 16.6172 8.09029H21.4333C21.4302 8.13889 21.4162 8.18505 21.4162 8.23486C21.4162 9.41566 22.3796 10.3729 23.5687 10.3729C23.6188 10.3729 23.6647 10.359 23.7136 10.3559V21.3178Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-debt_amount" class="d-none error"></div>
                            <div id="invalid-validation-debt_amount">
                                <p
                                    v-for="error of v$.fields.debt_amount.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="debt_amount"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 5">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.first_name.$error}">
                                <input id="first_name" type="text" name="first_name"
                                       class="form-control" @input="dynamicValidation"
                                       @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                                       maxlength="128" autocomplete="on"
                                       placeholder="Your First Name" v-model.lazy="fields.first_name"
                                       v-bind:class="{'not-valid': v$.fields.first_name.$error}">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32"
                                         fill="none">
                                        <g clip-path="url(#clip0_0_152)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M29 3.103C29 1.39 27.61 0 25.897 0H3.103C1.39 0 0 1.39 0 3.103V28.897C0 30.61 1.39 32 3.103 32H25.897C27.61 32 29 30.61 29 28.897V3.103Z"
                                                  :fill="v$.fields.first_name.$error ? '#FFD9D9' : '#EEE'"/>
                                            <path d="M26.2182 7.14404H3.78418V25.028H26.2182V7.14404Z" />
                                            <path
                                                d="M24.917 6H4.083C2.933 6 2 6.933 2 8.083V23.361C2 24.511 2.933 25.444 4.083 25.444H24.917C26.067 25.444 27 24.511 27 23.361V8.083C27 6.933 26.067 6 24.917 6ZM9.639 10.167C11.171 10.167 12.417 11.412 12.417 12.944C12.417 14.477 11.171 15.722 9.639 15.722C8.107 15.722 6.861 14.477 6.861 12.944C6.861 11.412 8.107 10.167 9.639 10.167ZM14.5 20.444C14.5 20.904 14.066 21.278 13.528 21.278H5.75C5.212 21.278 4.778 20.904 4.778 20.444V19.611C4.778 18.231 6.084 17.111 7.694 17.111H7.911C8.445 17.332 9.027 17.458 9.639 17.458C10.251 17.458 10.837 17.332 11.366 17.111H11.583C13.194 17.111 14.5 18.231 14.5 19.611V20.444ZM24.222 18.153C24.222 18.344 24.066 18.5 23.875 18.5H17.625C17.434 18.5 17.278 18.344 17.278 18.153V17.458C17.278 17.267 17.434 17.111 17.625 17.111H23.875C24.066 17.111 24.222 17.267 24.222 17.458V18.153ZM24.222 15.375C24.222 15.566 24.066 15.722 23.875 15.722H17.625C17.434 15.722 17.278 15.566 17.278 15.375V14.681C17.278 14.49 17.434 14.333 17.625 14.333H23.875C24.066 14.333 24.222 14.49 24.222 14.681V15.375ZM24.222 12.597C24.222 12.788 24.066 12.944 23.875 12.944H17.625C17.434 12.944 17.278 12.788 17.278 12.597V11.903C17.278 11.712 17.434 11.556 17.625 11.556H23.875C24.066 11.556 24.222 11.712 24.222 11.903V12.597Z"
                                                :fill="v$.fields.first_name.$error ? '#FFD9D9' : '#EEE'"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-first_name" class="d-none error"></div>
                            <div id="invalid-validation-first_name">
                                <p
                                    v-for="error of v$.fields.first_name.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="first_name"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.last_name.$error}">
                                <input id="last_name" type="text" name="last_name" class="form-control"
                                       @keypress="onlyAlphabetsKeypress" @paste="onlyAlphabetsPaste"
                                       maxlength="128" @input="dynamicValidation" autocomplete="on"
                                       placeholder="Your Last Name" v-model.lazy="fields.last_name"
                                       v-bind:class="{'not-valid': v$.fields.last_name.$error}">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32"
                                         fill="none">
                                        <g clip-path="url(#clip0_0_152)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M29 3.103C29 1.39 27.61 0 25.897 0H3.103C1.39 0 0 1.39 0 3.103V28.897C0 30.61 1.39 32 3.103 32H25.897C27.61 32 29 30.61 29 28.897V3.103Z"
                                                  :fill="v$.fields.last_name.$error ? '#FFD9D9' : '#EEE'"/>
                                            <path d="M26.2182 7.14404H3.78418V25.028H26.2182V7.14404Z" />
                                            <path
                                                d="M24.917 6H4.083C2.933 6 2 6.933 2 8.083V23.361C2 24.511 2.933 25.444 4.083 25.444H24.917C26.067 25.444 27 24.511 27 23.361V8.083C27 6.933 26.067 6 24.917 6ZM9.639 10.167C11.171 10.167 12.417 11.412 12.417 12.944C12.417 14.477 11.171 15.722 9.639 15.722C8.107 15.722 6.861 14.477 6.861 12.944C6.861 11.412 8.107 10.167 9.639 10.167ZM14.5 20.444C14.5 20.904 14.066 21.278 13.528 21.278H5.75C5.212 21.278 4.778 20.904 4.778 20.444V19.611C4.778 18.231 6.084 17.111 7.694 17.111H7.911C8.445 17.332 9.027 17.458 9.639 17.458C10.251 17.458 10.837 17.332 11.366 17.111H11.583C13.194 17.111 14.5 18.231 14.5 19.611V20.444ZM24.222 18.153C24.222 18.344 24.066 18.5 23.875 18.5H17.625C17.434 18.5 17.278 18.344 17.278 18.153V17.458C17.278 17.267 17.434 17.111 17.625 17.111H23.875C24.066 17.111 24.222 17.267 24.222 17.458V18.153ZM24.222 15.375C24.222 15.566 24.066 15.722 23.875 15.722H17.625C17.434 15.722 17.278 15.566 17.278 15.375V14.681C17.278 14.49 17.434 14.333 17.625 14.333H23.875C24.066 14.333 24.222 14.49 24.222 14.681V15.375ZM24.222 12.597C24.222 12.788 24.066 12.944 23.875 12.944H17.625C17.434 12.944 17.278 12.788 17.278 12.597V11.903C17.278 11.712 17.434 11.556 17.625 11.556H23.875C24.066 11.556 24.222 11.712 24.222 11.903V12.597Z"
                                                :fill="v$.fields.last_name.$error ? '#FFD9D9' : '#EEE'"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-last_name" class="d-none error"></div>
                            <div id="invalid-validation-last_name">
                                <p
                                    v-for="error of v$.fields.last_name.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="last_name" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 6">
                            <Datepicker
                                    v-model.lazy="fields.dob"
                                    :start-date="(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000) - 5 * 24 * 60 * 60 * 1000)"
                                    type="date"
                                    :min-date="(new Date(Date.now() - 100 * 365 * 24 * 60 * 60 * 1000) - 24 * 24 * 60 * 60 * 1000)"
                                    :max-date="(new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000) - 5 * 24 * 60 * 60 * 1000)"
                                    ref="dobDatepicker"
                                    v-bind:class="{'not-valid': v$.fields.dob.$error}"
                                    placeholder="MM/DD/YYYY"
                                    input-class-name="input-date"
                                    model-type="MM-dd-yyyy"
                                    reverse-years
                                    :year-range="[new Date().getFullYear() - 100,new Date().getFullYear() - 18]"
                                    format="MM-dd-yyyy"
                                    :enable-time-picker="false"
                                    :auto-apply="true"
                                    week-start="0"
                                    uid="dob"
                                >
                                <template #input-icon>
                                    <span class="dp-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32">
                                            <path d="M21.5827 6.45898H19.3163C18.6902 6.45898 18.1832 6.96608 18.1832 7.59215C18.1832 8.21823 17.6755 8.72532 17.05 8.72532C16.4239 8.72532 15.9168 8.21823 15.9168 7.59215C15.9168 6.96608 15.4092 6.45898 14.7837 6.45898H11.9507C11.3247 6.45898 10.8176 6.96608 10.8176 7.59215C10.8176 8.21823 10.3099 8.72532 9.68439 8.72532C9.05832 8.72532 8.55123 8.21823 8.55123 7.59215C8.55123 6.96608 8.04357 6.45898 7.41806 6.45898H5.15172C4.52565 6.45898 4.01855 6.96608 4.01855 7.59215V21.7568C4.01855 22.3828 4.52565 22.8899 5.15172 22.8899H13.7406C13.438 22.1318 13.2669 21.3075 13.2669 20.4417C13.2669 16.7878 16.229 13.8257 19.8829 13.8257C20.8977 13.8257 21.8558 14.0614 22.7158 14.4699V7.59215C22.7158 6.96608 22.2082 6.45898 21.5827 6.45898ZM7.41806 20.1584C6.79198 20.1584 6.28489 19.6508 6.28489 19.0253C6.28489 18.3992 6.79198 17.8921 7.41806 17.8921C8.04357 17.8921 8.55123 18.3992 8.55123 19.0253C8.55123 19.6508 8.04357 20.1584 7.41806 20.1584ZM7.41806 16.7589C6.79198 16.7589 6.28489 16.2513 6.28489 15.6257C6.28489 14.9997 6.79198 14.4926 7.41806 14.4926C8.04357 14.4926 8.55123 14.9997 8.55123 15.6257C8.55123 16.2513 8.04357 16.7589 7.41806 16.7589ZM10.8176 20.1584C10.1915 20.1584 9.68439 19.6508 9.68439 19.0253C9.68439 18.3992 10.1915 17.8921 10.8176 17.8921C11.4431 17.8921 11.9507 18.3992 11.9507 19.0253C11.9507 19.6508 11.4431 20.1584 10.8176 20.1584ZM10.8176 16.7589C10.1915 16.7589 9.68439 16.2513 9.68439 15.6257C9.68439 14.9997 10.1915 14.4926 10.8176 14.4926C11.4431 14.4926 11.9507 14.9997 11.9507 15.6257C11.9507 16.2513 11.4431 16.7589 10.8176 16.7589ZM10.8176 13.3594C10.1915 13.3594 9.68439 12.8518 9.68439 12.2262C9.68439 11.6002 10.1915 11.0931 10.8176 11.0931C11.4431 11.0931 11.9507 11.6002 11.9507 12.2262C11.9507 12.8518 11.4431 13.3594 10.8176 13.3594ZM14.2171 13.3594C13.591 13.3594 13.0839 12.8518 13.0839 12.2262C13.0839 11.6002 13.591 11.0931 14.2171 11.0931C14.8426 11.0931 15.3502 11.6002 15.3502 12.2262C15.3502 12.8518 14.8426 13.3594 14.2171 13.3594Z"/>
                                            <path d="M19.8825 15.3423C17.066 15.3423 14.7832 17.6251 14.7832 20.4415C14.7832 23.2575 17.066 25.5408 19.8825 25.5408C22.6984 25.5408 24.9817 23.2575 24.9817 20.4415C24.9817 17.6251 22.6984 15.3423 19.8825 15.3423ZM20.5907 20.7248C20.5907 21.1158 20.2734 21.4331 19.8825 21.4331H17.0495C16.658 21.4331 16.3413 21.1158 16.3413 20.7248C16.3413 20.3333 16.658 20.0166 17.0495 20.0166H19.1742V17.3253C19.1742 16.9338 19.4909 16.6171 19.8825 16.6171C20.2734 16.6171 20.5907 16.9338 20.5907 17.3253V20.7248Z"/>
                                        </svg>
                                    </span>
                                </template>
                            </Datepicker>

                            <div id="invalid-dob" class="d-none error"></div>
                            <div id="invalid-validation-dob">
                                <p
                                    v-for="error of v$.fields.dob.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="dob" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 7">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.credit_score.$error}">
                                <select class="form-select" name="credit_score"
                                        id="credit_score" v-model.lazy="fields.credit_score"
                                        v-bind:class="{'not-valid': v$.fields.credit_score.$error}"
                                        >
                                    <option value="">Choose credit score</option>
                                    <option v-for="(t,k) in this.credit_scores" :value="k" :key="t">
                                        {{ t }}
                                    </option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                    <path d="M17.8661 22.0417C17.7742 21.9429 17.6281 21.9279 17.5131 21.9984C16.471 22.6355 15.2342 22.9844 13.9096 22.9226C10.7844 22.7771 8.16181 20.2769 7.88279 17.1604C7.59743 13.9728 9.6701 11.2254 12.5521 10.4479C12.678 10.4138 12.767 10.3029 12.767 10.1729V6.62312C12.767 6.44405 12.6041 6.30367 12.4279 6.33429C6.52412 7.35445 2.32389 13.3489 4.3128 19.8494C5.19259 22.7233 8.20513 25.6764 11.09 26.5186C14.526 27.5215 17.8095 26.7976 20.2807 25.0167C20.4211 24.9162 20.4373 24.7128 20.3177 24.5881C19.7649 24.0127 18.338 22.5471 17.8661 22.0417ZM23.2245 10.3554C23.1217 10.2081 22.908 10.1925 22.7809 10.3191L20.8665 12.2334L19.8481 13.2247C19.7556 13.3148 19.7371 13.4535 19.799 13.5667C20.2848 14.4621 20.5655 15.4846 20.5655 16.5752C20.5655 18.1875 19.9619 19.6559 18.9723 20.776C18.8712 20.891 18.8724 21.0614 18.9804 21.17L21.8433 24.0323C21.9589 24.1485 22.1506 24.1473 22.2621 24.0271C24.0749 22.07 25.1869 19.4537 25.1869 16.5752C25.1869 14.2588 24.4526 12.1237 23.2245 10.3554Z" />
                                    <path d="M22.3037 8.34064C20.2854 6.35577 17.5455 5.10338 14.5098 5.02597C14.3469 5.02192 14.2112 5.15652 14.2112 5.31942V11.0996C14.2112 11.2544 14.3342 11.3757 14.489 11.3838C15.7692 11.4514 16.9239 11.9852 17.7939 12.8153C17.9071 12.9233 18.0827 12.9279 18.1948 12.8181L19.8591 11.1989L22.3032 8.75482C22.417 8.64102 22.4187 8.45386 22.3037 8.34064Z" />
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-credit_score" class="d-none error"></div>
                            <div id="invalid-validation-credit_score">
                                <p
                                    v-for="error of v$.fields.credit_score.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="credit_score"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 8">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.address.$error}">
                                <input id="address" type="text" name="address" class="form-control"
                                       placeholder="Your Address" v-model.lazy="fields.address"
                                       @input="dynamicValidation" autocomplete="on"
                                       v-bind:class="{'not-valid': v$.fields.address.$error}"
                                       @change="locationChange()" maxlength="128">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <g clip-path="url(#clip0_0_303)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 3.103C29 1.39 27.61 0 25.897 0H3.103C1.39 0 0 1.39 0 3.103V28.897C0 30.61 1.39 32 3.103 32H25.897C27.61 32 29 30.61 29 28.897V3.103Z"
                                                  :fill="v$.fields.address.$error ? '#FFD9D9' : '#EEE'"/>
                                            <path d="M14.957 6.94976C14.602 6.68276 14.113 6.68276 13.757 6.94976L3.5 14.6428H6.214V25.4998H11.643V20.0708H17.071V25.4998H22.5V14.5608L25.214 14.6428L14.957 6.94976Z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-address" class="d-none error"></div>
                            <div id="invalid-validation-address">
                                <p
                                    v-for="error of v$.fields.address.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="address" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.zip.$error}">
                                <input id="zip" type="text" name="zip" class="form-control"
                                       placeholder="Your Zip Code" v-model.lazy="fields.zip" @input="dynamicValidation"
                                       v-bind:class="{'not-valid': v$.fields.zip.$error}"
                                       @change="locationChange()" @keypress="onlyDigitsKeypress"
                                       @paste="onlyDigitsPaste" maxlength="5">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <g clip-path="url(#clip0_0_300)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 3.103C29 1.39 27.61 0 25.897 0H3.103C1.39 0 0 1.39 0 3.103V28.897C0 30.61 1.39 32 3.103 32H25.897C27.61 32 29 30.61 29 28.897V3.103Z"
                                                  :fill="v$.fields.zip.$error ? '#FFD9D9' : '#EEE'"/>
                                            <path d="M14.125 6.5C10.183 6.5 7 9.683 7 13.625C7 18.375 14.125 25.5 14.125 25.5C14.125 25.5 21.25 18.375 21.25 13.625C21.25 9.683 18.068 6.5 14.125 6.5ZM14.125 8.875C16.761 8.875 18.875 11.012 18.875 13.625C18.875 16.261 16.761 18.375 14.125 18.375C11.512 18.375 9.375 16.261 9.375 13.625C9.375 11.012 11.512 8.875 14.125 8.875Z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-zip" class="d-none error"></div>
                            <div id="invalid-validation-zip">
                                <p
                                    v-for="error of v$.fields.zip.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="zip" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.state.$error}">
                                <select class="form-select" id="state"
                                        name="state" v-model.lazy="fields.state"
                                        v-bind:class="{'not-valid': v$.fields.state.$error}"
                                        :disabled="this.addressValid">
                                    <option value="null">Choose license state</option>
                                    <option value="AK">AK</option>
                                    <option value="AL">AL</option>
                                    <option value="AR">AR</option>
                                    <option value="AZ">AZ</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DC">DC</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="IA">IA</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="MA">MA</option>
                                    <option value="MD">MD</option>
                                    <option value="ME">ME</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MO">MO</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="NC">NC</option>
                                    <option value="ND">ND</option>
                                    <option value="NE">NE</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NV">NV</option>
                                    <option value="NY">NY</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VA">VA</option>
                                    <option value="VT">VT</option>
                                    <option value="WA">WA</option>
                                    <option value="WI">WI</option>
                                    <option value="WV">WV</option>
                                    <option value="WY">WY</option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                    <path d="M10.2836 19.883C10.2836 19.883 10.6511 20.2035 10.6511 20.3388C10.6511 20.4756 11.1735 21.0378 11.1735 21.0378C11.1735 21.0378 11.3767 20.7121 11.5577 20.7121C11.7395 20.7121 12.4205 20.7857 12.4205 20.8916C12.4205 20.9975 12.7263 21.6751 12.8146 21.7815C12.9072 21.8869 13.0753 22.234 13.0753 22.3722C13.0753 22.5061 13.2563 22.764 13.5711 22.764C13.8897 22.764 14.1642 22.764 14.0897 22.5978C14.0897 22.5978 13.9833 22.263 13.9833 22.2032C13.9833 22.1438 14.1951 21.8252 14.2397 21.8119C14.2834 21.7967 14.3594 21.6129 14.4078 21.5687C14.452 21.5241 14.4824 21.4619 14.6153 21.3717C14.7526 21.281 14.9345 21.2055 14.9345 21.2055C14.9345 21.2055 15.1201 21.0378 15.1325 20.9177C15.1463 20.7966 15.1462 20.7145 15.1909 20.7145C15.2393 20.7145 15.4345 20.7833 15.4958 20.7833C15.5537 20.7833 15.377 20.7833 15.6325 20.7833H16.0841C16.0841 20.7833 16.342 20.8365 16.3852 20.865C16.435 20.8959 16.7043 21.0359 16.7043 21.0359L16.9479 20.9001C16.9479 20.9001 17.1607 21.0245 17.3278 21.0245C17.4921 21.0245 17.6422 20.949 17.6422 20.949L17.5714 20.8432C17.5714 20.8432 17.5847 20.675 17.5847 20.6152C17.5847 20.5554 17.4783 20.524 17.4033 20.524C17.3278 20.524 17.2043 20.4642 17.2043 20.4181C17.2043 20.374 17.2523 20.3274 17.3102 20.3274C17.3724 20.3274 17.6422 20.374 17.6422 20.374L17.7922 20.3583C17.7922 20.3583 17.9167 20.3122 18.0225 20.2524L18.1289 20.1926C18.1289 20.1926 18.2039 20.3431 18.2486 20.3431C18.2975 20.3431 18.5805 20.374 18.6427 20.3431C18.704 20.3122 18.7657 20.2367 18.8099 20.2367C18.855 20.2367 18.8854 20.1456 19.0051 20.3431C19.129 20.5402 19.5189 20.5088 19.5189 20.5088C19.5189 20.5088 19.5051 20.4333 19.6732 20.374C19.8366 20.3122 19.9876 20.2059 19.9876 20.2059L20.2611 20.5402C20.2611 20.5402 20.3684 20.7368 20.4126 20.7809C20.4558 20.8275 20.5042 20.9334 20.5042 20.9334L20.6244 21.4306C20.6244 21.4306 20.6244 21.5996 20.6419 21.6438C20.6552 21.6903 20.6111 21.7502 20.6552 21.7967C20.6999 21.8404 20.8675 21.9781 20.8675 21.9781C20.8675 21.9781 20.9563 22.1281 21.019 22.188C21.0798 22.2502 21.1994 22.3846 21.1994 22.3846C21.1994 22.3846 21.0798 22.1752 21.3509 22.5375C21.6244 22.9003 21.7446 22.8846 21.7446 22.8846C21.7446 22.8846 21.8989 22.5513 21.8989 22.4758C21.8989 22.4003 21.9431 22.3699 21.9564 22.188C21.9697 22.0066 22.0181 21.8119 21.9697 21.6129C21.9255 21.4187 21.9127 21.2496 21.8187 21.1903C21.7313 21.1304 21.85 21.2216 21.6244 20.903C21.3941 20.5862 21.3234 20.449 21.3234 20.449C21.3234 20.449 21.1994 20.4181 21.1994 20.2059C21.1994 19.9955 21.1686 19.8891 21.1686 19.8426C21.1686 19.7984 21.1377 19.6014 21.1377 19.6014L21.1994 19.2077L21.292 19.0111L21.3808 18.7077L21.5489 18.6948L21.85 18.4047L21.8989 18.2855L22.0756 18.1354L22.1819 18.0884L22.4559 17.7546L22.8059 17.4825L22.9256 17.378L22.8368 17.1947L22.8496 17.0727L23.0756 16.9691L23.1379 16.7251C23.1379 16.7251 23.0628 16.7104 23.0001 16.7104C22.9384 16.7104 22.7884 16.7412 22.7884 16.7412L22.6245 16.6215L22.7447 16.5019H23.258C23.258 16.5019 23.2884 16.7806 23.2751 16.8272C23.258 16.8718 23.0139 17.0261 22.9873 17.0864C22.9569 17.1477 22.9569 17.2327 22.9569 17.2327L23.2708 17.161L23.3454 16.8029V16.6063C23.3454 16.6063 23.3634 16.3338 23.3012 16.3186C23.2438 16.3029 23.1469 16.3475 23.041 16.3029C22.9346 16.2564 23.0718 16.1528 22.7708 15.9396C22.465 15.7278 22.2437 15.5464 22.2437 15.5464C22.2437 15.5464 22.2874 15.3959 22.3197 15.2435C22.35 15.0925 22.4165 14.79 22.4165 14.79L22.4517 14.9709V15.2126L22.8102 15.6661L22.8809 15.8029L22.89 15.9244L23.0495 15.4709V15.1832C23.0495 15.0469 22.8368 14.9552 22.8368 14.9552L22.9698 14.8498L23.2039 14.7145C23.2039 14.7145 23.3758 14.3208 23.2969 14.2144C23.2262 14.1081 23.1203 13.7766 23.1203 13.7766C23.1203 13.7766 23.4204 13.7453 23.5268 13.6546C23.6336 13.5643 23.6825 13.4266 23.8008 13.3976C23.9266 13.3673 24.1959 13.2765 24.1959 13.2765C24.1959 13.2765 24.2885 13.2452 24.4081 13.2452C24.5278 13.2452 24.6508 12.9579 24.6508 12.9579C24.6508 12.9579 24.4832 13.0201 24.4081 13.0201C24.3326 13.0201 24.2576 12.9446 24.2576 12.9446L24.183 12.6701L24.1384 12.3225L24.2885 12.1259L24.6071 11.719C24.6508 11.6131 24.9699 11.4003 24.9699 11.4003C24.9699 11.4003 25.0582 11.3248 25.0896 11.2788C25.12 11.2322 25.1646 11.0219 25.1646 11.0219C25.1646 11.0219 24.9832 10.9003 24.9077 10.9003C24.8331 10.9003 24.6337 10.7631 24.6337 10.7631L24.5891 10.3404L24.514 10.0526L24.3773 9.96196L24.032 10.1125L23.8326 10.159L23.7751 10.9155L23.8193 11.1126C23.8193 11.1126 23.6958 11.4754 23.6379 11.5067C23.5757 11.5352 23.5011 11.5813 23.4261 11.6131C23.3501 11.6416 22.7884 11.8073 22.7884 11.8073L22.3819 11.8382L22.2437 12.1259L22.1553 12.3073L22.0181 12.6701C22.0181 12.6701 22.0314 12.7015 21.9882 12.7323C21.9431 12.7632 21.8809 12.8829 21.8058 12.9133C21.7313 12.9446 21.4744 12.9579 21.4122 12.9579C21.3509 12.9579 21.2441 12.9446 21.1956 13.0044C21.151 13.0643 21.0579 13.2006 21.0579 13.2006V13.5173L20.8552 13.7011L20.5978 13.9271L20.3988 14.1081L20.2787 14.1237L19.9914 14.1703L19.6556 14.1836L19.6419 14.1237L19.7297 13.8516L19.6865 13.5173L19.6556 13.23L19.5673 13.079L19.4913 12.8981L19.3237 13.0947L19.2036 13.1393C19.2036 13.1393 19.1865 13.1854 19.2036 13.079C19.2173 12.9731 19.262 12.6412 19.262 12.6412L19.129 12.3691L18.9913 12.1411L18.7168 12.1877C18.7168 12.1877 18.5976 12.2323 18.5805 12.3073C18.5672 12.3828 18.5226 12.5951 18.5226 12.5951L18.4476 12.6858L18.3103 12.9888C18.3103 12.9888 18.2662 13.1854 18.2662 13.2452C18.2662 13.3074 18.2486 13.5173 18.279 13.5795C18.3103 13.6394 18.3545 13.7144 18.3725 13.7766C18.3849 13.836 18.4167 13.9708 18.3725 14.0772C18.3231 14.1836 18.1603 14.4267 18.1603 14.4267L17.9608 14.3802C17.9608 14.3802 17.8544 14.4267 17.8544 14.3208C17.8544 14.2144 17.7794 14.0022 17.7794 14.0022L17.6911 13.7452C17.6911 13.7452 17.6726 13.5795 17.6911 13.533C17.7044 13.4883 17.7352 13.2006 17.7352 13.2006C17.7352 13.2006 17.7922 13.0481 17.8274 12.9888C17.8544 12.9294 17.9038 12.7765 17.9038 12.7765L17.9342 12.5638L17.6607 12.8074L17.6726 12.5358L18.0406 12.277L18.0667 12.1259C18.0667 12.1259 18.3545 11.9754 18.4167 11.9602C18.4737 11.9441 18.7349 11.869 18.7349 11.869C18.7349 11.869 18.9428 11.6259 18.8726 11.6259C18.7928 11.6259 18.4604 11.5813 18.4604 11.5813L18.1726 11.5665C18.1726 11.5665 17.9167 11.7033 17.8411 11.7033C17.7656 11.7033 17.6911 11.719 17.6422 11.7033C17.598 11.6881 17.4783 11.5969 17.4783 11.5969L17.5543 11.369C17.4294 11.3248 17.191 11.4597 17.191 11.4597L16.9963 11.7104L16.8548 11.8253H16.5091L16.3852 11.7475L16.1459 11.7631L16.4208 11.5509L16.6288 11.3381L16.7836 11.1567C16.7836 11.1567 16.7836 11.0679 16.6905 11.0679C16.5979 11.0679 16.3591 10.9905 16.1905 10.9905C16.0229 10.9905 15.284 10.8248 15.284 10.8248C15.284 10.8248 15.5803 10.7032 15.284 10.7032L15.0935 10.5213C15.0935 10.5213 14.9345 10.4625 14.8547 10.4777C14.7787 10.4933 14.6457 10.6277 14.6025 10.6434C14.5536 10.6591 14.1239 10.7545 14.0797 10.7545C14.0355 10.7545 13.7083 10.7298 13.6195 10.7298H12.9956L11.8635 10.5043C11.8635 10.5043 10.6996 10.2787 10.5623 10.2787C10.4251 10.2787 9.54942 10.1965 9.41171 10.1965C9.27874 10.1965 7.85413 9.79148 7.85413 9.79148C7.85413 9.79148 7.39826 9.6965 7.1423 9.65044C6.8854 9.6039 6.31033 9.3451 6.31033 9.3451L5.76565 9.11621C5.76565 9.11621 5.79699 9.49325 5.67732 9.61482C5.55291 9.73639 5.72101 9.69033 5.55291 9.73639C5.38575 9.78056 5.57095 9.50893 5.57095 9.50893L5.37198 9.28051C5.37198 9.28051 5.27938 9.25011 5.14594 9.16179C5.0087 9.06871 4.93415 9.43342 4.97879 9.55498C5.02248 9.67465 4.90281 10.2341 4.87147 10.3713C4.84535 10.5066 4.63213 10.7939 4.60174 10.962C4.57135 11.1282 4.37143 11.5969 4.37143 11.5969C4.37143 11.5969 4.11547 12.475 4.11547 12.6255C4.11547 12.7765 3.99628 13.0201 3.95117 13.1393C3.90368 13.2609 3.88516 13.3074 3.85382 13.4133C3.82818 13.5173 3.83673 13.8208 3.83673 13.8825V14.2144C3.83673 14.4115 3.89371 14.5174 3.89371 14.5174L4.16343 14.6527C4.16343 14.6527 4.21709 14.7145 4.18623 14.8498C4.15489 14.9866 4.10645 14.94 4.03142 14.9272C3.95116 14.9087 4.1772 15.4999 4.2076 15.6661C4.23941 15.8337 4.28405 16.0465 4.31397 16.1372C4.34531 16.2274 4.45169 16.3936 4.55331 16.5907C4.65873 16.7877 4.78409 17.1192 4.95172 17.2256C5.11507 17.3315 4.96502 17.2854 5.20862 17.5599C5.44701 17.8315 5.50874 17.9222 5.50874 17.9222C5.50874 17.9222 5.44701 17.9825 5.61512 18.1036C5.77942 18.2252 6.05342 18.2698 6.14602 18.2698C6.2353 18.2698 6.37159 18.3297 6.44757 18.4047C6.52307 18.4821 6.62897 18.6483 6.8854 18.7077C7.1423 18.7675 7.17316 18.8914 7.46094 19.042C7.74823 19.193 7.89877 19.2542 8.17324 19.2989C8.44297 19.3426 8.17324 19.2989 8.68705 19.3606C8.68705 19.3606 9.26118 19.5705 9.22983 19.4641C9.19849 19.3606 9.42928 19.3297 9.42928 19.3297C9.42928 19.3297 9.54942 19.268 9.58076 19.3297C9.60641 19.3896 9.80586 19.6014 9.84954 19.6175C9.89893 19.6303 10.2836 19.883 10.2836 19.883Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-state" class="d-none error"></div>
                            <div id="invalid-validation-state">
                                <p
                                    v-for="error of v$.fields.state.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="state" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>

                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.city.$error}">
                                <input id="city" type="text" name="city" class="form-control"
                                   maxlength="128" @input="dynamicValidation"
                                   placeholder="Your City" v-model.lazy="fields.city"
                                   v-bind:class="{'not-valid': v$.fields.city.$error}"
                                   :disabled="this.addressValid" @keypress="onlyLatinKeypress"
                                   @paste="onlyLatinPaste">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <path d="M9.0911 16.4946H10.5346V23.9734H12.2159V16.4946H13.6594V23.9734H15.3407V16.4946H16.7841V23.9734H18.4655V16.4946H19.9089V23.9734H21.3389V14.7616H22.0482V14.2085H6.95184V14.7616H7.66104V23.9734H9.0911V16.4946Z"/>
                                        <path d="M15.9562 6.14581V5.63793H14.8092V5.25977H14.3845V8.12122H14.8092V6.99717H15.9562V7.50513H17.3155L16.8134 6.82553L17.3155 6.14581H15.9562Z"/>
                                        <path d="M24.1758 24.3979H4.82419V24.9504H24.1758V24.3979Z"/>
                                        <path d="M25.167 25.4321H3.83298V26.7408H25.167V25.4321Z"/>
                                        <path d="M14.5 8.5874C11.5883 8.5874 9.21439 10.8909 9.10184 13.7836H19.8981C19.786 10.8909 17.4207 8.5874 14.5 8.5874Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-city" class="d-none error"></div>
                            <div id="invalid-validation-city">
                                <p
                                    v-for="error of v$.fields.city.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="city" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 9">
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.address_month.$error}">
                                <select class="form-select" name="address_month"
                                        id="address_month" v-model.lazy="fields.address_month"
                                        v-bind:class="{'not-valid': v$.fields.address_month.$error}">
                                    <option value="">Choose time at address</option>
                                    <option value="12">1 year or less</option>
                                    <option value="24">2 years</option>
                                    <option value="36">3 years</option>
                                    <option value="48">4 years</option>
                                    <option value="60">5 years</option>
                                    <option value="72">6 years</option>
                                    <option value="84">7 years or more</option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <g clip-path="url(#clip0_0_349)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 3.103C29 1.39 27.61 0 25.897 0H3.103C1.39 0 0 1.39 0 3.103V28.897C0 30.61 1.39 32 3.103 32H25.897C27.61 32 29 30.61 29 28.897V3.103Z"
                                                  :fill="v$.fields.address_month.$error ? '#FFD9D9' : '#EEE'"/>
                                            <path d="M14.5 6.5C9.275 6.5 5 10.775 5 16C5 21.225 9.275 25.5 14.5 25.5C19.725 25.5 24 21.225 24 16C24 10.775 19.725 6.5 14.5 6.5ZM14.5 8.875C18.443 8.875 21.625 12.058 21.625 16C21.625 19.943 18.443 23.125 14.5 23.125C10.558 23.125 7.375 19.943 7.375 16C7.375 12.058 10.558 8.875 14.5 8.875ZM13.312 11.25L13.313 16.523L13.693 16.831L14.88 18.019L15.688 18.921L17.398 17.211L16.495 16.404L15.687 15.596V11.297H13.312V11.25Z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-address_month" class="d-none error"></div>
                            <div id="invalid-validation-address_month">
                                <p
                                    v-for="error of v$.fields.address_month.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="address_month"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 10">
                            <div class="row mt-m-1d5rem">
                                <div class="col-12">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.rent_or_own.$error, 'active': fields.rent_or_own}">
                                        <input type="radio" class="rad-input" name="rent_or_own"
                                               v-model.lazy="fields.rent_or_own" :value="true">
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text">I Rent</div>
                                    </label>
                                </div>
                                <div class="col-12">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.rent_or_own.$error, 'active': !fields.rent_or_own}">
                                        <input type="radio" class="rad-input" name="rent_or_own"
                                               v-model.lazy="fields.rent_or_own" :value="false">
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text">I Own</div>
                                    </label>
                                </div>
                            </div>
                            <div id="invalid-rent_or_own" class="d-none error"></div>
                            <div id="invalid-validation-rent_or_own">
                                <p
                                    v-for="error of v$.fields.rent_or_own.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="rent_or_own"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <div class="d-flex justify-content-center form-div-1 mt-4">
                                <div class="d-flex flex-column bd-highlight form-head form-title mb-1">
                                    {{ titles[10.2] }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.own_car.$error, 'active': fields.own_car}">
                                        <input type="radio" class="rad-input" name="own_car"
                                               v-model.lazy="fields.own_car" :value="true">
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text">Own</div>
                                    </label>
                                </div>
                                <div class="col-12">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.own_car.$error, 'active': !fields.own_car}">
                                        <input type="radio" class="rad-input" name="own_car"
                                               v-model.lazy="fields.own_car" :value="false">
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text">Not own</div>
                                    </label>
                                </div>
                            </div>
                            <div id="invalid-own_car" class="d-none error"></div>
                            <div id="invalid-validation-own_car">
                                <p
                                    v-for="error of v$.fields.own_car.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="own_car"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 11">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.home_phone.$error}">
                              <input type="text" name="home_phone" id="home_phone"
                                     class="form-control" placeholder="Enter Your Phone"
                                     v-bind:class="{'not-valid': v$.fields.home_phone.$error}"
                                     @input="dynamicValidation" @keypress="onlyDigitsKeypress"
                                     @paste="onlyDigitsPaste" v-model.trim="fields.home_phone"
                                     maxlength="12" @keyup="phoneMask('home_phone',$event)">
                                <span class="input-group-text" style="padding:15px">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
                                        <path d="M12.8218 15.6567H2.17812V4.34783H12.8218V15.6567ZM7.49996 19.6481C6.94848 19.6481 6.50211 19.2017 6.50211 18.6503C6.50211 18.0995 6.94848 17.6524 7.49996 17.6524C8.05143 17.6524 8.4978 18.0995 8.4978 18.6503C8.4978 19.2017 8.05143 19.6481 7.49996 19.6481ZM11.9796 0.356445H3.0203C1.82222 0.356445 0.847656 1.33101 0.847656 2.52909V19.4718C0.847656 20.6699 1.82222 21.6438 3.0203 21.6438H11.9796C13.1777 21.6438 14.1523 20.6699 14.1523 19.4718V2.52909C14.1523 1.33101 13.1777 0.356445 11.9796 0.356445Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-home_phone" class="d-none error"></div>
                            <div id="invalid-validation-home_phone">
                                <p
                                    v-for="error of v$.fields.home_phone.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="home_phone"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <span class="contact-time">
                                Best time to call:
                                <select name="contact_time"
                                        id="contact_time" v-model.lazy="fields.contact_time">
                                    <option v-for="t in this.contact_time" :value="t"
                                            :key="'contact_time'+t">
                                        {{ t }}
                                    </option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M2.41421 0C1.52331 0 1.07714 1.07714 1.70711 1.70711L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L10.2929 1.70711C10.9229 1.07714 10.4767 0 9.58579 0H2.41421Z"/>
                                </svg>
                            </span>
                            <div id="invalid-contact_time" class="d-none error"></div>
                            <div id="invalid-validation-contact_time">
                                <p
                                    v-for="error of v$.fields.contact_time.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="contact_time"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <p>
                                <small>
                                    By checking the box above, you affirmatively agree to receive
                                    marketing text messages, including those sent from an
                                    auto-dialer, from ({{ app_name }}), its lenders, Integrated Delivery
                                    Solutions (#21347), and third-party marketing partners related
                                    to your request and additional promotions at the phone number
                                    you provide, even if your phone number is on a Do Not Call list.
                                    Consent is not required to submit a loan request or receive
                                    services. Message and data rates may apply. Message frequency:
                                    Up to 5 msgs per week. You may opt-out anytime by replying
                                    “Stop” or “Help” for more information. See  <span data-bs-toggle="modal" data-bs-target="#terms" type="button">
                                    Terms
                                    </span> for more information.
                                </small>
                            </p>
                        </div>
                        <div class="form-wrapper" v-show="step === 12">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.income_type.$error}">
                                <select class="form-select" name="income_type"
                                        id="income_type" v-model.lazy="fields.income_type"
                                        v-bind:class="{'not-valid': v$.fields.income_type.$error}">
                                    <option v-for="t in this.income_type_lead" :value="t"
                                            v-show="fields.lead_type === 'payday'"
                                            :key="'income_type'+t">
                                        {{ t }}
                                    </option>
                                    s
                                    <option v-for="t in this.income_type_personal" :value="t"
                                            v-show="fields.lead_type === 'personal'"
                                            :key="'income_type'+t">
                                        {{ t }}
                                    </option>
                                    <option v-for="t in this.income_type" :value="t"
                                            :key="'income_type'+t">
                                        {{ t }}
                                    </option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                    <path d="M7.50727 24.5215C7.0849 24.9434 6.40051 24.9434 5.97814 24.5215C5.55615 24.0995 5.55615 23.4147 5.97814 22.9923C6.40051 22.57 7.0849 22.57 7.50727 22.9923C7.92926 23.4147 7.92926 24.0995 7.50727 24.5215ZM24.8644 9.52682C24.8263 9.38971 24.709 9.36229 24.6088 9.46245L21.8769 12.1939C21.6157 12.4548 21.1914 12.4548 20.9297 12.1939L18.306 9.56947C18.0444 9.30821 18.0444 8.88394 18.306 8.62229L21.0375 5.89118C21.1373 5.79101 21.1099 5.67371 20.9732 5.63524C19.0868 5.10966 16.9784 5.58687 15.4946 7.07068C13.9742 8.59106 13.5103 10.7669 14.0999 12.6887L4.86452 21.1166C3.61684 22.3654 3.61684 24.3874 4.86414 25.6355C6.11182 26.8828 8.13454 26.8831 9.3826 25.6355L17.8113 16.4001C19.7327 16.9893 21.9085 16.525 23.4289 15.005C24.9131 13.5212 25.3903 11.4132 24.8644 9.52682Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-income_type" class="d-none error"></div>
                            <div id="invalid-validation-income_type">
                                <p
                                    v-for="error of v$.fields.income_type.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="income_type"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 13">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.net_month_income.$error}">
                                <select class="form-select" name="net_month_income"
                                        id="net_month_income" v-model.lazy="fields.net_month_income"
                                        v-bind:class="{'not-valid': v$.fields.net_month_income.$error}">
                                    <option value="">Choose Monthly Net Income</option>
                                    <option value="1000">$1000 or less</option>
                                    <option value="1500">$1001 - $1500</option>
                                    <option value="2000">$1501 - $2000</option>
                                    <option value="2500">$2001 - $2500</option>
                                    <option value="3000">$2501 - $3000</option>
                                    <option value="3500">$3001 - $3500</option>
                                    <option value="4000">$3501 - $4000</option>
                                    <option value="4500">$4001 - $4500</option>
                                    <option value="5000">$4501 - $5000</option>
                                    <option value="6000">More than $5,000</option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                    <path d="M23.8761 24.2779L23.8196 24.2692C23.826 23.973 23.8295 23.654 23.8295 23.2837C23.8295 14.4664 19.1645 11.6213 16.0542 10.4551H12.7257C9.83462 11.6213 5.16966 13.8832 5.16966 23.2837C5.16966 23.6534 5.17316 23.9747 5.18249 24.2686L5.12243 24.2779C4.47866 24.3771 4.00342 24.931 4.00342 25.5824C4.00342 26.2629 4.52065 26.832 5.19765 26.8961L7.75754 27.0343C9.45616 27.5965 11.8458 27.9487 14.4996 27.9487C17.1533 27.9487 19.5424 27.5965 21.2416 27.0343L23.8009 26.8961C24.4779 26.832 24.9957 26.2629 24.9957 25.5824C24.9957 24.931 24.5199 24.3771 23.8761 24.2779ZM14.078 17.61L15.5929 18.3896C16.4175 18.8135 16.8554 19.6853 16.7073 20.6095C16.5848 21.3711 16.0845 21.9664 15.3941 22.2172V22.5536C15.3941 22.9566 15.0675 23.2825 14.6652 23.2825C14.2622 23.2825 13.9363 22.9566 13.9363 22.5536V22.2621C13.2021 22.0638 12.5764 21.546 12.2598 20.8171C12.0989 20.448 12.268 20.0188 12.6377 19.8579C13.008 19.6981 13.436 19.8672 13.5969 20.2358C13.7852 20.6708 14.2273 20.9384 14.7002 20.8918L14.7713 20.8836C15.1568 20.8224 15.2465 20.5104 15.2675 20.3792C15.3043 20.1477 15.2337 19.8445 14.9253 19.6853L13.4103 18.9062C12.5776 18.4776 12.1339 17.5674 12.307 16.6414C12.468 15.7795 13.0995 15.1527 13.9363 14.9883V14.6815C13.9363 14.2792 14.2622 13.9526 14.6652 13.9526C15.0675 13.9526 15.3941 14.2792 15.3941 14.6815V15.1509C15.9865 15.4011 16.4728 15.8635 16.7387 16.4758C16.8997 16.8449 16.7306 17.2747 16.3609 17.435C15.9924 17.596 15.5632 17.4263 15.4017 17.0572C15.2133 16.6227 14.7701 16.3551 14.2984 16.4012C13.8587 16.4478 13.7602 16.8018 13.7403 16.909C13.7194 17.0222 13.6809 17.4059 14.078 17.61Z"/>
                                    <path d="M16.9757 4.17902C16.4707 3.85597 15.6048 4.17085 14.8782 4.86477C14.5243 5.20239 13.9826 5.20239 13.6286 4.86477C12.9021 4.17144 12.0437 3.86821 11.5311 4.17902C9.83426 5.20706 12.1189 8.7845 12.33 8.99092H16.1769C16.3874 8.7845 18.5816 5.20706 16.9757 4.17902Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-net_month_income" class="d-none error"></div>
                            <div id="invalid-validation-net_month_income">
                                <p
                                    v-for="error of v$.fields.net_month_income.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="net_month_income"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 14">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.pay_frequency.$error}">
                                <select class="form-select" name="pay_frequency"
                                        id="pay_frequency" v-model.lazy="fields.pay_frequency"
                                        v-bind:class="{'not-valid': v$.fields.pay_frequency.$error}"
                                        @change="nextPayDayChange()">
                                    <option value="">Choose pay frequency</option>
                                    <option v-for="t in this.pay_frequency" :value="t"
                                            :key="'pay_frequency'+t">
                                        {{ t }}
                                    </option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                    <path d="M22.7196 7.97429C21.221 6.47566 19.2569 5.72607 17.2921 5.72607C15.3274 5.72607 13.3632 6.47566 11.8646 7.97429C9.23202 10.6063 8.91289 14.6739 10.9034 17.6564L9.39324 19.1665L9.03846 18.8118C8.93154 18.7048 8.75771 18.7048 8.65078 18.8118L4.19164 23.2709C3.97779 23.4847 3.97779 23.8318 4.19164 24.0462L6.26 26.1146C6.4744 26.3285 6.82151 26.3285 7.03591 26.1146L11.4945 21.6555C11.602 21.5485 11.602 21.3747 11.4945 21.2678L11.1403 20.9136L12.5912 19.4626C13.9714 20.5352 15.6301 21.0781 17.2921 21.0781C19.2569 21.0781 21.221 20.3285 22.7196 18.8299C25.7174 15.8321 25.7174 10.9721 22.7196 7.97429ZM21.1689 17.2791C20.1336 18.3144 18.7568 18.8847 17.2921 18.8847C15.8275 18.8847 14.4506 18.3144 13.4153 17.2791C11.2779 15.1411 11.2779 11.663 13.4153 9.52501C14.4506 8.48973 15.8275 7.91945 17.2921 7.91945C18.7568 7.91945 20.1336 8.48973 21.1689 9.52501C22.2047 10.5608 22.775 11.9377 22.775 13.4018C22.775 14.8664 22.2047 16.2433 21.1689 17.2791Z"/>
                                    <path d="M17.8057 12.717H16.7797C16.5917 12.717 16.4392 12.564 16.4392 12.3765C16.4392 12.1884 16.5917 12.0354 16.7797 12.0354H18.8311C19.2095 12.0354 19.5165 11.7289 19.5165 11.35C19.5165 10.9717 19.2095 10.6646 18.8311 10.6646H17.9779V10.3246C17.9779 9.94623 17.6713 9.63916 17.2924 9.63916C16.9141 9.63916 16.607 9.94623 16.607 10.3246V10.6821C15.7456 10.7704 15.0684 11.4915 15.0684 12.3765C15.0684 13.3196 15.836 14.0879 16.7797 14.0879H17.8057C17.9932 14.0879 18.1457 14.2403 18.1457 14.4284C18.1457 14.6159 17.9932 14.7684 17.8057 14.7684H15.7538C15.3749 14.7684 15.0684 15.0749 15.0684 15.4538C15.0684 15.8322 15.3749 16.1392 15.7538 16.1392H16.607V16.4798C16.607 16.8581 16.9141 17.1652 17.2924 17.1652C17.6713 17.1652 17.9779 16.8581 17.9779 16.4798V16.1217C18.8399 16.034 19.5165 15.3129 19.5165 14.4284C19.5165 13.4847 18.7494 12.717 17.8057 12.717Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-pay_frequency" class="d-none error"></div>
                            <div id="invalid-validation-pay_frequency">
                                <p
                                    v-for="error of v$.fields.pay_frequency.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="pay_frequency"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 p-0">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.direct_deposit.$error, 'active': fields.direct_deposit === true}">
                                        <input type="radio" class="rad-input" name="direct_deposit"
                                               v-model.lazy="fields.direct_deposit" :value="true">
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text" style="font-size:15px">Direct deposit</div>
                                    </label>
                                </div>
                                <div class="col-12 p-0 mt-2">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.direct_deposit.$error, 'active': fields.direct_deposit === false}">
                                        <input type="radio" class="rad-input" name="direct_deposit"
                                               v-model.lazy="fields.direct_deposit" :value="false">
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text" style="font-size:15px">Paper check</div>
                                    </label>
                                </div>
                            </div>
                            <div id="invalid-direct_deposit" class="d-none error"></div>
                            <div id="invalid-validation-direct_deposit">
                                <p
                                    v-for="error of v$.fields.direct_deposit.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="direct_deposit"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 15">
                            <Datepicker
                                v-bind:class="{'not-valid': v$.fields.next_pay_day.$error}"
                                v-model.lazy="fields.next_pay_day"
                                :input-attr="{name:'next_pay_day',id:'next_pay_day'}"
                                model-type="MM-dd-yyyy"
                                placeholder="Next Pay Date"
                                :disabled-week-days="[6, 0]"
                                :min-date="new Date()"
                                :max-date="new Date().setFullYear(new Date().getFullYear() + 1)"
                                prevent-min-max-navigation
                                reverse-years
                                :year-range="[new Date().getFullYear(),2100]"
                                ref="next_pay_dayDatepicker"
                                format="MM-dd-yyyy"
                                input-class-name="input-date"
                                :enable-time-picker="false"
                                :auto-apply="true"
                                week-start="0"
                                @update:modelValue="nextPayDayChange"
                                uid="next_pay_day"
                                >
                                <template #input-icon>
                                    <span class="dp-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32">
                                            <path d="M21.5827 6.45898H19.3163C18.6902 6.45898 18.1832 6.96608 18.1832 7.59215C18.1832 8.21823 17.6755 8.72532 17.05 8.72532C16.4239 8.72532 15.9168 8.21823 15.9168 7.59215C15.9168 6.96608 15.4092 6.45898 14.7837 6.45898H11.9507C11.3247 6.45898 10.8176 6.96608 10.8176 7.59215C10.8176 8.21823 10.3099 8.72532 9.68439 8.72532C9.05832 8.72532 8.55123 8.21823 8.55123 7.59215C8.55123 6.96608 8.04357 6.45898 7.41806 6.45898H5.15172C4.52565 6.45898 4.01855 6.96608 4.01855 7.59215V21.7568C4.01855 22.3828 4.52565 22.8899 5.15172 22.8899H13.7406C13.438 22.1318 13.2669 21.3075 13.2669 20.4417C13.2669 16.7878 16.229 13.8257 19.8829 13.8257C20.8977 13.8257 21.8558 14.0614 22.7158 14.4699V7.59215C22.7158 6.96608 22.2082 6.45898 21.5827 6.45898ZM7.41806 20.1584C6.79198 20.1584 6.28489 19.6508 6.28489 19.0253C6.28489 18.3992 6.79198 17.8921 7.41806 17.8921C8.04357 17.8921 8.55123 18.3992 8.55123 19.0253C8.55123 19.6508 8.04357 20.1584 7.41806 20.1584ZM7.41806 16.7589C6.79198 16.7589 6.28489 16.2513 6.28489 15.6257C6.28489 14.9997 6.79198 14.4926 7.41806 14.4926C8.04357 14.4926 8.55123 14.9997 8.55123 15.6257C8.55123 16.2513 8.04357 16.7589 7.41806 16.7589ZM10.8176 20.1584C10.1915 20.1584 9.68439 19.6508 9.68439 19.0253C9.68439 18.3992 10.1915 17.8921 10.8176 17.8921C11.4431 17.8921 11.9507 18.3992 11.9507 19.0253C11.9507 19.6508 11.4431 20.1584 10.8176 20.1584ZM10.8176 16.7589C10.1915 16.7589 9.68439 16.2513 9.68439 15.6257C9.68439 14.9997 10.1915 14.4926 10.8176 14.4926C11.4431 14.4926 11.9507 14.9997 11.9507 15.6257C11.9507 16.2513 11.4431 16.7589 10.8176 16.7589ZM10.8176 13.3594C10.1915 13.3594 9.68439 12.8518 9.68439 12.2262C9.68439 11.6002 10.1915 11.0931 10.8176 11.0931C11.4431 11.0931 11.9507 11.6002 11.9507 12.2262C11.9507 12.8518 11.4431 13.3594 10.8176 13.3594ZM14.2171 13.3594C13.591 13.3594 13.0839 12.8518 13.0839 12.2262C13.0839 11.6002 13.591 11.0931 14.2171 11.0931C14.8426 11.0931 15.3502 11.6002 15.3502 12.2262C15.3502 12.8518 14.8426 13.3594 14.2171 13.3594Z"/>
                                            <path d="M19.8825 15.3423C17.066 15.3423 14.7832 17.6251 14.7832 20.4415C14.7832 23.2575 17.066 25.5408 19.8825 25.5408C22.6984 25.5408 24.9817 23.2575 24.9817 20.4415C24.9817 17.6251 22.6984 15.3423 19.8825 15.3423ZM20.5907 20.7248C20.5907 21.1158 20.2734 21.4331 19.8825 21.4331H17.0495C16.658 21.4331 16.3413 21.1158 16.3413 20.7248C16.3413 20.3333 16.658 20.0166 17.0495 20.0166H19.1742V17.3253C19.1742 16.9338 19.4909 16.6171 19.8825 16.6171C20.2734 16.6171 20.5907 16.9338 20.5907 17.3253V20.7248Z"/>
                                        </svg>
                                    </span>
                                </template>
                            </Datepicker>
                            <div id="invalid-next_pay_day" class="d-none error"></div>
                            <div id="invalid-validation-next_pay_day">
                                <p
                                    v-for="error of v$.fields.next_pay_day.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="next_pay_day"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <Datepicker
                                v-bind:class="{'not-valid': v$.fields.second_pay_day.$error}"
                                class="mt-4"
                                v-model.lazy="fields.second_pay_day"
                                :input-attr="{name:'second_pay_day',id:'second_pay_day'}"
                                placeholder="Second Pay Date"
                                model-type="MM-dd-yyyy"
                                :disabled-week-days="[6, 0]"
                                :min-date="new Date(this.fields.next_pay_day).setDate(new Date(this.fields.next_pay_day).getDate() + 1)"
                                :max-date="new Date().setFullYear(new Date().getFullYear() + 1)"
                                ref="second_pay_dayDatepicker"
                                input-class-name="input-date"
                                prevent-min-max-navigation
                                reverse-years
                                :year-range="[new Date().getFullYear(),2100]"
                                :enable-time-picker="false"
                                :auto-apply="true"
                                format="MM-dd-yyyy"
                                week-start="0"
                                uid="second_pay_day"
                            >
                                <template #input-icon>
                                    <span class="dp-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32">
                                            <path d="M21.5827 6.45898H19.3163C18.6902 6.45898 18.1832 6.96608 18.1832 7.59215C18.1832 8.21823 17.6755 8.72532 17.05 8.72532C16.4239 8.72532 15.9168 8.21823 15.9168 7.59215C15.9168 6.96608 15.4092 6.45898 14.7837 6.45898H11.9507C11.3247 6.45898 10.8176 6.96608 10.8176 7.59215C10.8176 8.21823 10.3099 8.72532 9.68439 8.72532C9.05832 8.72532 8.55123 8.21823 8.55123 7.59215C8.55123 6.96608 8.04357 6.45898 7.41806 6.45898H5.15172C4.52565 6.45898 4.01855 6.96608 4.01855 7.59215V21.7568C4.01855 22.3828 4.52565 22.8899 5.15172 22.8899H13.7406C13.438 22.1318 13.2669 21.3075 13.2669 20.4417C13.2669 16.7878 16.229 13.8257 19.8829 13.8257C20.8977 13.8257 21.8558 14.0614 22.7158 14.4699V7.59215C22.7158 6.96608 22.2082 6.45898 21.5827 6.45898ZM7.41806 20.1584C6.79198 20.1584 6.28489 19.6508 6.28489 19.0253C6.28489 18.3992 6.79198 17.8921 7.41806 17.8921C8.04357 17.8921 8.55123 18.3992 8.55123 19.0253C8.55123 19.6508 8.04357 20.1584 7.41806 20.1584ZM7.41806 16.7589C6.79198 16.7589 6.28489 16.2513 6.28489 15.6257C6.28489 14.9997 6.79198 14.4926 7.41806 14.4926C8.04357 14.4926 8.55123 14.9997 8.55123 15.6257C8.55123 16.2513 8.04357 16.7589 7.41806 16.7589ZM10.8176 20.1584C10.1915 20.1584 9.68439 19.6508 9.68439 19.0253C9.68439 18.3992 10.1915 17.8921 10.8176 17.8921C11.4431 17.8921 11.9507 18.3992 11.9507 19.0253C11.9507 19.6508 11.4431 20.1584 10.8176 20.1584ZM10.8176 16.7589C10.1915 16.7589 9.68439 16.2513 9.68439 15.6257C9.68439 14.9997 10.1915 14.4926 10.8176 14.4926C11.4431 14.4926 11.9507 14.9997 11.9507 15.6257C11.9507 16.2513 11.4431 16.7589 10.8176 16.7589ZM10.8176 13.3594C10.1915 13.3594 9.68439 12.8518 9.68439 12.2262C9.68439 11.6002 10.1915 11.0931 10.8176 11.0931C11.4431 11.0931 11.9507 11.6002 11.9507 12.2262C11.9507 12.8518 11.4431 13.3594 10.8176 13.3594ZM14.2171 13.3594C13.591 13.3594 13.0839 12.8518 13.0839 12.2262C13.0839 11.6002 13.591 11.0931 14.2171 11.0931C14.8426 11.0931 15.3502 11.6002 15.3502 12.2262C15.3502 12.8518 14.8426 13.3594 14.2171 13.3594Z"/>
                                            <path d="M19.8825 15.3423C17.066 15.3423 14.7832 17.6251 14.7832 20.4415C14.7832 23.2575 17.066 25.5408 19.8825 25.5408C22.6984 25.5408 24.9817 23.2575 24.9817 20.4415C24.9817 17.6251 22.6984 15.3423 19.8825 15.3423ZM20.5907 20.7248C20.5907 21.1158 20.2734 21.4331 19.8825 21.4331H17.0495C16.658 21.4331 16.3413 21.1158 16.3413 20.7248C16.3413 20.3333 16.658 20.0166 17.0495 20.0166H19.1742V17.3253C19.1742 16.9338 19.4909 16.6171 19.8825 16.6171C20.2734 16.6171 20.5907 16.9338 20.5907 17.3253V20.7248Z"/>
                                        </svg>
                                    </span>
                                </template>
                            </Datepicker>
                            <div id="invalid-second_pay_day" class="d-none error"></div>
                            <div id="invalid-validation-second_pay_day">
                                <p
                                    v-for="error of v$.fields.second_pay_day.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="second_pay_day"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 16">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.emp_name.$error}">
                                <input id="emp_name" type="text" name="emp_name" class="form-control"
                                   maxlength="128" @input="dynamicValidation"
                                   v-bind:class="{'not-valid': v$.fields.emp_name.$error}"
                                   placeholder="Employer name" v-model.lazy="fields.emp_name"
                                   >
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <path d="M10.5479 19.0751C10.5081 18.9532 10.3939 18.87 10.2655 18.87H8.8099C6.23763 18.87 4.15234 20.9553 4.15234 23.5282V25.595C4.15234 25.9779 4.46273 26.2877 4.84566 26.2877H12.4899C12.6921 26.2877 12.8354 26.0909 12.773 25.8983L10.5479 19.0751ZM20.1901 18.87H18.7393C18.6108 18.87 18.4967 18.9532 18.4568 19.0751L16.2318 25.8983C16.1694 26.0909 16.3127 26.2877 16.5148 26.2877H24.155C24.5373 26.2877 24.8477 25.9779 24.8477 25.595V23.5282C24.8477 20.9553 22.7624 18.87 20.1901 18.87ZM20.2127 11.4249C20.2127 8.26992 17.6547 5.71191 14.4997 5.71191C11.3447 5.71191 8.78731 8.26992 8.78731 11.4249C8.78731 14.5799 11.3447 17.1379 14.4997 17.1379C17.6547 17.1379 20.2127 14.5799 20.2127 11.4249Z"/>
                                        <path d="M14.5003 19.0317C14.008 19.0317 13.6084 19.4313 13.6084 19.9237V24.6805C13.6084 25.1734 14.008 25.5724 14.5003 25.5724C14.9926 25.5724 15.3922 25.1734 15.3922 24.6805V19.9237C15.3922 19.4313 14.9926 19.0317 14.5003 19.0317Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-emp_name" class="d-none error"></div>
                            <div id="invalid-validation-emp_name">
                                <p
                                    v-for="error of v$.fields.emp_name.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="emp_name" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                            <div class="d-flex flex-row-reverse input-group  mt-4" v-bind:class="{'not-valid': v$.fields.job_title.$error}">
                                <input id="job_title" type="text" name="job_title" class="form-control"
                                   maxlength="128" @input="dynamicValidation"
                                   placeholder="Job title" v-model.lazy="fields.job_title"
                                   v-bind:class="{'not-valid': v$.fields.job_title.$error}">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <path d="M17.7467 6.43213H11.2533C10.2425 6.43213 9.42383 7.25084 9.42383 8.26109V9.60577H11.2533V8.26109H17.7467V9.60577H19.5757V8.26109C19.5757 7.25084 18.7569 6.43213 17.7467 6.43213Z"/>
                                        <path d="M15.3116 20.9691V21.3511C15.3116 21.7992 14.9479 22.1628 14.4999 22.1628C14.0513 22.1628 13.6882 21.7992 13.6882 21.3511V20.9691H6.3832C6.00551 20.9691 5.64188 20.9079 5.30098 20.797V24.4863C5.30098 25.0843 5.78527 25.5685 6.3832 25.5685H22.6166C23.214 25.5685 23.6988 25.0843 23.6988 24.4863V20.797C23.3574 20.9079 22.9943 20.9691 22.6166 20.9691H15.3116ZM23.6988 10.9585H5.30098C4.70305 10.9585 4.21875 11.4428 4.21875 12.0407V17.4519C4.21875 18.6472 5.18734 19.6163 6.3832 19.6163H13.6882V18.9805C13.6882 18.5324 14.0513 18.1688 14.4999 18.1688C14.9479 18.1688 15.3116 18.5324 15.3116 18.9805V19.6163H22.6166C23.8119 19.6163 24.781 18.6472 24.781 17.4519V12.0407C24.781 11.4428 24.2962 10.9585 23.6988 10.9585Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-job_title" class="d-none error"></div>
                            <div id="invalid-validation-job_title">
                                <p
                                    v-for="error of v$.fields.job_title.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="job_title" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 17">
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.emp_time.$error}">
                                <select class="form-select" name="emp_time" id="emp_time"
                                        v-model.lazy="fields.emp_time"
                                        v-bind:class="{'not-valid': v$.fields.emp_time.$error}">
                                    <option value="">Choose time employed</option>
                                    <option value="12">1 year or less</option>
                                    <option value="24">2 years</option>
                                    <option value="36">3 years</option>
                                    <option value="48">4 years</option>
                                    <option value="60">5 years</option>
                                    <option value="72">6 years</option>
                                    <option value="84">7 years or more</option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                    <path d="M9.5 0.5C4.275 0.5 0 4.775 0 10C0 15.225 4.275 19.5 9.5 19.5C14.725 19.5 19 15.225 19 10C19 4.775 14.725 0.5 9.5 0.5ZM9.5 2.875C13.443 2.875 16.625 6.058 16.625 10C16.625 13.943 13.443 17.125 9.5 17.125C5.558 17.125 2.375 13.943 2.375 10C2.375 6.058 5.558 2.875 9.5 2.875ZM8.312 5.25L8.313 10.523L8.693 10.831L9.88 12.019L10.688 12.921L12.398 11.211L11.495 10.404L10.687 9.596V5.297H8.312V5.25Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-emp_time" class="d-none error"></div>
                            <div id="invalid-validation-emp_time">
                                <p
                                    v-for="error of v$.fields.emp_time.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="emp_time" class="text-left error">{{
                                            error.$messages
                                        }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 18">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.emp_phone.$error}">
                                <input type="text" name="emp_phone" id="emp_phone" class="form-control"
                                       placeholder="Enter Work Phone" @input="dynamicValidation"
                                       v-bind:class="{'not-valid': v$.fields.emp_phone.$error}"
                                       v-model.lazy="fields.emp_phone" @keypress="onlyDigitsKeypress"
                                       @paste="onlyDigitsPaste" v-model.trim="fields.emp_phone" maxlength="12"
                                       @keyup="phoneMask('emp_phone',$event)">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
                                        <path d="M12.8218 15.6567H2.17812V4.34783H12.8218V15.6567ZM7.49996 19.6481C6.94848 19.6481 6.50211 19.2017 6.50211 18.6503C6.50211 18.0995 6.94848 17.6524 7.49996 17.6524C8.05143 17.6524 8.4978 18.0995 8.4978 18.6503C8.4978 19.2017 8.05143 19.6481 7.49996 19.6481ZM11.9796 0.356445H3.0203C1.82222 0.356445 0.847656 1.33101 0.847656 2.52909V19.4718C0.847656 20.6699 1.82222 21.6438 3.0203 21.6438H11.9796C13.1777 21.6438 14.1523 20.6699 14.1523 19.4718V2.52909C14.1523 1.33101 13.1777 0.356445 11.9796 0.356445Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-emp_phone" class="d-none error"></div>
                            <div id="invalid-validation-emp_phone">
                                <p
                                    v-for="error of v$.fields.emp_phone.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="emp_phone" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 19">
                            <input id="bank_name" name="bank_name" type="text" class="d-none"
                                   v-model.trim="fields.bank_name">
                            <input id="bank_phone" name="bank_phone" type="text" class="d-none"
                                   v-model.trim="fields.bank_phone">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.routing_number.$error}">
                                <input id="routing_number" type="text" name="routing_number"
                                    class="form-control" @input="dynamicValidation"
                                    maxlength="9" @keypress="onlyDigitsKeypress"
                                    @copy.prevent @paste.prevent @cut.prevent
                                    @change="autocompleteAba()"
                                    placeholder="ABA/Bank routing number" autocomplete="off"
                                    v-model.lazy="fields.routing_number"
                                    v-bind:class="{'not-valid': v$.fields.routing_number.$error}">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <path d="M16.2551 14.9329V14.3481C16.2551 14.1861 16.1241 14.0557 15.9627 14.0557H13.0385C12.8765 14.0557 12.7461 14.1861 12.7461 14.3481V14.9329C12.7461 15.0832 12.8613 15.2031 13.0075 15.2189V22.2491C12.8613 22.2649 12.7461 22.3848 12.7461 22.5357V23.1205C12.7461 23.2819 12.8765 23.4129 13.0385 23.4129H15.9627C16.1241 23.4129 16.2551 23.2819 16.2551 23.1205V22.5357C16.2551 22.3848 16.1393 22.2649 15.9931 22.2491V15.2189C16.1393 15.2031 16.2551 15.0832 16.2551 14.9329Z"/>
                                        <path d="M24.1498 24.8749H4.85045C4.52704 24.8749 4.26562 25.1363 4.26562 25.4597V27.2142C4.26562 27.3756 4.39604 27.5066 4.55804 27.5066H24.4423C24.6037 27.5066 24.7347 27.3756 24.7347 27.2142V25.4597C24.7347 25.1363 24.4727 24.8749 24.1498 24.8749ZM6.89736 22.5356V23.1204C6.89736 23.2818 7.02778 23.4128 7.18977 23.4128H10.1139C10.2753 23.4128 10.4063 23.2818 10.4063 23.1204V22.5356C10.4063 22.3736 10.2753 22.2431 10.1139 22.2431V15.2252C10.2753 15.2252 10.4063 15.0942 10.4063 14.9328V14.3479C10.4063 14.1859 10.2753 14.0555 10.1139 14.0555H7.18977C7.02778 14.0555 6.89736 14.1859 6.89736 14.3479V14.9328C6.89736 15.0942 7.02778 15.2252 7.18977 15.2252V22.2431C7.02778 22.2431 6.89736 22.3736 6.89736 22.5356ZM24.4399 10.0857L14.7902 4.57134C14.6101 4.46841 14.3896 4.46841 14.2095 4.57134L4.55979 10.0857C4.37791 10.1898 4.26562 10.3834 4.26562 10.5933V12.301C4.26562 12.4625 4.39604 12.5935 4.55804 12.5935H24.4423C24.6037 12.5935 24.7347 12.4625 24.7347 12.301V10.5933C24.7347 10.3834 24.6218 10.1898 24.4399 10.0857ZM14.5001 10.9852C13.5714 10.9852 12.8188 10.2319 12.8188 9.30378C12.8188 8.37507 13.5714 7.6224 14.5001 7.6224C15.4283 7.6224 16.1815 8.37507 16.1815 9.30378C16.1815 10.2319 15.4283 10.9852 14.5001 10.9852ZM18.594 22.5356V23.1204C18.594 23.2818 18.7244 23.4128 18.8864 23.4128H21.8105C21.9719 23.4128 22.1029 23.2818 22.1029 23.1204V22.5356C22.1029 22.3736 21.9719 22.2431 21.8105 22.2431V15.2252C21.9719 15.2252 22.1029 15.0942 22.1029 14.9328V14.3479C22.1029 14.1859 21.9719 14.0555 21.8105 14.0555H18.8864C18.7244 14.0555 18.594 14.1859 18.594 14.3479V14.9328C18.594 15.0725 18.694 15.1837 18.825 15.2123V22.2554C18.694 22.2841 18.594 22.3958 18.594 22.5356Z"/>
                                    </svg>
                                </span>
                            </div>
                            <p id="invalid-routing_number" class="d-none text-left error"></p>
                            <p id="invalid-bank_phone" class="d-none text-left error"></p>
                            <p id="invalid-bank_name" class="d-none text-left error"></p>
                            <div id="invalid-validation-routing_number">
                                <p
                                    v-for="error of v$.fields.routing_number.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="routing_number"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.account_number.$error}">
                                <input id="account_number" type="text" name="account_number"
                                    class="form-control"
                                    maxlength="30" @keypress="onlyDigitsKeypress"
                                    @copy.prevent @paste.prevent @cut.prevent
                                    placeholder="Account number" autocomplete="off"
                                    v-model.lazy="fields.account_number"
                                    v-bind:class="{'not-valid': v$.fields.account_number.$error}">
                                <span class="input-group-text">
                                    <svg xmlns="http://ww*ow.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <path d="M20.7352 16.1717C20.2803 16.0975 19.7554 16.2755 19.3957 16.5846C19.2695 16.0728 18.7849 15.6382 18.2625 15.5535C17.8298 15.483 17.3365 15.6419 16.9811 15.9232C16.821 15.4311 16.2974 15.0182 15.7898 14.9353C15.2996 14.8556 14.6314 15.1171 14.3458 15.4762V11.5706C14.3458 11.0303 14.0274 10.5092 13.5125 10.346C12.6582 10.0752 11.8731 10.7045 11.8731 11.5181V21.4088C11.19 21.4088 10.6368 20.8556 10.6368 20.1725V19.0561C10.6368 18.8193 10.4445 18.627 10.2077 18.627H9.83499C8.91205 18.627 8.16406 19.3757 8.16406 20.2986V23.3505C8.16406 23.8846 8.39402 24.3927 8.79584 24.7451L10.46 26.2034C10.7981 26.5001 11.2327 26.6633 11.6827 26.6633H18.5228C19.0148 26.6633 19.4865 26.468 19.8339 26.1205L21.2205 24.734C21.5685 24.3859 21.7639 23.9143 21.7639 23.4228V17.4575C21.7639 16.8411 21.3429 16.2706 20.7352 16.1717Z"/>
                                        <path d="M7.8545 12.7545H9.70902C10.0496 12.7545 10.3272 12.4776 10.3272 12.1363V10.2818C10.3272 9.9412 10.0496 9.66364 9.70902 9.66364H7.8545C7.51327 9.66364 7.23633 9.9412 7.23633 10.2818V12.1363C7.23633 12.4776 7.51327 12.7545 7.8545 12.7545ZM9.75043 13.9908H7.89591C7.5553 13.9908 7.27774 14.2684 7.27774 14.609V16.4635C7.27774 16.8048 7.5553 17.0817 7.89591 17.0817H9.75043C10.0917 17.0817 10.3686 16.8048 10.3686 16.4635V14.609C10.3686 14.2684 10.0917 13.9908 9.75043 13.9908ZM18.3634 5.33643H16.5089C16.1677 5.33643 15.8907 5.61399 15.8907 5.9546V7.80912C15.8907 8.15035 16.1677 8.42729 16.5089 8.42729H18.3634C18.7041 8.42729 18.9816 8.15035 18.9816 7.80912V5.9546C18.9816 5.61399 18.7041 5.33643 18.3634 5.33643ZM7.8545 8.42729H9.70902C10.0496 8.42729 10.3272 8.15035 10.3272 7.80912V5.9546C10.3272 5.61399 10.0496 5.33643 9.70902 5.33643H7.8545C7.51327 5.33643 7.23633 5.61399 7.23633 5.9546V7.80912C7.23633 8.15035 7.51327 8.42729 7.8545 8.42729ZM14.0362 5.33643H12.1817C11.8405 5.33643 11.5635 5.61399 11.5635 5.9546V7.80912C11.5635 8.15035 11.8405 8.42729 12.1817 8.42729H14.0362C14.3768 8.42729 14.6544 8.15035 14.6544 7.80912V5.9546C14.6544 5.61399 14.3768 5.33643 14.0362 5.33643ZM18.3634 9.66364H16.5089C16.1677 9.66364 15.8907 9.9412 15.8907 10.2818V12.1363C15.8907 12.4776 16.1677 12.7545 16.5089 12.7545H18.3634C18.7041 12.7545 18.9816 12.4776 18.9816 12.1363V10.2818C18.9816 9.9412 18.7041 9.66364 18.3634 9.66364Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-account_number" class="d-none error"></div>
                            <div id="invalid-validation-account_number">
                                <p
                                    v-for="error of v$.fields.account_number.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="account_number"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 20">
                            <div class="row mt-m-1rem">
                                <div class="col-12 p-0">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.account_type.$error, 'active': fields.account_type === 'Checking'}">
                                        <input type="radio" class="rad-input" name="account_type"
                                               v-model.lazy="fields.account_type" value="Checking"
                                        >
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text">Checking account</div>
                                    </label>
                                </div>
                                <div class="col-12 p-0 mt-2">
                                    <label class="radio-label"
                                           v-bind:class="{'not-valid': v$.fields.account_type.$error, 'active': fields.account_type === 'Savings'}">
                                        <input type="radio" class="rad-input" name="account_type"
                                               v-model.lazy="fields.account_type" value="Savings"
                                        >
                                        <div class="radio-design">
                                            <div class="rad-design-2">
                                            </div>
                                        </div>
                                        <div class="rad-text">Savings account</div>
                                    </label>
                                </div>
                            </div>
                            <div id="invalid-account_type" class="d-none error"></div>
                            <div id="invalid-validation-account_type">
                                <p
                                    v-for="error of v$.fields.account_type.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="account_type"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 21">
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.bank_months.$error}">
                                <select class="form-select" name="bank_months"
                                        id="bank_months" v-model.lazy="fields.bank_months"
                                        v-bind:class="{'not-valid': v$.fields.bank_months.$error}">
                                    <option value="">Choose time at bank</option>
                                    <option value="12">1 year or less</option>
                                    <option value="24">2 years</option>
                                    <option value="36">3 years</option>
                                    <option value="48">4 years</option>
                                    <option value="60">5 years</option>
                                    <option value="72">6 years</option>
                                    <option value="84">7 years or more</option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <g clip-path="url(#clip0_0_349)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 3.103C29 1.39 27.61 0 25.897 0H3.103C1.39 0 0 1.39 0 3.103V28.897C0 30.61 1.39 32 3.103 32H25.897C27.61 32 29 30.61 29 28.897V3.103Z"
                                                  :fill="v$.fields.bank_months.$error ? '#FFD9D9' : '#EEE'"/>
                                            <path d="M14.5 6.5C9.275 6.5 5 10.775 5 16C5 21.225 9.275 25.5 14.5 25.5C19.725 25.5 24 21.225 24 16C24 10.775 19.725 6.5 14.5 6.5ZM14.5 8.875C18.443 8.875 21.625 12.058 21.625 16C21.625 19.943 18.443 23.125 14.5 23.125C10.558 23.125 7.375 19.943 7.375 16C7.375 12.058 10.558 8.875 14.5 8.875ZM13.312 11.25L13.313 16.523L13.693 16.831L14.88 18.019L15.688 18.921L17.398 17.211L16.495 16.404L15.687 15.596V11.297H13.312V11.25Z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-bank_months" class="d-none error"></div>
                            <div id="invalid-validation-bank_months">
                                <p
                                    v-for="error of v$.fields.bank_months.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="bank_months"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 22">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.dl_number.$error}">
                                <input id="dl_number" type="text" name="dl_number"
                                   class="form-control" maxlength="128"
                                   placeholder="Driver's license" v-model.lazy="fields.dl_number"
                                   v-bind:class="{'not-valid': v$.fields.dl_number.$error}"
                                   >
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                    <path d="M23.5668 8.68799H5.43356C4.7872 8.68799 4.26367 9.2121 4.26367 9.85787V22.1417C4.26367 22.788 4.7872 23.3116 5.43356 23.3116H23.5668C24.2126 23.3116 24.7367 22.788 24.7367 22.1417V9.85787C24.7367 9.2121 24.2126 8.68799 23.5668 8.68799ZM8.94322 11.0278C9.91188 11.0278 10.698 11.8139 10.698 12.7826C10.698 13.7518 9.91188 14.5374 8.94322 14.5374C7.97397 14.5374 7.18839 13.7518 7.18839 12.7826C7.18839 11.8139 7.97397 11.0278 8.94322 11.0278ZM10.4056 20.8256H8.0658C7.66161 20.8256 7.33462 20.4986 7.33462 20.0944C7.33462 19.6908 7.66161 19.3632 8.0658 19.3632H10.4056C10.8092 19.3632 11.1368 19.6908 11.1368 20.0944C11.1368 20.4986 10.8092 20.8256 10.4056 20.8256ZM15.6701 20.8256H13.3303C12.9261 20.8256 12.5991 20.4986 12.5991 20.0944C12.5991 19.6908 12.9261 19.3632 13.3303 19.3632H15.6701C16.0737 19.3632 16.4012 19.6908 16.4012 20.0944C16.4012 20.4986 16.0737 20.8256 15.6701 20.8256ZM20.9345 20.8256H18.5948C18.1906 20.8256 17.8636 20.4986 17.8636 20.0944C17.8636 19.6908 18.1906 19.3632 18.5948 19.3632H20.9345C21.3382 19.3632 21.6657 19.6908 21.6657 20.0944C21.6657 20.4986 21.3382 20.8256 20.9345 20.8256ZM20.9345 13.8062H13.3303C12.9261 13.8062 12.5991 13.4793 12.5991 13.0751C12.5991 12.6715 12.9261 12.3439 13.3303 12.3439H20.9345C21.3382 12.3439 21.6657 12.6715 21.6657 13.0751C21.6657 13.4793 21.3382 13.8062 20.9345 13.8062Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-dl_number" class="d-none error"></div>
                            <div id="invalid-validation-dl_number">
                                <p
                                    v-for="error of v$.fields.dl_number.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="dl_number"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                            <div class="d-flex flex-row-reverse input-group mt-4" v-bind:class="{'not-valid': v$.fields.dl_state.$error}">
                                <select class="form-select" id="dl_state"
                                        name="dl_state" v-model.lazy="fields.dl_state"
                                        v-bind:class="{'not-valid': v$.fields.dl_state.$error}">
                                    <option value="">Choose license state</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="IA">Iowa</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MD">Maryland</option>
                                    <option value="ME">Maine</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MT">Montana</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NY">New York</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VA">Virginia</option>
                                    <option value="VT">Vermont</option>
                                    <option value="WA">Washington</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                        <path d="M10.2841 19.883C10.2841 19.883 10.6517 20.2035 10.6517 20.3388C10.6517 20.4756 11.1741 21.0378 11.1741 21.0378C11.1741 21.0378 11.3773 20.7121 11.5582 20.7121C11.7401 20.7121 12.4211 20.7857 12.4211 20.8916C12.4211 20.9975 12.7269 21.6751 12.8152 21.7815C12.9078 21.8869 13.0759 22.234 13.0759 22.3722C13.0759 22.5061 13.2568 22.764 13.5717 22.764C13.8903 22.764 14.1648 22.764 14.0902 22.5978C14.0902 22.5978 13.9839 22.263 13.9839 22.2032C13.9839 22.1438 14.1957 21.8252 14.2403 21.8119C14.284 21.7967 14.36 21.6129 14.4084 21.5687C14.4526 21.5241 14.483 21.4619 14.6159 21.3717C14.7532 21.281 14.935 21.2055 14.935 21.2055C14.935 21.2055 15.1207 21.0378 15.1331 20.9177C15.1468 20.7966 15.1468 20.7145 15.1915 20.7145C15.2399 20.7145 15.4351 20.7833 15.4963 20.7833C15.5543 20.7833 15.3776 20.7833 15.6331 20.7833H16.0847C16.0847 20.7833 16.3426 20.8365 16.3858 20.865C16.4356 20.8959 16.7049 21.0359 16.7049 21.0359L16.9485 20.9001C16.9485 20.9001 17.1612 21.0245 17.3284 21.0245C17.4927 21.0245 17.6428 20.949 17.6428 20.949L17.572 20.8432C17.572 20.8432 17.5853 20.675 17.5853 20.6152C17.5853 20.5554 17.4789 20.524 17.4039 20.524C17.3284 20.524 17.2049 20.4642 17.2049 20.4181C17.2049 20.374 17.2529 20.3274 17.3108 20.3274C17.373 20.3274 17.6428 20.374 17.6428 20.374L17.7928 20.3583C17.7928 20.3583 17.9172 20.3122 18.0231 20.2524L18.1295 20.1926C18.1295 20.1926 18.2045 20.3431 18.2492 20.3431C18.2981 20.3431 18.5811 20.374 18.6433 20.3431C18.7046 20.3122 18.7663 20.2367 18.8105 20.2367C18.8556 20.2367 18.886 20.1456 19.0056 20.3431C19.1296 20.5402 19.5194 20.5088 19.5194 20.5088C19.5194 20.5088 19.5057 20.4333 19.6738 20.374C19.8371 20.3122 19.9881 20.2059 19.9881 20.2059L20.2617 20.5402C20.2617 20.5402 20.369 20.7368 20.4131 20.7809C20.4564 20.8275 20.5048 20.9334 20.5048 20.9334L20.6249 21.4306C20.6249 21.4306 20.6249 21.5996 20.6425 21.6438C20.6558 21.6903 20.6116 21.7502 20.6558 21.7967C20.7004 21.8404 20.8681 21.9781 20.8681 21.9781C20.8681 21.9781 20.9569 22.1281 21.0196 22.188C21.0803 22.2502 21.2 22.3846 21.2 22.3846C21.2 22.3846 21.0803 22.1752 21.3515 22.5375C21.625 22.9003 21.7452 22.8846 21.7452 22.8846C21.7452 22.8846 21.8995 22.5513 21.8995 22.4758C21.8995 22.4003 21.9437 22.3699 21.957 22.188C21.9703 22.0066 22.0187 21.8119 21.9703 21.6129C21.9261 21.4187 21.9133 21.2496 21.8192 21.1903C21.7319 21.1304 21.8506 21.2216 21.625 20.903C21.3947 20.5862 21.3239 20.449 21.3239 20.449C21.3239 20.449 21.2 20.4181 21.2 20.2059C21.2 19.9955 21.1691 19.8891 21.1691 19.8426C21.1691 19.7984 21.1383 19.6014 21.1383 19.6014L21.2 19.2077L21.2926 19.0111L21.3814 18.7077L21.5495 18.6948L21.8506 18.4047L21.8995 18.2855L22.0761 18.1354L22.1825 18.0884L22.4565 17.7546L22.8065 17.4825L22.9262 17.378L22.8374 17.1947L22.8502 17.0727L23.0762 16.9691L23.1384 16.7251C23.1384 16.7251 23.0634 16.7104 23.0007 16.7104C22.939 16.7104 22.7889 16.7412 22.7889 16.7412L22.6251 16.6215L22.7452 16.5019H23.2586C23.2586 16.5019 23.289 16.7806 23.2757 16.8272C23.2586 16.8718 23.0145 17.0261 22.9879 17.0864C22.9575 17.1477 22.9575 17.2327 22.9575 17.2327L23.2714 17.161L23.346 16.8029V16.6063C23.346 16.6063 23.364 16.3338 23.3018 16.3186C23.2443 16.3029 23.1475 16.3475 23.0416 16.3029C22.9352 16.2564 23.0724 16.1528 22.7714 15.9396C22.4655 15.7278 22.2443 15.5464 22.2443 15.5464C22.2443 15.5464 22.2879 15.3959 22.3202 15.2435C22.3506 15.0925 22.4171 14.79 22.4171 14.79L22.4522 14.9709V15.2126L22.8108 15.6661L22.8815 15.8029L22.8906 15.9244L23.0501 15.4709V15.1832C23.0501 15.0469 22.8374 14.9552 22.8374 14.9552L22.9703 14.8498L23.2044 14.7145C23.2044 14.7145 23.3763 14.3208 23.2975 14.2144C23.2268 14.1081 23.1209 13.7766 23.1209 13.7766C23.1209 13.7766 23.421 13.7453 23.5274 13.6546C23.6342 13.5643 23.6831 13.4266 23.8014 13.3976C23.9272 13.3673 24.1965 13.2765 24.1965 13.2765C24.1965 13.2765 24.289 13.2452 24.4087 13.2452C24.5284 13.2452 24.6514 12.9579 24.6514 12.9579C24.6514 12.9579 24.4837 13.0201 24.4087 13.0201C24.3332 13.0201 24.2582 12.9446 24.2582 12.9446L24.1836 12.6701L24.139 12.3225L24.289 12.1259L24.6077 11.719C24.6514 11.6131 24.9705 11.4003 24.9705 11.4003C24.9705 11.4003 25.0588 11.3248 25.0902 11.2788C25.1205 11.2322 25.1652 11.0219 25.1652 11.0219C25.1652 11.0219 24.9838 10.9003 24.9083 10.9003C24.8337 10.9003 24.6343 10.7631 24.6343 10.7631L24.5896 10.3404L24.5146 10.0526L24.3778 9.96196L24.0326 10.1125L23.8332 10.159L23.7757 10.9155L23.8199 11.1126C23.8199 11.1126 23.6964 11.4754 23.6385 11.5067C23.5763 11.5352 23.5017 11.5813 23.4267 11.6131C23.3507 11.6416 22.7889 11.8073 22.7889 11.8073L22.3824 11.8382L22.2443 12.1259L22.1559 12.3073L22.0187 12.6701C22.0187 12.6701 22.032 12.7015 21.9888 12.7323C21.9437 12.7632 21.8815 12.8829 21.8064 12.9133C21.7319 12.9446 21.475 12.9579 21.4128 12.9579C21.3515 12.9579 21.2446 12.9446 21.1962 13.0044C21.1516 13.0643 21.0585 13.2006 21.0585 13.2006V13.5173L20.8557 13.7011L20.5983 13.9271L20.3994 14.1081L20.2792 14.1237L19.9919 14.1703L19.6562 14.1836L19.6424 14.1237L19.7303 13.8516L19.6871 13.5173L19.6562 13.23L19.5679 13.079L19.4919 12.8981L19.3243 13.0947L19.2041 13.1393C19.2041 13.1393 19.187 13.1854 19.2041 13.079C19.2179 12.9731 19.2625 12.6412 19.2625 12.6412L19.1296 12.3691L18.9919 12.1411L18.7174 12.1877C18.7174 12.1877 18.5982 12.2323 18.5811 12.3073C18.5678 12.3828 18.5232 12.5951 18.5232 12.5951L18.4481 12.6858L18.3109 12.9888C18.3109 12.9888 18.2667 13.1854 18.2667 13.2452C18.2667 13.3074 18.2492 13.5173 18.2796 13.5795C18.3109 13.6394 18.3551 13.7144 18.3731 13.7766C18.3855 13.836 18.4173 13.9708 18.3731 14.0772C18.3237 14.1836 18.1608 14.4267 18.1608 14.4267L17.9614 14.3802C17.9614 14.3802 17.855 14.4267 17.855 14.3208C17.855 14.2144 17.78 14.0022 17.78 14.0022L17.6917 13.7452C17.6917 13.7452 17.6731 13.5795 17.6917 13.533C17.705 13.4883 17.7358 13.2006 17.7358 13.2006C17.7358 13.2006 17.7928 13.0481 17.828 12.9888C17.855 12.9294 17.9044 12.7765 17.9044 12.7765L17.9348 12.5638L17.6613 12.8074L17.6731 12.5358L18.0412 12.277L18.0673 12.1259C18.0673 12.1259 18.3551 11.9754 18.4173 11.9602C18.4742 11.9441 18.7354 11.869 18.7354 11.869C18.7354 11.869 18.9434 11.6259 18.8731 11.6259C18.7934 11.6259 18.461 11.5813 18.461 11.5813L18.1732 11.5665C18.1732 11.5665 17.9172 11.7033 17.8417 11.7033C17.7662 11.7033 17.6917 11.719 17.6428 11.7033C17.5986 11.6881 17.4789 11.5969 17.4789 11.5969L17.5549 11.369C17.43 11.3248 17.1916 11.4597 17.1916 11.4597L16.9969 11.7104L16.8554 11.8253H16.5097L16.3858 11.7475L16.1464 11.7631L16.4214 11.5509L16.6294 11.3381L16.7842 11.1567C16.7842 11.1567 16.7842 11.0679 16.6911 11.0679C16.5985 11.0679 16.3597 10.9905 16.1911 10.9905C16.0234 10.9905 15.2845 10.8248 15.2845 10.8248C15.2845 10.8248 15.5809 10.7032 15.2845 10.7032L15.0941 10.5213C15.0941 10.5213 14.935 10.4625 14.8553 10.4777C14.7793 10.4933 14.6463 10.6277 14.6031 10.6434C14.5542 10.6591 14.1244 10.7545 14.0803 10.7545C14.0361 10.7545 13.7089 10.7298 13.6201 10.7298H12.9961L11.8641 10.5043C11.8641 10.5043 10.7001 10.2787 10.5629 10.2787C10.4257 10.2787 9.55 10.1965 9.41229 10.1965C9.27932 10.1965 7.85471 9.79148 7.85471 9.79148C7.85471 9.79148 7.39884 9.6965 7.14288 9.65044C6.88598 9.6039 6.31091 9.3451 6.31091 9.3451L5.76623 9.11621C5.76623 9.11621 5.79757 9.49325 5.6779 9.61482C5.55349 9.73639 5.72159 9.69033 5.55349 9.73639C5.38633 9.78056 5.57153 9.50893 5.57153 9.50893L5.37256 9.28051C5.37256 9.28051 5.27996 9.25011 5.14652 9.16179C5.00928 9.06871 4.93473 9.43342 4.97937 9.55498C5.02306 9.67465 4.90339 10.2341 4.87205 10.3713C4.84593 10.5066 4.63271 10.7939 4.60232 10.962C4.57193 11.1282 4.37201 11.5969 4.37201 11.5969C4.37201 11.5969 4.11605 12.475 4.11605 12.6255C4.11605 12.7765 3.99686 13.0201 3.95175 13.1393C3.90426 13.2609 3.88574 13.3074 3.8544 13.4133C3.82876 13.5173 3.83731 13.8208 3.83731 13.8825V14.2144C3.83731 14.4115 3.89429 14.5174 3.89429 14.5174L4.16401 14.6527C4.16401 14.6527 4.21767 14.7145 4.18681 14.8498C4.15547 14.9866 4.10703 14.94 4.032 14.9272C3.95174 14.9087 4.17778 15.4999 4.20818 15.6661C4.23999 15.8337 4.28463 16.0465 4.31455 16.1372C4.34589 16.2274 4.45227 16.3936 4.55389 16.5907C4.65931 16.7877 4.78467 17.1192 4.9523 17.2256C5.11565 17.3315 4.9656 17.2854 5.2092 17.5599C5.44759 17.8315 5.50932 17.9222 5.50932 17.9222C5.50932 17.9222 5.44759 17.9825 5.6157 18.1036C5.78 18.2252 6.054 18.2698 6.1466 18.2698C6.23588 18.2698 6.37217 18.3297 6.44815 18.4047C6.52365 18.4821 6.62955 18.6483 6.88598 18.7077C7.14288 18.7675 7.17374 18.8914 7.46152 19.042C7.74881 19.193 7.89935 19.2542 8.17382 19.2989C8.44355 19.3426 8.17382 19.2989 8.68763 19.3606C8.68763 19.3606 9.26175 19.5705 9.23041 19.4641C9.19907 19.3606 9.42986 19.3297 9.42986 19.3297C9.42986 19.3297 9.55 19.268 9.58134 19.3297C9.60699 19.3896 9.80644 19.6014 9.85012 19.6175C9.89951 19.6303 10.2841 19.883 10.2841 19.883Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-dl_state" class="d-none error"></div>
                            <div id="invalid-validation-dl_state">
                                <p
                                    v-for="error of v$.fields.dl_state.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="dl_state"
                                           class="text-left error">{{ error.$message }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="form-wrapper" v-show="step === 23">
                            <div class="d-flex flex-row-reverse input-group" v-bind:class="{'not-valid': v$.fields.ssn.$error}">
                                <input id="ssn" type="text" name="ssn" class="form-control"
                                    @copy.prevent @paste.prevent @cut.prevent
                                    @keypress="onlyDigitsKeypress"
                                    placeholder="SSN" autocomplete="off" maxlength="9"
                                    v-model.lazy="fields.ssn" @input="dynamicValidation"
                                    >
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 32" fill="none">
                                    <path d="M24.2014 10.3164H4.79976C4.50978 10.3164 4.27539 10.5513 4.27539 10.8408V18.1819C4.27539 18.4714 4.50978 18.7063 4.79976 18.7063H24.2014C24.4909 18.7063 24.7258 18.4714 24.7258 18.1819V10.8408C24.7258 10.5513 24.4909 10.3164 24.2014 10.3164ZM10.7131 15.321L10.1457 16.3042L8.95906 15.4065L9.10955 16.6088H8.06081L8.21131 15.4065L7.02518 16.3042L6.4573 15.321L7.81541 14.7479L6.4573 14.1747L7.02518 13.1915L8.20397 14.084L8.06081 12.9383H9.10955L8.9664 14.084L10.1457 13.1915L10.7131 14.1747L9.35547 14.7479L10.7131 15.321ZM16.6285 15.321L16.0606 16.3042L14.8745 15.4065L15.025 16.6088H13.9762L14.1262 15.4065L12.9401 16.3042L12.3722 15.321L13.7303 14.7479L12.3722 14.1747L12.9401 13.1915L14.1194 14.084L13.9762 12.9383H15.025L14.8813 14.084L16.0606 13.1915L16.6285 14.1747L15.2704 14.7479L16.6285 15.321ZM22.5434 15.321L21.9755 16.3042L20.7894 15.4065L20.9398 16.6088H19.8911L20.0416 15.4065L18.8555 16.3042L18.2876 15.321L19.6452 14.7479L18.2876 14.1747L18.8555 13.1915L20.0343 14.084L19.8911 12.9383H20.9398L20.7967 14.084L21.9755 13.1915L22.5434 14.1747L21.1858 14.7479L22.5434 15.321Z"/>
                                    <path d="M23.5453 20.1113H5.45452C5.01982 20.1113 4.66797 20.4632 4.66797 20.8979C4.66797 21.3326 5.01982 21.6844 5.45452 21.6844H23.5453C23.9794 21.6844 24.3318 21.3326 24.3318 20.8979C24.3318 20.4632 23.9794 20.1113 23.5453 20.1113Z"/>
                                    </svg>
                                </span>
                            </div>
                            <div id="invalid-ssn" class="d-none error"></div>
                            <div id="invalid-validation-ssn">
                                <p
                                    v-for="error of v$.fields.ssn.$errors"
                                    :key="error.$uid"
                                    class="m-0"
                                >
                                    <label for="ssn" class="text-left error">{{
                                            error.$message
                                        }}</label>
                                </p>
                            </div>
                        </div>
                        <div class="next-step btn position-relative" @click="nextStep" v-show="step !== allSteps">
                            <span>
                                Next Step
                            </span>
                            <span class="next-step-span position-absolute">
                                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.36246 6.77187C9.84505 7.1708 9.8465 7.91006 9.36548 8.31087L1.98899 14.4574C1.33836 14.9995 0.350501 14.538 0.348842 13.6911L0.324819 1.42703C0.32316 0.580135 1.3092 0.114732 1.96195 0.65432L9.36246 6.77187Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                        <div class="next-step btn position-relative" @click="nextStep"
                             v-bind:class='{"disabled": !network}' v-show="step === allSteps">
                            <span>
                                Submit
                            </span>
                            <span class="next-step-span position-absolute">
                                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.36246 6.77187C9.84505 7.1708 9.8465 7.91006 9.36548 8.31087L1.98899 14.4574C1.33836 14.9995 0.350501 14.538 0.348842 13.6911L0.324819 1.42703C0.32316 0.580135 1.3092 0.114732 1.96195 0.65432L9.36246 6.77187Z" fill="white"/>
                                </svg>
                            </span>
                        </div>
                        <div class="bit-ssl">
                            <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.11899 0C4.26264 0 5.19835 0.950316 5.19835 2.11181V3.16772H5.23804C5.79032 3.16772 6.23804 3.61543 6.23804 4.16772V7.1875C6.23804 7.73978 5.79032 8.1875 5.23804 8.1875H0.999941C0.447657 8.1875 -5.81741e-05 7.73978 -5.81741e-05 7.1875V4.16772C-5.81741e-05 3.61544 0.447657 3.16772 0.999942 3.16772H1.03962V2.11181C1.03962 0.950316 1.97534 0 3.11899 0ZM3.11899 1.05591C2.53677 1.05591 2.07931 1.52051 2.07931 2.11181V3.16772H4.15867V2.11181C4.15867 1.52051 3.70121 1.05591 3.11899 1.05591Z"
                                    fill="#4B4B4B"/>
                            </svg>
                            256-BIT SSL
                        </div>
                    </div>
                    <div class="form-wrapper btn-back-wrapper" >
                        <div class="btn-back" @click="prevStep" v-show="step !== 1">
                            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.84615 0L0 4L3.84615 8L5 6.8L2.30769 4L5 1.2L3.84615 0Z" fill="white"/>
                            </svg>
                            <span>
                                Back
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-100 text-center copyright">© 2023 All Rights Reserved by {{ app_name }}</div>
    </div>
</template>

<script>
import 'vue-loading-overlay/dist/css/index.css';
import useVuelidate from "@vuelidate/core";
import {checkPhone, saveVariable, saveError, phoneMask} from '../../../common/js/commonGeneral';

import {
    checkEmail,
    dynamicValidation,
    locationChange,
    mainFormData,
    mainFormValidations,
    mountedMainForm, nextStep,
    onChangeDebtAmount,
    onChangeRequestedAmount,
    onlyAlphabetsKeypress, onlyAlphabetsPaste,
    onlyDigitsPaste,
    onlyLatinKeypress, onlyLatinPaste, payFrequencyChange, prevStep,
    saveState,
    saveStepVisitor,
    sendSubmitRequest,
    setRadioButtons,
    submit,
    submitError,
    submitSuccess
} from "../../../common/js/mainForms";
import {
    autocompleteAba, disableNextPayDay, disableSecondPayDay,
    mountedCommonForm, nextPayDayChange, onlyDigitsKeypress, removeCookies, sendRequestCheckStatusDecision,
    visibilityChangeListener
} from "../../../common/js/commonForms";
import {useLoading} from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';

export default {
    setup() {
        return {v$: useVuelidate()};
    },
    data() {
        return {
            ...mainFormData, ...{
                logoSrc: siteSettings.elements.EE_header.CE_header_logo.src,
                allSteps: 23,
                specialist: 'Emma',
                titles: {
                    1: 'Loan amount',
                    2: 'Email',
                    3: 'Purpose Of Loan',
                    4: 'Debt',
                    5: 'Your Legal Name',
                    6: 'Your Date Of Birth',
                    7: 'Your Credit Score',
                    8: 'Address Of Residence',
                    9: 'Time At Current Residence',
                    10: 'Home Ownership',
                    10.2: 'Car Ownership',
                    11: 'Cell Phone Number',
                    12: 'Source Of Income',
                    13: 'Monthly Net Income',
                    14: 'Pay information',
                    15: 'Pay dates',
                    16: 'Work information',
                    17: 'Time Employed',
                    18: 'Work Phone',
                    19: 'Bank information',
                    20: 'Active Checking Account',
                    21: 'Length of Bank Account',
                    22: 'Driver\'s license',
                    23: 'Social Security Number',
                },
                assistant_steps: {
                    1: "Hi there, I’m " + (this.specialist === undefined ? "Emma" : this.specialist) + ". I’m here to help you find your loan. Let me know how much you're looking to borrow and we'll get started with your request",
                    2: "Congratulations you're eligible to make a request, so let's continue. We'll start by collecting your contact information",
                    3: "How do you plan to use the money you'll receive?",
                    4: "How much debt do you have?",
                    5: "Let's get to know you a little better, what's your name?",
                    6: "Please enter your date of birth to confirm your age. You must be over 18 to continue.",
                    7: "What do you estimate is your credit score?",
                    8: "Next we need to learn a bit about your living circumstances",
                    9: "Next we need to learn a bit about your living circumstances",
                    10: "Next we need to learn a bit about your living circumstances",
                    11: "Please enter your phone number as it may be used by some lenders to validate your account",
                    12: "Tell us a little bit about your income and employment",
                    13: "Tell us a little bit about your income and employment",
                    14: "Tell us a little bit about your income and employment",
                    15: "Tell us a little bit about your income and employment",
                    16: "Tell us a little bit about your income and employment",
                    17: "Tell us a little bit about your income and employment",
                    18: "Tell us a little bit about your income and employment",
                    19: "Great, we're almost finished. Next we need to collect your banking information for the checking account you will receive funds if your request is successful",
                    20: "In order to receive a loan you will need an active bank account",
                    21: "Great, we're almost finished. Next we need to collect your banking information for the checking account you will receive funds if your request is successful",
                    22: "Enter your Driver's License or State ID number to complete your request",
                    23: "Everything looks good! This is the final step, in order to verify your identity, please provide your Social Security Number",
                },
                step_to_fields: {
                    1: ['requested_amount'],
                    2: ['email'],
                    3: ['reason_for_loan'],
                    4: ['debt_amount'],
                    5: ['first_name', 'last_name'],
                    6: ['dob'],
                    7: ['credit_score'],
                    8: ['zip', 'address', 'city', 'state'],
                    9: ['address_month'],
                    10: ['rent_or_own', 'own_car'],
                    11: ['home_phone', 'contact_time'],
                    12: ['income_type'],
                    13: ['net_month_income'],
                    14: ['direct_deposit', 'pay_frequency'],
                    15: ['next_pay_day', 'second_pay_day'],
                    16: ['emp_name', 'job_title'],
                    17: ['emp_time'],
                    18: ['emp_phone'],
                    19: ['routing_number', 'account_number', 'bank_phone', 'bank_name'],
                    20: ['account_type'],
                    21: ['bank_months'],
                    22: ['dl_number', 'dl_state'],
                    23: ['ssn'],
                },
                buttonColor: siteSettings.general.main_button_color.value,
                buttonColorSecond: siteSettings.general.second_button_color.value,
                mainColor: siteSettings.general.main_color.value,
                app_name: document.querySelector('title').text,
                step_carousel: 1,
            }
        };
    },
    validations() {
        return mainFormValidations;
    },
    watch: {
        fields: {
            handler(newValue, oldValue) {
                this.fieldsChanged = true;
            },
            deep: true
        }
    },
    async mounted() {
        let useLoader = useLoading();
        let loader = useLoader.show({
            container: this.$refs.formContainer
        });

        await mountedCommonForm(this);
        await mountedMainForm(this, () => {
            if (this.$cookies.isKey('specialist')) {
                this.specialist = this.$cookies.get('specialist');
                this.assistant_steps[1] = "Hi there, I’m " + this.specialist + ". I’m here to help you find your loan. Let me know how much you're looking to borrow and we'll get started with your request";
            } else {
                const names = ['Emma', 'Olivia', 'Amelia', 'Charlotte'];
                const randomIndex = Math.floor(Math.random() * 4);
                this.$cookies.set('specialist', names[randomIndex], 60 * 60);
                this.specialist = names[randomIndex];
                this.assistant_steps[1] = "Hi there, I’m " + this.specialist + ". I’m here to help you find your loan. Let me know how much you're looking to borrow and we'll get started with your request";
            }
        });

        loader.hide();
    },
    computed: {
        logoSource() {
            return this.logoSrc;
        },
        mainColor() {
            return {
                '--main-color': this.mainColor,
                '--main-button-color': this.buttonColor,
                '--main-button-color-second': this.buttonColorSecond,
            };
        },
        progressBar() {
            return {
                'width': 100 / 23 * this.step + '%',
                '--main-color': this.mainColor,
            }
        }
    },
    methods: {
        checkPhone,
        onChangeRequestedAmount,
        onlyDigitsPaste,
        onlyDigitsKeypress,
        onlyAlphabetsPaste,
        onlyAlphabetsKeypress,
        onlyLatinPaste,
        onlyLatinKeypress,
        onChangeDebtAmount,
        phoneMask,
        payFrequencyChange,
        nextPayDayChange,
        disableNextPayDay,
        disableSecondPayDay,
        dynamicValidation,
        nextStep,
        checkEmail,
        saveStepVisitor,
        prevStep,
        saveState,
        locationChange,
        autocompleteAba,
        submit,
        visibilityChangeListener,
        sendSubmitRequest,
        sendRequestCheckStatusDecision,
        submitSuccess,
        removeCookies,
        submitError,
        saveError,
        saveVariable,
        setRadioButtons,
    },
};
</script>

<style lang="scss">
@import "../../sass/main_form.scss";
</style>
