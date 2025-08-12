<template>
  <div
    class="main-container w-[402px] h-[946px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToMethod()"
        class="w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[1]"
      ></div>
      <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[2]"
        >Cylinder Details</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 bg-[url('../public/white.png')] bg-cover bg-no-repeat relative overflow-hidden z-[3]"
      ></div>
    </div>
    <div
      class="flex w-[342px] flex-col gap-[20px] items-start flex-nowrap relative z-[4] mt-[134px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]"
      >
        <div
          class="flex flex-col gap-[3px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]"
        >
          <span
            class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[7]"
            >Swap with Cylinder Brand</span
          ><span
            class="flex w-[342px] h-[36px] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left z-[8]"
            >Brand of the empty cylinder you are returning for this exchange.</span
          >
        </div>
        <div
        class="flex w-[342px] h-[46px] justify-between items-center relative z-[14] mt-[10px] mr-0 mb-0 ml-[8px]"
        >
            <div
            @click="selectType('Sosoda')"
            class="flex w-[166px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center shrink-0 flex-nowrap rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] cursor-pointer"
            :class="selectedType === 'Sosoda' ? 'bg-[#2275b6]' : 'bg-[#fafafa]'"
            >
            
                <div class="flex items-center gap-[10px]">                    
                    <span
                    class="font-['Poppins'] text-[14px] text-left whitespace-nowrap"
                    :class="selectedType === 'Sosoda' ? 'text-white' : 'text-[#000]'"
                    >
                    Sosoda
                    </span>
                </div>
            </div>

            <div
            @click="selectType('NonSosoda')"
            class="flex w-[166px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center shrink-0 flex-nowrap rounded-[10px] border border-[#fdfdfd] shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] cursor-pointer"
            :class="selectedType === 'NonSosoda' ? 'bg-[#2275b6]' : 'bg-[#fafafa]'"
            >    
                <div class="flex items-center gap-[10px]">
                    
                    <span
                    class="font-['Poppins'] text-[14px] text-left whitespace-nowrap"
                    :class="selectedType === 'NonSosoda' ? 'text-white' : 'text-[#000]'"
                    >
                    Non-Sosoda
                    </span>
                </div>
            </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[18]"
      >
        <div
          class="flex flex-col gap-[3px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]"
        >
          <div
            class="flex gap-[7px] items-center self-stretch shrink-0 flex-nowrap relative z-20"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[21]"
              >Swap Quantity</span
            >
            <div
              class="w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[22]"
            >
              <div
                class="w-[15.417px] h-[15.417px] bg-[url('../public/info.png')] bg-[length:100%_100%] bg-no-repeat relative z-[23] mt-[2.292px] mr-0 mb-0 ml-[2.292px]"
              ></div>
            </div>
          </div>
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[24]"
            >Number of empty cylinders must match new ones.</span
          >
        </div>
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[25]"
        >
          <div
            class="flex pt-[15px] pr-[15px] pb-[15px] pl-[15px] gap-[134px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[26]"
          >
            <input v-model="qty" type="number" min="0"
              class="h-[24px] text-center shrink-0 basis-auto font-['Poppins'] text-[20px] font-semibold leading-[14px] bg-[#fafafa] text-[#000] tracking-[0.1px] relative whitespace-nowrap z-[28]"
              />
            
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-30"
      >
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[31]"
        >
          <div
            class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[32]"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[33]"
              >Outlet</span
            >
            <div
              class="flex w-[87px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[34]"
            >
              <!-- <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[20px] text-[#2275b6] tracking-[0.1px] relative text-left whitespace-nowrap z-[35]"
                >Change Outlet</span
              >               -->
            </div>
          </div>
        </div>
        <div
          class="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[37]"
        >
          <div
            class="w-[93px] h-[65px] shrink-0 bg-[url('../public/outlet.png')] bg-cover bg-no-repeat rounded-[6px] relative z-[38]"
          ></div>
          <div
            class="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[39]"
          >
            <div
              class="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-40"
            >
              <span
                class="flex w-[114px] h-[20.649px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[41]"
                >Outlet</span
              >
            </div>
            <span
              class="h-[17.207px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left whitespace-nowrap z-[43]"
              >Address</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex w-[402px] h-[355.346px] pt-[35px] pr-[30px] pb-[35px] pl-[30px] flex-col gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-tl-[20px] rounded-tr-[20px] rounded-br-none rounded-bl-none relative shadow-[0_0_10px_0_rgba(0,0,0,0.1)] z-[56] mt-[24px] mr-0 mb-0 ml-0"
    >
      <div
        class="flex w-[342px] flex-col gap-[40px] items-start shrink-0 flex-nowrap relative z-[57]"
      >
        <div
          class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]"
        >
          <span
            class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[59]"
            >Summary</span
          >
          <div
            class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[60]"
          >
            <div
              class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[61]"
            >
              <div
                class="flex w-[318px] gap-[40px] items-center shrink-0 flex-nowrap relative z-[62]"
              >
                <div
                  class="flex w-[132px] flex-col items-start shrink-0 flex-nowrap relative z-[63]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[64]"
                    >New Cylinder</span
                  ><span
                    class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[65]"
                    >RM 68 per each</span
                  >
                </div>
                <div
                  class="flex w-[146px] flex-col items-start shrink-0 flex-nowrap relative z-[66]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[67]"
                    >Empty Cylinder</span
                  ><span
                    class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[68]"
                    >RM 40 per each</span
                  >
                </div>
              </div>
              <div
                class="h-px self-stretch shrink-0  bg-cover bg-no-repeat relative z-[69]"
              ></div>
            </div>
            <div
              class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[70]"
            >
              <div
                class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[71]"
              >
                <div
                  class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[72]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[73]"
                    >Purchase Amount</span
                  ><span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[74]"
                    >RM 272.00</span
                  >
                </div>
                <div
                  class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[75]"
                >
                  <div
                    class="flex w-[138px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[76]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[77]"
                      >Refund Amount</span
                    >
                    <div
                      class="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[78]"
                    >
                      <div @click="showRefundInfo"
                        class="cursor-pointer w-[13.875px] h-[13.875px] bg-[url('../public/info.png')] bg-[length:100%_100%] bg-no-repeat relative z-[79] mt-[2.063px] mr-0 mb-0 ml-[2.063px]"
                      ></div>
                    </div>
                  </div>
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[80]"
                    >- RM 160.00</span
                  >
                </div>
              </div>
              <div
                class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[81]"
              >
                <span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[82]"
                  >Grant Total</span
                ><span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[83]"
                  >RM 112.00</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[84]"
        >
          <span
            class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[85]"
            >Next</span
          >
        </div>
      </div>
    </div>
    <div
      class="w-[129.938px] h-[91.858px] bg-[url('../public/exchange.png')] bg-cover bg-no-repeat absolute top-[89.993px] left-[40px] z-[46]"
    >
      <div
        class="w-[129.938px] h-[91.858px] bg-[url('../public/exchange.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[52]"
      ></div>
    </div>
    <div
      class="w-[342px] h-[77px] bg-[url('../public/blackbox.png')] bg-cover bg-no-repeat rounded-[10px] absolute top-[106.992px] left-[30px] z-[45]"
    >
      <div
        class="w-[342px] h-[77px] bg-[url('../public/blackbox.png')] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-0 z-[51]"
      >
        <div
          class="flex w-[135px] h-[43px] flex-col gap-[3px] items-start flex-nowrap absolute top-[17px] left-[162px] z-[47]"
        >
          <span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[20px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[48]"
            >Refill + Swap</span
          ><span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[49]"
            >Refill on the spot</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi' 
import { toast } from 'vue3-toastify'; 
import { useRoute } from 'vue-router'

export default{
  data(){
    return{
      selectedType: 'Sosoda',
      qty: 0
    }
  },
  async mounted(){
    try{
        //const id = this.$route.params.id;
        
            
    }
    catch (error) {
        toast.error(error.response.data.message);
    }    
  },
  methods:{    
    backToMethod() {
       this.$router.push({ name: 'Methods' });    
    },    
    selectType(type) {
      this.selectedType = type;
    },
  }
}

</script>
