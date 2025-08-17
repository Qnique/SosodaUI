<template>
  <div
    class="main-container w-[420px] h-[964px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[56] mt-[49.723px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToCard" class="cursor-pointer w-[55px] h-[21px] shrink-0 relative z-[57]">
        <span
          class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] absolute top-0 left-[20px] text-left whitespace-nowrap z-[58]"
          >Back</span
        >
        <div
          class="w-[10px] h-[20px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[59]"
        ></div>
      </div>
      <span
        class="h-[42px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#000] relative text-left whitespace-nowrap z-[60]"
        >Add Card</span
      >
    </div>
    <div class="main-container w-[342px] h-[170px] relative mx-auto my-0 ml-[10px]">
			<div
				class="flex w-[186px] flex-col gap-[29px] items-start flex-nowrap relative z-[1] mt-[51.5px] mr-0 mb-0 ml-[15px]">
				<div
					class="flex w-[177px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[2]">
					<span
						class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-medium leading-[20.991px] text-[#fff] relative text-left whitespace-nowrap z-[3]">{{ bankName }}</span><span
						class="h-[21px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[20.991px] text-[#fff] tracking-[3px] relative text-left whitespace-nowrap z-[4]">{{ accountNumber }}</span>
				</div>
				<div
					class="flex gap-[30px] items-center self-stretch shrink-0 flex-nowrap relative z-[5]">
					<div
						class="flex w-[99px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[6]">
						<span
							class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal opacity-50 leading-[15px] text-[#fff] relative text-left uppercase whitespace-nowrap z-[7]">Valid Thru</span>
              <span
							class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#fff] relative text-left whitespace-nowrap z-[8]">{{ expiryDate }}</span>
					</div>
					<div
						class="flex w-[57px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[9]">
						<span
							class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal opacity-50 leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-10">CVV</span><span
							class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#fff] relative text-left whitespace-nowrap z-[11]">{{ cvv }}</span>
					</div>
				</div>
			</div>
			<div
				class="h-[170px] bg-[url('../public/background-gradient.png')] rounded-[20px] bg-cover bg-no-repeat absolute top-0 left-0 right-0">
			</div>
		</div>
    <div
      class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[15] mt-[30px] mr-0 mb-0 ml-[30px]"
    >
      <div
        class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[16]"
      >
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[17]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[18]"
            >Bank Name *</span
          >
          <div :class="[
                  BankError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[19]"
          >
            <input  v-model="bankName"
              class=" bg-[#fafafa] h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-20"
              />
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[17]"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[18]"
            >Card Number *</span
          >
          <div :class="[
                  AccountError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[19]"
          >
            <input  v-model="accountNumber"
              class=" bg-[#fafafa] h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-20"
              />
          </div>
        </div>
        <div
          class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[21]"
        >
          <div
            class="flex w-[166px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[22]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[23]"
              >Expiry Date *</span
            >
            <div :class="[
                  expiryError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[24]"
            >
              <input  v-model="expiryDate" maxlength="5" @input="formatExpiry" placeholder="MM-YY"
                class=" bg-[#fafafa] h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[25]"
                />
            </div>
          </div>
          <div
            class="flex w-[166px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[26]"
          >
            <span
              class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[27]"
              >CVV *</span
            >
            <div :class="[
                  cvvError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
              class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[28]"
            >
              <input  v-model="cvv" @input="formatCVV" maxlength="3"
                class=" bg-[#fafafa] h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[29]"
                />
            </div>
          </div>
        </div>
        <div
          class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-30"
        >
          <span
            class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[31]"
            >Name On Card *</span
          >
          <div :class="[
                  NameError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
            class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[32]"
          >
            <input  v-model="holderName"
              class="bg-[#fafafa] h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[33]"
              
            />
          </div>
        </div>
      </div>
      <div
        class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[52]"
      >
        <span
          class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[53]"
          >Set as Default Card</span
        >
        <div
            @click="toggleSwitch"
            class="flex w-[40px] h-[20px] p-[3px] items-center justify-start bg-[#5ba6e0] rounded-full border border-[rgba(191,191,191,0.25)] shadow-[inset_1px_2px_3px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300"
            :class="isOn ? 'justify-end bg-[#5ba6e0]' : 'justify-start bg-[#ccc]'"
            >
            <div
                class="w-[15px] h-[15px] bg-white rounded-full transition-all duration-300"
            ></div>
        </div>

      </div>
       <!-- <div
        class="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[34]"
      >
        <span
          class="h-[24px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[16px] font-medium leading-[23.989px] text-[#000] relative text-left whitespace-nowrap z-[35]"
          >Billing Address</span
        >
        <div
          class="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[36]"
        >
          <div
            class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[37]"
          >
            <div
              class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[38]"
            >
              <span
                class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[39]"
                >Address *</span
              >
              <div
                class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-40"
              >
                <div
                  class="w-[264px] shrink-0 font-['Poppins'] text-[12px] font-normal leading-[18px] relative text-left whitespace-nowrap z-[41]"
                >
                  <span
                    class="font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left"
                    >Enter </span
                  ><span
                    class="font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left"
                    >House No, Building Name, Street Name</span
                  >
                </div>
              </div>
              <span
                class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[42]"
                >Address is required</span
              >
            </div>
            <div
              class="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative z-[43]"
            >
              <div
                class="flex w-[133px] h-[82px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[44]"
              >
                <span
                  class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[45]"
                  >Postal Code *</span
                >
                <div
                  class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[46]"
                >
                  <span
                    class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[47]"
                    >Enter Postal Code</span
                  >
                </div>
              </div>
              <div
                class="flex h-[82px] flex-col gap-[5px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[48]"
              >
                <span
                  class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[49]"
                  >Area, State *</span
                >
                <div
                  class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-50"
                >
                  <span
                    class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[51]"
                    >Enter Area, State</span
                  >
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>  -->
    </div>
    <button @click="saveCard"
      class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative z-[13] mt-[40px] mr-0 mb-0 ml-[30px]"
    >
      <span
        class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[14]"
        >Save</span
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
      isOn: false,
      cvv:'',
      accountNumber: '',
      holderName:'',
      expiryDate: '',
      cvvError: false,
      AccountError: false,
      NameError: false,
      expiryError: false,
      bankName: ''
    }
  },
  mounted(){
  },
  computed: {
    isValidExpiry() {
      const match = this.expiryDate.match(/^(\d{2})-(\d{2})$/);
      if (!match) return false;

      const month = parseInt(match[1], 10);
      return month >= 1 && month <= 12;
    },
    isFutureExpiry() {
      if (!this.isValidExpiry) return false;

      const [monthStr, yearStr] = this.expiryDate.split('-');
      const month = parseInt(monthStr, 10);
      const year = parseInt(yearStr, 10);

      const now = new Date();
      const currentYear = now.getFullYear() % 100; // get last two digits
      const currentMonth = now.getMonth() + 1;

      return year > currentYear || (year === currentYear && month >= currentMonth);
    }
  },
  methods:{    
    formatCVV() {
      // Remove non-digit characters and limit to 3 digits
      this.cvv = this.cvv.replace(/\D/g, '').slice(0, 3);
    },
    formatExpiry() {
      let val = this.expiryDate.replace(/\D/g, ''); // remove non-digits
      if (val.length >= 3) {
        val = val.slice(0, 2) + '-' + val.slice(2, 4);
      }
      this.expiryDate = val.slice(0, 5); // ensure max length
    },
    toggleSwitch() {
      this.isOn = !this.isOn;
    },
    async saveCard() {
      if(this.cvv === ''){
          this.cvvError = true;
      }
    
      if(this.accountNumber === ''){
          this.AccountError = true;
      }

      if(this.expiryDate === ''){
          this.expiryError = true;
      }
      else{
        if(!this.isValidExpiry)
        {
          this.expiryError = true;
        }
      }

      if(this.holderName === ''){
            this.NameError = true;
      }

      if(this.bankName === ''){
              this.BankError = true;
      }

      if(this.cvv !== '' && this.holderName !== '' && this.accountNumber !== '' && this.expiryDate !== '' && this.bankName  !== '' && this.isValidExpiry)
      {
        const payload = {
          MemberId : sessionStorage.getItem('IdUser'),
          BankName: this.bankName.toUpperCase(),
          CVV : this.cvv.toUpperCase(),
          CardNumber : this.accountNumber,
          CardHolderName : this.holderName.toUpperCase(),
          ExpiryDT: this.expiryDate,
          isDefault : (this.isOn) ? true: false
        };
        try{
          const response = await api.post('CreditCard/SetupNewCreditCard', JSON.stringify(payload));
          if(response.status === 200){
              toast.success('Setup successfully!');
              
              this.$router.push({ name: 'CardInfos' });
          }
        }
        catch (error) {
          toast.error(error.response.data)
        }        
      }                         
    },
    backToCard() {
      this.$router.push({ name: 'CardInfos' });
    }
  }
}
</script>
