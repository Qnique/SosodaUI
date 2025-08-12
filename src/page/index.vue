<template>
  <div
    class="main-container w-[402px] h-[931px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="w-[125px] h-[117px] bg-[url('../public/sosoda-logo.png')] bg-cover bg-no-repeat relative z-20 mt-[79.502px] mr-0 mb-0 ml-[145px]"
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
              <input v-model="phoneNo"
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
      inputError: false
    }
  },
  methods:{
    async goToVerification() {
       if (this.phoneNo !== '') {
          if(this.checked){
            // const payload = {
            //   phoneNo: this.phoneNo
            // }
            sessionStorage.setItem('phoneNoUser', this.phoneNo);
            try{
              const response = await api.post('System/MemberLogin', JSON.stringify(this.phoneNo));
              this.$router.push({ name: 'Verification' });
            }
            catch (error) {
              toast.error(error.response.data.message)
            }             
          }
          else{
            this.showError = !this.checked;            
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

