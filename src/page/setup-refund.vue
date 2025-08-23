<template>
  <div
    class="refill main-container w-[402px] h-[856px] bg-[#fff] relative overflow-hidden mx-auto my-0"
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
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[5]"
      >
        <div
          class="flex flex-col gap-[3px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]"
        >
          <span
            class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[7]"
            >Return with Cylinder Brand</span
          ><span
            class="flex w-[342px] h-[36px] justify-start items-start self-stretch shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left z-[8]"
            >Brand of the empty cylinder you are returning.</span
          >
        </div>
        <div
          class="flex w-[342px] h-[46px] justify-between items-center relative z-[14] mr-0 mb-0 ml-[1px]"
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
              >Return Quantity</span
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
              class="no-spinner h-[24px] text-center shrink-0 basis-auto font-['Poppins'] text-[20px] font-semibold leading-[14px] bg-[#fafafa] text-[#000] tracking-[0.1px] relative whitespace-nowrap z-[18]"
            />
          </div>
        </div>
      </div>
      <div v-if="refundmethod === 'DropOff'"              
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
              >Drop-off Point</span
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
                >{{ this.methodload?.PointName }}</span
              >
            </div>
            <span
              class="h-[17.207px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left break-words z-[13]"
              >{{ this.methodload?.PointAddress }}</span
            >
          </div>
        </div>
      </div>
      <div v-if="refundmethod === 'ReturnAtOutlet'"              
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
      <div v-if="refundmethod === 'Pickup'"              
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
      class="w-[94px] h-[80px] bg-[url('../public/getmoney.png')] bg-cover bg-no-repeat absolute top-[614px] ml-[80px] z-[8]"
    ></div>
    <div
      class="w-[342px] h-[85px] bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] absolute top-[614px] ml-[30px]  shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[5]"
    >
      <div
        class="flex w-[196px] flex-col gap-[8px] items-start flex-nowrap relative z-[49] mt-[15px] mr-0 mb-0 ml-[151px]"
      >
        <div
          class="flex w-[92px] flex-col items-start shrink-0 flex-nowrap relative z-5"
        >
          <span
            class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[15px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[5]"
            >Total Earn</span
          ><span
            class="h-[20px] self-stretch shrink-0 mt-[5px] basis-auto font-['Poppins'] text-[18px] font-bold leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[5]"
            >RM {{ this.refundAmount.toFixed(2) }}</span
          >
        </div>       
      </div>

    </div>
    <div
    class="w-[402px] h-[295px] bg-[#fff] rounded-tl-[20px] rounded-tr-[20px] top-[648px] rounded-br-none rounded-bl-none absolute bottom-0 right-0 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
    >
        <div
            class="flex w-[342px] flex-col gap-[20px] items-start flex-nowrap relative z-[5] top-[70px] mr-0 mb-0 ml-[30px]"
        >
            <div
            class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]"
            >
                <div
                    class="flex h-[21px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[59]"
                >
                    <span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[60]"
                    >Return Sosoda Cylinder</span
                    ><span
                    class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#a5a5a5] tracking-[0.1px] relative text-left whitespace-nowrap z-[61]"
                    >RM {{ this.returnPrice.toFixed(2) }} x {{ this.qty }}</span
                    >
                </div>
                
            </div>
        </div>
        <div class="flex items-center justify-center top-[80px] mt-[10px] relative">
            <span
                class="font-['Poppins'] text-[12px] leading-[21px] text-[#26AFA8] text-[#000] tracking-[0.1px] whitespace-nowrap"
            >
                To be Refund once we received the return bottle
            </span>
        </div>

        <button @click="acknowledgementShow = !acknowledgementShow" :disabled="qty === 0 || qty === ''" :class="qty === 0 || qty === '' ? 'cursor-not-allowed' : 'cursor-pointer'"
            class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[1] top-[100px] mr-0 mb-0 ml-[30px]"
        >
            <span
            class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[2]"
            >Next</span
            >
        </button>
    </div>
    <div
      class="w-[99.938px] h-[91.858px] bg-[url('../public/getmoney.png')] bg-cover bg-no-repeat absolute top-[99.993px] left-[80px] z-[6]"
    >
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
            >Return Only</span
          ><span
            class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[9] text-[#60DCD6]"
            >{{ SubtitleLabel }}</span
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
        class="modal flex w-[342px] h-[490px] flex-col gap-[30px] items-start flex-nowrap absolute left-[30px] z-[85]"
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
        v-if="showAddress"
        class="overlay"
        @click="showAddress = false"
      ></div>
    </transition>
    <transition name="slide-up">
      <div
        v-if="showAddress"
        class="modal overflow-y-auto flex w-[342px] h-[490px] flex-col gap-[20px] items-start flex-nowrap absolute top-[150px] left-[30px] z-[85]"
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

    <transition name="fade">
      <div v-if="acknowledgementShow" class="overlay" @click="acknowledgementShow = false"></div>
    </transition>
    <transition name="slide-up">
        <div v-if="acknowledgementShow" class="modal1 w-[372px] h-[301px] absolute top-[143px] left-0 z-[39]">
          <div
            class="w-[330px] h-[83px] relative z-[42] mt-[15px] mr-0 mb-0 ml-[30px]"
          >
            <div
              class="flex flex-col gap-[30px] items-start self-stretch shrink-0 flex-nowrap relative z-[73]"
            >
              <div
                class="flex flex-col gap-[30px] items-start self-stretch shrink-0 flex-nowrap relative z-[74]"
              >
                <div
                  class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[75]"
                >
                  <div class="w-[20.516px] h-[20.516px] shrink-0 relative z-[76]">

                  </div>
                  <span
                    class="flex w-[155px] h-[24px] justify-center items-center shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-center whitespace-nowrap z-[78]"
                    >Acknowledgement</span
                  >
                  <div class="w-[20.516px] h-[20.516px] shrink-0 relative z-[79]">

                  </div>
                </div>
                <div
                  class="flex gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[81]"
                >
                  <span
                    class="flex w-[294px] h-[84px] justify-start items-center grow shrink-0 basis-0 font-['Poppins'] text-[14px] font-normal leading-[20.991px] text-[#000] relative text-left z-[82]"
                    >I acknowledge that the refund of RM{{ this.refundAmount }} will be credited to my wallet
                    upon return and receipt of the empty cylinder</span
                  >
                </div>
                <div
                  class="flex gap-[10px] justify-center items-end self-stretch shrink-0 flex-nowrap relative z-[83]"
                >
                  <div
                    class="flex w-[20px] pt-[2px] pr-0 pb-0 pl-0 gap-[10px] items-center shrink-0 flex-nowrap relative z-[84]"
                  >
                    <div @click="checked = !checked"
                      class="cursor-pointer w-[20px] h-[20px] shrink-0 rounded-[5px] border-solid border relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[85] flex items-center justify-center"
                      :class="[
                          checked ? 'bg-blue-500 border-blue-500' : '',
                          showError ? 'border-red-500' : 'border-[#dbdbdb]',
                          'border'
                        ]"
                    >
                      <svg
                        v-if="checked"
                        class="w-[12px] h-[12px] text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="3"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span
                    class="h-[21px] grow shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[86]"
                    >Yes, I understand and acknowledge</span
                  >
                </div>
              </div>
              <button @click="submitRefund()"
                class="flex h-[40px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#292929] rounded-[8px] relative z-[87]"
              >
                <span
                  class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[88]"
                  >Continue</span
                >
              </button>
            </div>
          </div>          
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
import { useRoute } from 'vue-router'
import { usePayloadStore } from '../stores/payloadStore';

