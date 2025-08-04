<template>
  <div
    class="main-container w-[420px] h-[964px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[56] mt-[49.723px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToCard" class="cursor-pointer w-[55px] h-[21px] shrink-0 relative z-[57]">
        <span
          class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] absolute top-0 left-[20px] text-left whitespace-nowrap z-[58]"
          >Back</span
        >
        <div
          class="w-[10px] h-[20px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[59]"
        ></div>
      </div>
      <span
        class="h-[42px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#000] relative text-left whitespace-nowrap z-[60]"
        >Add Card</span
      >
    </div>
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[15] mt-[30px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[16]"
      >
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[17]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[18]"
            >Card Number *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[19]"
          >
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-20"
              >Enter Card Number</span
            >
          </div>
        </div>
        <div
          class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[21]"
        >
          <div
            class="flex w-[166px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[22]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[23]"
              >Expiry Date *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[24]"
            >
              <span
                class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[25]"
                >(MM/YY)</span
              >
            </div>
          </div>
          <div
            class="flex w-[166px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[26]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[27]"
              >CVV *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[28]"
            >
              <span
                class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[29]"
                >3-Digital Number</span
              >
            </div>
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-30"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[31]"
            >Name On Card *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[32]"
          >
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[33]"
              >Enter Name On Card</span
            >
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[34]"
      >
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[23.989px] text-[#000] relative text-left whitespace-nowrap z-[35]"
          >Billing Address</span
        >
        <div
          class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[36]"
        >
          <div
            class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[37]"
          >
            <div
              class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[38]"
            >
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[39]"
                >Address *</span
              >
              <div
                class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-40"
              >
                <div
                  class="w-[264px] shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] relative text-left whitespace-nowrap z-[41]"
                >
                  <span
                    class="font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left"
                    >Enter </span
                  ><span
                    class="font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left"
                    >House No, Building Name, Street Name</span
                  >
                </div>
              </div>
              <span
                class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[42]"
                >Address is required</span
              >
            </div>
            <div
              class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[43]"
            >
              <div
                class="flex w-[133px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[44]"
              >
                <span
                  class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[45]"
                  >Postal Code *</span
                >
                <div
                  class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[46]"
                >
                  <span
                    class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[47]"
                    >Enter Postal Code</span
                  >
                </div>
              </div>
              <div
                class="flex h-[82px] flex-col gap-[5px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[48]"
              >
                <span
                  class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[49]"
                  >Area, State *</span
                >
                <div
                  class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-50"
                >
                  <span
                    class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[51]"
                    >Enter Area, State</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[52]"
          >
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[53]"
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
      </div>
    </div>
    <button @click="saveCard"
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[13] mt-[40px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[14]"
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
const saveCard = () => {
  router.push({ name: 'CardInfos' });
};

const backToCard = () => {
  router.push({ name: 'CardInfos' });
};
</script>
