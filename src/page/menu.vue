<template>
  <div
    class="main-container w-[402px] h-[874px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] h-[100px] pt-[20px] pr-[20px] pb-[20px] pl-0 flex-col justify-center items-start flex-nowrap rounded-[10px] relative mt-[110.148px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="w-[342px] h-[100px] shrink-0 bg-[url('../public/background-gradient.png')] bg-cover bg-no-repeat rounded-[10px] relative z-[1]"
      ></div>
    </div>
    <div
      class="flex w-[372px] h-[544px] flex-col gap-[15px] items-start flex-nowrap relative overflow-hidden z-[6] mt-[19.852px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[7]"
      >
        <!-- <div
          class="flex w-[372px] h-[42px] gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[8]"
        >
          <div
            class="flex w-[114px] h-[40px] pt-[21px] pr-[6px] pb-[21px] pl-[6px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[9]"
          >
            <div
              class="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-10"
            >
              <div
                class="w-[30px] h-[30px] shrink-0 bg-[#d9d9d9] rounded-[8px] relative z-[11]"
              ></div>
              <span
                class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[12]"
                >Category</span
              >
            </div>
          </div>
          <div
            class="flex w-[114px] h-[40px] pt-[6px] pr-[12px] pb-[6px] pl-[6px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[13]"
          >
            <div
              class="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[14]"
            >
              <div
                class="w-[30px] h-[30px] shrink-0 bg-[#d9d9d9] rounded-[8px] relative z-[15]"
              ></div>
              <span
                class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[15px] relative text-left whitespace-nowrap z-[16]"
                >Category</span
              >
            </div>
          </div>
          <div
            class="flex w-[114px] h-[40px] pt-[6px] pr-[12px] pb-[6px] pl-[6px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative z-[17]"
          >
            <div
              class="flex gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[18]"
            >
              <div
                class="w-[30px] h-[30px] shrink-0 bg-[#d9d9d9] rounded-[8px] relative z-[19]"
              ></div>
              <span
                class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[15px] relative text-left whitespace-nowrap z-20"
                >Category</span
              >
            </div>
          </div>
          <div
            class="flex w-[114px] pt-[6px] pr-[12px] pb-[6px] pl-[6px] flex-col gap-[10px] items-start shrink-0 flex-nowrap bg-[#b2d5f1] rounded-[8px] relative z-[21]"
          >
            <div
              class="flex gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[22]"
            >
              <div
                class="w-[30px] h-[30px] shrink-0 bg-[#d9d9d9] rounded-[8px] relative z-[23]"
              ></div>
              <span
                class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-[24]"
                >Category</span
              >
            </div>
          </div>
        </div> -->
        <div
          class="flex w-[332px] pt-0 pr-0 pb-0 pl-[10px] justify-between items-center shrink-0 flex-nowrap relative z-[25]"
        >
          <div
            class="flex w-[62px] gap-[2px] items-center shrink-0 flex-nowrap relative z-[26]"
          >
            <!-- <span
              class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[27]"
              >Newest</span
            > -->
            <!-- <div
              class="w-[16px] h-[8px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/ENEwW6iz9X.png)] bg-cover bg-no-repeat relative overflow-hidden z-[28]"
            ></div> -->
          </div>
          <span
            class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[29]"
            >{{ this.products.length }} Results</span
          >
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-[5px]">
        <div v-for="(item, index) in products" :key="index" @click="goToProductDetail(item.id)"
            class="cursor-pointer flex flex-col w-[342px]  gap-[10px] items-start shrink-0 flex-nowrap relative z-30"
        >
            <div
            class="flex w-[166px] flex-col gap-[5px] items-start flex-nowrap relative z-[56]"
            >
            <div
                class="h-[210px] self-stretch shrink-0 bg-cover bg-no-repeat rounded-[12px] relative z-[57]" :style="getBackgroundStyle(item.name)"
            ></div>
            <div
                class="flex w-[122px] flex-col  items-start shrink-0 flex-nowrap relative z-[58]"
            >
                <span
                class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-semibold leading-[21px] text-[#000] relative text-left whitespace-nowrap z-[59]"
                >{{ item.name }}</span
                ><span
                class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[60]"
                >RM{{ item.unitPrice?.toFixed ? item.unitPrice?.toFixed(2) : '0.00' }}</span
                >
            </div>
            </div>
        </div>
      </div>
      
    </div>
        <div
      class="w-[362px] h-[60px] bg-[#292929] rounded-[10px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.1)] z-[3] mt-[39.502px] mr-0 mb-0 ml-[20px]"
    >
      <div
        class="flex w-[301px] gap-[55px] items-center flex-nowrap relative z-[4] mt-[11px] mr-0 mb-0 ml-[30px]"
      >
        <div class="cursor-pointer w-[31px] h-[37px] mt-[7px]  shrink-0 relative z-[5]" style="padding: 5px;" @click="backToHome">
          <div
            class="w-[24px] h-[24px] bg-[url('../public/home.png')] bg-cover bg-no-repeat relative z-[6] mt-0 mr-0 mb-0 "
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[12px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[7] mt-[5px] mr-0 mb-0 ml-0"
            >HOME</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] mt-[7px] shrink-0 relative z-[8]" style="padding: 5px;">
          <div
            class="w-[35px] h-[24px] bg-[url('../public/menu.png')] bg-cover bg-no-repeat relative z-[9] "
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-10 mt-[5px] ml-[3px] mb-0 ml-0"
            >MENU</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] mt-[1px] shrink-0 relative z-[8]" style="padding: 5px;">
          <div
              class="w-[24px] h-[24px] bg-[url('../public/order.png')] bg-[length:100%_100%] bg-no-repeat relative z-[13] mt-[1.667px] ml-[8px] mr-0 mb-0"
        ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[13] mt-[5px] mr-0 mb-0 ml-[6px]"
            >ORDER</span
          >
        </div>
        <div class="cursor-pointer w-[31px] h-[37px] shrink-0 relative z-[15]" style="padding: 5px;" @click="goToAccountPage">
          <div
            class="w-[30px] h-[25px] bg-[url('../public/me.png')] bg-cover bg-no-repeat relative z-[16] mt-0 mr-0 mb-0"
          ></div>
          <span
            class="flex w-[31px] h-[8px] justify-center items-start font-['Poppins'] text-[11px] font-normal leading-[8px] text-[#fff] relative text-center whitespace-nowrap z-[17] mt-[5px] mr-0 mb-0"
            >ME</span
          >
        </div>
      </div>
    </div>
    <div
      class="flex w-[342px] h-[25px] justify-between items-center flex-nowrap absolute top-[50.148px] left-[30px] z-[2]"
    >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[3]"
      ></div>
      <span
        class="flex w-[58px] h-[14px] justify-center items-center shrink-0 font-['Poppins'] text-[20px] font-semibold leading-[14px] text-[#000] relative text-center uppercase whitespace-nowrap z-[4]"
        >MENU</span
      >
      <div
        class="w-[12.5px] h-[25px] shrink-0 relative overflow-hidden z-[5]"
      ></div>
    </div>
    <div @click="goCheckout"
      class="cursor-pointer w-[35px] h-[35px] bg-[url('../public/cart.png')] bg-cover bg-no-repeat absolute top-[51px] left-[335px] z-[78]"
    >
    <span
      v-if="cartCount > 0"
      class="absolute -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
    >
      {{ cartCount }}
    </span>
  </div>
    
  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';
