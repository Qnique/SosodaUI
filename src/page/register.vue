<template>
  <div
    class="main-container w-[420px] h-[1258px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <button @click="goToLogin"
      class="flex w-[55px] h-[21px] justify-between items-center relative z-[4] mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[10px] h-[20px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[4]"
      ></div>
      <span
        class="h-[21px] shrink-0 font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[3]"
        >Back</span
      >
    </button>
    <span
      class="block h-[42px] font-['Poppins'] text-[28px] font-bold leading-[42px] text-[#000] relative text-left whitespace-nowrap mt-[10px] mr-0 mb-0 ml-[30px]"
      >Join Us Now</span
    ><span
      class="block h-[24px] font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[42] mt-[30.002px] mr-0 mb-0 ml-[30px]"
      >Account Type Selection</span
    >
    <div
      class="flex w-[342px] h-[46px] justify-between items-center relative z-[14] mt-[10px] mr-0 mb-0 ml-[30px]"
    >
        <div
        @click="selectType('individual')"
        class="flex w-[166px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center shrink-0 flex-nowrap rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] cursor-pointer"
        :class="selectedType === 'individual' ? 'bg-[#2275b6]' : 'bg-[#fafafa]'"
        >
        
            <div class="flex items-center gap-[10px]">
                <div
                class="w-[22px] h-[22px] bg-[url('../public/person.png')] bg-cover bg-no-repeat"
                :class="selectedType === 'individual' ? 'filter brightness-0 invert' : ''"></div>
                <span
                class="font-['Poppins'] text-[14px] text-left whitespace-nowrap"
                :class="selectedType === 'individual' ? 'text-white' : 'text-[#000]'"
                >
                Individual
                </span>
            </div>
        </div>

        <div
        @click="selectType('business')"
        class="flex w-[166px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center shrink-0 flex-nowrap rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] cursor-pointer"
        :class="selectedType === 'business' ? 'bg-[#2275b6]' : 'bg-[#fafafa]'"
        >    
            <div class="flex items-center gap-[10px]">
                <div
                class="w-[22px] h-[22px] bg-[url('../public/business.png')] bg-cover bg-no-repeat"
                :class="selectedType === 'business' ? 'filter brightness-0 invert' : ''"></div>
                <span
                class="font-['Poppins'] text-[14px] text-left whitespace-nowrap"
                :class="selectedType === 'business' ? 'text-white' : 'text-[#000]'"
                >
                Business
                </span>
            </div>
        </div>
    </div>
    <div
      class="w-[549px] h-[462px] relative z-[19] mt-[29.998px] mr-0 mb-0 ml-[-177px]"
    >
      <div
        class="flex w-[342px] h-[462px] flex-col gap-[20px] items-start flex-nowrap absolute top-0 left-[207px] z-[19]"
      >
       <span v-if="selectedType === 'business'"
          class="business h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-20"
          >Business information</span>
        <div v-if="selectedType === 'business'"
            class="business flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[22]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[23]"
              >SSM Trading Name *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[24]"
            >
              <input placeholder="Enter Your Registered Business Name"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
        </div>
        <div v-if="selectedType === 'business'"
            class="business flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[22]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[23]"
              >Brand Name</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[24]"
            >
              <input placeholder="Enter Your Brand Name"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
        </div>
        <div v-if="selectedType === 'business'"
            class="business flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[22]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[23]"
              >Tin Number *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[24]"
            >
              <input placeholder="Enter Your Tax Identification Number"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
        </div>
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-20"
          >Personal Details</span
        >
        <div
          class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[21]"
        >
          <div
            class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[22]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[23]"
              >Full Name *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[24]"
            >
              <input placeholder="Enter Your Full Name"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
          </div>
          <div
            class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[26]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[27]"
              >NRIC *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[28]"
            >
              <input placeholder="Enter Your IC No."
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
          </div>
          <div
            class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-30"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[31]"
              >Date Of Birth *</span
            >
            <input
                    type="date"
                    v-model="dob"
                    class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[32] font-['Poppins'] text-[12px] text-[#000] leading-[18px] cursor-pointer"
                />
          </div>
          <div
            class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[34]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[35]"
              >Mobile Number *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[36]"
            >
              <input placeholder="Enter Your Mobile No."
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
          </div>
          <div
            class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[38]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[39]"
              >Email Address *</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-40"
            >
              <input placeholder="example@gmail.com"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    <span
      class="block h-[24px] font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[43] mt-[25px] mr-0 mb-0 ml-[30px]"
      >Address Info</span
    >
    <div
      class="flex w-[342px] flex-col gap-[2px] items-start flex-nowrap relative z-[44] mt-[20px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[45]"
      >
        <span
          class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[46]"
          >Address *</span
        >
        <div
          class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[47]"
        >
          <div
            class="w-[264px] shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] relative text-left whitespace-nowrap z-[48]"
          >
            <input placeholder="Enter House No, Building Name, Street Name"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
          </div>
        </div>
        <span
          class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[49]"
          ></span
        >
      </div>
      <div
        class="flex gap-[15px] items-center self-stretch shrink-0 flex-nowrap relative z-50"
      >
        <div
          class="flex w-[133px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[51]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[52]"
            >Postal Code *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[53]"
          >
           <input placeholder="Enter Postal Code"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
          </div>
        </div>
        <div
          class="flex w-[194px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[55]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[56]"
            >Area, State *</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[57]"
          >
            <input placeholder="Enter Area, State"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] flex-col gap-[40px] items-start flex-nowrap relative z-[59] mt-[25px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[60]"
      >
        <div
          class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[61]"
        >
          <span
            class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[62]"
            >Referral or Sale Code</span
          >
          <div
            class="flex h-[59px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[63]"
          >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[64]"
            >
              <input placeholder="(Optional) Enter Sales / Referral Code"
                class="w-full h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] bg-[#fafafa] text-black relative text-left whitespace-nowrap z-[25]"
                />
            </div>
          </div>
        </div>
        <div
          class="w-[341.999px] h-[30px] shrink-0 rounded-[10px] relative z-[66]"
        >
          <div
            class="w-[323.632px] h-[30px] font-['Poppins'] text-[10px] font-normal leading-[15px] absolute top-0 left-[18.367px] text-left z-[67]"
          >
            <span
              class="font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#292929] relative text-left"
              >By submitting your registration, you must agree to our </span
            ><span @click="goToTermsPage"
              class="cursor-pointer font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#1b17f5] relative text-left"
              >Terms & Conditions</span
            >
          </div>
          <div @click="checked = !checked" class="relative w-4 h-4">
            <!-- Outer Circle -->
            <div
              class="w-4 h-4 rounded-full border border-[#292929] cursor-pointer flex items-center justify-center transition-colors duration-200"
              :class="{ 'bg-[#292929]': checked }"
            >
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
      <button @click="goToHomePage"
        class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[69]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[70]"
          >REGISTER</span
        >
      </button>
    </div>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const selectedType = ref('individual');
const checked = ref(false);

const selectType = (type) => {
  selectedType.value = type;
};

const router = useRouter();

const goToLogin = () => {
  router.push({ name: 'Login' });
};

const goToHomePage = () => {
  router.push({ name: 'Home' });
};

const goToTermsPage = () => {
  router.push({ name: 'Terms' });
};
</script>
