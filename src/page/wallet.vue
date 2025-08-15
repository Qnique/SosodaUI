<template>
  <div 
    class="wallet main-container w-[420px] h-[874px] bg-[#fff] relative mx-auto my-0"
  >
    <div
      class="flex w-[55px] h-[21px] justify-between items-center relative z-[37] mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToHome"
        class="cursor-pointer w-[10px] h-[20px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[10] mt-[15px]"
      ></div>
      <span @click="backToHome"
        class="cursor-pointer h-[21px] shrink-0 font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[10] mt-[15px]"
        >Back</span
      >
    </div>
    <div
      class="w-[342px] h-[151.388px] relative z-[38] mt-[5.612px] mr-0 mb-0 ml-[30px] z-[5]"
    >
      <div
        class="w-[125px] h-[139.051px] absolute top-0 left-[217px] z-[10]"
      >
        <div
          class="walletimg w-[125px] h-[138px] bg-[url('../public/wallet.png')] bg-cover bg-no-repeat relative z-[39] mt-[1.388px] mr-0 mb-0 ml-0"
        ></div>
      </div>
      <div
        class="w-[342px] h-[132px] bg-[url('../public/wallet-background.png')] bg-cover bg-no-repeat rounded-[10px] absolute top-[19.388px] left-0 z-[4]"
      >
        <div
          class="w-[342px] h-[132px] text-[0px] bg-[url('../public/wallet-background.png')] bg-cover bg-no-repeat rounded-[10px] absolute top-0 left-0 z-[5]"
        >
          <span
            class="block h-[20px] font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#fff] tracking-[0.1px] relative text-left uppercase whitespace-nowrap z-[6] mt-[36px] mr-0 mb-0 ml-[20px]"
            >Current Balance</span
          ><span
            class="block h-[30px] font-['Poppins'] text-[40px] font-semibold leading-[30px] text-[#fff] relative text-left whitespace-nowrap z-[7] mt-[10px] mr-0 mb-0 ml-[20px]"
            >RM {{ this.wallet?.balance.toFixed(2) }}</span
          >
        </div>
      </div>
    </div>
    <div
      class="w-[342px] h-[30px] relative z-[24] mt-[20px] mr-0 mb-0 ml-[30px] z-[10]"
    >
      <span
        class="flex h-[30px] justify-start items-center font-['Poppins'] text-[20px] font-semibold leading-[29.986px] text-[#000] absolute top-0 left-[calc(50%-171px)] text-left whitespace-nowrap z-[3]"
        >Transaction History</span
      >
    </div>
    <div
      class="flex w-[342px] h-[23px] justify-between items-center relative z-[33] mt-[15px] mr-0 mb-0 ml-[30px] z-[5]"
    >
      <button @click="goToSpecificTransaction('All')" :class="activeType === 'All' ? 'bg-[#2275b6]' : 'bg-[#f8f8f8]'"
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[7]"
      >
        <span :class="activeType === 'All' ? 'text-[#fff]' : 'text-[#000]'"
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[8]"
          >All</span
        >
      </button>
    </div>
    <div
      class="flex w-[342px] h-[23px] justify-between items-center relative z-[33] mt-[15px] mr-0 mb-0 ml-[30px] z-[5]"
    >
      <button @click="goToSpecificTransaction('TopUp')" :class="activeType === 'TopUp' ? 'bg-[#2275b6]' : 'bg-[#f8f8f8]'"
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[27]"
      >
        <span :class="activeType === 'TopUp' ? 'text-[#fff]' : 'text-[#000]'"
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
          >Top Up</span
        >
      </button>
      <button @click="goToSpecificTransaction('Purchase')" :class="activeType === 'Purchase' ? 'bg-[#2275b6]' : 'bg-[#f8f8f8]'"
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[29]"
      >
        <span :class="activeType === 'Purchase' ? 'text-[#fff]' : 'text-[#000]'"
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-30"
          >Purchase</span
        >
      </button>
      <button @click="goToSpecificTransaction('Refill')" :class="activeType === 'Refill' ? 'bg-[#2275b6]' : 'bg-[#f8f8f8]'"
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[29]"
      >
        <span :class="activeType === 'Refill' ? 'text-[#fff]' : 'text-[#000]'"
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-30"
          >Refill</span
        >
      </button>
      <button @click="goToSpecificTransaction('Refund')" :class="activeType === 'Refund' ? 'bg-[#2275b6]' : 'bg-[#f8f8f8]'"
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[31]"
      >
        <span :class="activeType === 'Refund' ? 'text-[#fff]' : 'text-[#000]'"
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[32]"
          >Refund</span
        >
      </button>
    </div>
    <div v-for="(item, index) in histories"
      :key="index">
    <div 
      class="w-[342px] h-[65px] text-[0px] relative z-10 mt-[30px] mr-0 mb-0 ml-[30px]"
    >
      <span :class="[
          'flex w-[112px] h-[20px] justify-end items-center font-[Poppins] text-[16px] font-semibold leading-[20px] tracking-[0.1px] relative text-right whitespace-nowrap z-[9] mt-0 mr-0 mb-0 ml-[230px]',
           item.credit  > 0 ? 'text-green-600' : 'text-red-600'
        ]"> {{ item.credit > 0 ? `+ RM ${item.credit.toFixed(2)}` : `- RM ${item.debit.toFixed(2)}` }}</span
      >
      <div
        class="flex w-[342px] h-[65px] flex-col gap-[5px] items-start flex-nowrap absolute top-0 left-0 z-10"
      >
        <span
          class="h-[20px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[11]"
          >{{ item.transactionType }}</span
        >
        <div class="w-[342px] h-[40px] shrink-0 text-[0px] relative z-[12]">
          
          <div class="w-[342px] h-[20px] relative z-[14] mt-0 mr-0 mb-0 ml-0">
            <span
              class="flex h-[20px] justify-start items-center font-['Poppins'] text-[10px] font-normal leading-[20px] text-[#999999] tracking-[0.1px] absolute top-0 left-0 text-left whitespace-nowrap z-[15]"
              >{{ formatDate(item.createDt) }}</span
            ><span
              class="flex h-[20px] justify-start items-center font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-0 left-[230px] text-left whitespace-nowrap z-[16]"
              >Balance: RM {{ item.balance.toFixed(2) }}</span
            >
          </div>
        </div>
      </div>
     
    </div>
     <div
      class="w-[342px] h-px bg-[url('../public/line.png')] bg-cover bg-no-repeat relative z-[8] mt-[9.5px] mr-0 mb-0 ml-[30px]"
    ></div>
    </div>
    <button @click="topUpShow = !topUpShow" 
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative mr-0 mb-0 mt-[50px] ml-[30px] z-[10]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[1]"
        >Top-Up</span
      >
    </button>
    <transition name="fade">
      <div v-if="topUpShow" class="overlay" @click="topUpShow = false"></div>
    </transition>
    <transition name="slide-up">
        <div v-if="topUpShow" class="modal w-[402px] h-[401px] absolute top-[343px] left-0 z-[39]">
          <div
            class="w-[342px] h-[83px] relative z-[42] mt-[80px] mr-0 mb-0 ml-[30px]"
          >
            <div
              class="flex w-[342px] h-[60px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] justify-between items-center flex-nowrap bg-[#292929] rounded-[10px] relative z-[44] mt-0 mr-0 mb-0 ml-0"
            >
              <span
                class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[24px] font-semibold leading-[20px] text-[#5ba6e0] tracking-[0.1px] relative text-left whitespace-nowrap z-[45]"
                >RM</span
              ><input v-model="amount" @input="formatDigit"
                class="flex w-[243px] h-[40px] justify-end items-center shrink-0 basis-auto font-['Poppins'] text-[20px] text-[#5ba6e0] bg-[#292929] font-normal leading-[20px] text-[rgba(255,255,255,0.5)] tracking-[0.1px] relative text-right whitespace-nowrap z-[46]"
                />
            </div>
            <span
              class="flex w-[322px] h-[20px] justify-end items-center font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#999999] tracking-[0.1px] relative text-right whitespace-nowrap z-[43] mt-[3px] mr-0 mb-0 ml-[20px]"
              >Top-up Range: RM 1 - RM 30,000</span
            >
          </div>
          <span
            class="block h-[20px] font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[47] mt-[20px] mr-0 mb-0 ml-[30px]"
            >Payment Methods</span
          >
          <div @click="selectedMethod('Bank')"
            class="cursor-pointer flex w-[342px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[48] mt-[15px] mr-0 mb-0 ml-[30px]"
          >
            <div class="w-[138px] h-[24px] shrink-0 relative z-[49]">
              <span
                class="flex h-[20px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[51]"
                >Online Bank</span
              >
              <div
                class="w-[35px] h-[11.702px] absolute top-[6.149px] left-0 z-50"
              ></div>
            </div>
            <div class="w-[18px] h-[18px] shrink-0 relative z-[52]">
              <div :class="activeMethod === 'Bank' ? 'bg-[#2275b6]' : 'border-solid border-[1.5px] border-[#2275b6]'"
                class="w-[18px] h-[18px]  rounded-[30px] absolute top-0 left-0 z-[53]"
              ></div>
            </div>
          </div>
          <!-- <div @click="selectedMethod('eWallet')"
            class="cursor-pointer flex w-[342px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[55] mt-[10px] mr-0 mb-0 ml-[30px]"
          >
            <div class="w-[138px] h-[24px] shrink-0 relative z-[56]">
              <span
                class="flex h-[20px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[59]"
                >E-Wallet</span
              >
              <div
                class="w-[20.129px] h-[16px] absolute top-[4px] left-[7.455px] z-[58]"
              ></div>
            </div>
            <div :class="activeMethod === 'eWallet' ? 'bg-[#2275b6]' : 'border-solid border-[1.5px] border-[#2275b6]'"
              class="w-[18px] h-[18px] shrink-0 rounded-[30px] relative z-[60]"
            ></div>
          </div> -->
          <!-- <div
            class="flex w-[342px] pt-[11px] pr-[15px] pb-[11px] pl-[15px] justify-between items-center flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[61] mt-[10px] mr-0 mb-0 ml-[30px]"
          >
            <div class="w-[138px] h-[24px] shrink-0 relative z-[62]">
              <span
                class="flex h-[20px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[20px] text-[#000] tracking-[0.1px] absolute top-[2px] left-[45px] text-left whitespace-nowrap z-[64]"
                >Credit / Debit Card</span
              >
            </div>
            <div
              class="w-[18px] h-[18px] shrink-0 rounded-[30px] border-solid border-[1.5px] border-[#2275b6] relative z-[65]"
            ></div>
          </div> -->
          <button @click="submitTopUp"
            class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[66] mt-[65px] mr-0 mb-0 ml-[30px]"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[67]"
              >Confirm</span
            >
          </button>
          <div
            class="w-[402px] h-[531px] bg-[#fff] rounded-tl-[15px] rounded-tr-[15px] rounded-br-none rounded-bl-none absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 z-40"
          ></div>
          <span
            class="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] absolute top-[30px] left-[30px] text-left whitespace-nowrap z-[41]"
            >Top Up Wallet</span
          >
        </div>      
    </transition>
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
      wallet: null,
      histories: [],
      certainHistories:[],
      activeType: '',
      topUpShow: false,
      amount: '',
      activeMethod: 'Bank',
      paymentMethod: 0
    }
  },
  mounted(){
    this.getWalletDetail();
  },
  methods:{
    formatDigit() {
      this.amount = this.amount.replace(/[^0-9.]/g, ''); // Remove everything except digits and dots
    },
    backToHome() {
      this.$router.push({ name: 'Home' });
    },
    formatDate(date) {
      return dayjs(date).format('YYYY-MM-DD HH:mm');
    },
    selectedMethod(method){
      this.activeMethod = method;
    },
    async submitTopUp(){
      if(this.amount === '0' || this.amount === 0 || this.amount === ''){
        toast.error("Amount cannnot be zero or empty!")
      }
      else{
        const userId = sessionStorage.getItem('IdUser');
        //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
        if(this.activeMethod === 'Bank'){
          this.paymentMethod = 1
        }

        if(this.activeMethod === 'eWallet'){
          this.paymentMethod = 4
        }

        if(this.activeMethod === 'CreditCard'){
          this.paymentMethod = 3
        }
        const payload = {
          MemberId : userId,
          PaymentMethod : this.paymentMethod,
          Amount : Number(this.amount)
        };

        try{
          const response = await api.post('TopUp/RequestTopUp', JSON.stringify(payload));
            if(response.status === 200){
              if(response.data.data.recordStatus === 1){
                this.topUpShow = false;
                toast.success("Top-up successfully!");
                const store = usePayloadStore();
                var transactload ={
                  code: response.data.data.code,
                  invoiceNo: response.data.data.invoiceNo,
                  dt: response.data.data.createdDt,
                  name: '',
                  address: '',
                  transactionType: 'TopUp',
                  amount: response.data.data.amount,
                }
                store.setPayload(transactload);
                this.$router.push({ name: 'TransactionDetail' });
              }                     
          }
        }
        catch (error) {
          toast.error(error.response.data)
        }
      }
    },
    goToSpecificTransaction(type){
      this.activeType = type;
      if(type === 'TopUp'){
        this.histories = this.certainHistories.filter(t => t.transactionType === 'TopUp')
      }
      else if(type === 'Purchase'){
        this.histories = this.certainHistories.filter(t => t.transactionType === 'Purchase')
      }
      else if(type === 'Refill'){
        this.histories = this.certainHistories.filter(t => t.transactionType === 'Refill')
      }
      else if(type === 'Refund'){
        this.histories = this.certainHistories.filter(t => t.transactionType === 'Refund')
      }
      else{
        this.histories = this.certainHistories
      }
    },
    async getWalletDetail(){
      const userId = sessionStorage.getItem('IdUser');
      //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
      try{
        const response = await api.post('Wallet/GetWalletById', JSON.stringify(userId));
        console.log(response);
        if(response.status === 200){
          this.wallet = response.data;
          if(response.data.transactionLogs != null){
            this.histories = response.data.transactionLogs;
            this.certainHistories = response.data.transactionLogs;
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
  justify-content: center;
  align-items: flex-end;
}

/* Modal styling */
.modal {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 10px;
  z-index: 20;
}

</style>


