<template>
  <div
    class="main-container w-[402px] h-full bg-[#fff] relative overflow-hidden mx-auto my-0">
    <div
      class="w-[125px] h-[117px] bg-[url('../public/sosoda-logo.png')] bg-cover bg-no-repeat relative z-[1] mt-[7px] mr-0 mb-0 ml-[145px]"
    ></div>

    <div class="relative w-[320px] h-[100px] bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] mt-[32px] ml-[40px] z-[18]">
    <!-- Welcome Text -->
    <span class="absolute top-[12px] left-[22px] text-[14px] font-semibold text-[#080808] font-['Poppins'] leading-[21px] z-[32]">
        Welcome back, {{this.member?.name}}!
    </span>   
    <!-- Decorative Line -->
    <div class="absolute top-[42.5px] left-[22px] w-[276px] h-px bg-[url('../public/line.png')] bg-cover bg-no-repeat z-[35]"></div>

    <!-- Stats + Avatar -->
    <div class="absolute top-[50px] left-[22px] flex justify-between items-center w-[276px] z-[19]">
        <!-- Stats -->
        <div class="flex gap-[28px]">
        <div class="flex flex-col items-center cursor-pointer" @click="goToWalletPage">
            <span class="text-[20px] font-semibold leading-[24px] text-[#000] font-['Poppins']">{{ this.walletBalance }}</span>
            <span class="text-[10px] font-medium leading-[15px] text-[#000] font-['Poppins']">Wallet</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer" @click="goToVouchersPage">
            <span class="text-[20px] font-semibold leading-[24px] text-[#000] font-['Poppins']">{{ this.voucherCount }}</span>
            <span class="text-[10px] font-medium leading-[15px] text-[#000] font-['Poppins']">Vouchers</span>
        </div>
        <div class="flex flex-col items-center cursor-pointer" @click="goToStampsPage">
            <span class="text-[20px] font-semibold leading-[24px] text-[#000] font-['Poppins']">{{ this.stampCount }}</span>
            <span class="text-[10px] font-medium leading-[15px] text-[#000] font-['Poppins']">Stamp</span>
        </div>
        </div>

        <!-- Avatar -->
        <div @click="goToQRPage" class="cursor-pointer w-[40px] h-[40px] bg-[url('../public/qr.png')] bg-cover bg-no-repeat overflow-hidden z-30"></div>
    </div>
    </div>


    <div
      class="flex w-[342px] flex-col gap-[11px] items-start flex-nowrap relative z-[42] mt-[10px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex w-[118px] flex-col gap-[-1px] items-start shrink-0 flex-nowrap relative z-[43]"
      >
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[44]"
          >Services</span
        ><span
          class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[45]"
          >Your one-stop service center</span
        >
      </div>
      <div
        class="flex flex-col gap-[25px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]"
      >
        <div
          class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[47]"
        >
          <div @click="refill" class="w-[166px] h-[114px] shrink-0 relative z-[48] cursor-pointer">
            <div
              class="w-[166px] h-[120.501px] absolute top-[-6.003px] left-0 z-[49]"
            >
              <div
                class="w-[116.9px] h-[109px] absolute top-0 left-[23.551px] z-[51]"
              >
                <div
                  class="w-[116.9px] h-[82.641px] bg-[url('../public/refill.png')] bg-cover bg-no-repeat relative z-[55] mt-0 mr-0 mb-0 ml-0"
                ></div>
                <div
                  class="flex w-[103px] flex-col items-center flex-nowrap relative z-[52] mt-[-3.641px] mr-0 mb-0 ml-[7.949px]"
                >
                  <span
                    class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#fff] relative text-center whitespace-nowrap z-[53]"
                    >Refill + Swap</span
                  ><span
                    class="h-[9px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[6px] font-normal leading-[9px] text-[#fff] relative text-center capitalize whitespace-nowrap z-[54]"
                    >We deliver new, pick up old.</span
                  >
                </div>
              </div>
              <div
                class="w-[166px] h-[83px] bg-[url('../public/Rectangle80.png')] bg-cover bg-no-repeat rounded-[12px] absolute top-[37.501px] left-0 z-50"
              ></div>
            </div>
          </div>
          <div @click="returnMethod" class="w-[166px] h-[114.551px] shrink-0 relative z-[56] cursor-pointer">
            <div class="w-[166px] h-[114.551px] absolute top-0 left-0 z-[57]">
              <div
                class="w-[78.758px] h-[77.113px] bg-[url('../public/return.png')] bg-cover bg-no-repeat absolute top-0 left-[43.621px] z-[62]"
              ></div>
              <div
                class="w-[166px] h-[83px] text-[0px] rounded-[10px] absolute top-[31.551px] left-0 z-[58]"
              >
                <span
                  class="block h-[21px] font-['Poppins'] text-[14px] font-bold leading-[24px] text-[#fff] relative text-center whitespace-nowrap z-[60] mt-[38px] mr-0 mb-0"
                  >Return Only</span
                ><span
                  class="block h-[11px] font-['Poppins'] text-[7px] font-normal leading-[10.5px] text-[#fff] relative text-left whitespace-nowrap z-[61] mt-0 mr-0 mb-0 ml-[34.922px]"
                  >We pick up, you get refund.</span
                >
                <div
                  class="w-[166px] h-[83px] bg-[url('../public/Rectangle80.png')] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-[59]"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[342px] h-[114px] shrink-0 relative z-[63]">
          <div
            class="flex w-[342px] h-[100px] pt-[20px] pr-[20px] pb-[20px] pl-0 flex-col justify-center items-start flex-nowrap rounded-[10px] relative z-[65] mt-0 mr-0 mb-0 ml-0"
          >
            <div
              class="w-[342px] h-[100px] shrink-0 bg-[url('../public/background-gradient.png')] bg-cover bg-no-repeat rounded-[10px] relative z-[66]"
            ></div>
          </div>

        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] gap-[10px] items-start flex-wrap relative z-[37] mt-[30.449px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="goToAboutUsPage"
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url('../public/story.png')] bg-cover bg-no-repeat rounded-[13px] relative z-[38]"
      ></div>
      <div @click="goToTNCPage"
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url('../public/tnc.png')] bg-cover bg-no-repeat rounded-[13px] relative z-40"
      ></div>
      <div
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url('../public/location.png')] bg-cover bg-no-repeat rounded-[13px] relative z-[39]"
      ></div>
      <div
        class="cursor-pointer flex w-[166px] h-[100px] pt-[17px] pr-[41px] pb-[17px] pl-[41px] flex-col gap-[10px] justify-end items-center flex-nowrap bg-[url('../public/referral-bottle.png')] bg-cover bg-no-repeat rounded-[13px] relative z-[41]"
      ></div>
    </div>
    <div
      class="w-[362px] h-[60px] bg-[#292929] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[3] mt-[39.502px] mr-0 mb-0 ml-[20px]"
    >
      <div
        class="flex w-[301px] gap-[55px] items-center flex-nowrap relative z-[4] mt-[11px] mr-0 mb-0 ml-[30px]"
      >
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[5]" style="padding: 5px;">
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
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[15]" style="padding: 5px;" @click="goToAccountPage">
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
    <div
      class="h-[295px] bg-[url('../public/Rectangle76.png')] bg-cover bg-no-repeat absolute top-[-2px] left-[-442px] right-[-441px]"
    ></div>
    <div
      class="w-[1285px] h-[1285px] bg-[url('../public/Ellipse6.png')] bg-cover bg-no-repeat rounded-[50%] absolute top-[190px] left-1/2 translate-x-[-49.95%] translate-y-0 z-[2]"
    ></div>
  </div>
</template>

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
      walletBalance: 0
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
              sessionStorage.setItem('NameUser', this.member.name);
              sessionStorage.setItem('CodeUser', this.member.code);
              this.stampCount = (response.data.stamp === null) ? 0 : response.data.stamp.point;
              this.voucherCount = (response.data.vouchers === null) ? 0 : response.data.vouchers.length;
              this.walletBalance = response.data.wallet.balance.toFixed(2);
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
    goToAboutUsPage() {
      this.$router.push({ name: 'AboutUs' });
    },
    goToTNCPage() {
      this.$router.push({ name: 'Terms' });
    },
    goToStampsPage() {
      //this.$router.push({ name: 'Stamps' });
    },
    goToVouchersPage() {
      //this.$router.push({ name: 'Vouchers' });
    },
    goToAccountPage() {
      this.$router.push({ name: 'Accounts' });
    },
    goToWalletPage() {
      this.$router.push({ name: 'Wallet' });
    },
    goToQRPage() {
      this.$router.push({ name: 'QRCodes' });
    },
    refill() {
      this.$router.push({ name: 'Methods' });
    },
    returnMethod() {
      this.$router.push({ name: 'ReturnMethods' });
    }
  }
}
</script>


