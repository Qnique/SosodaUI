<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-30 mt-[50.148px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToAccount" class="cursor-pointer w-[55px] h-[21px] shrink-0 relative z-[31]">
        <span
          class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#fff] absolute top-0 left-[20px] text-left whitespace-nowrap z-[32]"
          >Back</span
        >
        <div
          class="w-[10px] h-[20px] bg-[url('../public/back_arrow.png')] filter invert bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[33]"
        ></div>
      </div>
      <span
        class="h-[42px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#fff] relative text-left whitespace-nowrap z-[34]"
        >Edit Profile</span
      >
    </div>
    <div
      class="w-[402px] h-[233px] bg-[url('../public/background-gradient.png')] bg-cover bg-no-repeat absolute top-0 left-0"
    ></div>
    <div
      class="w-[100px] h-[100px] rounded-[50px] absolute top-[163px] left-1/2 translate-x-[-50%] translate-y-0 z-[3]"
    >
      <div
        class="flex w-[26px] pt-[2px] pr-[2px] pb-[2px] pl-[2px] justify-between items-center flex-nowrap relative z-[26] mt-[74.352px] mr-0 mb-0 ml-[74px]"
      >
        <div
          class="w-[21.648px] h-[21.648px] shrink-0 bg-[#fff] rounded-[50px] relative z-[27]"
        ></div>
      </div>
    </div>
    <div
      class="w-[402px] h-[661px] bg-[#fafafa] rounded-[10px] border-solid border border-[#fff] absolute top-[213px] left-0 shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[2]"
    >
      <div
        class="flex w-[342px] flex-col gap-[2px] items-start flex-nowrap relative z-[6] mt-[85px] mr-0 mb-0 ml-[30px]"
      >
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[7]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[8]"
            >Full Name</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[9]"
          >
            <input readonly :value="this.member?.name"
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-10 bg-[#fafafa]"
              />
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[12]"
            >NRIC Number</span
          >
          <div
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[13]"
          >
            <input placeholder="000000-00-0000" readonly :value="this.member?.icNumber"
              class="h-[42px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[14] bg-[#fafafa]"
              />
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[15]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[16]"
            >Phone Number *</span
          >
          <div :class="[
                  phoneError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[17]"
          >
            <input v-model="member.mobileNumber" placeholder="Your Phone Number"
              class="h-[42px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-black relative text-left whitespace-nowrap z-[18] bg-[#fafafa]"
              />            
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[19]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-20"
            >Email Address *</span
          >
          <div :class="[
                  emailError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[21]"
          >
            <input v-model="member.email" placeholder="example@gmail.com" 
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-black relative text-left whitespace-nowrap z-[22] bg-[#fafafa]"
            />
            
          </div>
        </div>
      </div>
      <button @click="saveToAccount"
        class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[4] mt-[153px] mr-0 mb-0 ml-[30px]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[5]"
          >Save</span
        >
      </button>
    </div>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify'; 

export default{
  data(){
    return{
      member: {
        email: '',
        mobileNumber: '',
        emailError: false,
        phoneError: false
      },
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
          const message =
            error?.response?.data?.message || // server-defined error
            error?.response?.data ||          // raw response body
            error?.message ||                 // JS error message
            'Something went wrong';           // fallback

          toast.error(message); 
        }
      }
    },
    async saveToAccount() {
      if(this.email === ''){
        this.emailError = true;
      }
      if(this.mobileNumber === ''){
        this.phoneError = true;
      }  
      if(this.email !== '' && this.mobileNumber !== ''){
        const payload = {
          MobileNumber: this.member.mobileNumber,
          Email: this.member.email,
          RequestUpdateId: sessionStorage.getItem('IdUser')
        }
        try{
          const response = await api.post('Member/EditMemberDetail', JSON.stringify(payload));
          if(response.status === 200){
            toast.success('Saved successfully!');
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
    backToAccount() {
      this.$router.push({ name: 'Accounts' });
    }
  }
}

</script>
