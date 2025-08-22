<template>
  <div
    class="product main-container w-[402px] h-[1074px] bg-[#fff] relative mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[2] mt-[50px] mr-0 mb-0 ml-[30px]"
    >
      <div class="cursor-pointer w-[56px] h-[21px] shrink-0 relative z-[3]" @click="backToPrevious">
        <span
          class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-bold leading-[21px] text-[#292929] absolute top-0 left-[20px] text-left whitespace-nowrap z-[4]"
          >Back</span
        >
        <div
          class="w-[10px] h-[20px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[5]"
        ></div>
      </div>
    </div>
    <div
      class="w-[402px] h-[482px] bg-[#fff] rounded-[7px] relative z-[1] mt-[20px] mr-0 mb-0 ml-0"
    >
      <div
        class="flex w-[400px] items-center flex-nowrap relative mt-[10px] z-[41] mr-0 mb-0"
      >
        <div class="product-gallery">
            <!-- Main Image -->
            <div class="main-image">
                <img :src="selectedImage" alt="Product" />
            </div>

            <!-- Thumbnail Images -->
            <div class="thumbnails">
                <img
                    v-for="(img, index) in images"
                    :key="index"
                    :src="img"
                    :class="{ active: img === selectedImage }"
                    @click="selectedImage = img"
                    alt="Thumbnail"
                />
            </div>
        </div>
        <!-- <div
          class="w-[60px] h-[60px] shrink-0 bg-[url('../public/apex2.png')] bg-cover bg-no-repeat rounded-[7px] relative z-[42]"
        ></div>
        <div
          class="w-[60px] h-[60px] shrink-0 bg-[url('../public/apex2.png')] bg-cover bg-no-repeat rounded-[7px] relative z-[43]"
        ></div>
        <div
          class="w-[60px] h-[60px] shrink-0 bg-[url('../public/apex2.png')] bg-cover bg-no-repeat rounded-[7px] relative z-[44]"
        ></div>
        <div
          class="w-[60px] h-[60px] shrink-0 bg-[url('../public/apex2.png')] bg-cover bg-no-repeat rounded-[7px] relative z-[45]"
        ></div> -->
      </div>
      <div
        class="flex w-[342px] h-[100px] flex-col gap-[15px] items-start flex-nowrap relative overflow-hidden z-[35] mt-[20px] mr-0 mb-0 ml-[29px]"
      >
        <div
          class="flex w-[166px] flex-col items-start shrink-0 flex-nowrap relative z-[36]"
        >
          <span
            class="h-[33px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[22px] font-semibold leading-[33px] text-[#000] relative text-left whitespace-nowrap z-[37]"
            >{{ this.product_detail?.name }}</span
          >
          <!-- <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#a5a5a5] relative text-left whitespace-nowrap z-[38]"
            >Subtitle</span
          > -->
          <span
            class="flex w-[342px] h-[40px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[14.993px] text-[#a5a5a5] relative text-left z-40"
            >{{ this.product_detail?.description }}</span
          >
        </div>
        <div
          class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[39]"
        >
          
        </div>
      </div>
      <div
        class="flex w-[342px] flex-col gap-[30px] items-start flex-nowrap relative z-[6]  mr-0 mb-0 ml-[30px]"
      >
        <div
          class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[7]"
        >
          <!-- <div
            class="flex w-[300px] gap-[30px] items-start shrink-0 flex-nowrap relative z-[8]"
          >
            <div
              class="flex w-[76px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[9]"
            >
              <span
                class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-10"
                >Select Color</span
              >
              <div
                class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[11]"
              >
                <div
                  class="w-[25px] h-[25px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/sU4ngwovuQ.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[12]"
                ></div>
                <div
                  class="w-[25px] h-[25px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/fnAc5EAc8T.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[13]"
                ></div>
              </div>
            </div>
            <div
              class="flex w-[194px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[14]"
            >
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[15]"
                >Select Size</span
              >
              <div
                class="flex gap-[5px] items-center self-stretch shrink-0 flex-nowrap relative z-[16]"
              >
                <div
                  class="flex w-[194px] gap-[7px] items-center shrink-0 flex-nowrap relative z-[17]"
                >
                  <div
                    class="flex w-[60px] h-[25px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] gap-[46px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[6px] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[18]"
                  >
                    <span
                      class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#292929] relative text-left whitespace-nowrap z-[19]"
                      >60cm</span
                    >
                  </div>
                  <div
                    class="flex w-[60px] h-[25px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] gap-[46px] justify-center items-center shrink-0 flex-nowrap bg-[#fafafa] rounded-[6px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-20"
                  >
                    <span
                      class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#292929] relative text-left whitespace-nowrap z-[21]"
                      >50cm</span
                    >
                  </div>
                  <div
                    class="flex w-[60px] h-[25px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] gap-[46px] justify-center items-center shrink-0 flex-nowrap bg-[#eeeeee] rounded-[6px] border-solid border border-[#efefef] relative z-[22]"
                  >
                    <span
                      class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[15px] text-[#292929] relative text-left whitespace-nowrap z-[23]"
                      >40cm</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <br></br>
          <div
            class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[24]"
          >
            <span
              class="h-[30px] shrink-0 basis-auto font-['Poppins'] text-[20px] font-semibold leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[25]"
              >RM{{ this.product_detail?.unitPrice?.toFixed ? this.product_detail?.unitPrice?.toFixed(2) : '0.00' }}</span
            >
            <div
              class="flex w-[102px] gap-[20px] justify-center items-center shrink-0 flex-nowrap relative z-[26]"
            >
              <div @click="handlleQty('minus')"
                class="cursor-pointer w-[28px] h-[28px] shrink-0 bg-[url('../public/minuscart.png')] bg-cover bg-no-repeat relative z-[27]"
              ></div>
              <span
                class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[28]"
                >{{ this.qty }}</span
              >
              <div @click="handlleQty('plus')"
                class="cursor-pointer w-[28px] h-[28px] shrink-0 bg-[url('../public/pluscart.png')] bg-cover bg-no-repeat relative z-[29]"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-30"
        >
          <button @click="addItem(this.product_detail.id, this.product_detail.name, this.qty, this.product_detail.unitPrice, this.product_detail.weight)"
            class="flex w-[166px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[5px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[10px] border border-[#60DCD6] relative z-[31]"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[#60DCD6] text-[16px] font-semibold leading-[24px] relative text-left whitespace-nowrap z-[32]"
              >Add To Cart</span
            >
          </button>
          <button @click="goToOrderCheckout(this.product_detail.id, this.product_detail.name, this.qty, this.product_detail.unitPrice, this.product_detail.weight)"
            class="flex w-[166px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#292929] rounded-[12px] relative z-[33]"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[34]"
              >Buy Now</span
            >
          </button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import "./index.css";
import api from '../services/callingapi'
import { toast } from 'vue3-toastify';
import { addToCart } from '../services/cartservice.js';

export default{
  data(){
    return{
      product_detail: null,
      qty: 1,
      images: [],
      selectedImage: '',
      cart: []
    }
  },
  mounted(){
    this.getProductDetail(this.$route.params.id);
  },
  methods:{
    handlleQty(action){
        switch (action) {
            case 'plus':
                return ++this.qty;

            case 'minus':
                if (this.qty > 1) {
                return --this.qty;
                }
                return this.qty;

            default:
                return this.qty; // or throw an error if action is invalid
        }
    },    
    async getProductDetail(id){
       try{
        const response = await api.post('Product/GetProductById', JSON.stringify(id))
            if(response.status === 200){
                this.product_detail = response.data;
                if(response.data.name === 'APEX'){
                    this.images = [
                        new URL('../public/apex2.png', import.meta.url).href,
                        new URL('../public/apex1.png', import.meta.url).href,
                        new URL('../public/apex3.png', import.meta.url).href,
                        new URL('../public/apex4.png', import.meta.url).href,
                        new URL('../public/apex5.png', import.meta.url).href,
                    ];
                    this.selectedImage = new URL('../public/apex2.png', import.meta.url).href;
                }
                else if(response.data.name === 'VOLT'){
                    this.images = [
                        new URL('../public/volt2.png', import.meta.url).href,
                        new URL('../public/volt1.png', import.meta.url).href,
                        new URL('../public/volt3.png', import.meta.url).href,
                        new URL('../public/volt4.png', import.meta.url).href,
                        new URL('../public/volt5.png', import.meta.url).href,
                    ];
                    this.selectedImage = new URL('../public/volt2.png', import.meta.url).href;
                }
                else{
                    this.images = [
                        new URL('../public/silvra2.png', import.meta.url).href,
                        new URL('../public/silvra1.png', import.meta.url).href,
                        new URL('../public/silvra3.png', import.meta.url).href,
                        new URL('../public/silvra4.png', import.meta.url).href,
                        new URL('../public/silvra5.png', import.meta.url).href,
                    ];
                    this.selectedImage = new URL('../public/silvra2.png', import.meta.url).href;
                }
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
    },    
    backToPrevious(){
      this.$router.go(-1);
    },
    addItem(id, name, qty, price, weight){
        var product = {
            ProductId: id,
            Name: name,
            Quantity: qty,
            Amount: price,
            Weight: weight
        }
        addToCart(product);
        toast.success('You have added item into your cart'); 
    },
    goToOrderCheckout(id, name, qty, price, weight){
        var product = {
            ProductId: id,
            Name: name,
            Quantity: qty,
            Amount: price,
            Weight: weight
        }
        addToCart(product);
        this.$router.push({ name: 'OrderCheckout' });
    },
  }
}
</script>
<style scoped>
.product-gallery {
  width: 100%

}
.main-image img {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}
.thumbnails {
  display: flex;
  justify-content: top;
  margin-top: 10px;
  
}
.thumbnails img {
  width: 70px;
  height: 70px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 10px;
}
.thumbnails img.active {
  border-color: #007bff;
}

</style>