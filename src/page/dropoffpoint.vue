<template>
  <div
    class="dropoff main-container w-[402px] h-[874px] bg-[#fff] relative mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative z-[1] mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToPrevious()"
        class="w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[2]"
      ></div>
      <span
        class="h-[14px] shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-left uppercase whitespace-nowrap z-[3]"
        >Drop-Off point</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[4]"
      ></div>
    </div>

    <div
      class="flex w-[372px] flex-col gap-[10px] items-start flex-nowrap relative z-[6] mt-[30px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[7]"
        >Please select a Drop-Off point</span
      >
      <div
        class="flex flex-wrap gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[8]"
      >
        <div class="grid grid-cols-2 gap-[10px]">
            <div v-for="(item, index) in points" :key="index" @click="collectPoint(item.id, item.pointName, item.address1, item.address2, item.address3, item.address4, item.postCode, item.city)"
              class="cursor-pointer flex flex-col gap-[10px] items-start shrink-0 flex-nowrap w-[170px] pt-[12px] pr-[12px] pb-[16px] pl-[12px] bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[9]"
              >
                <div
                    class="flex w-[146px] flex-col gap-[13px] items-start shrink-0 flex-nowrap relative z-10"
                >
                    <div
                    class="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative z-[11]"
                    >
                    <div
                        class="h-[64.126px] self-stretch shrink-0 rounded-[6px] bg-cover bg-no-repeat relative z-[12]" :style="{ backgroundImage: this.logo ? `url(${this.logo})` : ''}"
                    ></div>
                    <div
                        class="grid grid-cols-1 gap-[6px] items-start self-stretch shrink-0 flex-wrap relative z-[13]"
                    >
                        <span
                        class="h-[18px] basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[14]"
                        >{{ item.pointName }}</span
                        ><span
                        class="flex w-[142.805px] h-[17.207px] justify-start items-start basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#000] relative text-left z-[16]"
                        >{{ item.address1 }} {{ item.address2 }} {{ item.address3 }} {{ item.address4 }}
                        {{ item.postCode }} {{ item.city }}</span
                        >
                    </div>
                    </div>
                    <div
                    class="flex h-[30px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[5px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[8px] relative z-[17]"
                    >
                    </div>
                </div>
            </div>   
            <div v-if="loading" class="loading-overlay">
              <div class="spinner"></div>
            </div>           
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';
import { usePayloadStore } from '../stores/payloadStore';
import dayjs from 'dayjs';
import Refillmethod from "./refillmethod.vue";

export default{
  data(){
    return{
        points: [],
        logo: '',
        loading: false
    }
  },
  computed: {
    methodload() {
      const store = usePayloadStore();
      return store.data;
    },
  },
  mounted(){
    this.getCourierServicePoint()
  },
  methods:{  
    backToPrevious(){
        this.$router.push({ name: 'Methods' });  
    },
    async getCourierServicePoint(){
        const userId = sessionStorage.getItem('IdUser');
        this.loading = true;
        //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
        try{
            const response = await api.post('Refill/GetDropOffPoint', JSON.stringify(userId));
            if(response.status === 200){
              this.points = response.data.locationPoints;
              this.logo = response.data.logo;
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
    },
    collectPoint(id, pointName, address1, address2, address3, address4, postcode, city){
      const store = usePayloadStore();
      var methodload = {
        RefillMethod : this.methodload.RefillMethod,
        PointId: id,
        PointName: pointName,
        PointAddress: address1 + '' + address2 + '' + address3 + '' + address4 + '' + postcode + '' + city
      }
      store.setPayload(methodload);
      this.$router.push({ name: 'SetupRefill' });
    }
  }
}
</script>

<style scoped>

</style>