<template>
  <div
    class="main-container w-[420px] h-[931px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="w-[125px] h-[117px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/c5hz1U9dGK.png)] bg-cover bg-no-repeat relative z-[1] mt-[7px] mr-0 mb-0 ml-[142px]"
    ></div>

    <div class="relative w-[320px] h-[100px] bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] mt-[32px] ml-[40px] z-[18]">
    <!-- Welcome Text -->
    <span class="absolute top-[12px] left-[22px] text-[14px] font-semibold text-[#080808] font-['Poppins'] leading-[21px] z-[32]">
        Welcome back, Chloe!
    </span>   
    <!-- Decorative Line -->
    <div class="absolute top-[42.5px] left-[22px] w-[276px] h-px bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/Wnv21gjrYy.png')] bg-cover bg-no-repeat z-[35]"></div>

    <!-- Stats + Avatar -->
    <div class="absolute top-[50px] left-[22px] flex justify-between items-center w-[276px] z-[19]">
        <!-- Stats -->
        <div class="flex gap-[28px]">
        <div class="flex flex-col items-center cursor-pointer" @click="goToWalletPage">
            <span class="text-[20px] font-semibold leading-[24px] text-[#000] font-['Poppins']">20</span>
            <span class="text-[10px] font-medium leading-[15px] text-[#000] font-['Poppins']">Wallet</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer" @click="goToVouchersPage">
            <span class="text-[20px] font-semibold leading-[24px] text-[#000] font-['Poppins']">2</span>
            <span class="text-[10px] font-medium leading-[15px] text-[#000] font-['Poppins']">Vouchers</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer" @click="goToStampsPage">
            <span class="text-[20px] font-semibold leading-[24px] text-[#000] font-['Poppins']">4</span>
            <span class="text-[10px] font-medium leading-[15px] text-[#000] font-['Poppins']">Stamp</span>
        </div>
        </div>

        <!-- Avatar -->
        <div @click="goToQRPage" class="cursor-pointer w-[40px] h-[40px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/Z34EznVhaO.png')] bg-cover bg-no-repeat overflow-hidden z-30"></div>
    </div>
    </div>


    <div
      class="flex w-[342px] flex-col gap-[11px] items-start flex-nowrap relative z-[42] mt-[10px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[118px] flex-col gap-[-1px] items-start shrink-0 flex-nowrap relative z-[43]"
      >
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[44]"
          >Services</span
        ><span
          class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[45]"
          >Your one-stop service center</span
        >
      </div>
      <div
        class="flex flex-col gap-[25px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]"
      >
        <div
          class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[47]"
        >
          <div @click="refill" class="w-[166px] h-[114px] shrink-0 relative z-[48] cursor-pointer">
            <div
              class="w-[166px] h-[120.501px] absolute top-[-6.003px] left-0 z-[49]"
            >
              <div
                class="w-[116.9px] h-[109px] absolute top-0 left-[23.551px] z-[51]"
              >
                <div
                  class="w-[116.9px] h-[82.641px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/eHGpm19LHB.png)] bg-cover bg-no-repeat relative z-[55] mt-0 mr-0 mb-0 ml-0"
                ></div>
                <div
                  class="flex w-[103px] flex-col items-center flex-nowrap relative z-[52] mt-[-3.641px] mr-0 mb-0 ml-[7.949px]"
                >
                  <span
                    class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#fff] relative text-center whitespace-nowrap z-[53]"
                    >Refill + Swap</span
                  ><span
                    class="h-[9px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[6px] font-normal leading-[9px] text-[#fff] relative text-center capitalize whitespace-nowrap z-[54]"
                    >We deliver new, pick up old.</span
                  >
                </div>
              </div>
              <div
                class="w-[166px] h-[83px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/HqCUJoMcqp.png)] bg-cover bg-no-repeat rounded-[12px] absolute top-[37.501px] left-0 z-50"
              ></div>
            </div>
          </div>
          <div @click="returnMethod" class="w-[166px] h-[114.551px] shrink-0 relative z-[56] cursor-pointer">
            <div class="w-[166px] h-[114.551px] absolute top-0 left-0 z-[57]">
              <div
                class="w-[78.758px] h-[67.113px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/G5v1pSJC16.png)] bg-cover bg-no-repeat absolute top-0 left-[43.621px] z-[62]"
              ></div>
              <div
                class="w-[166px] h-[83px] text-[0px] rounded-[10px] absolute top-[31.551px] left-0 z-[58]"
              >
                <span
                  class="block h-[24px] font-['Poppins'] text-[16px] font-bold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[60] mt-[38px] mr-0 mb-0 ml-[33.91px]"
                  >Return Only</span
                ><span
                  class="block h-[11px] font-['Poppins'] text-[7px] font-normal leading-[10.5px] text-[#fff] relative text-left whitespace-nowrap z-[61] mt-0 mr-0 mb-0 ml-[34.922px]"
                  >We pick up, you get refund.</span
                >
                <div
                  class="w-[166px] h-[83px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/EyVhPbeiEG.png)] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[59]"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[342px] h-[114px] shrink-0 relative z-[63]">
          <div
            class="flex w-[342px] h-[100px] pt-[20px] pr-[20px] pb-[20px] pl-0 flex-col justify-center items-start flex-nowrap rounded-[10px] relative z-[65] mt-0 mr-0 mb-0 ml-0"
          >
            <div
              class="w-[342px] h-[100px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-02/R9eG7dJURc.png)] bg-cover bg-no-repeat rounded-[10px] relative z-[66]"
            ></div>
          </div>

        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] gap-[10px] items-start flex-wrap relative z-[37] mt-[30.449px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="goToAboutUsPage"
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/OB1w7GSiFC.png)] bg-cover bg-no-repeat rounded-[13px] relative z-[38]"
      ></div>
      <div
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/NLtT2bY2FT.png)] bg-cover bg-no-repeat rounded-[13px] relative z-40"
      ></div>
      <div
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/vPeWop1RdT.png)] bg-cover bg-no-repeat rounded-[13px] relative z-[39]"
      ></div>
      <div
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/nkR3TXJqbd.png)] bg-cover bg-no-repeat rounded-[13px] relative z-[41]"
      ></div>
    </div>
    <div
      class="w-[362px] h-[60px] bg-[#292929] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[3] mt-[39.502px] mr-0 mb-0 ml-[20px]"
    >
      <div
        class="flex w-[301px] gap-[55px] items-center flex-nowrap relative z-[4] mt-[11px] mr-0 mb-0 ml-[30px]"
      >
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[5]" style="padding: 5px;">
          <div
            class="w-[30px] h-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/ekdR6dBc6H.png)] bg-cover bg-no-repeat relative z-[6] mt-0 mr-0 mb-0 "
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[12px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[7] mt-[5px] mr-0 mb-0 ml-0"
            >HOME</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[8]" style="padding: 5px;">
          <div
            class="w-[30px] h-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/jG7OPL3wFW.png)] bg-cover bg-no-repeat relative z-[9] "
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-10 mt-[4px] mr-0 mb-0 ml-0"
            >MENU</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[8]" style="padding: 5px;">
          <div
              class="w-[30px] h-[25px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/i4a4gyqkvn.png)] bg-[length:100%_100%] bg-no-repeat relative z-[13] mt-[1.667px] mr-0 mb-0"
        ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[13] mt-[7px] mr-0 mb-0 ml-0"
            >ORDER</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[15]" style="padding: 5px;" @click="goToAccountPage">
          <div
            class="w-[30px] h-[25px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/G6fkQj2k6a.png)] bg-cover bg-no-repeat relative z-[16] mt-0 mr-0 mb-0"
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[17] mt-[7px] mr-0 mb-0"
            >ME</span
          >
        </div>
      </div>
    </div>
    <div
      class="h-[1463.998px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/J2efEmTjok.png)] bg-cover bg-no-repeat absolute top-[-2px] left-[-442px] right-[-441px]"
    ></div>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAboutUsPage = () => {
  router.push({ name: 'AboutUs' });
};

const goToStampsPage = () => {
  router.push({ name: 'Stamps' });
};

const goToVouchersPage = () => {
  router.push({ name: 'Vouchers' });
};

const goToAccountPage = () => {
  router.push({ name: 'Accounts' });
};

const goToWalletPage = () => {
  router.push({ name: 'Wallet' });
};

const goToQRPage = () => {
  router.push({ name: 'QRCodes' });
};

const refill = () => {
  router.push({ name: 'Methods' });
};

const returnMethod = () => {
  router.push({ name: 'ReturnMethods' });
};
</script>
