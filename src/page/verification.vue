<template>
  <div
    class="main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="w-[125px] h-[117px] bg-[url('../public/sosoda-logo.png')] bg-cover bg-no-repeat relative z-[19] mt-[70px] mr-0 mb-0 ml-[145px]"
    ></div>
    <span
      class="block h-[42px] font-['Poppins'] text-[28px] font-semibold leading-[42px] text-[#000] relative text-left whitespace-nowrap z-[2] mt-[183.601px] mr-0 mb-0 ml-[100px]"
      >VERIFICATION</span
    >
    <div
      class="flex w-[342px] flex-col gap-[60px] items-center flex-nowrap relative z-[3] mt-[70px] mr-0 mb-0 ml-[28px]"
    >
      <div
        class="flex w-[270px] flex-col gap-[30px] items-start shrink-0 flex-nowrap relative z-[4]"
      >
        <div
          class="flex gap-[22px] items-center self-stretch shrink-0 flex-nowrap relative z-[5]"
        >
        <input id="first-code" v-model="first" @input="handleInput(0)"
        @keydown.backspace="handleBackspace(0)" ref="firstRef"
        :class="[
                  firstError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
        type="number"
        maxlength="1"
        class="no-spinner flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        />

        <input id="second-code" v-model="second" @input="handleInput(1)" type="number"
        @keydown.backspace="handleBackspace(1)" ref="secondRef"
        :class="[
                  secondError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
        maxlength="1"
        class="no-spinner flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        />

        <input id="third-code" v-model="third" @input="handleInput(2)"
        @keydown.backspace="handleBackspace(2)" ref="thirdRef"
        :class="[
                  thirdError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
        type="number"
        maxlength="1"
        class="no-spinner flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        />

        <input id="four-code" v-model="four" @input="handleInput(3)"
        @keydown.backspace="handleBackspace(3)" ref="fourRef"
        :class="[
                  fourError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
        type="number"
        maxlength="1"
        class="no-spinner flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        /> 
                  
        </div>
        <div
          class="flex gap-[5px] items-center self-stretch shrink-0 flex-nowrap relative z-[14]"
        >
          <span
            class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[15]"
            >Didn’t receive the verification OTP?</span>
            <span
              v-if="countdown > 0"
              class="text-[#999] basis-auto font-['Poppins'] text-[12px]  font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[15]"
            >
              Resend in {{ countdown }}s
            </span>
            <span @click="resendCode" v-else
            class="cursor-pointer h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#1b17f5] relative text-left whitespace-nowrap z-[16]"
            >Resend</span
          >
        </div>
      </div>
      <button @click="goToSubmit"
        class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[17]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[18]"
          >SUBMIT</span
        >
    </button>
    </div>
    <div
      class="h-[334.615px] bg-[url('../public/background-gradient.png')] bg-cover bg-no-repeat absolute top-0 left-0 right-0"
    ></div>
    <div
      class="w-[402px] h-[642.001px] bg-[url('../public/Rectangle.png')] bg-cover bg-no-repeat absolute bottom-[-10.001px] left-1/2 translate-x-[-50%] translate-y-0 z-[1]"
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
      first: '',
      second: '',
      third: '',
      four: '',
      firstError: false,
      secondError: false,
      thirdError: false,
      fourError: false,
      countdown: 60,
      timer: null
    }
  },
  mounted() {
    this.startCountdown();
  },
  methods:{
    handleInput(index) {
      const refs = ['firstRef', 'secondRef', 'thirdRef', 'fourRef'];
      const values = ['first', 'second', 'third', 'four'];

      if (this[values[index]] && index < refs.length - 1) {
        this.$refs[refs[index + 1]].focus();
      }
    },
    handleBackspace(index) {
      const refs = ['firstRef', 'secondRef', 'thirdRef', 'fourRef'];
      const values = ['first', 'second', 'third', 'four'];

      if (this[values[index]] === '' && index > 0) {
        this.$refs[refs[index - 1]].focus();
      }
    },
    async goToSubmit() {
      if(this.first === '')
      {
        this.firstError = true;
      } 
      
      if(this.second === '')
      {
        this.secondError = true;
      }

      if(this.third === '')
      {
        this.thirdError = true;
      }

      if(this.four === '')
      {
        this.fourError = true;
      }

      if(this.first !== '' && this.second !== '' && this.third !== '' && this.four !== '')
      {
        const userPhoneNo = sessionStorage.getItem('phoneNoUser');
        const payload = {
          PhoneNo: userPhoneNo,
          Code: this.first.toString() + this.second.toString() + this.third.toString() + this.four.toString()
        };
        try{
          const response = await api.post('Member/MemberVerification', JSON.stringify(payload));
          if(response.data.data !== null){
            sessionStorage.setItem('IdUser', response.data.data.id);
            sessionStorage.removeItem('phoneNoUser');

            this.$router.push({ name: 'Home' });
          }
          else{
            this.$router.push({ name: 'SignUp' });
          }
        }
        catch (error) {
          toast.error(error.response.data)
        }        
      }               
    },
    startCountdown() {
      this.countdown = 60;
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    async resendCode() {
      const phoneNo = sessionStorage.getItem('phoneNoUser');
      try{
        this.startCountdown();
          const response = await api.post('System/MemberLogin', JSON.stringify(phoneNo));
            if(response.data){
                this.$router.push({ name: 'Verification' });
            }                
        }
        catch (error) {
          const message =
            error?.response?.data?.message || // server-defined error
            error?.response?.data ||          // raw response body
            error?.message ||                 // JS error message
            'Something went wrong';           // fallback

          toast.error(message); 
        }
    },
    beforeUnmount() {
      clearInterval(this.timer);
    }
  }
}
</script>
<style>
/* Chrome, Safari, Edge, Opera */
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.no-spinner[type="number"] {
  -moz-appearance: textfield;
}

</style>