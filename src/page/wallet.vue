<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative mx-auto my-0"
  >
    <div
      class="flex w-[55px] h-[21px] justify-between items-center relative z-[37] mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToHome"
        class="cursor-pointer w-[10px] h-[20px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[37]"
      ></div>
      <span @click="backToHome"
        class="cursor-pointer h-[21px] shrink-0 font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[36]"
        >Back</span
      >
    </div>
    <div
      class="w-[342px] h-[151.388px] relative z-[38] mt-[5.612px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[125px] h-[139.051px] absolute top-0 left-[217px] z-[38]"
      >
        <div
          class="w-[125px] h-[138px] bg-[url('../public/wallet.png')] bg-cover bg-no-repeat relative z-[39] mt-[1.388px] mr-0 mb-0 ml-0"
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
      class="w-[342px] h-[30px] relative z-[24] mt-[20px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="flex h-[30px] justify-start items-center font-['Poppins'] text-[20px] font-semibold leading-[29.986px] text-[#000] absolute top-0 left-[calc(50%-171px)] text-left whitespace-nowrap z-[3]"
        >Transaction History</span
      >
    </div>
    <div
      class="flex w-[342px] h-[23px] justify-between items-center relative z-[33] mt-[15px] mr-0 mb-0 ml-[30px]"
    >
      <button @click="goToSpecificTransaction('All')" :class="activeType === 'All' ? 'bg-[#2275b6]' : 'bg-[#f8f8f8]'"
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[27]"
      >
        <span :class="activeType === 'All' ? 'text-[#fff]' : 'text-[#000]'"
          class="h-[20px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[20px] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
          >All</span
        >
      </button>
    </div>
    <div
      class="flex w-[342px] h-[23px] justify-between items-center relative z-[33] mt-[15px] mr-0 mb-0 ml-[30px]"
    >
      <button @click="goToSpecificTransaction('Top Up')" :class="activeType === 'Top Up' ? 'bg-[#2275b6]' : 'bg-[#f8f8f8]'"
        class="flex w-[78px] h-[23px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[20px] border-solid border border-[#f5f5f5] relative shadow-[1px_1.5px_7px_0_rgba(0,0,0,0.1)] z-[27]"
      >
        <span :class="activeType === 'Top Up' ? 'text-[#fff]' : 'text-[#000]'"
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
    <button @click="goToTopUp" 
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative mr-0 mb-0 mt-[50px] ml-[30px]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[1]"
        >Top-Up</span
      >
    </button>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify'; 
import dayjs from 'dayjs';

export default{
  data(){
    return{
      wallet: null,
      histories: [],
      certainHistories:[],
      activeType: ''
    }
  },
  mounted(){
    this.getWalletDetail();
  },
  methods:{
    backToHome() {
      this.$router.push({ name: 'Home' });
    },
    formatDate(date) {
      return dayjs(date).format('YYYY-MM-DD HH:mm');
    },
    goToTopUp(){

    },
    goToSpecificTransaction(type){
      this.activeType = type;
      if(type === 'Top Up'){
        this.histories = this.certainHistories.filter(t => t.transactionType === 'Top Up')
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
        toast.error(error.response.data.message)
      }
    }
  }
}

</script>
