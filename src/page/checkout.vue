<template>
  <div
    class="checkout main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px]  items-center flex-nowrap relative z-[3] mt-[50px] mr-0 mb-0"
    >
      <div @click="backToPrevious()"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[4]"
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
          <div v-if = "this.payload?.MethodUse === 'Pickup'"
              class="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-10"
          >
            <span
              class="flex w-[114px] h-[30.649px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[11] ml-[10px] mt-[10px]"
              >{{ this.payload?.Member.name }} <span class="flex w-[114px] h-[30.649px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[10px] font-semibold leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[11] ml-[10px]">
              {{ this.payload?.Member.mobileNumber }}
            </span></span> 
          </div>
          <span
            class="h-[40.207px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left break-words z-[13] mt-[10px] mb-[5px] ml-[10px]"
            >{{ showAddress }} </span
          >
        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] flex-col gap-[20px] items-start flex-nowrap relative z-[15] mt-[12px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex h-[100px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[16]"
      >
        <div
          class="flex w-[302px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[17]"
        >
          <div
            class="w-[80px] h-[80px] shrink-0 bg-[url('../public/sosoda.png')] bg-cover bg-no-repeat rounded-[10px] relative z-[18]"
          ></div>
          <div
            class="flex flex-col gap-[8px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[19]"
          >
            <div
              class="flex w-[117px] flex-col items-start shrink-0 flex-nowrap relative z-20"
            >
              <span v-if = "this.payload?.Brand === 1"
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[21]"
                >SOSODA Cylinder
              </span>
              <span v-if = "this.payload?.Brand === 2"
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[21]"
                >NON SOSODA Cylinder
              </span>
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[22]"
                >RM {{ this.payload?.BuyPrice.toFixed(2) }}
              </span>
            </div>
            <div
              class="flex w-[87px] flex-col items-start shrink-0 flex-nowrap relative z-[23]"
            >
              <span
                class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[24]"
                >Qty: {{ this.payload?.Qty }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div v-if = "voucherCount > 0"
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
            >5</span
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
                >RM {{ this.payload?.Member.wallet.balance.toFixed(2) }}</span
              >
            </div>
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[41]"
            >
              <span
                class="h-[14px] shrink-0 basis-auto font-['Poppins'] text-[9px] font-normal leading-[13.5px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[42]"
                >Enjoy fast check out with Sosoda Wallet</span
              >
              <button
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
      class="w-[94px] h-[80px] bg-[url('../public/getmoney.png')] bg-cover bg-no-repeat absolute top-[605px] left-[60px] z-[48]"
    ></div>
    <div
      class="w-[342px] h-[110px] bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] absolute top-[608px] left-[30px] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[47]"
    >
      <div
        class="flex w-[196px] flex-col gap-[8px] items-start flex-nowrap relative z-[49] mt-[15px] mr-0 mb-0 ml-[131px]"
      >
        <div
          class="flex w-[92px] flex-col items-start shrink-0 flex-nowrap relative z-50"
        >
          <span
            class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[51]"
            >Total Refund</span
          ><span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[52]"
            >RM {{ this.payload?.RefundAmount.toFixed(2) }}</span
          >
        </div>
        <div
          class="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[53]"
        >
          <span
            class="flex w-[117px] h-[12px] justify-start items-center shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[54]"
            >Return Sosoda Cylinder</span
          ><span
            class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[55]"
            >RM {{ this.payload?.ReturnPrice.toFixed(2) }} x {{ this.payload?.Qty }}</span
          >
        </div>
      </div>
      <div
        class="w-[342px] h-[15px] font-['Poppins'] text-[10px] font-medium leading-[15px] relative text-center whitespace-nowrap z-[56] mt-[16px] mr-0 mb-0 ml-0"
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
      class="w-[402px] h-[295px] bg-[#fff] rounded-tl-[20px] rounded-tr-[20px] top-[660px] rounded-br-none rounded-bl-none absolute bottom-0 right-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
    >
      <div
        class="flex w-[342px] flex-col gap-[20px] items-start flex-nowrap relative z-[57] mt-[83px] mr-0 mb-0 ml-[30px]"
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
              >RM {{ this.payload?.PurchaseAmount.toFixed(2) }}</span
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
              >RM 0.00</span
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
            >RM {{ this.payload?.PurchaseAmount.toFixed(2) }}</span
          >
        </div>
      </div>
      <button
        class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[1] mt-[31px] mr-0 mb-0 ml-[30px]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[2]"
          >Pay</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';
import { usePayloadStore } from '../stores/payloadStore';

export default{
  data(){
    return{
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
          return this.payload?.Branch.address;
        case 'Pickup':
          return (this.payload?.Address.line1 + ' ' + this.payload?.Address.line2 + ' '  + this.payload?.Address.postalCode + ' '  + this.payload?.Address.city + ' '  
          + this.payload?.Address.state + ' '  + this.payload?.Address.country);
        case 'DropOff':
          return this.payload?.DropOffPoint;
        default:
          return '';
      }
    },
  },
  mounted(){

  },
  methods:{  
    backToPrevious(){
        this.$router.go(-1);  
    },
    voucherCount(){
        return (this.payload?.Member.vouchers !== null) ? this.payload?.Member.vouchers.length : 0;
    }
  }
}
</script>

<style scoped>
.checkout{
  overflow-y: auto;
}
</style>