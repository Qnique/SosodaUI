<template>
  <div
    class="main-container w-[402px] h-[931px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="w-[125px] h-[117px] bg-[url('../public/sosoda-logo.png')] bg-cover bg-no-repeat relative z-[9] mt-[79.502px] mr-0 mb-0 ml-[145px]"
    ></div>
    <span
      class="block h-[42px] font-['Poppins'] text-[28px] font-semibold leading-[42px] text-[#000] relative text-left whitespace-nowrap z-[19] mt-[184.498px] mr-0 mb-0 ml-[155px]"
      >LOGIN</span
    >
    <div
      class="flex w-[342px] flex-col gap-[60px] items-center flex-nowrap relative z-[3] mt-[47px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]"
      >
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[6]"
            >Phone Number *</span
          >
          <div
            class="flex gap-[15px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]"
          >
            <div
              class="flex w-[91px] h-[42px] pt-[12px] pr-0 pb-[12px] pl-[15px] gap-[22px] items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[8]"
            >
              <span
                class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative whitespace-nowrap z-[9]"
                >+60</span
              >
              <!-- <div
                class="w-[10px] h-[10px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-02/0yEaRoVtf2.png)] bg-cover bg-no-repeat relative z-10"
              ></div> -->
            </div>
            <div :class="[
                  inputError ? 'border-red-500' : '',
                  'border'
                ]" 
              class="flex w-[236px] h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[11]"
            >
              <input v-model="phoneNo" @input="sanitizePhone"
                class="phoneNo w-[210px] h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-black relative text-left whitespace-nowrap z-[12] bg-[#fafafa]"
              />
            </div>
          </div>
        </div>
        <div class="w-[341px] h-[17px] shrink-0 rounded-[20px] relative z-[13]">
          <div
            class="w-[317px] h-[17px] font-['Poppins'] text-[11px] font-normal leading-[16.5px] absolute top-0 left-1/2 text-left translate-x-[-46.21%] translate-y-0 whitespace-nowrap z-[15]"
          >
            <span
              class="font-['Poppins'] text-[11px] font-normal leading-[16.5px] text-[#292929] relative text-left"
              >I confirm I have read and accept the </span
            ><span @click="goToTermsPage"
              class="cursor-pointer font-['Poppins'] text-[11px] font-normal leading-[16.5px] text-[#292929] relative text-left underline"
              >Terms & Conditions</span
            >
          </div>
          <div @click="checked = !checked" class="relative w-4 h-4 cursor-pointer">
            <!-- Outer Circle -->
            <div
              class="w-4 h-4 rounded-full border border-[#292929] flex items-center justify-center transition-colors duration-200"
              :class="[
                  checked ? 'bg-[#292929]' : '',
                  showError ? 'border-red-500' : 'border-[#292929]',
                  'border'
                ]">
              <!-- Checkmark -->
              <svg
                v-if="checked"
                class="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[16]"
      >
        <button @click="goToVerification"
          class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[17]">
          <span
            class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[18]"
            >SEND OTP</span>
        </button>
      </div>
    </div>
    <div
      class="w-[420px] h-[395px] bg-[url('../public/background-gradient.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[1]"
    ></div>
    <div
      class="w-[854.894px] h-[854.894px] bg-[url('../public/Ellipse.png')] bg-cover bg-no-repeat rounded-[50%] absolute top-[246px] left-1/2 translate-x-[-49.95%] translate-y-0 z-[2]"
    ></div>
    <transition name="fade">
      <div
        v-if="showTnc"
        class="overlay"
        @click="showTnc = false"
      ></div>
    </transition>
    <transition name="slide-up">
      <div
        v-if="showTnc"
        class="modal flex w-[342px] flex-col gap-[30px] items-start flex-nowrap absolute top-[60px] left-[30px] z-[85] mb-[20px]"
      >
        <div class="w-full text-center">
          <span
            class="inline-block font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] mt-[20px] mx-[20px]"
          >
            Terms & Condition
          </span>
        </div>
        <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
        >
          <span
              class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
              >Account Registration</span
          ><span
              class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]"
              >To access our services, you must create an account with accurate,
              complete, and up-to-date information. You are responsible for
              maintaining the security of your login credentials.</span
          >
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Service Coverage</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                Sosoda provides gas cylinder refilling and delivery services
                  within selected areas in Malaysia. Availability may vary based on
                  your location.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Orders & Payments</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                All orders must be confirmed via our platform. Payments must be
                  made through the accepted payment methods. Sosoda reserves the
                  right to cancel any order in the case of invalid transactions or
                  failed payment.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[20.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Delivery & Access</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                It is your responsibility to provide a valid and accessible
                  delivery address. Failed deliveries due to incorrect information
                  or restricted access may result in additional charges.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Safety & Usage Compliance</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                You agree to use all cylinders and equipment provided by Sosoda
                  in accordance with safety standards, product instructions, and
                  Malaysian regulations. Sosoda is not liable for any damage caused
                  by misuse or unauthorised handling.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >User Conduct</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                You agree not to:<br />Use our platform for unlawful
                  activities.<br />Interfere with or disrupt the platform’s
                  functionality.<br />Provide false or misleading information.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Limitation of Liability</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                While Sosoda strives to provide a reliable service, we do not
                  guarantee uninterrupted or error-free access. We are not liable
                  for any indirect, incidental, or consequential damages resulting
                  from your use of the platform.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[13.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Termination</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                Sosoda reserves the right to suspend or terminate your account if
                  any violations of these Terms are found.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[18.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Amendments</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                These Terms may be updated from time to time. You will be
                  notified of any significant changes. Continued use of the platform
                  after updates means you accept the revised terms.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27] ml-[20px]"
            >
            <span
                class="h-[13.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                >Governing Law</span>
            <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
                These Terms are governed by the laws of Malaysia. Any disputes
                  shall be resolved under Malaysian jurisdiction.</span>
        </div>
        <div
            class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[57] m-[10px]"
            >
            <span
                class="h-[18.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[58]"
                >Contact Us</span
            >
            <div
                class="self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] tracking-[0.1px] relative text-left z-[59]"
            >
                <span
                class="font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left"
                >For questions or support, please contact our team via Live Chat
                or email us at </span
                ><span
                class="cursor-pointer font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#1b17f5] tracking-[0.1px] relative text-left"
                >support@sosoda.com.my.</span
                >
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 justify-center">
          <button @click="agreeTNC"
            class="flex w-[156px] h-[50px] px-[48px] justify-center items-center bg-[#292929] rounded-[10px] ml-[20px] mb-[15px]"
          >
            <span
              class="font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] whitespace-nowrap"
            >
              AGREE
            </span>
          </button>
          <button @click="showTnc = !showTnc"
            class="flex w-[156px] h-[50px] px-[48px] justify-center items-center bg-[rgba(255,255,255,0.2)] rounded-[10px] border-solid border-[1.25px] border-[#a5a5a5] mb-[15px]"
          >
            <span
              class="font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#a5a5a5] whitespace-nowrap"
            >
              CLOSE
            </span>
          </button>
        </div>
        

      </div>
    </transition>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify'; 

export default{
  data(){
    return{
      phoneNo: '',
      checked: false,
      showError: false,
      inputError: false,
      showTnc: false,
    }
  },
  methods:{
    sanitizePhone() {
      // Remove non-digit characters
      let digits = this.phoneNo.replace(/\D/g, '');

      // Remove leading 0 or 60
      if (digits.startsWith('0')) {
        digits = digits.slice(1);
      } else if (digits.startsWith('60')) {
        digits = digits.slice(2);
      }

      this.phoneNo = digits;
    },
    agreeTNC(){
      this.checked = true;
      this.showTnc = false;
    },
    async goToVerification() {
       if (this.phoneNo !== '') {
          if(this.checked){
            sessionStorage.setItem('phoneNoUser', '60' + this.phoneNo);
            try{
              const response = await api.post('System/MemberLogin', JSON.stringify(this.phoneNo));
              this.$router.push({ name: 'Verification' });
            }
            catch (error) {
              toast.error(error.response.data)
            }             
          }
          else{
            this.showError = !this.checked;
            this.showTnc = true;            
          }                          
      }
      else {
        this.inputError = true;
      }    
    },
    goToTermsPage() {
      this.$router.push({ name: 'Terms' });
    }
  }
}
</script>
<style scoped>
/* Fade transition for overlay */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Slide-up transition for modal */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to, .slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

/* Fullscreen dark overlay */
.overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  justify-content: bottom;
  align-items: flex-end;
  border-radius: 10px;
}

/* Modal styling */
.modal {
  position: fixed;
  width: 402px;
  bottom: 0;
  left: 50%;
  overflow-y: auto;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
  z-index: 30;
}
</style>
