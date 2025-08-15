<template>
  <div
    class="refill main-container w-[402px] h-[946px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div
        @click="backToMethod()"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[1]"
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
            >Brand of the empty cylinder you are returning for this
            exchange.</span
          >
        </div>
        <div
          class="flex w-[342px] h-[46px] justify-between items-center relative z-[14] mt-[10px] mr-0 mb-0 ml-[1px]"
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
            class="flex gap-[7px] items-center self-stretch shrink-0 flex-nowrap relative z-10"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[11]"
              >Swap Quantity</span
            >
            <div
              class="w-[20px] h-[20px] shrink-0 relative overflow-hidden z-[12]"
            >
              <div
                @click="showSwapRule = !showSwapRule"
                class="cursor-pointer w-[15.417px] h-[15.417px] bg-[url('../public/info.png')] bg-[length:100%_100%] bg-no-repeat relative z-[13] mt-[2.292px] mr-0 mb-0 ml-[2.292px]"
              ></div>
            </div>
          </div>
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[14]"
            >Number of empty cylinders must match new ones.</span
          >
        </div>
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[15]"
        >
          <div
            class="flex pt-[15px] pr-[15px] pb-[15px] pl-[15px] gap-[134px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[26]"
          >
            <input
              v-model="qty" @input="handlePrice"
              type="number"
              min="0"
              class="h-[24px] text-center shrink-0 basis-auto font-['Poppins'] text-[20px] font-semibold leading-[14px] bg-[#fafafa] text-[#000] tracking-[0.1px] relative whitespace-nowrap z-[18]"
            />
          </div>
        </div>
      </div>
      <div v-if="refill_method === 'Exchange'"              
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-10"
      >
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
        >
          <div
            class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[12]"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[13]"
              >Outlet</span
            >
            <div
              class="flex w-[87px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[14]"
            >
              <!-- <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[20px] text-[#2275b6] tracking-[0.1px] relative text-left whitespace-nowrap z-[35]"
                >Change Outlet</span
              >               -->
            </div>
          </div>
        </div>
        <div
          class="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[17]"
        >
          <div
            class="w-[93px] h-[65px] shrink-0 bg-[url('../public/outlet.png')] bg-cover bg-no-repeat rounded-[6px] relative z-[18]"
          ></div>
          <div
            class="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[19]"
          >
            <div
              class="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-10"
            >
              <span
                class="flex w-[114px] h-[20.649px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[11]"
                >{{ this.branch?.name }}</span
              >
            </div>
            <span
              class="h-[17.207px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left break-words z-[13]"
              >{{ this.branch?.address }}</span
            >
          </div>
        </div>
      </div>
      <div v-if="refill_method === 'Pickup'"              
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-10"
      >
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
        >
          <div
            class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[12]"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[13]"
              >Your Address</span
            >
            <div
              class="flex w-[87px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[14]"
            >
              <!-- <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[20px] text-[#2275b6] tracking-[0.1px] relative text-left whitespace-nowrap z-[35]"
                >Change Outlet</span
              >               -->
            </div>
          </div>
        </div>
        <div
          class="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[17]"
        >
          <!-- <div
            class="w-[93px] h-[65px] shrink-0 bg-[url('../public/outlet.png')] bg-cover bg-no-repeat rounded-[6px] relative z-[18]"
          ></div> -->
          <div
            class="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[19]"
          >
            <div
              class="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-10"
            >
              <span
                class="flex w-[114px] h-[30.649px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[11] ml-[10px] mt-[10px]"
                >{{ this.member?.name }} <span class="flex w-[114px] h-[30.649px] justify-start items-start shrink-0 basis-auto font-['Poppins'] text-[10px] font-semibold leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[11] ml-[10px]">
                {{ this.member?.mobileNumber }}
              </span></span> 
              <span @click="showAddress = !showAddress"
                class="cursor-pointer bg-[url('../public/edit.png')] bg-cover bg-no-repeat flex w-[15px] h-[15px] justify-start items-start shrink-0 basis-auto font-['Poppins'] relative z-[11] m-[10px]"
              ></span>
            </div>
            <span
              class="h-[40.207px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left break-words z-[13] mb-[5px] ml-[10px]"
              >{{ this.memberAddress?.line1 }} {{ this.memberAddress?.line2 }} <br />{{ this.memberAddress?.postalCode }} {{ this.memberAddress?.city }} {{ this.memberAddress?.state }} {{ this.memberAddress?.country }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex w-[402px] h-[355.346px] pt-[35px] pr-[30px] pb-[35px] pl-[30px] flex-col gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-tl-[20px] rounded-tr-[20px] rounded-br-none rounded-bl-none relative shadow-[0_0_10px_0_rgba(0,0,0,0.1)] z-[6] mt-[24px] mr-0 mb-0 ml-0"
    >
      <div
        class="flex w-[342px] flex-col gap-[40px] items-start shrink-0 flex-nowrap relative z-[7]"
      >
        <div
          class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]"
        >
          <span
            class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[9]"
            >Summary</span
          >
          <div
            class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[10]"
          >
            <div
              class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
            >
              <div
                class="flex w-[318px] gap-[40px] items-center shrink-0 flex-nowrap relative z-[12]"
              >
                <div
                  class="flex w-[132px] flex-col items-start shrink-0 flex-nowrap relative z-[13]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[14]"
                    >New Cylinder</span
                  ><span
                    class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[15]"
                    >RM {{ this.buyPrice }} per each</span
                  >
                </div>
                <div
                  class="flex w-[146px] flex-col items-start shrink-0 flex-nowrap relative z-[16]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[17]"
                    >Empty Cylinder</span
                  ><span
                    class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[18]"
                    >RM {{ this.returnPrice }} per each</span
                  >
                </div>
              </div>
              <div
                class="h-px self-stretch shrink-0 bg-cover bg-no-repeat relative z-[19]"
              ></div>
            </div>
            <div
              class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[10]"
            >
              <div
                class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
              >
                <div
                  class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[12]"
                >
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[13]"
                    >Purchase Amount</span
                  ><span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[14]"
                    >RM {{ this.purchaseAmount.toFixed(2) }}</span
                  >
                </div>
                <div
                  class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[15]"
                >
                  <div
                    class="flex w-[138px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[16]"
                  >
                    <span
                      class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[17]"
                      >Refund Amount</span
                    >
                    <div
                      class="w-[18px] h-[18px] shrink-0 relative overflow-hidden z-[18]"
                    >
                      <div
                        @click="showRefundInfo = !showRefundInfo"
                        class="cursor-pointer w-[13.875px] h-[13.875px] bg-[url('../public/info.png')] bg-[length:100%_100%] bg-no-repeat relative z-[19] mt-[2.063px] mr-0 mb-0 ml-[2.063px]"
                      ></div>
                    </div>
                  </div>
                  <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[10]"
                    >- RM {{ this.refundAmount.toFixed(2) }}</span
                  >
                </div>
              </div>
              <div
                class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[11]"
              >
                <span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[12]"
                  >Grant Total</span
                ><span
                  class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[22px] font-bold leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[13]"
                  >RM {{ this.grandTotal.toFixed(2) }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <button @click="gotoCheckout()"
          class="flex h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[1]"
        >
          <span
            class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[1]"
            >Next</span
          >
        </button>
      </div>
    </div>
    <div
      class="w-[129.938px] h-[91.858px] bg-[url('../public/exchange.png')] bg-cover bg-no-repeat absolute top-[89.993px] left-[40px] z-[6]"
    >
      <div
        class="w-[129.938px] h-[91.858px] bg-[url('../public/exchange.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[2]"
      ></div>
    </div>
    <div
      class="w-[342px] h-[77px] bg-[url('../public/blackbox.png')] bg-cover bg-no-repeat rounded-[10px] absolute top-[106.992px] left-[30px] z-[5]"
    >
      <div
        class="w-[342px] h-[77px] bg-[url('../public/blackbox.png')] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-0 z-[1]"
      >
        <div
          class="flex w-[135px] h-[43px] flex-col gap-[3px] items-start flex-nowrap absolute top-[17px] left-[162px] z-[7]"
        >
          <span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[20px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[8]"
            >Refill + Swap</span
          ><span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[9] text-[#60DCD6]"
            >{{ this.subtitle }}</span
          >
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showSwapRule"
        class="overlay"
        @click="showSwapRule = false"
      ></div>
    </transition>
    <transition name="slide-up">
      <div
        v-if="showSwapRule"
        class="modal flex w-[342px] h-[490px] flex-col gap-[30px] items-start flex-nowrap absolute top-[430px] left-[30px] z-[85]"
      >
        <span
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[83] mt-[20px] ml-[25px] mr-[20px]"
          >Swap Quantity</span
        >
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[86] ml-[25px] mr-[20px]"
        >
          <span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[87]"
            >Buy Only</span
          >
          <div v-for="(item, index) in buys"
              :key="index"
            class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[88]"
          >
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[89]"
            >
              <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[90]"
                >{{ item.minQty }} Cylinder</span
              ><span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[91]"
                >RM{{ item.creditAmount }} per each</span
              >
            </div>
          </div>
        </div>
        <div
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[98] ml-[25px] mr-[20px]"
        >
          <span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[99]"
            >Return Only</span
          >
          <div v-for="(item, index) in returns"
              :key="index"
            class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[100]"
          >
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[101]"
            >
              <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[102]"
                >{{ item.minQty }} Cylinder</span
              ><span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[103]"
                >RM{{ item.creditAmount }} per each</span
              >
            </div>
          </div>
        </div>
        <div 
          class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[110] ml-[25px] mr-[20px]"
        >
          <span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[111]"
            >Refill & Swap</span
          >
          <div v-for="(item, index) in refills"
              :key="index"
            class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[112]"
          >
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[113]"
            >
              <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[114]"
                >{{ item.minQty }} Cylinder</span
              ><span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#292929] tracking-[0.1px] relative text-left whitespace-nowrap z-[115]"
                >RM{{ item.creditAmount }} per each</span
              >
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div
        v-if="showRefundInfo"
        class="overlay"
        @click="showRefundInfo = false"
      ></div>
    </transition>
    <transition name="slide-up">
      <div
        v-if="showRefundInfo"        
        class="modal1 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[342px] h-[490px] flex-col gap-[10px] absolute top-[830px] left-[30px] z-[85]"
      >
        <div
        class="w-[402px] h-[238px] absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-0 z-[81]"
        >
          <div
            class="w-[214.503px] h-[63px] relative z-[86] mt-[72px] mr-0 mb-0 ml-[93.75px]"
          >
          
            <div class="h-[63px] absolute top-0 left-0 right-0 z-[93]">

              <div
                class="flex w-[51.14px] h-[63px] flex-col gap-[5px] items-center flex-nowrap absolute top-0 left-[163.363px] z-[93]"
              >
                <div
                  class="w-[40px] h-[40px] shrink-0 bg-[url('../public/donerefund.png')] bg-cover bg-no-repeat relative z-[94]"
                ></div>
                <span
                  class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[95]"
                  >Verified</span
                >
              </div>
              <div
                class="flex w-[30px] h-[30px] flex-col gap-[10px] items-center flex-nowrap absolute left-0 z-[89]"
              >
                <div
                  class="w-[50px] h-[50px] shrink-0 bg-[url('../public/circle.png')] bg-cover bg-no-repeat relative z-[90]"
                ></div>
              </div>
              <div
                class="flex w-[31px] h-[30px] flex-col gap-[10px] items-center flex-nowrap absolute left-1/2 translate-x-[-73.83%] translate-y-0 z-[91]"
              >
                <div
                  class="w-[50px] h-[50px] shrink-0 bg-[url('../public/circle.png')] bg-cover bg-no-repeat relative z-[92]"
                ></div>
              </div>
              <div
                class="w-[55px] h-[2px] bg-[url('../public/refundline.png')] bg-cover bg-no-repeat absolute top-[20px] left-[30px] z-[87]"
              ></div>
              <div
                class="w-[55px] h-[2px] bg-[url('../public/refundline.png')] bg-cover bg-no-repeat relative z-[88] top-[20px] mr-0 mb-0 ml-[113.934px]"
              ></div>
            </div>
          </div>
          <span
            class="flex w-[342px] h-[40px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#292929] tracking-[0.1px] relative text-left z-[83] mt-[23px] mr-0 mb-0 ml-[30px]"
            >You’ll receive refund credit in your wallet after your return is
            verified.</span
          >
          <div
            class="w-[402px] h-[238px] bg-[#fff] rounded-tl-[15px] rounded-tr-[15px] rounded-br-none rounded-bl-none absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[82]"
          ></div>
          <span
            class="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] absolute top-[30px] left-[30px] text-left whitespace-nowrap z-[84]"
            >Refund Amount</span
          >
        </div>
      </div>
    </transition>


    <transition name="fade">
      <div
        v-if="showAddress"
        class="overlay"
        @click="showAddress = false"
      ></div>
    </transition>
    <transition name="slide-up">
      <div
        v-if="showAddress"
        class="modal overflow-y-auto flex w-[342px] h-[490px] flex-col gap-[20px] items-start flex-nowrap absolute top-[430px] left-[30px] z-[85]"
      >
        <span
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[83] mt-[20px] ml-[25px] mr-[20px]"
          >Your Addresses</span
        >
        <div v-for="(item, index) in addresses" @click="selectedAddress(item.id)"
          :key="index"
          class="cursor-pointer flex w-[342px] h-[80px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] items-start flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] mr-0 mb-0 ml-[25px]"
        >
          <div
            class="flex w-[322.035px] flex-col gap-[9px] justify-end items-start shrink-0 flex-nowrap relative z-[1]"
          >
            <div
              class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[2]"
            >
              <span
                class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#2275b6] relative text-left whitespace-nowrap z-[3]"
                >Home</span
              >
              <!-- <div
                class="w-[100px] h-[18px] shrink-0 text-[0px] rounded-[28px] relative z-[4]"
              >
                <span
                  class="block h-[15px] font-['Poppins'] text-[10px] font-medium leading-[14.993px] text-[#fff] relative text-left whitespace-nowrap z-[6] mt-[1.5px] mr-0 mb-0 ml-[9.5px]"
                  >Default Address</span
                >
                <div
                  class="w-[100px] h-[18px] bg-[#2275b6] rounded-[28px] absolute top-0 left-0 z-[5]"
                ></div>
              </div> -->
            </div>
            <div
              class="flex w-[322.035px] gap-[72px] items-end shrink-0 flex-nowrap relative z-[7]"
            >
              <div
                class="flex w-[200.035px] flex-col gap-[3px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]"
              >
                <!-- <div class="w-[141px] h-[21px] shrink-0 relative z-[9]">
                  <span
                    class="flex h-[21px] justify-start items-center font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] absolute top-0 left-[calc(50%-70.5px)] text-left whitespace-nowrap z-10"
                    >User123</span
                  ><span
                    class="flex h-[16px] justify-start items-center font-['Poppins'] text-[11px] font-normal leading-[16px] text-[#bfbfbf] absolute top-[2px] left-[calc(50%-14.5px)] text-left whitespace-nowrap z-[11]"
                    >+6012-3456789</span
                  >
                </div> -->
                <span
                  class="flex w-[200.035px] h-[26px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[9px] font-normal leading-[13.494px] text-[#a5a5a5] relative text-left z-[12]"
                  >{{ item.line1 }} {{ item.line2 }} <br />{{ item.postalCode }} {{ item.city }} {{ item.state }} {{ item.country }}</span
                >
              </div>
            </div>
            
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
import { useRoute } from 'vue-router'
import { usePayloadStore } from '../stores/payloadStore';

export default{
  data(){
    return{
      selectedType: 'Sosoda',
      qty: 0,
      buyPrice: 0,
      returnPrice: 0,
      refill_method: '',
      subtitle: '',
      showSwapRule: false,
      showRefundInfo: false,
      buys: [],
      returns: [],
      refills: [],
      rules: [],
      purchaseAmount: 0,
      refundAmount: 0,
      grandTotal: 0,
      branch: null,
      memberAddress: null,
      dropOffPoint: '',
      addresses: [],
      member: null,
      showAddress: false,
      dropOffPointId: ''
    }
  },
  async mounted(){
    this.refill_method = this.$route.params.refillmethod;  
    if(this.refill_method === 'Exchange'){
      this.subtitle = 'Refill on the spot';
      this.getBranch();
      this.getAddress();
    }
    else if(this.refill_method === 'Pickup'){
      this.subtitle = 'Pick-Up Service';    
      this.getAddress();  
    }
    else{
      this.subtitle = 'Drop-Off'
    }

    
    this.getRules();
  },
  methods:{
    gotoCheckout(){
      if(this.qty !== 0 && this.qty !== ''){
        const store = usePayloadStore();
        var payload ={
          Qty : this.qty,
          Brand : (this.selectedType === 'Sosoda') ? 1 : 2,
          Address : this.memberAddress,
          BuyPrice : this.buyPrice,
          ReturnPrice : this.returnPrice,
          PurchaseAmount : this.purchaseAmount,
          RefundAmount : this.refundAmount,
          TotalAmount : this.grandTotal,
          MethodUse : this.refill_method,
          DropOffPoint : this.dropOffPoint,
          DropOffPointId : this.dropOffPointId,
          Branch : this.branch,
          Member: this.member
        }

        store.setPayload(payload);
        this.$router.push({ name: 'Checkout' });
      }
    },
    selectedAddress(id){
      this.memberAddress = this.addresses.find(x => x.id === id);
      this.showAddress = false;
    } ,
    async getAddress(){
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
            }            
          }
        }
        catch (error) {
          toast.error(error.response.data.message)
        }
      }  
    },
    async getBranch(){
      try{
        const response = await api.get('Branch/GetBranches');
        if(response.status === 200){
            if(response.data !== null){
              this.branch = response.data?.[0] || null;
            }
        }
      }
      catch (error) {
        toast.error(error.response.data)
      }
    },
    async handlePrice(){
      if(this.qty !== 0 && this.qty !== ''){
        try{
          const ruleload = {
            Qty: this.qty,
            Brand: '1',
            transactionType: 'Purchase'
          };
          const response = await api.post('CreditRule/GetAmountByQuantity', JSON.stringify(ruleload));
          if(response.status === 200){
              this.buyPrice = response.data;
              this.purchaseAmount = this.qty * response.data;
          }
        }
        catch (error) {
          toast.error(error.response.data)
        }

        try{
          const returnload = {
            Qty: this.qty,
            Brand: '1',
            transactionType: 'Refund'
          };
          const response = await api.post('CreditRule/GetAmountByQuantity', JSON.stringify(returnload));
          if(response.status === 200){
              this.returnPrice = response.data;
              this.refundAmount = this.qty * response.data;
          }
        }
        catch (error) {
          toast.error(error.response.data)
        }

        if(this.purchaseAmount !== 0){
          this.grandTotal = this.purchaseAmount - this.refundAmount;
        }
      }
    },   
    backToMethod() {
       this.$router.push({ name: 'Methods' });    
    },    
    selectType(type) {
      this.selectedType = type;
    },
    async getRules(){
      try{
        const response = await api.get('CreditRule/GetRules');
        if(response.status === 200){
          this.rules = response.data;
          if(this.rules != null){
            this.buys = response.data.filter(t => t.transactionType === 'Purchase');
            this.refills = this.rules.filter(t => t.transactionType === 'Refill');
            this.returns = this.rules.filter(t => t.transactionType === 'Refund');
          }
        }
      }
      catch (error) {
        toast.error(error.response.data)
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
  justify-content: bottom;
  align-items: flex-end;
  border-radius: 10px;
}

/* Modal styling */
.modal {
  position: fixed;
  width: 402px;
  height: 500px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
  z-index: 20;
}

.modal1 {
  position: fixed;
  width: 402px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
  z-index: 20;
}

.refill{
  overflow-y: auto;
}
</style>