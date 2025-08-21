<template>
  <div
    class="checkout main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px]  items-center flex-nowrap relative z-[3] mt-[50px] mr-0 mb-0"
    >
      <div @click="backToPrevious()"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[4] ml-[15px]"
      ></div>
      
    </div>
    <div class="flex justify-center">
      <span class="font-['Poppins'] text-[20px] font-bold leading-[20px] text-[#000] tracking-[0.1px] text-center">
        CHECKOUT
      </span>
    </div>
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[7] mt-[24px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[342px] self-stretch shrink-0 font-['Poppins'] text-[14px] font-medium leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[8]"
      >
        <span
          class="font-['Poppins'] text-[14px] font-bold leading-[20px] text-[#000] tracking-[0.1px] relative text-left"
          >Refill + Swap</span
        ><span
          class="font-['Poppins'] text-[14px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left"
        >
          ({{ refillMethodLabel }})</span
        >
      </div>
      <span
        class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[13]"
        >{{ title }}</span>
      <div
        class="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[17]"
      >
        <div v-if = "this.payload?.MethodUse === 'Exchange'"
          class="w-[40px] h-[40px] shrink-0 bg-[url('../public/store.png')] bg-cover bg-no-repeat rounded-[6px] relative z-[18] mt-[5px]"
        ></div>
        <div
          class="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[19]"
        >
          <span
            class="h-[40.207px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left break-words z-[13] mt-[10px] mb-[5px] ml-[10px]"
            >{{ showAddress }} </span
          >
        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] flex-col gap-[20px] items-start flex-nowrap relative z-[5] mt-[12px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex h-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[16]"
      >
        <div
          class="flex w-[302px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[5]"
        >
          <div
            class="w-[80px] h-[80px] shrink-0 bg-[url('../public/sosoda.png')] bg-cover bg-no-repeat rounded-[10px] relative z-[5]"
          ></div>
          <div
            class="flex flex-col gap-[8px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[5]"
          >
            <div
              class="flex w-[117px] flex-col items-start shrink-0 flex-nowrap relative z-5"
            >
              <span v-if = "this.payload?.Brand === 1"
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[5]"
                >SOSODA Cylinder
              </span>
              <span v-if = "this.payload?.Brand === 2"
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[5]"
                >NON SOSODA Cylinder
              </span>
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[5]"
                >RM {{ this.payload?.BuyPrice?.toFixed ? this.payload?.BuyPrice.toFixed(2) : '0.00' }}
              </span>
            </div>
            <div
              class="flex w-[87px] flex-col items-start shrink-0 flex-nowrap relative z-[23]"
            >
              <span
                class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[5]"
                >Qty: {{ this.payload?.Qty }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div @click="goToVoucher" :class="[voucherCount === 0 ?  'cursor-default pointer-events-none' : 'cursor-pointer']"  
        class=" cursor-pointer h-[46px] self-stretch shrink-0 bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[25]"
      >
        <div class="w-[138px] h-[24px] absolute top-[10px] left-[14px] z-[26]">
          <div
            class="w-[24px] h-[24px] bg-[url('../public/coupon.png')] bg-cover bg-no-repeat absolute top-0 left-[4px] z-[28]"
          ></div>
          <span
            class="flex h-[20px] justify-start items-center font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[27]"
            >Add Voucher</span
          >
        </div>
        <div
          class="w-[101px] h-[20px] font-['Poppins'] text-[10px] font-normal leading-[20px] tracking-[0.1px] absolute top-[12px] left-[215.602px] text-left whitespace-nowrap z-[29]"
        >
          <span
            class="font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#a5a5a5] tracking-[0.1px] relative text-left"
            >You have </span
          ><span
            class="font-['Poppins'] text-[10px] font-medium leading-[20px] text-[#5ba6e0] tracking-[0.1px] relative text-left"
            >{{ voucherCount }}</span
          ><span
            class="font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#a5a5a5] tracking-[0.1px] relative text-left"
          >
            voucher</span
          >
        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[31]"
      >
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[32]"
          >Payment Method</span
        >
        <div
          class="h-[86px] self-stretch shrink-0 bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[33]"
        >
          <div
            class="flex w-[312px] flex-col gap-[10px] items-start flex-nowrap relative z-[34] mt-[14px] mr-0 mb-0 ml-[15px]"
          >
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[35]"
            >
              <div
                class="flex w-[147px] pt-px pr-0 pb-px pl-0 gap-[10px] items-center shrink-0 flex-nowrap relative z-[36]"
              >
                <div
                  class="w-[35px] h-[22px] shrink-0 bg-[#292929] rounded-[2px] relative z-[37]"
                ></div>
                <div
                  class="w-[22.9px] h-[15px] shrink-0 bg-[url('../public/wallet-logo.png')] bg-cover bg-no-repeat absolute top-[4.5px] left-[6.051px] z-[39]"
                ></div>
                <span
                  class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[38]"
                  >Sosoda Wallet</span
                >
              </div>
              <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-40"
                >RM {{ walletBalance }}</span
              >
            </div>
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[41]"
            >
              <span
                class="h-[14px] shrink-0 basis-auto font-['Poppins'] text-[9px] font-normal leading-[13.5px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[42]"
                >Enjoy fast check out with Sosoda Wallet</span
              >
              <button @click="topUpShow = !topUpShow"
                class="flex w-[73px] pt-[6px] pr-[22px] pb-[6px] pl-[22px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[5px] relative z-[43]"
              >
                <span
                  class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-medium leading-[12px] text-[#fff] relative text-left whitespace-nowrap z-[44]"
                  >Top Up</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[94px] h-[80px] bg-[url('../public/getmoney.png')] bg-cover bg-no-repeat absolute top-[575px] left-[60px] z-[8]"
    ></div>
    <div
      class="w-[342px] h-[110px] bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] absolute top-[578px] left-[30px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[5]"
    >
      <div
        class="flex w-[196px] flex-col gap-[8px] items-start flex-nowrap relative z-[49] mt-[15px] mr-0 mb-0 ml-[131px]"
      >
        <div
          class="flex w-[92px] flex-col items-start shrink-0 flex-nowrap relative z-5"
        >
          <span
            class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[5]"
            >Total Refund</span
          ><span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[5]"
            >RM {{  this.payload?.RefundAmount?.toFixed ? this.payload?.RefundAmount.toFixed(2) : '0.00' }}</span
          >
        </div>
        <div
          class="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[5]"
        >
          <span
            class="flex w-[117px] h-[12px] justify-start items-center shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[5]"
            >Return Sosoda Cylinder</span
          ><span
            class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[5]"
            >RM {{  this.payload?.ReturnPrice?.toFixed ? this.payload?.ReturnPrice.toFixed(2) : '0.00' }} x {{ this.payload?.Qty }}</span
          >
        </div>
      </div>
      <div
        class="w-[342px] h-[15px] font-['Poppins'] text-[10px] font-medium leading-[15px] relative text-center whitespace-nowrap z-[5] mt-[16px] mr-0 mb-0 ml-0"
      >
        <span
          class="font-['Poppins'] text-[10px] font-medium leading-[15px] relative text-center"
          >To be Refund once we </span
        ><span
          class="font-['Poppins'] text-[10px] font-medium leading-[15px] relative text-center"
          >received</span
        ><span
          class="font-['Poppins'] text-[10px] font-medium leading-[15px] relative text-center"
        >
          the return bottle</span
        >
      </div>
    </div>
    <div
      class="w-[402px] h-[295px] bg-[#fff] rounded-tl-[20px] rounded-tr-[20px] top-[625px] rounded-br-none rounded-bl-none absolute bottom-0 right-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
    >
      <div
        class="flex w-[342px] flex-col gap-[20px] items-start flex-nowrap relative z-[5] mt-[83px] mr-0 mb-0 ml-[30px]"
      >
        <div
          class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]"
        >
          <div
            class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[59]"
          >
            <span
              class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[60]"
              >Subtotal</span
            ><span
              class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[61]"
              >RM {{ this.payload?.PurchaseAmount?.toFixed ? this.payload?.PurchaseAmount.toFixed(2) : '0.00' }}</span
            >
          </div>
          <div
            class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[62]"
          >
            <div
              class="flex w-[63px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[63]"
            >
              <span
                class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[64]"
                >Discount</span
              >
            </div>
            <span
              class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[65]"
              >- RM {{  this.payload?.Discount?.toFixed ? this.payload?.Discount.toFixed(2) : '0.00' }}</span
            >
          </div>
        </div>
        <div
          class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[66]"
        >
          <span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[67]"
            >Total</span
          ><span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[68]"
            >RM {{  this.netTotal?.toFixed ? this.netTotal.toFixed(2) : '0.00' }}</span
          >
        </div>
      </div>
      <button @click="acknowledgementShow = !acknowledgementShow"
        class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[1] mt-[31px] mr-0 mb-0 ml-[30px]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[2]"
          >Pay</span
        >
      </button>
    </div>

    <transition name="fade">
      <div v-if="topUpShow" class="overlay" @click="topUpShow = false"></div>
    </transition>
    <transition name="slide-up">
        <div v-if="topUpShow" class="modal w-[382px] h-[301px] absolute top-[143px] left-0 z-[39]">
          <div
            class="w-[330px] h-[83px] relative z-[42] mt-[80px] mr-0 mb-0 ml-[30px]"
          >
            <div
              class="flex w-[330px] h-[60px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] justify-between items-center flex-nowrap bg-[#292929] rounded-[10px] relative z-[44] mt-0 mr-0 mb-0 ml-0"
            >
              <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[24px] font-semibold leading-[20px] text-[#5ba6e0] tracking-[0.1px] relative text-left whitespace-nowrap z-[45]"
                >RM</span
              ><input v-model="amount" @input="formatDigit" 
                class="flex w-[243px] h-[40px] justify-end items-center shrink-0 basis-auto font-['Poppins'] text-[20px] text-[#5ba6e0] bg-[#292929] font-normal leading-[20px] text-[rgba(255,255,255,0.5)] tracking-[0.1px] relative text-right whitespace-nowrap z-[46]"
                />
            </div>
            <span
              class="flex w-[302px] h-[20px] justify-end items-center font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#999999] tracking-[0.1px] relative text-right whitespace-nowrap z-[43] mt-[3px] mr-0 mb-0 ml-[20px]"
              >Top-up Range: RM 1 - RM 30,000</span
            >
          </div>
          <span
            class="block h-[20px] font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[47] mt-[20px] mr-0 mb-0 ml-[30px]"
            >Payment Methods</span
          >
          <div @click="selectedMethod('Bank')"
            class="cursor-pointer flex w-[322px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[48] mt-[15px] mr-0 mb-0 ml-[30px]"
          >
            <div class="w-[138px] h-[24px] shrink-0 relative z-[49]">
              <span
                class="flex h-[20px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[51]"
                >Online Bank</span
              >
              <div
                class="w-[35px] h-[11.702px] absolute top-[6.149px] left-0 z-50"
              ></div>
            </div>
            <div class="w-[18px] h-[18px] shrink-0 relative z-[52]">
              <div :class="activeMethod === 'Bank' ? 'bg-[#2275b6]' : 'border-solid border-[1.5px] border-[#2275b6]'"
                class="w-[18px] h-[18px]  rounded-[30px] absolute top-0 left-0 z-[53]"
              ></div>
            </div>
          </div>
          <!-- <div @click="selectedMethod('eWallet')"
            class="cursor-pointer flex w-[342px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[55] mt-[10px] mr-0 mb-0 ml-[30px]"
          >
            <div class="w-[138px] h-[24px] shrink-0 relative z-[56]">
              <span
                class="flex h-[20px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[59]"
                >E-Wallet</span
              >
              <div
                class="w-[20.129px] h-[16px] absolute top-[4px] left-[7.455px] z-[58]"
              ></div>
            </div>
            <div :class="activeMethod === 'eWallet' ? 'bg-[#2275b6]' : 'border-solid border-[1.5px] border-[#2275b6]'"
              class="w-[18px] h-[18px] shrink-0 rounded-[30px] relative z-[60]"
            ></div>
          </div> -->
          <!-- <div
            class="flex w-[342px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[61] mt-[10px] mr-0 mb-0 ml-[30px]"
          >
            <div class="w-[138px] h-[24px] shrink-0 relative z-[62]">
              <span
                class="flex h-[20px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[64]"
                >Credit / Debit Card</span
              >
            </div>
            <div
              class="w-[18px] h-[18px] shrink-0 rounded-[30px] border-solid border-[1.5px] border-[#2275b6] relative z-[65]"
            ></div>
          </div> -->
          <button @click="submitTopUp"
            class="flex w-[332px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[66] mt-[65px] mr-0 mb-0 ml-[30px]"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[67]"
              >Confirm</span
            >
          </button>
          <div
            class="w-[382px] h-[411px] bg-[#fff] rounded-tl-[15px] rounded-tr-[15px] rounded-[10px] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-40"
          ></div>
          <span
            class="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] absolute top-[30px] left-[30px] text-left whitespace-nowrap z-[41]"
            >Top Up Wallet</span
          >
        </div>      
    </transition>

    <transition name="fade">
      <div v-if="acknowledgementShow" class="overlay" @click="acknowledgementShow = false"></div>
    </transition>
    <transition name="slide-up">
        <div v-if="acknowledgementShow" class="modal w-[372px] h-[301px] absolute top-[143px] left-0 z-[39]">
          <div
            class="w-[330px] h-[83px] relative z-[42] mt-[15px] mr-0 mb-0 ml-[30px]"
          >
            <div
              class="flex flex-col gap-[30px] items-start self-stretch shrink-0 flex-nowrap relative z-[73]"
            >
              <div
                class="flex flex-col gap-[30px] items-start self-stretch shrink-0 flex-nowrap relative z-[74]"
              >
                <div
                  class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[75]"
                >
                  <div class="w-[20.516px] h-[20.516px] shrink-0 relative z-[76]">

                  </div>
                  <span
                    class="flex w-[155px] h-[24px] justify-center items-center shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-center whitespace-nowrap z-[78]"
                    >Acknowledgement</span
                  >
                  <div class="w-[20.516px] h-[20.516px] shrink-0 relative z-[79]">

                  </div>
                </div>
                <div
                  class="flex gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[81]"
                >
                  <span
                    class="flex w-[294px] h-[84px] justify-start items-center grow shrink-0 basis-0 font-['Poppins'] text-[14px] font-normal leading-[20.991px] text-[#000] relative text-left z-[82]"
                    >I acknowledge that the purchase price per cylinder is RM{{ this.payload?.BuyPrice }}. Total
                    refund of RM{{ this.payload?.RefundAmount }} will be credited to my sosoda wallet upon return and
                    receipt of the empty cylinder</span
                  >
                </div>
                <div
                  class="flex gap-[10px] justify-center items-end self-stretch shrink-0 flex-nowrap relative z-[83]"
                >
                  <div
                    class="flex w-[20px] pt-[2px] pr-0 pb-0 pl-0 gap-[10px] items-center shrink-0 flex-nowrap relative z-[84]"
                  >
                    <div @click="checked = !checked"
                      class="cursor-pointer w-[20px] h-[20px] shrink-0 rounded-[5px] border-solid border relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[85] flex items-center justify-center"
                      :class="[
                          checked ? 'bg-blue-500 border-blue-500' : '',
                          showError ? 'border-red-500' : 'border-[#dbdbdb]',
                          'border'
                        ]"
                    >
                      <svg
                        v-if="checked"
                        class="w-[12px] h-[12px] text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="3"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span
                    class="h-[21px] grow shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[86]"
                    >Yes, I understand and acknowledge</span
                  >
                </div>
              </div>
              <button @click="submitRefill()"
                class="flex h-[40px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[8px] relative z-[87]"
              >
                <span
                  class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[88]"
                  >Continue</span
                >
              </button>
            </div>
          </div>          
        </div>      
    </transition>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';
import { usePayloadStore } from '../stores/payloadStore';
import dayjs from 'dayjs';

export default{
  data(){
    return{
      netTotal: 0,
      countVoucher: 0,
      topUpShow: false,
      amount: '',
      activeMethod: 'Bank',
      paymentMethod: 0,
      acknowledgementShow: false,
      checked: false,
      showError: false,
    }
  },
  computed: {
    payload() {
      const store = usePayloadStore();

      return store.data;
    },
    refillMethodLabel() {
      switch (this.payload?.MethodUse) {
        case 'Exchange':
          return 'Refill on the spot';
        case 'Pickup':
          return 'Pick Up';
        case 'DropOff':
          return 'Drop-Off';
        default:
          return '';
      }
    },
    title() {
      switch (this.payload?.MethodUse) {
        case 'Exchange':
          return 'Outlet - ' + this.payload?.Branch.name;
        case 'Pickup':
          return 'Your Address';
        case 'DropOff':
          return 'Drop-Off Point';
        default:
          return '';
      }
    },
    showAddress(){
      switch (this.payload?.MethodUse) {
        case 'Exchange':
          return this.payload?.Branch?.address;
        case 'Pickup':
          return (this.payload?.Address?.line1 + ' ' + this.payload?.Address?.line2 + ' '  + this.payload?.Address?.postalCode + ' '  + this.payload?.Address?.city + ' '  
          + this.payload?.Address?.state + ' '  + this.payload?.Address?.country);
        case 'DropOff':
          return this.payload?.DropOffPoint;
        default:
          return '';
      }
    },
    voucherCount(){
      const member = this.payload?.Member;
      const vouchers = member?.vouchers;

      return Array.isArray(vouchers) ? vouchers.length : 0;
    },
    walletBalance(){
      const wallet = this.payload?.Member?.wallet;
      if (wallet && typeof wallet.balance === 'number') {
        return wallet.balance.toFixed(2);
      }
      return '0.00';
    },
    formatDigit() {
      this.amount = this.amount.replace(/[^0-9.]/g, ''); // Remove everything except digits and dots
    },
    async checkBranch(){
      if(this.payload.Branch === null){
        try{
          const response = await api.get('Branch/GetDefaultBranch');
          if(response.status === 200){
              if(response.data !== null){
                this.payload.Branch = response.data;
              }
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
      }
    }
  },
  mounted(){
    this.netTotal = this.payload?.PurchaseAmount - this.payload?.Discount
  },
  methods:{  
    goToVoucher(){
      const store = usePayloadStore();
        var voucherload ={
          Qty : this.payload?.Qty,
          Brand : this.payload?.Brand,
          Address : this.payload?.Address,
          BuyPrice : this.payload?.BuyPrice,
          ReturnPrice : this.payload?.ReturnPrice,
          PurchaseAmount : this.payload?.PurchaseAmount,
          RefundAmount : this.payload?.RefundAmount,
          TotalAmount : this.payload?.TotalAmount,
          MethodUse : this.payload?.MethodUse,
          DropOffPoint : this.payload?.DropOffPoint,
          DropOffPointId : this.payload?.DropOffPointId,
          Branch : this.payload?.Branch,
          Member: this.payload?.Member,
          Discount: 0,
          VoucherId: ''
        }

        store.setPayload(voucherload);
        this.$router.push({ name: 'MyVouchersList' });
    },
    async submitRefill(){
      if(this.netTotal > this.payload?.Member.wallet.balance){
        toast.error("Insufficient balance in your wallet.Please top-up your wallet.")
      }
      else{
        if(this.checked){
          const refillload = {
            MemberId: sessionStorage.getItem('IdUser'),
            OutletId: this.payload?.Branch.id,
            VoucherId: this.payload?.VoucherId,
            DropOffPoint: this.payload?.DropOffPoint,
            DropOffPointId: this.payload?.DropOffPointId,
            PickUpFromId: this.payload?.Address.id,
            BottleQty: this.payload?.Qty,
            TotalAmount: this.netTotal,
            Discount: this.payload?.Discount,
            SubTotal: this.payload?.PurchaseAmount,
            Mode: this.payload?.MethodUse,
            BottleBrand: this.payload?.Brand,
          }
          try{
            const response = await api.post('Refill/RequestRefill', JSON.stringify(refillload));
            if(response.status === 200){
              const store = usePayloadStore();
              var order_confirmed_load = {
                Code: response.data.data.code,
                PaymentMethod: 'Sosoda Wallet',
                DateRefill: response.data.data.dt,
                Quantity: response.data.data.bottleQty,
                TotalAmount: response.data.data.totalAmount,
                Process: response.data.data.process,
                Branch: this.payload?.Branch,
                MemberAddress: this.payload?.Address,
                DropOffPoint: this.payload?.DropOffPoint,
                RefundAmount: this.payload?.RefundAmount,
                MethodUse: response.data.data.mode,
                RefillId: response.data.data.id
              }
              store.setPayload(order_confirmed_load);
              this.$router.push({ name: 'OrderConfirmed' });
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
        }
        else{
          this.showError = !this.checked;
        }        
      }
    },
    backToPrevious(){
      const store = usePayloadStore();
      var methodload = {
        RefillMethod : this.payload?.MethodUse
      }
      store.setPayload(methodload);
      this.$router.push({ name: 'SetupRefill' }); 
    },
    async submitTopUp(){
      if(this.amount === '0'){
        toast.error("Amount cannnot be zero or empty!")
      }
      else{
        const userId = sessionStorage.getItem('IdUser');
        //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
        if(this.activeMethod === 'Bank'){
          this.paymentMethod = 1
        }

        if(this.activeMethod === 'eWallet'){
          this.paymentMethod = 4
        }

        if(this.activeMethod === 'CreditCard'){
          this.paymentMethod = 3
        }
        const payload = {
          MemberId : userId,
          PaymentMethod : this.paymentMethod,
          Amount : this.amount
        };

        try{
          const response = await api.post('TopUp/RequestTopUp', JSON.stringify(payload));
            if(response.status === 200){
              if(response.data.data.recordStatus === 1){
                this.topUpShow = false;
                toast.success("Top-up successfully!");
                const store = usePayloadStore();
                var transactload ={
                  code: response.data.data.code,
                  invoiceNo: response.data.data.invoiceNo,
                  dt: response.data.data.createdDt,
                  name: '',
                  address: '',
                  transactionType: 'TopUp',
                  amount: response.data.data.amount,
                }
                store.setPayload(transactload);
                this.$router.push({ name: 'TransactionDetail' });
              }                     
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
      }
    },
  }
}
</script>

<style scoped>
.checkout{
  overflow-y: auto;
}
/* Fade transition for overlay */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Slide-up transition for modal */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-enter-to, .slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}

/* Fullscreen dark overlay */
.overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

/* Modal styling */
.modal {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
  z-index: 20;
}

</style>