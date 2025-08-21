<template>
  <div
    class="main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[50.148px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToHome"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[1]"
      ></div>
      <span
        class="flex w-[158px] h-[14px] justify-center items-center shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-center uppercase whitespace-nowrap z-[2]"
        >view my order</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[3]"
      ></div>
    </div>
    <div
      class="flex w-[372px] flex-col gap-[20px] items-start flex-nowrap relative z-[4] mt-[35px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[340px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]"
      >
        <div
          class="flex w-[166px] pt-[14px] pr-[51px] pb-[14px] pl-[51px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#a5a5a5] rounded-[10px] relative z-[6]"
        >
          <span
            class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[7]"
            >Product</span
          >
        </div>
        <div
          class="flex w-[166px] pt-[14px] pr-[47px] pb-[14px] pl-[47px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] relative z-[8] bg-[#545454] rounded-[10px]"
        >
          <span
            class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[9]"
            >Cylinder</span
          >
        </div>
      </div>
      <div
        class="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-10"
      >
        <!-- <div
          class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[11]"
        >
          <div
            class="flex w-[134px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[12]"
          >
            <span
              class="flex w-[86px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#fff] relative text-center whitespace-nowrap z-[13]"
              >Ready to Refill</span
            >
          </div>
          <div
            class="flex w-[147px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[14]"
          >
            <span
              class="flex w-[99px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] relative text-center whitespace-nowrap z-[15]"
              >Ready to Collect</span
            >
          </div>
          <div
            class="flex w-[117px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[16]"
          >
            <span
              class="flex w-[69px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] relative text-center whitespace-nowrap z-[17]"
              >Completed</span
            >
          </div>
          <div
            class="flex w-[107px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[18]"
          >
            <span
              class="flex w-[59px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] relative text-center whitespace-nowrap z-[19]"
              >Canceled</span
            >
          </div>
        </div> -->
        <div
          class="flex w-[342px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative z-20"
        >
          <div v-if="(item, index) in orders" :key="index"
            class="flex w-[342px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-50"
          >
            <div
              class="flex flex-col gap-[10px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[51]"
            >
              <div
                class="flex w-[195px] flex-col items-start shrink-0 flex-nowrap relative z-[52]"
              >
                <span
                  class="flex w-[195px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#292929] relative text-right whitespace-nowrap z-[53]"
                  >Order #{{ item.orderNo }}</span
                ><span
                  class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] uppercase font-semibold leading-[18px] tracking-[0.1px] relative text-left whitespace-nowrap z-[54]"
                  >{{ item.remarks }}</span
                >
              </div>
              <div
                class="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[55]"
              >
                <div
                  class="w-[80px] h-[80px] shrink-0 bg-[url('../public/sosoda.png')] bg-cover bg-no-repeat rounded-[10px] relative z-[56]"
                ></div>
                <div
                  class="flex flex-col gap-[5px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[57]"
                >
                  <div
                    class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]"
                  >
                    <div
                      class="flex flex-col gap-[7px] items-start self-stretch shrink-0 flex-nowrap relative z-[59]"
                    >
                      <span
                        class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[60]"
                        >{{ title(item.transactionType) }}</span
                      >
                      <div
                        class="flex pt-0 pr-[8px] pb-0 pl-[8px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[61]"
                      >
                        <div
                          class="flex w-[140px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[62]"
                        >
                          <span
                            class="flex w-[100px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-center whitespace-nowrap z-[66]"
                            >{{ item.orderStatus }}</span
                          >
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex w-[342px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[68]"
          >
            <div
              class="w-[156px] h-px shrink-0 bg-[url('../public/endline.png')] bg-cover bg-no-repeat relative z-[69]"
            ></div>
            <span
              class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#d8d8d8] relative text-left whitespace-nowrap z-[70]"
              >END</span
            >
            <div
              class="w-[156px] h-px shrink-0 bg-[url('../public/endline.png')] bg-cover bg-no-repeat relative z-[71]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify'; 
import dayjs from 'dayjs';
import { usePayloadStore } from '../stores/payloadStore';

export default{
  data(){
    return{
        orders: []       
    }
  },
  computed:{
    title(type){
        switch (type) {
            case 'Purchase':
                return 'New Purchase';
            case 'Refill':
                return 'Refill & Swap';
            case 'Refund':
                return 'Refund Only';
            default:
                return '';
        }
    }
  },
  mounted(){
    this.getOrderHistories();
  },
  methods:{
    backToHome() {
      this.$router.go(-1);   
    },
    async getOrderHistories(){
        const userId = sessionStorage.getItem('IdUser');
        //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
        if(userId !== null){
        try{
            const response = await api.post('Order/GetOrdersByMemberId', JSON.stringify(userId))
                if(response.status === 200){
                    this.orders = response.data;
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
  }
}

</script>
