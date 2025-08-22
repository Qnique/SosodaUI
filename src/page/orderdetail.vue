<template>
  <div
    class="main-container w-[402px] h-[936px] bg-[#fff] relative mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToPrevious"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[1]"
      ></div>
      <span
        class="flex w-[149px] h-[14px] justify-center items-center shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#292929] relative text-center uppercase whitespace-nowrap z-[2]"
        >ORDER DETAILS</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[3]"
      ></div>
    </div>
    <!-- <div
      class="w-[342.004px] h-[68px] relative z-[15] mt-[35px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[80px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-0 z-[6]"
      >
        <div
          class="w-[40px] h-[40px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/c0wUZbwd2w.png)] bg-cover bg-no-repeat relative z-[7]"
        ></div>
        <span
          class="flex w-[80px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-center whitespace-nowrap z-[8]"
          >Order Placed</span
        >
      </div>
      <div
        class="flex w-[50px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-1/2 translate-x-[-138.67%] translate-y-0 z-[9]"
      >
        <div
          class="w-[40px] h-[40px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/pxNPxcQcvP.png)] bg-cover bg-no-repeat relative z-10"
        ></div>
        <span
          class="flex w-[50px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-center whitespace-nowrap z-[11]"
          >Packing</span
        >
      </div>
      <div
        class="flex w-[89px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-[173.336px] z-[12]"
      >
        <div
          class="w-[40px] h-[40px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/PyJZaKZuYq.png)] bg-cover bg-no-repeat relative z-[13]"
        ></div>
        <span
          class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[14]"
          >Out of Delivery</span
        >
      </div>
      <div
        class="flex w-[58px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-[284.004px] z-[15]"
      >
        <div
          class="w-[40px] h-[40px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/RMf3SEx8Wx.png)] bg-cover bg-no-repeat relative z-[16]"
        ></div>
        <span
          class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[17]"
          >Delivered</span
        >
      </div>
      <div
        class="w-[158.668px] h-[2px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/oMf9wJUfNm.png)] bg-cover bg-no-repeat absolute top-[18.779px] left-[137.332px] z-[5]"
      ></div>
      <div
        class="w-[79.668px] h-[2px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/BcOv9g8hxp.png)] bg-cover bg-no-repeat absolute top-[19px] left-[47px] z-[4]"
      ></div>
    </div> -->
    <div
      class="flex w-[342.359px] flex-col gap-[20px] items-start flex-nowrap relative z-[18] mt-[30px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]"
      >
        <div
          class="flex w-[342px] flex-col gap-[20px] items-start shrink-0 flex-nowrap relative z-20"
        >
          <div v-for="(item, index) in items"
            class="flex pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[21]"
          >
            <div
              class="flex pt-0 pr-[20px] pb-0 pl-0 justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[22]"
            >
              <div
                class="flex gap-[10px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[23]"
              >
                <div
                  class="w-[80px] h-[80px] shrink-0 bg-[url('../public/product.png')] bg-cover bg-no-repeat rounded-[10px] relative z-[24]"
                ></div>
                <div
                  class="flex w-[117px] flex-col gap-[8px] items-start shrink-0 flex-nowrap relative z-[25]"
                >
                  <div
                    class="flex w-[117px] flex-col items-start shrink-0 flex-nowrap relative z-[26]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[27]"
                      >{{ item.name }}</span
                    ><span
                      class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[28]"
                      >RM {{ item?.amount?.toFixed ? item.amount.toFixed(2) : '0.00' }}</span
                    >
                  </div>
                  <div
                    class="flex w-[87px] flex-col items-start shrink-0 flex-nowrap relative z-[29]"
                  >
                    <span
                      class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#a5a5a5] relative text-left whitespace-nowrap z-30"
                      >Quantity : {{ item.quantity }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[32]"
        >
          <span
            class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[33]"
            >Contact Details</span
          >
          <div
            class="flex h-[75px] pt-[12px] pr-[10px] pb-[12px] pl-[10px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[34]"
          >
            <div
              class="flex w-[322.035px] gap-[72px] items-end shrink-0 flex-nowrap relative z-[35]"
            >
              <div class="w-[200.035px] h-[50px] shrink-0 relative z-[36]">
                <div
                  class="flex w-[200.035px] h-[50px] flex-col gap-[3px] items-start flex-nowrap absolute top-0 left-0 z-[37]"
                >
                  <div class="w-[141px] h-[21px] shrink-0 relative z-[38]">
                    <span
                      class="flex h-[21px] justify-start items-center font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] absolute top-0 left-[calc(50%-70.5px)] text-left whitespace-nowrap z-[39]"
                      >{{ this.member?.name }}</span
                    ><span
                      class="flex h-[16px] justify-start items-center font-['Poppins'] text-[11px] font-normal leading-[16px] text-[#bfbfbf] absolute top-[3px] left-[calc(50%-14.5px)] text-left whitespace-nowrap z-40"
                      >{{ this.member?.mobileNumber }}</span
                    >
                  </div>
                  <span
                    class="flex w-[200.035px] h-[26px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[9px] font-normal leading-[13.494px] text-[#a5a5a5] relative text-left z-[41]"
                    >{{ this.address?.line1 }} {{ this.address?.line2 }} {{ this.address?.city }} {{ this.address?.postalCode }} {{ this.address?.State }}</span
                  >
                </div>
              </div>
              <div
                class="flex w-[50px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[42]"
              >
                <div class="w-[20px] h-[20px] shrink-0 relative z-[43]">
                </div>
                <div class="w-[20px] h-[20px] shrink-0 relative z-[45]"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]"
        >
          <div
            class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[47]"
          >
            <div
              class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[48]"
            >
              <span
                class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[49]"
                >Order Summary</span
              >
              <div
                class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-50"
              >
                <div
                  class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[51]"
                >
                  <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[52]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[53]"
                      >Order ID</span
                    ><span
                      class="flex w-[129px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[54]"
                      >{{ this.order?.orderNo }}</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[55]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[56]"
                      >Order Time</span
                    ><span
                      class="flex w-[81px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[57]"
                      >{{ formatDate(this.order?.createdDt) }}</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[58]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[59]"
                      >Payment Method</span
                    ><span
                      class="flex w-[100px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[60]"
                      >Sosoda Wallet</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[61]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[62]"
                      >Courier</span
                    ><span
                      class="flex w-[79px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[63]"
                      >{{ this.order?.courierName }}</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[64]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[65]"
                      >Tracking No.</span
                    ><span
                      class="flex w-[97px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right underline whitespace-nowrap z-[66]"
                      >{{ this.order?.orderDelivery.awb }}</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[67]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[68]"
                      >Estimated Delivery</span
                    ><span
                      class="flex w-[82px] h-[21px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] relative text-right whitespace-nowrap z-[69]"
                      >{{ formatDate(this.order?.pickupDate) }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[70]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] relative text-left whitespace-nowrap z-[71]"
                >Stamps Earned</span
              ><span
                class="flex w-[78px] h-[24px] justify-end items-start shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] relative text-right whitespace-nowrap z-[72]"
                >8 Stamps</span
              >
            </div> -->
          </div>
          <div
            class="w-[342px] h-px shrink-0 bg-[url('../public/line.png')] bg-cover bg-no-repeat relative z-[73]"
          ></div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[74]"
      >
        <span
          class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-bold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[75]"
          >Important:</span
        ><span
          class="flex w-[342.359px] h-[54px] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left z-[76]"
          >Please ensure someone is available to receive the delivery. For any
          delivery issues, contact us via WhatsApp.</span
        >
      </div>
    </div>
    <div
      class="flex w-[341px] pt-0 pr-[10px] pb-0 pl-0 gap-[21px] items-center flex-nowrap relative z-[77] mt-[43px] mr-0 mb-0 ml-[30.5px]"
    >
      <button @click="backToPrevious"
        class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[5px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[rgba(255,255,255,0.2)] border border-[#2275B6] rounded-[10px] relative z-[78]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] relative text-left whitespace-nowrap z-[79] text-[#2275B6]"
          >Back</span
        >
      </button>
      <a :href="`https://wa.me/${601158725699}`" target="_blank"
        class="cursor-pointer w-[36px] h-[36px] shrink-0 bg-[url('../public/whatsapp.png')] bg-cover bg-no-repeat relative z-[80]"
      ></a>
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
        order: null,
        items: [],
        address: null,    
        member: null  
    }
  },
  computed:{
    
  },
  mounted(){
    const id = this.$route.params.id;
    this.getOrderDetails(id);
  },
  methods:{
    formatDate(date) {
      return dayjs(date).format('DD MMM YYYY');
    },
    backToPrevious() {
      this.$router.go(-1);   
    },
    async getOrderDetails(id){
        const userId = sessionStorage.getItem('IdUser');
        //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
        if(userId !== null){
        try{
            const response = await api.post('Order/GetOrderById', JSON.stringify(id))
                if(response.status === 200){
                  this.order = response.data;
                  this.items = response.data.items;
                  this.address = response.data.address;
                  this.member = response.data.member;
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
