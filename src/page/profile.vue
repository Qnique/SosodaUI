<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-30 mt-[50.148px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToAccount" class="cursor-pointer w-[55px] h-[21px] shrink-0 relative z-[31]">
        <span
          class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#fff] absolute top-0 left-[20px] text-left whitespace-nowrap z-[32]"
          >Back</span
        >
        <div
          class="w-[10px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/Z89mjpEFBB.png)] bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[33]"
        ></div>
      </div>
      <span
        class="h-[42px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#fff] relative text-left whitespace-nowrap z-[34]"
        >Edit Profile</span
      >
    </div>
    <div
      class="w-[402px] h-[233px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/Yh30bN0vWk.png)] bg-cover bg-no-repeat absolute top-0 left-0"
    ></div>
    <div
      class="w-[100px] h-[100px] rounded-[50px] absolute top-[163px] left-1/2 translate-x-[-50%] translate-y-0 z-[3]"
    >
      <div
        class="flex w-[26px] pt-[2px] pr-[2px] pb-[2px] pl-[2px] justify-between items-center flex-nowrap relative z-[26] mt-[74.352px] mr-0 mb-0 ml-[74px]"
      >
        <div
          class="w-[21.648px] h-[21.648px] shrink-0 bg-[#fff] rounded-[50px] relative z-[27]"
        ></div>
      </div>
    </div>
    <div
      class="w-[402px] h-[661px] bg-[#fafafa] rounded-[10px] border-solid border border-[#fff] absolute top-[213px] left-0 shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[2]"
    >
      <div
        class="flex w-[342px] flex-col gap-[2px] items-start flex-nowrap relative z-[6] mt-[85px] mr-0 mb-0 ml-[30px]"
      >
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[7]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[8]"
            >Full Name</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[9]"
          >
            <input placeholder="Chloe" readonly
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-10"
              />
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[12]"
            >NRIC Number</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[13]"
          >
            <input placeholder="000000-00-0000" readonly
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[14]"
              />
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[15]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[16]"
            >Phone Number *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[17]"
          >
            <input placeholder="Enter Your Phone Number"
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-black relative text-left whitespace-nowrap z-[18]"
              />            
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-20"
            >Email Address *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[21]"
          >
            <input placeholder="example@gmail.com"
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-black relative text-left whitespace-nowrap z-[22]"
              />
            
          </div>
        </div>
      </div>
      <button @click="saveToAccount"
        class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[4] mt-[153px] mr-0 mb-0 ml-[30px]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[5]"
          >Save</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';

const router = useRouter();

const backToAccount = () => {
  router.push({ name: 'Accounts' });
};

const saveToAccount = () => {
  router.push({ name: 'Accounts' });
};
</script>
