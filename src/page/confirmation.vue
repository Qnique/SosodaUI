<template>
  <div
    class="confirm main-container w-[402px] h-[985px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[20px] items-start flex-nowrap relative z-[5] mt-[40px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[30px] items-center self-stretch shrink-0 flex-nowrap relative z-[6]"
      >
        <div
          class="w-[181px] shrink-0 font-['Poppins'] text-[16px] font-bold leading-[23.989px] relative text-center whitespace-nowrap z-[7]"
        >
          <span
            class="font-['Poppins'] text-[20px] font-bold leading-[24px] text-[#000] relative text-center"
            >Order Confirmed!<br /></span
          ><span
            class="font-['Poppins'] text-[14px] font-bold leading-[23.989px] text-[#000] relative text-center"
            >Thank you</span
          >
        </div>
        <div class="h-[68px] self-stretch shrink-0 relative z-[8]">
          <div
            class="flex w-[80px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-0 z-[11]"
          >
            <div
              class="w-[40px] h-[40px] shrink-0 bg-[url('../public/refillplaced.png')] bg-cover bg-no-repeat relative z-[12]"
            ></div>
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[13]"
              >Order Placed</span
            >
          </div>
          <div
            class="flex w-[100px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-[126.501px] z-[14]"
          >
            <div
              class="w-[40px] h-[40px] shrink-0 bg-[url('../public/refillready.png')] bg-cover bg-no-repeat relative z-[15]"
            ></div>
            <span
              class="flex w-[86px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-center whitespace-nowrap z-[16]"
              >{{ this.orderStatus }}</span
            >
          </div>
          <div
            class="flex w-[69px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-[273px] z-[17]"
          >
            <div
              class="w-[40px] h-[40px] shrink-0 bg-[url('../public/refilldone.png')] bg-cover bg-no-repeat relative z-[18]"
            ></div>
            <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[19]"
              >Completed</span
            >
          </div>
          <div
            class="w-[110px] h-[2px] bg-[url('../public/processline.png')] bg-cover bg-no-repeat absolute top-[18.779px] left-[46.999px] z-[9]"
          ></div>
          <div
            class="w-[110px] h-[2px] bg-[url('../public/processline.png')] bg-cover bg-no-repeat absolute top-[18.779px] left-[186.001px] z-10"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-20 m-[10px]"
      >
        <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[24]"
        >
          <span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[25]"
            >Reference No.</span
          ><span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[26]"
            >{{ this.payload?.Code }}</span
          >
        </div>
        <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
          <span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Payment Method</span
          ><span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[29]"
            >Sosoda Wallet</span
          >
        </div>
        <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-30"
        >
          <span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[31]"
            >Date</span
          ><span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[32]"
            >{{ formatDate(this.payload?.DateRefill) }}</span
          >
        </div>
        <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[33]"
        >
          <span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[34]"
            >Quantity</span
          ><span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[35]"
            >x {{ this.payload?.Quantity }}</span
          >
        </div>
        <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[36]"
        >
          <span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[37]"
            >Total</span
          ><span
            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[38]"
            >RM {{ this.payload?.TotalAmount?.toFixed ? this.payload?.TotalAmount.toFixed(2) : '0.00' }}</span
          >
        </div>
      </div>
    </div>
    <div
      class="w-[342px] h-px bg-[url('../public/bigline.png')] bg-cover bg-no-repeat relative z-[4] mt-[19.5px] mr-0 mb-0 ml-[30px]"
    ></div>
    <div
      class="flex w-[342.004px] flex-col gap-[14px] items-start flex-nowrap relative z-[39] mt-[19.5px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-40"
      >
        <div
          class="flex w-[342.004px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative z-[41]"
        >
          <span
            class="flex w-[342.004px] h-[30px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[20px] font-bold leading-[30px] relative text-left whitespace-nowrap z-[42] text-[#60DCD6]"
            >Your Next Steps
          </span>
          <div
            class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[43]"
          >
            <span
              class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[44]"
              >Return Quantity</span
            ><span
              class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[45]"
              >x {{ this.payload?.Quantity }}</span
            >
          </div>
          <div
            class="flex w-[342.004px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative z-[46]"
          >
            <span v-if = "this.payload?.MethodUse === 'Exchange'"
              class="flex w-[342.004px] h-[42px] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left z-[47]"
              >Please bring the empty cylinders to outlet to proceed with the
              refill.</span>
              <div v-if = "this.payload?.MethodUse !== 'Exchange'"
                class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]"
              >
                <span
                  class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[47] mb-[5px]"
                  >1. Print the AWB</span
                >
                <div
                  class="flex pt-0 pr-0 pb-0 pl-[22px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[48] mr-[5px]"
                >
                  <div
                    class="flex h-[59px] pt-[11px] pr-[15px] pb-[11px] pl-[30px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[49]"
                  >
                    <span
                      class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-50"
                      >AWB</span
                    >
                    <button :disabled="orderStatus === 'PendingPayment'"
                    :class="[
                            'flex w-[107px] pt-[8px] pr-[28px] pb-[8px] pl-[28px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[8px] relative z-[51]',
                            orderStatus === 'PendingPayment' ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                          ]"
                      class="flex w-[107px] pt-[8px] pr-[28px] pb-[8px] pl-[28px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[8px] relative z-[51]"
                    >
                      <span
                        class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#fff] relative text-left whitespace-nowrap z-[52]"
                        >Print</span
                      >
                    </button>
                  </div>
                </div>
              </div>
              <span v-if = "this.payload?.MethodUse !== 'Exchange'"
                class="flex w-[342.004px] h-[63px] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left z-[53]"
                >2. Attach the AWB securely to the parcel.<br />3. Ensure all cylinders
                are packed properly.<br />{{ condition }}</span
              >
              <br></br>
              <span
              class="flex w-[342.004px] h-[18px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-bold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[48]"
              >Important:</span
              ><span
                class="flex w-[342.004px] h-[54px] justify-start items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left z-[49]"
                >Cylinders must be returned in good physical condition. Must not
                be dented, corroded, leaking, tampered with, or expired.</span
              >
            </div>
          </div>
          <div v-if = "this.payload?.MethodUse === 'Pickup' && orderStatus !== 'PendingPayment'"
            class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[58] mt-[5px] mr-0 mb-0"
          >
            <div
              class="flex h-[59px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] gap-[156px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[59]"
            >
              <div
                class="flex w-[273px] gap-[9px] items-center shrink-0 flex-nowrap relative z-[60]"
              >
                <div
                  class="w-[40px] h-[40px] shrink-0 bg-cover bg-no-repeat rounded-[5px] relative z-[61]"
                  :style="{ backgroundImage: this.logo ? `url(${this.logo})` : '' }"
                ></div>
                <div
                  class="flex w-[219px] flex-col items-start shrink-0 flex-nowrap relative z-[62]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[21px] text-[#000] relative text-left break-words z-[63]"
                    >{{ (orderStatus === 'PendingPayment') ? '' : 'Pickup Date:' + pickupDT }}</span
                  ><br></br><span
                    class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[64]"
                    >Please ready the cylinder on the day</span
                  >
                </div>
              </div>
            </div>
          </div>
          <span v-if = "this.payload?.MethodUse !== 'Pickup'"
          class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[13]"
          >{{ titleConfirm }}</span>
          <div v-if = "this.payload?.MethodUse !== 'Pickup'"
            class="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[17]"
          >
            <div
              class="w-[39px] h-[39px] shrink-0 bg-[url('../public/store.png')] bg-cover bg-no-repeat relative z-[51] m-[8px]"
            ></div>
            <div
            class="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[19]"
              >
              <span
                  class="h-[40.207px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left break-words z-[13] mt-[10px] mb-[5px] ml-[10px]"
                  >{{ showAddressConfirm }} </span
              >
              </div>
          </div>
        </div>
        <div
          class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[57] mt-[20px]"
        >
          <div
            class="w-[342.004px] self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[15px] relative text-left whitespace-nowrap z-[58]"
          >
            <span
              class="font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left"
              >*</span
            ><span
              class="font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left"
              >You’ll receive </span
            ><span
              class="font-['Poppins'] text-[10px] font-bold leading-[15px] text-[#000] relative text-left"
              >RM{{ this.payload?.RefundAmount }}</span
            ><span
              class="font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left"
            >
              credit in your wallet after your return is verified.</span
            >
          </div>
        </div>
      </div>
      <div
        class="flex w-[341px] pt-0 pr-[10px] pb-0 pl-0 gap-[21px] items-center flex-nowrap relative mt-[30px] mr-0 mb-0 ml-[30px]"
      >
        <button @click="backToHome"
          class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[1]"
        >
          <span
            class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[2]"
            >Back To Home</span
          >
        </button>
        <!-- <div
          class="w-[36px] h-[36px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-17/7epWxxtaao.png)] bg-cover bg-no-repeat relative z-[3]"
        ></div> -->
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
      logo:'',
      pickupDT: '',
      orderStatus: ''
    }
  },
  computed:{
    payload() {
      const store = usePayloadStore();
      return store.data;
    },
    condition(){
      switch (this.payload?.MethodUse) {
        case 'Exchange':
          return '';
        case 'Pickup':
          return '4. Ready for collection.';
        case 'DropOff':
          return '4. Please bring the empty cylinders to the Drop-off point to drop them off.';
        default:
          return '';
      }    
    },
    titleConfirm() {
      switch (this.payload?.MethodUse) {
        case 'Exchange':
          return 'Outlet - ' + this.payload?.Branch.name;
        case 'Pickup':
          return '';
        case 'DropOff':
          return 'Drop-Off Point';
        default:
          return '';
      }
    },
    showAddressConfirm(){
      switch (this.payload?.MethodUse) {
        case 'Exchange':
          return this.payload?.Branch.address;
        case 'Pickup':
        //   return (this.payload?.Address.line1 + ' ' + this.payload?.Address.line2 + ' '  + this.payload?.Address.postalCode + ' '  + this.payload?.Address.city + ' '  
        //   + this.payload?.Address.state + ' '  + this.payload?.Address.country);
        return '';
        case 'DropOff':
          return this.payload?.DropOffPoint;
        default:
          return '';
      }
    },
  },
  mounted(){
    this.getLogo();
    //this.getOrderStatus();
  },
  methods:{
    backToHome() {
      this.$router.push({ name: 'Home' }); 
    },
    formatDate(date) {
      return dayjs(date).format('DD MMM YYYY');
    },
    async getLogo(){
      try{
        const response = await api.post('Order/GetOrderByReference', JSON.stringify(this.payload?.RefillId));
        if(response.status === 200){
          this.logo = response.data.courierLogo;
          this.pickupDT = response.data.pickupDate;
          this.orderStatus = response.data.orderStatus
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
    },
    // async getOrderStatus(){

    // }
  }
}

</script>

<style scoped>
.confirm{
  overflow-y: auto;
}
</style>