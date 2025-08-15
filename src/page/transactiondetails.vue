<template>
  <div
    class="detail main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[50.148px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[1]"
      ></div>
      <span
        class="flex w-[226px] h-[14px] justify-center items-center shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-center uppercase whitespace-nowrap z-[2]"
        >{{ getTitle }} CONFIRMATION</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[3]"
      ></div>
    </div>
    <div
      class="flex w-[368px] flex-col gap-[80px] items-center flex-nowrap relative z-[4] mt-[65.852px] mr-0 mb-0 ml-[17px]"
    >
      <div class="w-[362px] h-[462.008px] shrink-0 relative z-[5]">
        <div
          class="flex w-[78px] h-[78px] pt-[2px] pr-[2px] pb-[2px] pl-[2px] gap-[10px] justify-center items-center flex-nowrap rounded-[42px] border-solid border-[3px] border-[#fff] absolute top-0 left-1/2 translate-x-[-50.64%] translate-y-0 z-[8]"
        >
          <div
            class="w-[49px] h-[49px] shrink-0 bg-[url('../public/success.png')] bg-cover bg-no-repeat relative z-[9]"
          ></div>
        </div>
        <div
          class="flex w-[362px] h-[433px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-center flex-nowrap absolute top-[29.008px] left-0 z-[6]"
        >
        </div>
        <div
          class="flex w-[281px] h-[334px] flex-col gap-[50px] items-center flex-nowrap absolute top-[88px] left-[40px] z-10"
        >
          <div
            class="flex w-[228px] flex-col items-center shrink-0 flex-nowrap relative z-[11]"
          >
            <span
              class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#292929] relative text-center whitespace-nowrap z-[12]"
              >Thank You!</span
            ><span
              class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[13]"
              >Your transaction was successful</span
            >
          </div>
          <div
            class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[14]"
          >
            <div
              class="flex gap-[40px] items-center self-stretch shrink-0 flex-nowrap relative z-[15]"
            >
              <div
                class="flex w-[147px] flex-col items-start shrink-0 flex-nowrap relative z-[16]"
              >
                <span
                  class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[17]"
                  >Order NO</span
                ><span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#292929] relative text-left whitespace-nowrap z-[18]"
                  ># {{ getTransactionRef }}</span
                >
              </div>
              <div
                class="flex w-[68px] h-[39px] pt-0 pr-0 pb-0 pl-0 flex-col items-start shrink-0 flex-nowrap relative z-[19]"
              ></div>
            </div>
            <div
              class="flex gap-[40px] items-center self-stretch shrink-0 flex-nowrap relative z-20"
            >
              <div
                class="flex w-[85px] flex-col items-start shrink-0 flex-nowrap relative z-[21]"
              >
                <span
                  class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[22]"
                  >DATE</span
                ><span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#292929] relative text-left whitespace-nowrap z-[23]"
                  >{{ formatDate(this.payload?.dt) }}</span
                >
              </div>
            </div>
            <div v-if = "getTitle !== 'Top-Up'"
              class="flex w-[131px] flex-col items-start shrink-0 flex-nowrap relative z-[27]"
            >
              <div
                class="flex w-[48px] flex-col gap-[2px] items-start shrink-0 flex-nowrap relative z-[28]"
              >
                <span
                  class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[29]"
                  >TO</span
                ><span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#292929] relative text-left whitespace-nowrap z-30"
                  >{{ this.payload?.name }}</span
                >
              </div>
              <span
                class="flex w-[282px] h-[30px] break-words justify-start items-start shrink-0 font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#292929] relative text-left z-[31]"
                >{{ this.payload?.address }}</span
              >
            </div>
            <div
              class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[32]"
            >
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[33]"
                >AMOUNT</span
              >
              <div
                class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[34]"
              >
                <span
                  class="flex w-[87px] h-[27px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[27px] text-[#292929] relative text-left whitespace-nowrap z-[35]"
                  >RM {{ this.payload?.amount.toFixed(2) }}</span
                >
                <div
                  class="flex w-[75px] pt-[2px] pr-[24px] pb-[2px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#2275b6] rounded-[28px] relative z-[36]"
                >
                  <span
                    class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#fff] relative text-left whitespace-nowrap z-[37]"
                    >Paid</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="backToPrevious()"
        class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[38]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[39]"
          >Back</span
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
    getTitle() {
      switch (this.payload?.transactionType) {
        case 'TopUp':
          return 'Top-Up';
        case 'Purchase':
          return 'Order';
        case 'Refill':
          return 'Refill';
        case 'Refund':
          return 'Refund';
        default:
          return '';
      }
    },
    getTransactionRef() {
      switch (this.payload?.transactionType) {
        case 'TopUp':
          return this.payload?.invoiceNo;
        default:
          return this.payload?.code;
      }
    },
  },
  mounted(){

  },
  methods:{  
    backToPrevious(){
        this.$router.go(-1);  
    },
    formatDate(dateStr) {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }
  }
}
</script>
<style scoped>
.detail{
    background-color: #fafafa;
}
</style>