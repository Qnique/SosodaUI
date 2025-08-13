<template>
  <div
    class="main-container w-[420px] h-[1091px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[30px] items-start flex-nowrap relative z-[5] mt-[107.5px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]"
      >
        <div class="w-[342px] h-[250px] shrink-0 relative z-[7]">
          <!-- <div
            class="flex w-[90px] h-[90px] pt-[5px] pr-[5px] pb-[5px] pl-[5px] gap-[10px] items-center flex-nowrap bg-[#fff] rounded-[45px] absolute top-0 left-[126px] z-[27]"
          >
            <div
              class="w-[80px] h-[81px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/tcMfJVLxmQ.png)] bg-cover bg-no-repeat relative z-[28]"
            ></div>
          </div> -->
          <div
            class="background-card flex w-[342px] h-[205px] pt-[20px] pr-[11px] pb-[20px] pl-[11px] flex-col gap-[10px] justify-end items-center flex-nowrap rounded-[10px] absolute top-[45px] left-0 shadow-[0_2px_12px_0_rgba(0,0,0,0.25)] z-[8]"
          >
            <div
              class="flex w-[312px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative z-[9]"
            >
              <div
                class="flex w-[136px] flex-col items-center shrink-0 flex-nowrap relative z-10"
              >
                <span
                  class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[20px] text-[#fff] tracking-[0.1px] relative text-center whitespace-nowrap z-[11]"
                  >{{ this.member?.name }}</span
                ><span
                  class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#fff] tracking-[0.1px] relative text-center whitespace-nowrap z-[12]"
                  >{{ this.member?.mobileNumber }}</span
                >
              </div>
              <div class="h-[80px] self-stretch shrink-0 relative z-[13]">
                <div
                  class="flex w-[269.1px] pt-0 pr-[8px] pb-0 pl-0 justify-between items-center flex-nowrap relative z-[15] mt-[20px] mr-0 mb-0 ml-[21.448px]"
                >
                  <div
                    class="flex w-[196px] gap-[6px] items-center shrink-0 flex-nowrap relative z-[16]"
                  >
                    <div @click="goToWalletPage"
                      class="cursor-pointer flex flex-col items-center grow shrink-0 basis-0 flex-nowrap relative z-[17]"
                    >
                      <span
                        class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[20px] font-semibold leading-[24px] text-[#000] relative text-center whitespace-nowrap z-[18]"
                        >{{ this.walletBalance }}</span
                      ><span
                        class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#000] relative text-center whitespace-nowrap z-[19]"
                        >Wallet</span
                      >
                    </div>
                    <div @click="goToVouchersPage"
                      class="cursor-pointer flex flex-col items-center grow shrink-0 basis-0 flex-nowrap relative z-20"
                    >
                      <span
                        class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[20px] font-semibold leading-[24px] text-[#000] relative text-center whitespace-nowrap z-[21]"
                        >{{ this.voucherCount }}</span
                      ><span
                        class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#000] relative text-center whitespace-nowrap z-[22]"
                        >Vouchers</span
                      >
                    </div>
                    <div @click="goToStampsPage"
                      class="cursor-pointer flex flex-col items-center grow shrink-0 basis-0 flex-nowrap relative z-[23]"
                    >
                      <span
                        class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[20px] font-semibold leading-[24px] text-[#000] relative text-center whitespace-nowrap z-[24]"
                        >{{ this.stampCount }}</span
                      ><span
                        class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#000] relative text-center whitespace-nowrap z-[25]"
                        >Stamp</span
                      >
                    </div>
                  </div>
                  <div @click="goToQRPage"
                    class="cursor-pointer w-[40px] h-[40px] shrink-0 bg-[url('../public/qr.png')] bg-cover bg-no-repeat relative overflow-hidden z-[26]"
                  ></div>
                </div>
                <div
                  class="w-[312px] h-[80px] bg-[#fff] rounded-[10px] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[14]"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col gap-[6px] items-center self-stretch shrink-0 flex-nowrap relative z-[29]"
        >
          <div
            class="cursor-pointer background-card flex h-[100px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col justify-center items-start self-stretch shrink-0 flex-nowrap rounded-[10px] relative z-30"
          >
            <span
              class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#fff] relative text-left whitespace-nowrap z-[31]"
              >Top up RM888</span
            ><span
              class="h-[15px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[32]"
              >Get a free Volt/Apex machine</span
            >
          </div>
          <!-- <div
            class="w-[52px] h-[8px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/gBGsQRJMR2.png)] bg-cover bg-no-repeat relative z-[33]"
          ></div> -->
        </div>
      </div>
      <div
        class="flex flex-col gap-[25px] items-start self-stretch shrink-0 flex-nowrap relative z-[34]"
      >
        <div class="w-[342px] h-[139px] shrink-0 relative z-[35]">
          <div
            class="flex w-[342px] h-[139px] flex-col gap-[15px] items-start flex-nowrap absolute top-0 left-0 z-[36]"
          >
            <div
              class="flex w-[139px] flex-col items-start shrink-0 flex-nowrap relative z-[37]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[38]"
                >Account Settings</span
              ><span
                class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a8a8a8] relative text-left whitespace-nowrap z-[39]"
                >Manage your personal and payment information</span
              >
            </div>
            <div
              class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-40"
            >
              <div
                class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[41]"
              >
                <div @click="goToAddress"
                  class="cursor-pointer flex pt-0 pr-[20px] pb-0 pl-[20px] flex-col gap-[11px] items-center self-stretch shrink-0 flex-nowrap relative z-[42]"
                >
                  <div
                    class="flex gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[43]"
                  >
                    <div
                      class="w-[16px] h-[16px] shrink-0 bg-[url('../public/address-icon.png')] bg-cover bg-no-repeat relative overflow-hidden z-[44]"
                    ></div>
                    <div
                      class="flex justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[45]"
                    >
                      <div
                        class="flex w-[69px] flex-col gap-[-1px] items-start shrink-0 flex-nowrap relative z-[46]"
                      >
                        <span
                          class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[47]"
                          >Address</span
                        ><span
                          class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a8a8a8] relative text-left whitespace-nowrap z-[48]"
                          >Set and manage your delivery locations</span
                        >
                      </div>

                    </div>
                  </div>
                  <div
                    class="w-[331.5px] h-px shrink-0 bg-[url('../public/account-line.png')] bg-cover bg-no-repeat relative z-[51]"
                  ></div>
                </div>
                <div @click="goToCardPage"
                  class="cursor-pointer flex pt-0 pr-[20px] pb-0 pl-[20px] flex-col gap-[11px] items-center self-stretch shrink-0 flex-nowrap relative z-[52]"
                >
                  <div
                    class="flex gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[53]"
                  >
                    <div
                      class="w-[16px] h-[14px] shrink-0 bg-[url('../public/card-icon.png')] bg-cover bg-no-repeat relative z-[54]"
                    ></div>
                    <div
                      class="flex justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[55]"
                    >
                      <div
                        class="flex w-[69px] flex-col gap-[-1px] items-start shrink-0 flex-nowrap relative z-[56]"
                      >
                        <span
                          class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[57]"
                          >Bank Accounts & Cards</span
                        ><span
                          class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a8a8a8] relative text-left whitespace-nowrap z-[58]"
                          >Manage your cards and payment options</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-[331.5px] h-px shrink-0 bg-[url('../public/account-line.png')] bg-cover bg-no-repeat relative z-[61]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[62]"
        >
          <div class="w-[129px] h-[35px] shrink-0 relative z-[63]">
            <div
              class="flex w-[129px] h-[35px] flex-col gap-[-1px] items-start flex-nowrap absolute top-0 left-0 z-[64]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[65]"
                >Preference</span
              ><span
                class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a8a8a8] relative text-left whitespace-nowrap z-[66]"
                >Support and service information</span
              >
            </div>
          </div>
          <div
            class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[67]"
          >
            <!-- <div
              class="cursor-pointer flex pt-0 pr-[20px] pb-0 pl-[20px] flex-col gap-[11px] items-center self-stretch shrink-0 flex-nowrap relative z-[68]"
            >
              <div
                class="flex gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[69]"
              >
                <div
                  class="w-[16px] h-[16px] shrink-0 bg-[url('../public/info-icon.png')] bg-cover bg-no-repeat relative overflow-hidden z-[70]"
                ></div>
                <div
                  class="flex justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[71]"
                >
                  <div
                    class="flex w-[69px] flex-col gap-[-1px] items-start shrink-0 flex-nowrap relative z-[72]"
                  >
                    <span
                      class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[73]"
                      >FAQ</span
                    ><span
                      class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a8a8a8] relative text-left whitespace-nowrap z-[74]"
                      >Browse FAQs and service guides</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="w-[331.5px] h-px shrink-0 bg-[url('../public/account-line.png')] bg-cover bg-no-repeat relative z-[77]"
              ></div>
            </div> -->
            <div @click="goToTerms"
              class="cursor-pointer flex pt-0 pr-[20px] pb-0 pl-[20px] flex-col gap-[11px] items-center self-stretch shrink-0 flex-nowrap relative z-[78]"
            >
              <div
                class="flex gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[79]"
              >
                <div
                  class="w-[16px] h-[16px] shrink-0 bg-[url('../public/tnc-icon.png')] bg-cover bg-no-repeat relative overflow-hidden z-[80]"
                ></div>
                <div
                  class="flex justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[81]"
                >
                  <div
                    class="flex w-[69px] flex-col gap-[-1px] items-start shrink-0 flex-nowrap relative z-[82]"
                  >
                    <span
                      class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[83]"
                      >Term & Conditions</span
                    ><span
                      class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[84]"
                      >Read our service terms and policies</span
                    >
                  </div>

                </div>
              </div>
              <div
                class="w-[331.5px] h-px shrink-0 bg-[url('../public/account-line.png')] bg-cover bg-no-repeat relative z-[87]"
              ></div>
            </div>
            <!-- <div
              class="cursor-pointer flex pt-0 pr-[20px] pb-0 pl-[20px] flex-col gap-[11px] items-center self-stretch shrink-0 flex-nowrap relative z-[88]"
            >
              <div
                class="flex gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[89]"
              >
                <div
                  class="w-[16px] h-[16px] shrink-0 bg-[url('../public/whatsapp-icon.png')] bg-cover bg-no-repeat relative z-[90]"
                ></div>
                <div
                  class="flex justify-between items-center grow shrink-0 basis-0 flex-nowrap relative z-[91]"
                >
                  <div
                    class="flex w-[69px] flex-col gap-[-1px] items-start shrink-0 flex-nowrap relative z-[92]"
                  >
                    <span
                      class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[93]"
                      >Live Chat</span
                    ><span
                      class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a8a8a8] relative text-left whitespace-nowrap z-[94]"
                      >Connect with our support team in real-time</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="w-[331.5px] h-px shrink-0 bg-[url('../public/account-line.png')] bg-cover bg-no-repeat relative z-[97]"
              ></div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <button @click="goToLogout"
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[1] mt-[30px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[2]"
        >Logout</span
      >
    </button>
    <div
      class="w-[362px] h-[60px] bg-[#292929] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[3] mt-[39.502px] mr-0 mb-0 ml-[20px]"
    >
      <div
        class="flex w-[301px] gap-[55px] items-center flex-nowrap relative z-[4] mt-[11px] mr-0 mb-0 ml-[30px]"
      >
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[5]" style="padding: 5px;" @click="backToHome">
          <div
            class="w-[30px] h-[30px] bg-[url('../public/home.png')] bg-cover bg-no-repeat relative z-[6] mt-0 mr-0 mb-0 "
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[12px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[7] mt-[5px] mr-0 mb-0 ml-0"
            >HOME</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[8]" style="padding: 5px;">
          <div
            class="w-[30px] h-[30px] bg-[url('../public/menu.png')] bg-cover bg-no-repeat relative z-[9] "
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-10 mt-[4px] mr-0 mb-0 ml-0"
            >MENU</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[8]" style="padding: 5px;">
          <div
              class="w-[30px] h-[25px] bg-[url('../public/order.png')] bg-[length:100%_100%] bg-no-repeat relative z-[13] mt-[1.667px] mr-0 mb-0"
        ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[13] mt-[7px] mr-0 mb-0 ml-0"
            >ORDER</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[15]" style="padding: 5px;">
          <div
            class="w-[30px] h-[25px] bg-[url('../public/me.png')] bg-cover bg-no-repeat relative z-[16] mt-0 mr-0 mb-0"
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[17] mt-[7px] mr-0 mb-0"
            >ME</span
          >
        </div>
      </div>
    </div>
    <span
      class="flex h-[30px] justify-start items-center font-['Poppins'] text-[20px] font-semibold leading-[29.986px] text-[#292929] absolute top-[47.5px] left-[calc(50%-38.5px)] text-left uppercase whitespace-nowrap z-[3]"
      >Profile</span
    >
    <div @click="backToHome"
      class="w-[12.5px] h-[25px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[50px] left-[30px] overflow-hidden z-[4]"
    ></div>
    <div @click="goToProfile"
      class="cursor-pointer w-[5.47%] h-[22.25px] bg-[url('../public/edit.png')] bg-cover bg-no-repeat absolute top-1/2 left-[83.31%] translate-x-0 translate-y-[-2245.45%]"
    ></div>
  </div>
</template>

<style>
.background-card{
    background: var(--Radial, radial-gradient(176.23% 137.75% at 100% 2.55%, #60DCD6 0%, var(--Color-2, #2275B6) 100%));
}
</style>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';

export default{
  data(){
    return{
      member: null,
      stampCount: 0,
      voucherCount: 0,
      walletBalance: 0.00
    }
  },
  mounted(){
    this.getDetail();
  },
  methods:{    
    async getDetail(){
      const userId = sessionStorage.getItem('IdUser');
      //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
      if(userId !== null){
        try{        
          const response = await api.post('Home/MemberHome', JSON.stringify(userId));
          if(response.status === 200){
            this.member = response.data;
            this.stampCount = (response.data.stamp === null) ? 0 : response.data.stamp.point;
            this.voucherCount = (response.data.vouchers === null) ? 0 : response.data.vouchers.length;
            this.walletBalance = response.data.wallet.balance.toFixed(2);
          }
        }
        catch (error) {
          toast.error(error.response.data)
        }
      }      
    },
    goToCardPage() {
      this.$router.push({ name: 'CardInfos' });
    },
    goToProfile() {
      this.$router.push({ name: 'Profiles' });
    },
    goToStampsPage() {
      //this.$router.push({ name: 'Stamps' });
    },
    goToVouchersPage() {
      //this.$router.push({ name: 'Vouchers' });
    },
    goToAddress() {
      this.$router.push({ name: 'Addresses' });
    },
    goToWalletPage() {
      this.$router.push({ name: 'Wallet' });
    },
    goToQRPage() {
      this.$router.push({ name: 'QRCodes' });
    },
    goToTerms() {
      this.$router.push({ name: 'Terms' });
    },
    async goToLogout() {
      try{
        const response = await api.post('System/Logout');
        if(response.status === 200){
          sessionStorage.clear();

          this.$router.push({ name: 'Login' });
        }
      }
      catch (error) {
        toast.error(error.response.data)
      }      
    },
    backToHome() {
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>
