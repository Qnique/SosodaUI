<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative z-[27] mt-[49.723px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToAccount"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[28]"
      ></div>
      <!-- <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[29]"
        >Bank & Cards</span
      > -->
    </div>
        <span
      class="block h-[20px] font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap mt-[40px] mr-0 mb-0 ml-[30px]"
      >Credit Card</span
    >
    <div v-for="(item, index) in cards"
      :key="index"
      class="w-[345px] h-[50px] bg-[#fff] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[32] mt-[13.223px] mr-0 mb-0 ml-[29px]"
    >
      <div
        class="w-[31.59%] h-[68%] text-[0px] absolute top-[16%] left-[15.94%] z-[38]"
      >
        <span
          class="block h-[21px] font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] relative text-left whitespace-nowrap z-[38] mt-0 mr-0 mb-0 ml-0"
          >{{ item.bankName }}</span
        ><span
          class="block h-[15px] font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[37] mt-[-2px] mr-0 mb-0 ml-0"
          >{{ item.cardNumber }}</span
        >
      </div>
      <div v-if="item.isDefault"
        class="flex w-[14.62%] h-[15.132px] pt-[2px] pr-[12px] pb-[2px] pl-[12px] gap-[10px] justify-center items-center flex-nowrap rounded-[20px] border-solid border border-[#a5a5a5] absolute top-[11px] left-[82.46%] z-[34]"
      >
        <span
          class="h-[13px] shrink-0 basis-auto font-['Poppins'] text-[9px] font-medium leading-[13px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[35]"
          >Default</span
        >
      </div>
    </div>
    <!-- <div
      class="w-[52px] h-[8px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-03/O5qaLqO5AU.png)] bg-cover bg-no-repeat relative z-20 mt-[12px] mr-0 mb-0 ml-[175px]"
    ></div> -->
    <button @click="addCardPage"
      class="flex w-[342px] h-[40px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[5px] justify-center items-center flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[10px] border-solid border-[1.25px] border-[#a5a5a5] relative z-[21] mt-[20.777px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[24px] h-[24px] shrink-0 bg-[url('../public/plus.png')] bg-cover bg-no-repeat relative overflow-hidden z-[22]"
      ></div>
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[23]"
        >Add Card</span
      >
    </button>
    <span
      class="block h-[20px] font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap mt-[40px] mr-0 mb-0 ml-[30px]"
      >Bank Account</span
    >
    <div v-for="(item, index) in banks"
      :key="index"
      class="w-[345px] h-[50px] bg-[#fff] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[32] mt-[13.223px] mr-0 mb-0 ml-[29px]"
    >
      <div
        class="w-[31.59%] h-[68%] text-[0px] absolute top-[16%] left-[15.94%] z-[38]"
      >
        <span
          class="block h-[21px] font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#000] relative text-left whitespace-nowrap z-[38] mt-0 mr-0 mb-0 ml-0"
          >{{ item.bankName }}</span
        ><span
          class="block h-[15px] font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[37] mt-[-2px] mr-0 mb-0 ml-0"
          >{{ item.accountNumber }}</span
        >
      </div>
      <div v-if="item.isDefault"
        class="flex w-[14.62%] h-[15.132px] pt-[2px] pr-[12px] pb-[2px] pl-[12px] gap-[10px] justify-center items-center flex-nowrap rounded-[20px] border-solid border border-[#a5a5a5] absolute top-[11px] left-[82.46%] z-[34]"
      >
        <span
          class="h-[13px] shrink-0 basis-auto font-['Poppins'] text-[9px] font-medium leading-[13px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[35]"
          >Default</span
        >
      </div>
    </div>

    <button @click="addBankPage"
      class="flex w-[342px] h-[40px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[5px] justify-center items-center flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[10px] border-solid border-[1.25px] border-[#a5a5a5] relative z-[24] mt-[20px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[24px] h-[24px] shrink-0 bg-[url('../public/plus.png')] bg-cover bg-no-repeat relative overflow-hidden z-[25]"
      ></div>
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[26]"
        >Add Bank</span
      >
    </button>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';
export default{
  data(){
    return{
      banks:[],
      cards:[]
    }
  },
  mounted(){
    this.getBank();
    this.getCard()
  },
  methods:{    
    async getBank(){
      try{
        const response = await api.get('BankAccount/GetBankAccountListByMemberId');
        if(response.status === 200){
          this.banks = response.data;
        }
      }
      catch (error) {
        toast.error(error.response.data)
      }
    },
    async getCard(){
      try{
        const response = await api.get('CreditCard/GetCreditCardListByMemberId');
        if(response.status === 200){
          this.cards = response.data;
        }
      }
      catch (error) {
        toast.error(error.response.data)
      }
    },
    addCardPage() {
      this.$router.push({ name: 'AddCards' });
    },
    addBankPage() {
      this.$router.push({ name: 'AddBanks' });
    },
    backToAccount() {
      this.$router.push({ name: 'Accounts' });
    }
  }
}

</script>