export default{
  data(){
    return{
      selectedType: 'Sosoda',
      qty: 0,
      returnPrice: 0,
      refundmethod: '',
      showSwapRule: false,
      buys: [],
      returns: [],
      refills: [],
      rules: [],
      checked: false,
      refundAmount: 0,
      branch: null,
      memberAddress: null,
      dropOffPoint: '',
      addresses: [],
      member: null,
      showAddress: false,
      dropOffPointId: '',
      acknowledgementShow: false,
      checked: false,
      showError: false,
      loading: false,
    }
  },
  computed: {
    methodload() {
      const store = usePayloadStore();
      
      return store.data;
    },
    SubtitleLabel() {
      this.refundmethod = this.methodload?.ReturnMethod;
      switch (this.methodload?.ReturnMethod) {
        case 'ReturnAtOutlet':       
          return 'Return On The Spot';
        case 'Pickup':
          return 'Pick-Up Service';
        default:
          return 'Drop-Off';
      }
    }
  },
  async mounted(){     
    await this.getRules();
    await this.getBranch();
    await this.getAddress();   
  },
  methods:{
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
          const message =
            error?.response?.data?.message || // server-defined error
            error?.response?.data ||          // raw response body
            error?.message ||                 // JS error message
            'Something went wrong';           // fallback

          toast.error(message); 
        }
      }  
    },
    async getBranch(){
      try{
        const response = await api.post('Branch/GetDefaultBranch');
        if(response.status === 200){
            if(response.data !== null){
              this.branch = response.data;
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
    },
    async handlePrice(){
      if(this.qty !== 0 && this.qty !== ''){
        try{
          const returnload = {
            Qty: this.qty,
            Brand: (this.selectedType === 'Sosoda') ? '1' : '2',
            transactionType: 'Refund'
          };
          const response = await api.post('CreditRule/GetAmountByQuantity', JSON.stringify(returnload));
          if(response.status === 200){
              this.returnPrice = response.data;
              this.refundAmount = this.qty * response.data;
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
    backToMethod() {
       this.$router.push({ name: 'ReturnMethods' });    
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
        const message =
          error?.response?.data?.message || // server-defined error
          error?.response?.data ||          // raw response body
          error?.message ||                 // JS error message
          'Something went wrong';           // fallback

        toast.error(message); 
      }
    },
    async submitRefund(){
        if(this.checked){
            this.loading = true;
            const refundload = {
                MemberId: sessionStorage.getItem('IdUser'),
                OutletId: this.branch?.id,
                DropOffPointId: this.methodload?.PointId,
                DropOffPoint: this.methodload?.PointAddress,
                PickUpFromId: this.memberAddress.id,
                BottleQty: this.qty,
                Mode: this.methodload?.ReturnMethod,
                CreditAmount: this.refundAmount,                
            };
            try{
                const response = await api.post('Refund/RequestRefund', JSON.stringify(refundload));
                if(response.status === 200){
                const store = usePayloadStore();
                var order_confirmed_load = {
                    Code: response.data.data.code,
                    PaymentMethod: 'Sosoda Wallet',
                    DateRefund: response.data.data.dt,
                    Quantity: response.data.data.bottleQty,
                    TotalAmount: response.data.data.creditAmount,
                    Process: response.data.data.process,
                    Branch: this.branch,
                    MemberAddress: this.memberAddress,
                    DropOffPoint: this.methodload?.DropOffPoint,
                    MethodUse: response.data.data.mode,
                    RefundId: response.data.data.id
                }
                store.setPayload(order_confirmed_load);
                this.$router.push({ name: 'ReturnOrderConfirmed' });
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
        else{
          this.showError = !this.checked;
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
  height: 300px;
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