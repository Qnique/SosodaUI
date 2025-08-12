<template>
  <div
    class="main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-40 mt-[50.148px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToAddress" class="cursor-pointer w-[55px] h-[21px] shrink-0 relative z-[41]">
        <span
          class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] absolute top-0 left-[20px] text-left whitespace-nowrap z-[42]"
          >Back</span
        >
        <div
          class="w-[10px] h-[20px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[43]"
        ></div>
      </div>
      <span
        class="h-[42px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#000] relative text-left whitespace-nowrap z-[44]"
        >New Address</span
      >
    </div>
    <button @click="saveAddress"
      class="flex w-[342px] gap-[19px] items-center flex-nowrap relative z-[1] mt-[660.852px] mr-0 mb-0 ml-[50px]"
    >
      <div
        class="flex w-[293px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[3]"
      >
        <span
          class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[4]"
          >Save</span
        >
      </div>
    </button>
    <div
      class="flex w-[342px] h-[578.999px] flex-col gap-[15px] items-start flex-nowrap absolute top-[154px] left-[30px] z-[5]"
    >

      <div
        class="flex flex-col gap-[30px] items-start self-stretch shrink-0 flex-nowrap relative z-[7]"
      >
        <div
          class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]"
        >
          <div
            class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-10"
              >Line 1*</span
            >
            <div :class="[
                  lineError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[11]"
            >
              <input v-model="line1" placeholder="Enter House No, Building Name, Street Name"
                class="w-[264px] shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] relative text-left whitespace-nowrap z-[12] bg-[#fafafa]"
              />
                
            </div>
            <span
              class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[13]"
              ></span
            >
          </div>
          <div
            class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-10"
              >Line 2</span
            >
            <div
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[11]"
            >
              <input v-model="line2" placeholder="Optional"
                class="w-[264px] shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] relative text-left whitespace-nowrap z-[12] bg-[#fafafa]"
              />
               
            </div>
            <span
              class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[13]"
              ></span
            >
          </div>
          <div
            class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[14]"
          >
            <div
              class="flex w-[133px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[15]"
            >
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[16]"
                >Postal Code *</span
              >
              <input v-model="postCode" maxlength="6" placeholder="Enter postal code" :class="[
                  postCodeError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
                class="flex h-[42px] pt-[12px] text-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[17]"
              />
                
            </div>
            <div 
              class="flex h-[82px] flex-col gap-[5px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[19]"
            >
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-20"
                >City *</span
              >
              <input v-model="city" placeholder="City"  :class="[
                  cityError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
                class="flex h-[42px] text-[12px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[21]"
              />
                
            </div>
          </div>
          <div
            class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-10"
              >State *</span
            >
            <div :class="[
                  stateError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.12)] z-[11]"
            >
              <input v-model="state" placeholder="State"
                class="w-[264px] shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] relative text-left whitespace-nowrap z-[12] bg-[#fafafa]"
              />
               
            </div>
            <span
              class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[13]"
              ></span
            >
          </div>
        </div>
        <!-- <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[36]"
        >
          <span
            class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[37]"
            >Set as Default Address</span
          >
          <div
            class="flex w-[40px] h-[20px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] gap-[10px] items-center shrink-0 flex-nowrap bg-[#d9d9d9] rounded-[20px] border-solid border-[0.5px] border-[rgba(191,191,191,0.25)] relative shadow-[1px_2px_3px_0_rgba(0,0,0,0.15)_inset] z-[38]"
          >
            <div
              class="w-[15px] h-[15px] shrink-0 bg-[#fff] rounded-[20px] relative z-[39]"
            ></div>
          </div>
        </div> -->
      </div>
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
      line1:'',
      line2:'',
      postCode:'',
      city:'',
      state:'',
      lineError: false,
      postCodeError: false,
      cityError: false,
      stateError: false,
    }
  },
  mounted(){
    
  },
  methods:{    
    async saveAddress(){
      if(this.city == ''){
        this.cityError = true;
      }
      if(this.state == ''){
        this.stateError = true;
      }
      if(this.line1 == ''){
        this.lineError = true;
      }
      if(this.postCode == ''){
        this.postCodeError = true;
      }

      if(this.city !== '' && this.postCode !== '' && this.state !== '' && this.line1 !== '' )
      {
        const payload = {
            Line1 : this.line1,
            Line2 : this.line2,
            City : this.city.toUpperCase(),
            State : this.state.toUpperCase(),
            PostalCode : this.postCode,
            Country : 'MALAYSIA'
        };
        try{
          const response = await api.post('Address/NewAddress', JSON.stringify(payload));
          if(response.status === 200){
              toast.success('Setup successfully!');                
              this.$router.push({ name: 'Addresses' });
          }
        }
        catch (error) {
          toast.error(error.response.data.message)
        }        
      }            
    },
    backToAddress() {
       this.$router.go(-1);    
    },    
  }
}

</script>

