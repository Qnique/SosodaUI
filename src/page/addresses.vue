<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative z-[44] mt-[50.148px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToAccount"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[45]"
      ></div>
      <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[46]"
        >Address</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 bg-[url('../public/white.png')] bg-cover bg-no-repeat relative overflow-hidden z-[47]"
      ></div>
    </div>
    <div
      class="flex w-[342px] h-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] items-start flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] mt-[42.852px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[322.035px] flex-col gap-[9px] justify-end items-start shrink-0 flex-nowrap relative z-[1]"
      >
        <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[2]"
        >
          <span
            class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#2275b6] relative text-left whitespace-nowrap z-[3]"
            >Home</span
          >
          <div
            class="w-[100px] h-[18px] shrink-0 text-[0px] rounded-[28px] relative z-[4]"
          >
            <span
              class="block h-[15px] font-['Poppins'] text-[10px] font-medium leading-[14.993px] text-[#fff] relative text-left whitespace-nowrap z-[6] mt-[1.5px] mr-0 mb-0 ml-[9.5px]"
              >Default Address</span
            >
            <div
              class="w-[100px] h-[18px] bg-[#2275b6] rounded-[28px] absolute top-0 left-0 z-[5]"
            ></div>
          </div>
        </div>
        <div
          class="flex w-[322.035px] gap-[72px] items-end shrink-0 flex-nowrap relative z-[7]"
        >
          <div
            class="flex w-[200.035px] flex-col gap-[3px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]"
          >
            <div class="w-[141px] h-[21px] shrink-0 relative z-[9]">
              <span
                class="flex h-[21px] justify-start items-center font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] absolute top-0 left-[calc(50%-70.5px)] text-left whitespace-nowrap z-10"
                >User123</span
              ><span
                class="flex h-[16px] justify-start items-center font-['Poppins'] text-[11px] font-normal leading-[16px] text-[#bfbfbf] absolute top-[2px] left-[calc(50%-14.5px)] text-left whitespace-nowrap z-[11]"
                >+6012-3456789</span
              >
            </div>
            <span
              class="flex w-[200.035px] h-[26px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[9px] font-normal leading-[13.494px] text-[#a5a5a5] relative text-left z-[12]"
              >123, Jalan Cyberjaya, Taman Cyberjaya, 63000, Cyberjaya,
              Selangor, Malaysia.</span
            >
          </div>
          <div
            class="flex w-[50px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[13]"
          >
            <!-- <div class="w-[20px] h-[20px] shrink-0 relative z-[14]">
              <div
                class="w-[0.7px] h-[0.56px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/a1qPykgYVS.png)] bg-[length:100%_100%] bg-no-repeat relative z-[15] mt-[19.287px] mr-0 mb-0 ml-[10.063px]"
              ></div>
            </div> -->
            <div class="w-[20px] h-[20px] shrink-0 relative z-[16]"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] h-[100px] pt-[12px] pr-[10px] pb-[12px] pl-[10px] flex-col gap-[10px] items-start flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[17] mt-[15px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[322.035px] gap-[72px] items-end shrink-0 flex-nowrap relative z-[18]"
      >
        <div
          class="w-[200.035px] h-[76.5px] shrink-0 text-[0px] relative z-[19]"
        >
          <span
            class="block h-[15px] font-['Poppins'] text-[10px] font-medium leading-[14.993px] text-[#2275b6] relative text-left whitespace-nowrap z-[25] mt-0 mr-0 mb-0 ml-[0.04px]"
            >Office</span
          >
          <div
            class="flex w-[200.035px] flex-col gap-[3px] items-start flex-nowrap relative z-20 mt-[11.5px] mr-0 mb-0 ml-0"
          >
            <div class="w-[141px] h-[21px] shrink-0 relative z-[21]">
              <span
                class="flex h-[21px] justify-start items-center font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] absolute top-0 left-[calc(50%-70.5px)] text-left whitespace-nowrap z-[22]"
                >User123</span
              ><span
                class="flex h-[16px] justify-start items-center font-['Poppins'] text-[11px] font-normal leading-[16px] text-[#bfbfbf] absolute top-[3px] left-[calc(50%-14.5px)] text-left whitespace-nowrap z-[23]"
                >+6012-3456789</span
              >
            </div>
            <span
              class="flex w-[200.035px] h-[26px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[9px] font-normal leading-[13.494px] text-[#a5a5a5] relative text-left z-[24]"
              >123, Jalan Cyberjaya, Taman Cyberjaya, 63000, Cyberjaya,
              Selangor, Malaysia.</span
            >
          </div>
        </div>
        <div
          class="flex w-[50px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[26]"
        >
          <!-- <div class="w-[20px] h-[20px] shrink-0 relative z-[27]">
            <div
              class="w-[0.7px] h-[0.56px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/rTLpJzSHXf.png)] bg-[length:100%_100%] bg-no-repeat relative z-[28] mt-[19.287px] mr-0 mb-0 ml-[10.063px]"
            ></div>
          </div> -->
          <div class="w-[20px] h-[20px] shrink-0 relative z-[29]"></div>
        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] h-[100px] pt-[12px] pr-[10px] pb-[12px] pl-[10px] flex-col gap-[10px] items-start flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-30 mt-[15px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[322.035px] gap-[72px] items-end shrink-0 flex-nowrap relative z-[31]"
      >
        <div
          class="flex w-[200.035px] flex-col gap-[12px] items-start shrink-0 flex-nowrap relative z-[32]"
        >
          <span
            class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[14.993px] text-[#2275b6] relative text-left whitespace-nowrap z-[33]"
            >School</span
          >
          <div
            class="flex flex-col gap-[3px] items-start self-stretch shrink-0 flex-nowrap relative z-[34]"
          >
            <div class="w-[200px] h-[21px] shrink-0 relative z-[35]">
              <div
                class="flex w-[200px] h-[21px] gap-[3px] items-center flex-nowrap absolute top-0 left-0 z-[36]"
              >
                <span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[37]"
                  >User123</span
                ><span
                  class="h-[16px] shrink-0 basis-auto font-['Poppins'] text-[11px] font-normal leading-[16px] text-[#bfbfbf] relative text-left whitespace-nowrap z-[38]"
                  >+6012-3456789</span
                >
              </div>
            </div>
            <span
              class="flex w-[200.035px] h-[26px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[9px] font-normal leading-[13.494px] text-[#a5a5a5] relative text-left z-[39]"
              >123, Jalan Cyberjaya, Taman Cyberjaya, 63000, Cyberjaya,
              Selangor, Malaysia.</span
            >
          </div>
        </div>
        <div
          class="flex w-[50px] gap-[10px] items-center shrink-0 flex-nowrap relative z-40"
        >
          <!-- <div class="w-[20px] h-[20px] shrink-0 relative z-[41]">
            <div
              class="w-[0.7px] h-[0.56px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/7FPj700iK8.png)] bg-[length:100%_100%] bg-no-repeat relative z-[42] mt-[19.287px] mr-0 mb-0 ml-[10.063px]"
            ></div>
          </div> -->
          <div class="w-[20px] h-[20px] shrink-0 relative z-[43]"></div>
        </div>
      </div>
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
</script>
