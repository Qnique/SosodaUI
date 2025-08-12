<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <button @click="copyCode"
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[8] mt-[666.5px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[9]"
        >Copy Code</span
      >
    </button>
    <div @click="backToHome"
      class="cursor-pointer w-[12.5px] h-[25px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[50.313px] left-[30px] overflow-hidden z-10"
    ></div>
    <span
      class="flex h-[14px] justify-start items-center font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] absolute top-[55.813px] left-[calc(50%-76.5px)] text-left uppercase whitespace-nowrap z-[11]"
      >REFERRAL CODE</span
    >
    <div
      class="w-[342px] h-[430px] text-[0px] bg-[#292929] rounded-[15px] absolute top-[196.5px] left-[30px] z-[1]"
    >
      <span
        class="block h-[20px] font-['Poppins'] text-[18px] font-bold leading-[20px] text-[#fff] tracking-[6px] relative text-center whitespace-nowrap z-[2] mt-[53.535px] mr-0 mb-0 "
        >{{ this.name }}</span
      >
      <div
        class="flex w-[250px] h-[250px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-[10px] relative z-[4] mt-[30px] mr-0 mb-0 ml-[46px]"
      >
        <div
          class="w-[223.5px] h-[223.5px] shrink-0 bg-[url(qrDataUrl)] bg-cover bg-no-repeat relative z-[5]"
        ><img :src="this.qrDataUrl" alt="Email QR Code" /></div>
      </div>
      <span
        class="flex w-[250px] h-[36px] justify-start items-center font-['Poppins'] text-[12px] font-normal leading-[17.992px] text-[#fff] relative text-left z-[3] mt-[10px] mr-0 mb-0 ml-[46px]"
        >Show your QR code to your friends & family for referral use</span
      >
    </div>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi' 
import QRCode from 'qrcode';
import { toast } from 'vue3-toastify'; 

export default{
  data(){
    return{
      name: sessionStorage.getItem('NameUser'),
      code: sessionStorage.getItem('CodeUser'),
      qrDataUrl:''
    }
  },
  mounted(){
    QRCode.toDataURL(this.code)
      .then(url => {
        this.qrDataUrl = url;
      })
      .catch(err => {
        toast.error('QR generation failed:', err)
      });
  },
  methods:{    
    backToHome() {
       this.$router.go(-1);  
    },
    copyCode(){
      navigator.clipboard.writeText(this.code)
      .then(() => {
        toast.success('Copied successfully!');
      })
      .catch(err => {
        toast.error('Clipboard copy failed:', err);
      });
    }
  }
}

</script>

<style scoped>
img {
  width: 235px;
  height: 235px;
}
</style>
