<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative z-[15] mt-[49.574px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToHome"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[16]"
      ></div>
      <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[17]"
        >Voucher details</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 bg-[url('../public/white.png')] bg-cover bg-no-repeat relative overflow-hidden z-[18]"
      ></div>
    </div>
    <div
      class="flex w-[342px] flex-col gap-[15px] items-start flex-nowrap relative mt-[35.426px] mr-0 mb-0 ml-[30px]"
    >
      <div class="w-[342px] h-[150px] shrink-0 rounded-[8px] relative z-[1]">
        <div
          class="flex w-[342px] h-[150px] pt-0 pr-[30px] pb-0 pl-[90px] gap-[40px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-02/EqFRvbZx1X.png)] bg-cover bg-no-repeat justify-end items-center flex-nowrap rounded-[8px] absolute top-0 left-0 z-[2]"
        >
          <div
            class="w-[216px] shrink-0 font-['Poppins'] text-[48px] font-bold leading-[96px] relative text-center whitespace-nowrap z-[3]"
          >
            <span
              class="font-['Poppins'] text-[64px] font-bold leading-[76.8px] text-[#fff] relative text-center"
              >RM3</span
            ><span
              class="font-['Poppins'] text-[48px] font-bold leading-[71.968px] text-[#fff] relative text-center"
            >
            </span
            ><span
              class="font-['Poppins'] text-[36px] font-semibold leading-[71.968px] text-[#fff] relative text-center"
              >  OFF</span
            >
          </div>
          <div
            class="w-[25px] h-[150px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/175Y5MJ5BY.png)] bg-cover bg-no-repeat relative z-[4]"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]"
      >
        <div
          class="flex w-[140px] flex-col items-start shrink-0 flex-nowrap relative z-[6]"
        >
          <span
            class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[23.989px] text-[#292929] relative text-left whitespace-nowrap z-[7]"
            >RM3 OFF</span
          ><span
            class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[8]"
            >Redemption Limit: Unlimited</span
          >
          <div
            class="w-[140px] self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[9]"
          >
            <span
              class="font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#000] tracking-[0.1px] relative text-left"
              >Redeem with </span
            ><span
              class="font-['Poppins'] text-[10px] font-semibold leading-[20px] text-[#000] tracking-[0.1px] relative text-left"
              >100</span
            ><span
              class="font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#000] tracking-[0.1px] relative text-left"
            >
              Stamps</span
            >
          </div>
        </div>
        <!-- <div
          class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-10"
        >
          <span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[11]"
            >Details</span
          ><span
            class="flex w-[342px] h-[105px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left z-[12]"
            >Lorem ipsum dolor sit amet consectetur. Quam aliquet quam aenean
            <br />viverra euismod nam nisl tristique augue. Auctor enim rhoncus
            aliquet platea aliquam <br />dui lectus placerat. Ultricies mi urna
            pharetra pellentesque mauris proin. <br />Lacus nulla tellus
            ullamcorper sed.</span
          >
        </div> -->
      </div>
    </div>
    <div
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[13] mt-[300px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[14]"
        >Redeem Now</span
      >
    </div>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';

const router = useRouter();

const backToHome = () => {
  router.push({ name: 'Home' });
};
</script>