import { getCart } from '../services/cartservice.js';

export default{
  data(){
    return{
      products: [],
      cart: [],
      cartCount: 0
    }
  },
  mounted(){
    this.getProduct();
    this.cart = getCart();
    this.cartCount = this.cart.length;
  },
  methods:{    
    async getProduct(){
        const userId = sessionStorage.getItem('IdUser');
        //const userId = '48d8ebe7-0d83-49db-8e09-e6aee39e2094';
       if(userId !== null){
        try{
            const response = await api.post('Product/GetProducts', JSON.stringify(userId))
                if(response.status === 200){

                    this.products = response.data;
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
    goToAccountPage() {
      this.$router.push({ name: 'Accounts' });
    },
    backToHome() {
      this.$router.push({ name: 'Home' });
    },
    getBackgroundStyle(name) {
      const imageMap = {
        APEX: new URL('../public/apex2.png', import.meta.url).href,
        SILVRA: new URL('../public/silvra2.png', import.meta.url).href,
        VOLT: new URL('../public/volt2.png', import.meta.url).href
      }

      const imageUrl = imageMap[name]

      return {
        backgroundImage: `url(${imageUrl})`
      }
    },
    goToProductDetail(id){
      this.$router.push({ name: 'Product', params: { id } })
    },
    goCheckout(){
      if(this.cartCount > 0){
        this.$router.push({ name: 'OrderCheckout' });
      }      
    }
  }
}
</script>