<template>
  <div
    class="checkout main-container w-[402px] h-[925px] bg-[#fff] relative mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToPrevious"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[1]"
      ></div>
      <span
        class="flex w-[111px] h-[14px] justify-center items-center shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-center uppercase whitespace-nowrap z-[2]"
        >CHECKOUT</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[3]"
      ></div>
    </div>
    <span
      class="block h-[24px] font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[4] mt-[35px] mr-0 mb-0 ml-[30px]"
      >Your Order</span
    >
    
    <div
      class="flex w-[342px] h-[435px] flex-col gap-[20px] items-start flex-nowrap absolute top-[144px] left-[30px] z-[6]"
    >
      <div
        class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[7]"
      >
        <div v-for="(item, index) in cart" :key="index"
          class="flex h-[80px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[8]"
        >
          <div
            class="flex pt-0 pr-[20px] pb-0 pl-0 justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[9]"
          >
            <div
              class="flex gap-[10px] items-center grow shrink-0 basis-0 flex-nowrap relative z-10"
            >
              <!-- <div
                class="w-[80px] h-[80px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/Yc5Kt3pVap.png)] bg-cover bg-no-repeat rounded-[10px] relative z-[11]"
              ></div> -->
              <div
                class="flex w-[117px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[12]"
              >
                <div
                  class="flex w-[117px] flex-col items-start shrink-0 flex-nowrap relative z-[13]"
                >
                  <span
                    class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[14]"
                    >{{ item.Name }}</span
                  ><span
                    class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[15]"
                    >RM{{ item.Amount?.toFixed ? item.Amount.toFixed(2) : '0.00' }}</span
                  >
                </div>
                <div
                  class="flex w-[87px] flex-col items-start shrink-0 flex-nowrap relative z-[16]"
                >
                  <span
                    class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[17]"
                    >Quantity : {{ item.Quantity }}</span
                  >
                </div>
              </div>
            </div>
            <div @click="removeItem(item.Id)"
              class="cursor-pointer w-[24px] h-[24px] shrink-0 bg-[url('../public/delete.png')] bg-cover bg-no-repeat relative overflow-hidden z-[19]"
            ></div>
          </div>
        </div>
        <div @click="goVoucher"
          class="cursor-pointer h-[46px] self-stretch shrink-0 bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-20"
        >
          <div
            class="w-[138px] h-[24px] absolute top-[10px] left-[14px] z-[21]"
          >
            <div
              class="w-[24px] h-[24px] bg-[url('../public/coupon.png')] bg-cover bg-no-repeat absolute top-0 left-[4px] z-[23]"
            ></div>
            <span
              class="flex h-[20px] justify-start items-center font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[22]"
              >Add Voucher</span
            >
          </div>
          <div
            class="w-[101px] h-[20px] font-['Poppins'] text-[10px] font-normal leading-[20px] tracking-[0.1px] absolute top-[12px] left-[215.602px] text-left whitespace-nowrap z-[24]"
          >
            <span
              class="font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#a5a5a5] tracking-[0.1px] relative text-left"
              >You have </span
            ><span
              class="font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#5ba6e0] tracking-[0.1px] relative text-left"
              >{{ this.countVoucher }}</span
            ><span
              class="font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#a5a5a5] tracking-[0.1px] relative text-left"
            >
              voucher</span
            >
          </div>

        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[26]"
      >
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[27]"
          >Payment Method</span
        >
        <div
          class="h-[86px] self-stretch shrink-0 bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[28]"
        >
          <div
            class="flex w-[312px] flex-col gap-[10px] items-start flex-nowrap relative z-[29] mt-[14px] mr-0 mb-0 ml-[15px]"
          >
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-30"
            >
              <div
                class="flex w-[147px] pt-px pr-0 pb-px pl-0 gap-[10px] items-center shrink-0 flex-nowrap relative z-[31]"
              >
                <div
                  class="w-[35px] h-[22px] shrink-0 bg-[#292929] rounded-[2px] relative z-[32]"
                ></div>
                <div
                  class="w-[22.9px] h-[15px] shrink-0 bg-[url('../public/wallet-logo.png')] bg-cover bg-no-repeat absolute top-[4.5px] left-[6.051px] z-[34]"
                ></div>
                <span
                  class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[33]"
                  >Sosoda Wallet</span
                >
              </div>
              <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[35]"
                >RM {{ this.memberWallet?.balance?.toFixed ? this.memberWallet?.balance.toFixed(2) : '0.00' }}</span
              >
            </div>
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[36]"
            >
              <span
                class="h-[14px] shrink-0 basis-auto font-['Poppins'] text-[9px] font-normal leading-[13.5px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[37]"
                >Enjoy fast check out with Sosoda Wallet</span
              >
              <button @click="topUpShow = !topUpShow"
                class="flex w-[73px] pt-[6px] pr-[22px] pb-[6px] pl-[22px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[5px] relative z-[38]"
              >
                <span
                  class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-medium leading-[12px] text-[#fff] relative text-left whitespace-nowrap z-[39]"
                  >Top Up</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-40"
      >
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[41]"
          >Contact Details</span
        >
        <div
          class="flex h-[75px] pt-[12px] pr-[10px] pb-[12px] pl-[10px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[42]"
        >
          <div
            class="flex w-[322.035px] gap-[72px] items-end shrink-0 flex-nowrap relative z-[43]"
          >
            <div class="w-[200.035px] h-[50px] shrink-0 relative z-[44]">
              <div
                class="flex w-[200.035px] h-[50px] flex-col gap-[3px] items-start flex-nowrap absolute top-0 left-0 z-[45]"
              >
                <div class="w-[141px] h-[21px] shrink-0 relative z-[46]">
                  <span
                    class="flex h-[21px] justify-start items-center font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] absolute top-0 left-[calc(50%-70.5px)] text-left whitespace-nowrap z-[47]"
                    >{{ this.member?.name }}</span
                  ><span
                    class="flex h-[16px] justify-start items-center font-['Poppins'] text-[11px] font-normal leading-[16px] text-[#bfbfbf] absolute top-[3px] left-[calc(50%-14.5px)] text-left whitespace-nowrap z-[48]"
                    >{{ this.member?.mobileNumber }}</span
                  >
                </div>
                <span
                  class="flex w-[200.035px] h-[26px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[9px] font-normal leading-[13.494px] text-[#a5a5a5] relative text-left z-[49]"
                  >{{ this.memberAddress?.line1 }} {{ this.memberAddress?.line2 }}
                   {{ this.memberAddress?.city }} {{ this.memberAddress?.postalCode }} {{ this.memberAddress?.state }} {{ this.memberAddress?.country }}</span
                >
              </div>
            </div>
            <div
              class="flex w-[50px] gap-[10px] items-center shrink-0 flex-nowrap relative z-50"
            >
              <div class="w-[20px] h-[20px] shrink-0 relative z-[51]">
                <div
                  class="w-[0.7px] h-[0.56px] relative z-[52] mt-[19.287px] mr-0 mb-0 ml-[10.063px]"
                ></div>
              </div>
              <div class="w-[20px] h-[20px] shrink-0 relative z-[53]"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex w-[402px] h-[322px] flex-col gap-[10px] items-center flex-nowrap bg-[#fff]   relative z-[4] mr-0 mb-0 ml-0"
        >
        <div
            class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[55]"
        >
            <span
            class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[56]"
            >Summary</span
            >
            <div
            class="flex w-[342px] flex-col gap-[29px] items-start shrink-0 flex-nowrap relative z-[57]"
            >
            <div
                class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]"
            >
                <div
                class="flex w-[342px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[59]"
                >
                <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[60]"
                >
                    <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[61]"
                    >Subtotal</span
                    ><span
                    class="flex w-[59px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[62]"
                    >RM {{ this.netTotal }}</span
                    >
                </div>
                <!-- <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[63]"
                >
                    <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[64]"
                    >SST 6%</span
                    ><span
                    class="flex w-[64px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[65]"
                    >+ RM4.08</span
                    >
                </div> -->
                <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[66]"
                >
                    <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[67]"
                    >Discount</span
                    ><span
                    class="flex w-[62px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[68]"
                    >RM {{ this.discount.toFixed(2) }}</span
                    >
                </div>
                <!-- <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[69]"
                >
                    <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[70]"
                    >Rounding Adj.</span
                    ><span
                    class="flex w-[63px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[71]"
                    >+ RM0.02</span
                    >
                </div> -->
                </div>
                <div
                class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[72]"
                >
                <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[73]"
                    >Total</span
                ><span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[74]"
                    >RM {{ this.grandTotal.toFixed(2) }}</span
                >
                </div>
            </div>
            <button @click="submitOrder"
                class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[75]"
            >
                <span
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[76]"
                >Place Order</span
                >
            </button>
            </div>
        </div>
        </div>
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
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div> 

  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';
import { getCart, removeFromCart, clearCart } from '../services/cartservice.js';
import { usePayloadStore } from '../stores/payloadStore';

export default{
  data(){
    return{
      cart: [],
      memberAddress: null,
      member: null,
      addresses: [],
      memberWallet: null,
      netTotal: 0,
      countVoucher: 0,
      topUpShow: false,
      amount: '0',
      activeMethod: 'Bank',
      paymentMethod: 0,
      grandTotal: 0,
      totalWeight:0.0000,
      totalQty: 0,
      discount: (sessionStorage.getItem('voucherAmount') !== null) ? Number(sessionStorage.getItem('voucherAmount')) : 0,
      loading: false
    }
  },
  mounted(){
    this.cart = getCart();
    this.getMemberDetail();
    this.netTotal = this.cart.reduce((sum, item) => {
      return sum + (item.Amount * item.Quantity);
    }, 0).toFixed(2);
    this.totalQty = this.cart.reduce((sum, item) => {
      return sum + item.Quantity;
    }, 0);
    this.totalWeight = this.cart.reduce((sum, item) => {
      return sum + (item.Weight * item.Quantity);
    }, 0).toFixed(4);
    this.grandTotal = this.netTotal - this.discount;
  },
  methods:{    
    goVoucher(){
      const store = usePayloadStore();
        var voucherload ={
          Member: this.member,
        }

        store.setPayload(voucherload);
        this.$router.push({ name: 'OrderVoucher' });
    },
    backToPrevious() {
      this.$router.go(-1);
    },
    removeItem(Id){
        removeFromCart(Id);
        this.cart = getCart();
    },
    async getMemberDetail(){
       const userId = sessionStorage.getItem('IdUser');
      //const userId = 'e45a07c5-c475-4fb3-9b96-66fa3c3bff23';
      if(userId !== null){
        try{
          const response = await api.post('Member/GetMemberById', JSON.stringify(userId));
          if(response.status === 200){
            if(response.data !== null){
              this.addresses = response.data.addressList;
              this.memberAddress = response.data.addressList?.[0] || null;
              this.member = response.data;
              this.memberWallet = response.data.wallet;
              this.countVoucher = response.data.vouchers.length;
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
    formatDigit() {
      this.amount = this.amount.replace(/[^0-9.]/g, ''); // Remove everything except digits and dots
    },
    async submitTopUp(){
      if(this.amount === '0'){
        toast.error("Amount cannnot be zero or empty!")
      }
      else{
        this.loading = true;
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
        finally {
          this.loading = false;
        } 
      }
    },
    async submitOrder(){
        if(this.cart.length > 0){
            if(this.grandTotal > this.wallet?.balance){
                toast.error("Insufficient balance in your wallet.Please top-up your wallet.");
            }
            else{
              this.loading = true;
                const order = {
                    MemberId: sessionStorage.getItem('IdUser'),
                    AddressId: this.memberAddress.id,
                    TotalAmount: this.grandTotal,
                    TotalQuantity: this.totalQty,
                    PaymentMethod: 'Bank In',
                    VoucherId: (sessionStorage.getItem('voucherId') === null) ? '' : sessionStorage.getItem('voucherId'),
                    TotalWeight: this.totalWeight,
                    Items: this.cart
                };
                try{
                    const response = await api.post('Order/CreateOrder', JSON.stringify(order));
                    if(response.status === 200){
                        if(response.data.data.recordStatus === 1){
                            sessionStorage.removeItem('voucherAmount');
                            sessionStorage.removeItem('voucherId');
                            clearCart();
                            toast.success("Order placed successfully!");
                            const store = usePayloadStore();
                            var transactload = {
                                code: response.data.data.orderNo,
                                invoiceNo: '',
                                dt: response.data.data.createdDt,
                                name: this.member?.name,
                                address: this.memberAddress?.line1 + '' + this.memberAddress?.line2 + '' + this.memberAddress?.city + '' + this.memberAddress?.postalCode + '' + this.memberAddress?.state + '' + this.memberAddress?.country,
                                transactionType: 'Purchase',
                                amount: response.data.data.totalAmount,
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
                finally {
                  this.loading = false;
                } 
            }
        }
        else{
            toast.error('Your cart is empty!')
        }
    }
  }
}
</script>

<style scoped>

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
/* Chrome, Safari, Edge, Opera */
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.no-spinner[type="number"] {
  -moz-appearance: textfield;
}
</style>