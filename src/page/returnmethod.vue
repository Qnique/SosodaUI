<template>
  <div
    class="main-container w-[420px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative mt-[49.574px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToHome"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[1]"
      ></div>
      <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[2]"
        >RETURN ONLY</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 bg-[url('../public/white.png')] bg-cover bg-no-repeat relative overflow-hidden z-[3]"
      ></div>
    </div>
    <div @click="goToRefund('Pickup')"
      class="cursor-pointer w-[88.375px] h-[149.001px] bg-[url('../public/pickup.png')] bg-cover bg-no-repeat absolute top-[125px] left-[269.129px] z-[21]"
    ></div>
    <div @click="goToRefund('Pickup')"
      class="cursor-pointer card flex w-[342px] h-[120px] flex-col gap-[5px] items-start flex-nowrap absolute top-[154.426px] left-[50px] z-[18]"
    >
      <span
        class="card-text h-[27px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[27px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[19]"
        >Pick-Up Service</span
      ><span
        class="card-subtext h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-20"
        >Sit back. We’ll come to you.</span
      >
    </div>
    <div  @click="goToRefund('DropOff')"
      class="cursor-pointer w-[179.521px] h-[146.49px] bg-[url('../public/dropoff.png')] bg-cover bg-no-repeat absolute top-[307.42px] left-[221.887px] z-[15]"
    ></div>
    <div @click="goToRefund('DropOff')"
      class="cursor-pointer card flex w-[342px] h-[120px] flex-col gap-[5px] items-start flex-nowrap absolute top-[324.426px] left-[50px] z-[12]"
    >
      <span
        class="card-text h-[27px] shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[27px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[13]"
        >Drop-Off</span
      ><span
        class="card-subtext h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[14]"
        >We deliver, you stay refreshed.</span
      >
    </div>
    <div @click="goToRefund('ReturnAtOutlet')"
      class="cursor-pointer w-[187.286px] h-[150px] bg-[url('../public/spot.png')] bg-cover bg-no-repeat absolute top-[469.426px] left-[222.715px] z-[15]"
    ></div>
    <div @click="goToRefund('ReturnAtOutlet')"
      class="cursor-pointer card flex w-[342px] h-[120px] flex-col gap-[5px] items-start flex-nowrap absolute top-[495.164px] left-[50px] z-[12]"
    >
      <span
        class="h-[27px] card-text self-stretch shrink-0 basis-auto font-['Poppins'] text-[18px] font-bold leading-[27px] text-[#fff] tracking-[0.1px] relative text-left whitespace-nowrap z-[7]"
        >Return On The Spot</span
      ><span
        class="card-subtext flex h-[30px] justify-start items-start shrink-0 font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#fff] relative text-left overflow-hidden z-[8]"
        >Walk in with empty, <br />walk out with fresh.</span
      >
    </div>
  </div>
</template>

<style>
.card{
    background: var(--Linear, linear-gradient(180deg, #292929 12.98%, #545454 100%));
    border-radius: 12px;
}

.card-text{
    display: inline-flex;
    padding: 25px 20px;
    align-items: center;
}

.card-subtext{
    display: inline-flex;
    padding: 1px 20px;
    align-items: center;
}
</style>

<script>
import "./index.css";
import api from '../services/callingapi' 
import { toast } from 'vue3-toastify'; 
import { usePayloadStore } from '../stores/payloadStore';

export default{
  data(){
    return{
    }
  },
  mounted(){
  },
  methods:{    
    backToHome() {
       this.$router.push({ name: 'Home' }); 
    },  
    goToRefund(refundmethod){
      const store = usePayloadStore();
      var methodload = {
        ReturnMethod : refundmethod,
        PointId:'',
        PointName:'',
        PointAddress: ''
      }
      store.setPayload(methodload);
      if(refundmethod === 'DropOff')
      {
        this.$router.push({ name: 'DropOffPoint' });
      }
      else{
        this.$router.push({ name: 'SetupRefund' });
      }      
    }  
  }
}


</script>