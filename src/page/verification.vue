<template>
  <div
    class="main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="w-[125px] h-[117px] bg-[url('../public/sosoda-logo.png')] bg-cover bg-no-repeat relative z-[19] mt-[70px] mr-0 mb-0 ml-[135px]"
    ></div>
    <span
      class="block h-[42px] font-['Poppins'] text-[28px] font-semibold leading-[42px] text-[#000] relative text-left whitespace-nowrap z-[2] mt-[183.601px] mr-0 mb-0 ml-[95px]"
      >VERIFICATION</span
    >
    <div
      class="flex w-[342px] flex-col gap-[60px] items-center flex-nowrap relative z-[3] mt-[70px] mr-0 mb-0 ml-[23px]"
    >
      <div
        class="flex w-[258px] flex-col gap-[30px] items-start shrink-0 flex-nowrap relative z-[4]"
      >
        <div
          class="flex gap-[22px] items-center self-stretch shrink-0 flex-nowrap relative z-[5]"
        >
        <input id="first-code"
        type="text"
        maxlength="1"
        class="flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        />

        <input id="second-code"
        type="text"
        maxlength="1"
        class="flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        />

        <input id="third-code"
        type="text"
        maxlength="1"
        class="flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        />

        <input id="four-code"
        type="text"
        maxlength="1"
        class="flex w-[48px] h-[44.8px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6] text-center font-['Poppins'] text-[16px] text-[#000] leading-[24px]"
        /> 
                  
        </div>
        <div
          class="flex gap-[5px] items-center self-stretch shrink-0 flex-nowrap relative z-[14]"
        >
          <span
            class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[15]"
            >Didn’t receive the verification OTP?</span
          ><span
            class="cursor-pointer h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#1b17f5] relative text-left whitespace-nowrap z-[16]"
            >Resend</span
          >
        </div>
      </div>
      <button @click="goToTerms"
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
      class="w-[420px] h-[642.001px] bg-[url('../public/Rectangle.png')] bg-cover bg-no-repeat absolute bottom-[-10.001px] left-1/2 translate-x-[-50%] translate-y-0 z-[1]"
    ></div>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';

const router = useRouter();

const goToTerms = () => {
  router.push({ name: 'SignUp' });
};
</script>
