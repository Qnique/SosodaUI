<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative z-[27] mt-[49.723px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToAccount"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/EBRdUAgkM8.png)] bg-cover bg-no-repeat relative overflow-hidden z-[28]"
      ></div>
      <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[29]"
        >Bank Accounts & Cards</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/wdH3Q7RGp9.png)] bg-cover bg-no-repeat relative overflow-hidden z-30"
      ></div>
    </div>
    <div
      class="flex w-[372px] flex-col gap-[12px] items-start flex-nowrap relative z-[1] mt-[35px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[2]"
        >Credit / Debit Card</span
      >
      <div
        class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[3]"
      >
        <div class="w-[342px] h-[170px] shrink-0 text-[0px] relative z-[4]">
          <span
            class="block h-[21px] font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#fff] relative text-left whitespace-nowrap z-[8] mt-[53px] mr-0 mb-0 ml-[15px]"
            >Hong Leong Bank Berhad</span
          ><span
            class="block h-[21px] font-['Poppins'] text-[14px] font-normal leading-[20.991px] text-[#fff] tracking-[3px] relative text-left whitespace-nowrap z-[11] mt-[5px] mr-0 mb-0 ml-[15px]"
            >1111 1111 1111 1111</span
          >
          <div
            class="w-[342px] h-[170px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/k5cwPX4vh0.png)] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[5]"
          ></div>
          <div
            class="flex w-[60px] h-[18px] pt-[2px] pr-[12px] pb-[2px] pl-[12px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-[20px] opacity-50 absolute top-[15px] left-[15px] z-[6]"
          >
            <span
              class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#292929] relative text-left whitespace-nowrap z-[7]"
              >Default</span
            >
          </div>
          <div
            class="w-[37.113px] h-[12px] absolute top-[18px] left-[289.887px] z-[12]"
          ></div>
          <span
            class="flex h-[42px] justify-start items-center font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#fff] absolute top-[121.5px] left-[15px] text-left whitespace-nowrap z-[9]"
            >RM 18.88</span
          >
          <div
            class="w-[15px] h-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/dNhEo9515Q.png)] bg-cover bg-no-repeat absolute top-[127.5px] left-[312px] overflow-hidden z-10"
          ></div>
        </div>
        <div class="w-[342px] h-[170px] shrink-0 relative z-[13]">
          <div
            class="w-[37.113px] h-[12px] relative z-[19] mt-[18px] mr-0 mb-0 ml-[289.887px]"
          ></div>
          <span
            class="block h-[21px] font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#fff] relative text-left whitespace-nowrap z-[15] mt-[23px] mr-0 mb-0 ml-[15px]"
            >Hong Leong Bank Berhad</span
          ><span
            class="block h-[21px] font-['Poppins'] text-[14px] font-normal leading-[20.991px] text-[#fff] tracking-[3px] relative text-left whitespace-nowrap z-[18] mt-[5px] mr-0 mb-0 ml-[15px]"
            >1111 1111 1111 1111</span
          >
          <div
            class="w-[342px] h-[170px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/6SaqyXo3QP.png)] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[14]"
          ></div>
          <span
            class="flex h-[42px] justify-start items-center font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#fff] absolute top-[121.5px] left-[15px] text-left whitespace-nowrap z-[16]"
            >RM 18.88</span
          >
          <div
            class="w-[15px] h-[30px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/s7Hx662UDz.png)] bg-cover bg-no-repeat absolute top-[127.5px] left-[312px] overflow-hidden z-[17]"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="w-[52px] h-[8px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/O5qaLqO5AU.png)] bg-cover bg-no-repeat relative z-20 mt-[12px] mr-0 mb-0 ml-[175px]"
    ></div>
    <button @click="addCardPage"
      class="flex w-[342px] h-[40px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[5px] justify-center items-center flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[10px] border-solid border-[1.25px] border-[#a5a5a5] relative z-[21] mt-[20.777px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/Xxt4eiP463.png)] bg-cover bg-no-repeat relative overflow-hidden z-[22]"
      ></div>
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[23]"
        >Add Card</span
      >
    </button>
    <span
      class="block h-[20px] font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap mt-[40px] mr-0 mb-0 ml-[30px]"
      >Bank Account</span
    >
    <div
      class="w-[345px] h-[50px] bg-[#fff] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[32] mt-[13.223px] mr-0 mb-0 ml-[29px]"
    >
      <div
        class="w-[31.59%] h-[68%] text-[0px] absolute top-[16%] left-[15.94%] z-[38]"
      >
        <span
          class="block h-[21px] font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] relative text-left whitespace-nowrap z-[38] mt-0 mr-0 mb-0 ml-0"
          >CIMB Bank BHD</span
        ><span
          class="block h-[15px] font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[37] mt-[-2px] mr-0 mb-0 ml-0"
          >8888 8888 8888 8888</span
        >
      </div>
      <div
        class="w-[10.23%] h-3/5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/rD55vV63eB.png)] bg-cover bg-no-repeat rounded-[3px] absolute top-[20%] left-[2.92%] z-[33]"
      >
        <div
          class="w-[30px] h-[30px] relative z-[39] mt-0 mr-0 mb-0 ml-[2.412px]"
        ></div>
      </div>
      <div
        class="flex w-[14.62%] h-[15.132px] pt-[2px] pr-[12px] pb-[2px] pl-[12px] gap-[10px] justify-center items-center flex-nowrap rounded-[20px] border-solid border border-[#a5a5a5] absolute top-[11px] left-[82.46%] z-[34]"
      >
        <span
          class="h-[13px] shrink-0 basis-auto font-['Poppins'] text-[9px] font-medium leading-[13px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[35]"
          >Default</span
        >
      </div>
    </div>
    <div
      class="w-[345px] h-[50px] bg-[#fff] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[41] mt-[11px] mr-0 mb-0 ml-[29px]"
    >
      <div
        class="w-[31.59%] h-[68%] text-[0px] absolute top-[16%] left-[15.94%] z-[45]"
      >
        <span
          class="block h-[21px] font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] relative text-left whitespace-nowrap z-[45] mt-0 mr-0 mb-0 ml-0"
          >CIMB Bank BHD</span
        ><span
          class="block h-[15px] font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[44] mt-[-2px] mr-0 mb-0 ml-0"
          >8888 8888 8888 8888</span
        >
      </div>
      <div
        class="w-[10.23%] h-3/5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/1Nb4i4Q2Ko.png)] bg-cover bg-no-repeat rounded-[3px] absolute top-[20%] left-[2.92%] z-[42]"
      >
        <div
          class="w-[30px] h-[30px] relative z-[46] mt-0 mr-0 mb-0 ml-[2.412px]"
        ></div>
      </div>
    </div>
    <div
      class="w-[345px] h-[50px] bg-[#fff] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[48] mt-[11px] mr-0 mb-0 ml-[29px]"
    >
      <div
        class="w-[31.59%] h-[68%] text-[0px] absolute top-[16%] left-[15.94%] z-[52]"
      >
        <span
          class="block h-[21px] font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] relative text-left whitespace-nowrap z-[52] mt-0 mr-0 mb-0 ml-0"
          >CIMB Bank BHD</span
        ><span
          class="block h-[15px] font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[51] mt-[-2px] mr-0 mb-0 ml-0"
          >8888 8888 8888 8888</span
        >
      </div>
      <div
        class="w-[10.23%] h-3/5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/zAAiEinryO.png)] bg-cover bg-no-repeat rounded-[3px] absolute top-[20%] left-[2.92%] z-[49]"
      >
        <div
          class="w-[30px] h-[30px] relative z-[53] mt-0 mr-0 mb-0 ml-[2.412px]"
        ></div>
      </div>
    </div>
    <button @click="addBankPage"
      class="flex w-[342px] h-[40px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[5px] justify-center items-center flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[10px] border-solid border-[1.25px] border-[#a5a5a5] relative z-[24] mt-[20px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/Ps9ZSd5NT5.png)] bg-cover bg-no-repeat relative overflow-hidden z-[25]"
      ></div>
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[26]"
        >Add Bank</span
      >
    </button>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';

const router = useRouter();

const backToAccount = () => {
  router.push({ name: 'Accounts' });
};

const addBankPage = () => {
  router.push({ name: 'AddBanks' });
};

const addCardPage = () => {
  router.push({ name: 'AddCards' });
};
</script>
