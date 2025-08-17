<template>
  <div
    class="main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToPrevious"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[1]"
      ></div>
      <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[2]"
        >MY VOUCHER</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[3]"
      ></div>
    </div>
    <!-- <div
      class="flex w-[254px] h-[23px] justify-between items-center relative z-[8] mt-[35px] mr-0 mb-0 ml-[30px]"
    >
      <button
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#5ba6e0] rounded-[20px] relative shadow-[1px_2px_7px_0_rgba(0,0,0,0.1)] z-[8]"
      >
        <span
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[20px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[9]"
          >Active</span
        >
      </button>
      <button
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#f8f8f8] rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[4]"
      >
        <span
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[5]"
          >Used</span
        >
      </button>
      <button
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#f8f8f8] rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[6]"
      >
        <span
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[7]"
          >Expired</span
        >
      </button>
    </div> -->
    <div v-for="(item, index) in this.payload.Member.vouchers" :key="index" @click="selectVoucher(item.amount, item.id)"
      class="cursor-pointer flex flex-wrap w-[342px] h-[164px] justify-between items-center relative z-[32] mt-[30px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[166px] pt-[12px] pr-[10px] pb-[16px] pl-[10px] gap-[10px] items-center shrink-0 flex-nowrap bg-[#dcecf8] rounded-[10px] border-solid border border-[#e9f2fb] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-10 mt-[10px]"
      >
        <div
          class="flex w-[146px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative z-[11]"
        >
          <div
            class="flex h-[90px] pt-[21px] pr-[15px] pb-[21px] pl-[15px] flex-col gap-[10px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[12]"
          >
            <div
              class="w-[146px] h-[90px] shrink-0 bg-[url('../public/voucher-border.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[13]"
            ></div>
            <div class="w-[79px] h-[49px] shrink-0 text-[0px] relative z-[14]">
              <span
                class="block h-[25px] font-['Poppins'] text-[36px] font-bold leading-[25px] text-[#fff] relative text-left whitespace-nowrap z-[15] mt-0 mr-0 mb-0 ml-0"
                >RM{{ item.amount }}</span
              ><span
                class="block h-[14px] font-['Poppins'] text-[20px] font-medium leading-[14px] text-[#fff] relative text-left whitespace-nowrap z-[16] mt-[10px] mr-0 mb-0 ml-[21px]"
                >OFF</span
              >
            </div>
          </div>
          <div
            class="flex flex-col gap-[11px] items-start self-stretch shrink-0 flex-nowrap relative z-[17]"
          >
            <div
              class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[18]"
            >
              <span
                class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[20.991px] text-[#292929] relative text-left whitespace-nowrap z-[19]"
                >RM{{ item.amount }} OFF</span
              ><span
                class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#292929] relative text-left z-20"
                >The voucher valid until {{ formatDate(item.expiredDt) }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex w-[342px] gap-[5px] items-center flex-nowrap relative z-[54] mt-[10px] mr-0 mb-0 ml-[30px]"
        >
        <div
            class="w-[156px] h-px shrink-0 bg-[url('../public/endline.png')] bg-cover bg-no-repeat relative z-[55]"
        ></div>
        <span
            class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#d8d8d8] relative text-left whitespace-nowrap z-[56]"
            >END</span
        >
        <div
            class="w-[156px] h-px shrink-0 bg-[url('../public/endline.png')] bg-cover bg-no-repeat relative z-[57]"
        ></div>
      </div>
    </div>
    
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

    }
  },
  computed: {
    payload() {
      const store = usePayloadStore();

      return store.data;
    },
  },
  mounted(){
    
  },
  methods:{ 
    formatDate(date) {
      return dayjs(date).format('DD MMM YYYY');
    }, 
    backToPrevious(){
      const store = usePayloadStore();
      var checkoutload = {
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
      store.setPayload(checkoutload);
      this.$router.push({ name: 'Checkout' }); 
    },
    selectVoucher(amount, id){
      const store = usePayloadStore();
      var checkoutload = {
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
        Discount: amount,
        VoucherId: id
      }
      store.setPayload(checkoutload);
      this.$router.push({ name: 'Checkout' }); 
    }
  }
}
</script>
