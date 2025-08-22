<template>
  <div
    class="main-container w-[402px] h-[1024px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342.004px] h-[944px] flex-col gap-[30px] items-end flex-nowrap absolute top-[40px] left-[30px]"
    >
      <div class="w-[342px] h-[87px] shrink-0 relative z-[1]">
        <div
          class="w-[342px] h-[94.001px] relative z-[2] mt-[-6.996px] mr-0 mb-0 ml-0"
        >
          <div
            class="w-[129.938px] h-[100.858px] bg-[url('../public/refill.png')] bg-cover bg-no-repeat absolute top-0 left-[10px] z-[4]"
          ></div>
          <div
            class="flex w-[342px] h-[77px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] items-start flex-nowrap bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/pTQabvWvt2.png)] bg-cover bg-no-repeat rounded-[13px] absolute top-[17px] left-0 z-[3]"
          ></div>
          <div
            class="flex w-[135px] h-[43px] flex-col gap-[3px] items-start flex-nowrap absolute top-[34px] left-[162px] z-[5]"
          >
            <span
              class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[20px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[6]"
              >{{ showTitle }}</span
            ><span v-if="order?.transactionType === 'Refill'"
              class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] text-[#60DCD6] font-bold leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[7]"
              >{{ this.dataRefill?.mode }}</span
            >
            <span v-if="order?.transactionType === 'Refund'"
              class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] text-[#60DCD6] font-bold leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[7]"
              >{{ this.dataRefund?.mode }}</span
            >
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-[30px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]"
      >
        <div
          class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]"
        >
          <div
            class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-10"
          >
            <div
              class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
            >
              <div
                class="flex flex-col gap-[30px] items-center self-stretch shrink-0 flex-nowrap relative z-[12]"
              >
                <div
                  class="w-[148px] shrink-0 font-['Poppins'] text-[16px] font-bold leading-[23.989px] relative text-center whitespace-nowrap z-[13]"
                >
                  <span
                    class="font-['Poppins'] text-[20px] font-bold leading-[24px] text-[#000] relative text-center"
                    >{{ this.order?.transactionType }}<br /></span
                  ><span
                    class="font-['Poppins'] text-[14px] font-bold leading-[23.989px] text-[#000] relative text-center"
                    >#{{ this.order?.orderNo }}</span
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
                        class="flex w-[90px] h-[68px] flex-col gap-[10px] items-center flex-nowrap absolute top-0 left-[126.501px] z-[14]"
                    >
                        <div
                        class="w-[40px] h-[40px] shrink-0 bg-[url('../public/refillready.png')] bg-cover bg-no-repeat relative z-[15]"
                        ></div>
                        <span
                        class="flex w-[86px] h-[18px] justify-center items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-center whitespace-nowrap z-[16]"
                        >{{ this.order?.orderStatus }}</span
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
                class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[26]"
              >
                <div
                  class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[27]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
                    >Date</span
                  ><span v-if="order?.transactionType === 'Refill'"
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[29]"
                    >{{ formatDate(dataRefill?.dt) }}</span
                  >
                  <span v-if="order?.transactionType === 'Refund'"
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[29]"
                    >{{ formatDate(dataRefund?.dt) }}</span
                  >
                </div>
                <div
                  class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-30"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[31]"
                    >Quantity</span
                  ><span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[32]"
                    >x {{ this.dataRefill?.bottleQty }}</span
                  >
                </div>
                <div
                  class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[33]"
                >
                  <span v-if="order?.transactionType === 'Refund'"
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[34]"
                    >Total Earn</span
                  ><span v-if="order?.transactionType === 'Refund'"
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[35]"
                    >RM {{ dataRefund?.creditAmount?.toFixed ? dataRefund.creditAmount.toFixed(2) : '0.00' }}</span
                  >
                  <span v-if="order?.transactionType === 'Refill'"
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[34]"
                    >Total Amount</span
                  ><span v-if="order?.transactionType === 'Refill'"
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[35]"
                    >RM {{ dataRefill?.totalAmount?.toFixed ? dataRefill.totalAmount.toFixed(2) : '0.00' }}</span
                  >
                </div>
              </div>
            </div>
            <div
              class="w-[342px] h-px shrink-0 bg-[url('../public/line.png')] bg-cover bg-no-repeat relative z-[36]"
            ></div>
            <div
              class="flex w-[342.004px] flex-col gap-[14px] items-start shrink-0 flex-nowrap relative z-[37]"
            >
              <div
                class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[38]"
              >
                <div
                  class="flex w-[342.004px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative z-[39]"
                >
                  <span
                    class="flex w-[342.004px] h-[30px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[20px] font-bold leading-[30px] relative text-left whitespace-nowrap z-40"
                    >Your Next Steps
                  </span>
                  <div
                    class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[41]"
                  >
                    <span v-if="order?.transactionType === 'Refund'"
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[42]"
                      >Return Quantity</span
                    ><span v-if="order?.transactionType === 'Refund'"
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[43]"
                      >x {{ this.dataRefund?.bottleQty }}</span
                    >
                    <span v-if="order?.transactionType === 'Refill'"
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[42]"
                      >Refill Quantity</span
                    ><span v-if="order?.transactionType === 'Refill'"
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[43]"
                      >x {{ this.dataRefill?.bottleQty }}</span
                    >
                  </div>
                  <div
                    class="flex w-[342.004px] flex-col gap-[10px] items-start shrink-0 flex-nowrap relative z-[44]"
                  >
                    <span v-if="this.dataRefill?.mode === 'Exchange' || this.dataRefund?.mode === 'ReturnAtOutlet'"
                      class="flex w-[342.004px] h-[42px] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left z-[45]"
                      >Please bring the empty cylinders to {{ this.branch?.name }} to proceed
                      with the refill.</span
                    >
                    <div v-if = "this.dataRefill?.mode !== 'Exchange' && this.dataRefund?.mode !== 'ReturnAtOutlet'"
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
                            <button :disabled="order?.orderStatus === 'PendingPayment'"
                            :class="[
                                    'flex w-[107px] pt-[8px] pr-[28px] pb-[8px] pl-[28px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[8px] relative z-[51]',
                                    order?.orderStatus === 'PendingPayment' ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
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
                    <span v-if = "this.dataRefill?.mode !== 'Exchange' && this.dataRefund?.mode !== 'ReturnAtOutlet'"
                        class="flex w-[342.004px] h-[63px] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left z-[53]"
                        >2. Attach the AWB securely to the parcel.<br />3. Ensure all cylinders
                        are packed properly.<br />{{ condition }}</span
                    >                                    
                    <span
                      class="flex w-[342.004px] h-[18px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-bold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[46]"
                      >Important:</span
                    ><span
                      class="flex w-[342.004px] h-[54px] justify-start items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left z-[47]"
                      >Cylinders must be returned in good physical condition.
                      Must not be dented, corroded, leaking, tampered with, or
                      expired.</span
                    >
                  </div>
                </div>
                <div v-if="this.dataRefill?.mode === 'Exchange' || this.dataRefund?.mode === 'ReturnAtOutlet'"
                  class="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[48]"
                >
                  <div
                    class="w-[39px] h-[39px] shrink-0 bg-[url('../public/store.png')] bg-cover bg-no-repeat relative z-[49]"
                  ></div>
                  <div
                    class="flex justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-50"
                  >
                    <div
                      class="flex w-[303px] h-[80px] flex-col items-start shrink-0 relative z-[51]"
                    >
                      <span
                        class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[21px] text-[#000] relative text-left z-[52]"
                        >{{ this.branch?.name }}</span
                      ><span
                        class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left z-[53]"
                        >{{ this.branch?.address }}</span
                      >
                    </div>
                  </div>
                </div>
                <div v-if="this.dataRefill?.mode === 'DropOff' || this.dataRefund?.mode === 'DropOff'"
                  class="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[48]"
                >
                  <div
                    class="w-[39px] h-[39px] shrink-0 bg-[url('../public/store.png')] bg-cover bg-no-repeat relative z-[49]"
                  ></div>
                  <div
                    class="flex justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-50"
                  >
                    <div
                      class="flex w-[303px] h-[80px] flex-col items-start shrink-0 relative z-[51]"
                    >
                      <span
                        class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[21px] text-[#000] relative text-left z-[52]"
                        >Drop-off point</span
                      ><span
                        class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left z-[53]"
                        >{{ showAddressConfirm }}</span
                      >
                    </div>
                  </div>
                </div>
                <div v-if = "(this.dataRefill?.mode === 'Pickup' || this.dataRefund?.mode === 'Pickup') && this.order?.orderStatus !== 'PendingPayment'"
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
                        :style="{ backgroundImage: this.order?.courierLogo ? `url(${this.order?.courierLogo})` : '' }"
                        ></div>
                        <div
                        class="flex w-[219px] flex-col items-start shrink-0 flex-nowrap relative z-[62]"
                        >
                        <span
                            class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[21px] text-[#000] relative text-left break-words z-[63]"
                            >{{ (this.order?.orderStatus === 'PendingPayment') ? '' : 'Pickup Date:' + this.order?.pickupDate }}</span
                        ><br></br><span
                            class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[64]"
                            >Please ready the cylinder on the day</span
                        >
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              <!-- <div
                class="h-[160px] self-stretch shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-22/gODa4uWauJ.png)] bg-cover bg-no-repeat rounded-[12px] relative z-[54]"
              ></div> -->
              <div
                class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[55]"
              >
                <div
                  class="w-[342.004px] self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[15px] relative text-left whitespace-nowrap z-[56]"
                >
                  <span
                    class="font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left"
                    >*</span
                  ><span
                    class="font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left"
                    >You’ll receive </span
                  ><span
                    class="font-['Poppins'] text-[10px] font-bold leading-[15px] text-[#000] relative text-left"
                    >RM160</span
                  ><span
                    class="font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left"
                  >
                    credit in your wallet after your return is verified.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex pt-0 pr-[10px] pb-0 pl-0 gap-[21px] items-center self-stretch shrink-0 flex-nowrap relative z-[57]"
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
    <div @click="backToPrevious"
      class="cursor-pointer w-[2.07%] h-[1.42%] bg-[url('../public/back_arrow.png')] bg-[length:100%_100%] bg-no-repeat absolute top-[17.14%] left-[9.86%] z-[61]"
    ></div>
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
        member: null,
        branch: null,
        address: null,
        dataRefill: null,
        dataRefund: null
    }
  },
  computed:{
    showTitle(){
        if(this.order?.transactionType === 'Refill'){
            return 'Refill + Swap'
        }
        else if (this.order?.transactionType === 'Refund'){
            return 'Return Only'
        }
    },
    condition(){
        if(this.order?.transactionType === 'Refill'){
            switch (this.dataRefill?.mode) {
                case 'Exchange':
                return '';
                case 'Pickup':
                return '4. Ready for collection.';
                case 'DropOff':
                return '4. Please bring the empty cylinders to the Drop-off point to drop them off.';
                default:
                return '';
            }    
        }
        else if (this.order?.transactionType === 'Refund'){
            switch (this.dataRefund?.mode) {
                case 'ReturnAtOutlet':
                return '';
                case 'Pickup':
                return '4. Ready for collection.';
                case 'DropOff':
                return '4. Please bring the empty cylinders to the Drop-off point to drop them off.';
                default:
                return '';
            }    
        }      
    },
    showAddressConfirm(){
      if(this.order?.transactionType === 'Refill'){
            return this.dataRefill?.dropOffPoint;
              
        }
        else if (this.order?.transactionType === 'Refund'){
            return this.dataRefund?.dropOffPoint;
        }  
    },
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
            const response = await api.post('Order/GetOrderWithRefillReturnById', JSON.stringify(id))
                if(response.status === 200){
                    console.log(response)
                  this.order = response.data;
                  this.address = response.data.address;
                  this.member = response.data.member;
                  this.branch = response.data.branch;
                  this.dataRefill = response.data.refill;
                  this.dataRefund = response.data.refund;
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
