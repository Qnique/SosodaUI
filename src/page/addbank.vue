<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[28] mt-[49.723px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToCard" class="cursor-pointer w-[55px] h-[21px] shrink-0 relative z-[29]">
        <span
          class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] absolute top-0 left-[20px] text-left whitespace-nowrap z-30"
          >Back</span
        >
        <div
          class="w-[10px] h-[20px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[31]"
        ></div>
      </div>
      <span
        class="h-[42px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#000] relative text-left whitespace-nowrap z-[32]"
        >Add Bank Account</span
      >
    </div>
    <div
      class="flex w-[342px] flex-col gap-[30px] items-start flex-nowrap relative z-[2] mt-[30.277px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]"
      >
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[5]"
            >Full Name *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6]"
          >
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[7]"
              >example@gmail.com</span
            >
          </div>
        </div>
        <div
          class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[9]"
            >Account Number *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-10"
          >
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[11]"
              >Enter Account No.</span
            >
          </div>
          <span
            class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[12]"
            >Account number is required</span
          >
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[13]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[14]"
            >Name On Card *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[15]"
          >
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[16]"
              >Enter Name On Card</span
            >
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-center self-stretch shrink-0 flex-nowrap relative z-[17]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[18]"
            >Bank Name *</span
          >
          <div
            class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]"
          >
            <div
              class="flex h-[42px] pt-[12px] pr-0 pb-[12px] pl-[15px] gap-[226px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-20"
            >
              <div
                class="flex pt-0 pr-[15px] pb-0 pl-0 justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[21]"
              >
                <select
                  class="h-[30px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.75)] bg-[#fafafa] rounded px-2 relative text-left z-[22]"
                >
                  <option disabled selected>Select Your Bank</option>
                  <option value="maybank">Maybank</option>
                  <option value="cimb">CIMB</option>
                  <option value="rhb">RHB</option>
                  <option value="public">Public Bank</option>
                  <option value="hongleong">Hong Leong Bank</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[24]"
      >
        <span
          class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[25]"
          >Set as Default Bank Account</span
        >
        <div
            @click="toggleSwitch"
            class="flex w-[40px] h-[20px] p-[3px] items-center justify-start bg-[#5ba6e0] rounded-full border border-[rgba(191,191,191,0.25)] shadow-[inset_1px_2px_3px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300"
            :class="isOn ? 'justify-end bg-[#5ba6e0]' : 'justify-start bg-[#ccc]'"
            >
            <div
                class="w-[15px] h-[15px] bg-white rounded-full transition-all duration-300"
            ></div>
        </div>
      </div>
    </div>
    <button @click="saveBank"
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative mt-[247px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[1]"
        >Save</span
      >
    </button>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const isOn = ref(false);

const toggleSwitch = () => {
  isOn.value = !isOn.value;
};
const router = useRouter();

const saveBank = () => {
  router.push({ name: 'CardInfos' });
};

const backToCard = () => {
  router.push({ name: 'CardInfos' });
};
</script>
