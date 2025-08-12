<template>
	<div
		class="main-container w-[420px] h-[874px] bg-[#fff] relative  mx-auto my-0">
		<div
			class="flex w-[342px] flex-col gap-[10px] items-start flex-nowrap relative z-[28] mt-[49.723px] mr-0 mb-0 ml-[30px]">
			<div @click="backToCard"
				class="cursor-pointer w-[55px] h-[21px] shrink-0 relative z-[29]">
				<span
					class="flex h-[21px] justify-start items-start font-['Poppins'] text-[14px] font-medium leading-[21px] text-[#000] absolute top-0 left-[20px] text-left whitespace-nowrap z-30">Back</span>
				<div
					class="w-[10px] h-[20px] bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat absolute top-[0.5px] left-0 overflow-hidden z-[31]">
				</div>
			</div>
			<span
				class="h-[42px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[28px] font-semibold leading-[41.981px] text-[#000] relative text-left whitespace-nowrap z-[32]">Add
				Bank Account</span>
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
							class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal opacity-50 leading-[15px] text-[#fff] relative text-left uppercase whitespace-nowrap z-[7]">Holder Name</span>
              <span
							class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#fff] relative text-left whitespace-nowrap z-[8]">{{ holderName }}</span>
					</div>
					<div
						class="flex w-[57px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[9]">
						<!-- <span
							class="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal opacity-50 leading-[15px] text-[#fff] relative text-left whitespace-nowrap z-10">CVV</span><span
							class="h-[21px] shrink-0 basis-auto font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#fff] relative text-left whitespace-nowrap z-[11]">222</span> -->
					</div>
				</div>
			</div>
			<div
				class="h-[170px] bg-[url('../public/background-gradient.png')] rounded-[20px] bg-cover bg-no-repeat absolute top-0 left-0 right-0">
			</div>
		</div>


		<div
			class="flex w-[342px] flex-col gap-[30px] items-start flex-nowrap relative z-[2] mt-[30.277px] mr-0 mb-0 ml-[30px]">
			<div
				class="flex flex-col gap-[2px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
				<div
					class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
					<span
						class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[5]">Full
						Name *</span>
					<div
						class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[6]">
						<span
							class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[7]">{{ this.name }}</span>
					</div>
				</div>
				<div
					class="flex flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[8]">
					<span
						class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[9]">Account
						Number *</span>
					<div :class="[
                  AccountError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
						class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-10">
						<input v-model="accountNumber"
							class="h-[38px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[11] bg-[#fafafa]" />
					</div>
					<span
						class="h-[12px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#ff0000] relative text-left whitespace-nowrap z-[12]"></span>
				</div>
				<div
					class="flex h-[82px] flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[13]">
					<span
						class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[14]">Name
						On Card *</span>
					<div :class="[
                  NameError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
						class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[15]">
						<input v-model="holderName"
							class="h-[38px] shrink-0 bg-[#fafafa] basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[16]" />
					</div>
				</div>
				<div
					class="flex h-[82px] flex-col gap-[5px] items-center self-stretch shrink-0 flex-nowrap relative z-[17]">
					<span
						class="h-[18px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[12px] font-semibold leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[18]">Bank
						Name *</span>
					<div :class="[
                  BankError ? 'border-red-500' : 'border border-[#fdfdfd]',
                  'border'
                ]"
						class="flex h-[42px] pt-[12px] pr-[15px] pb-[12px] pl-[15px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#fafafa] rounded-[10px] border-solid border border-[#fdfdfd] relative shadow-[0_2px_12px_0_rgba(0,0,0,0.1)] z-[15]">
						<input v-model="bankName"
							class="h-[38px] shrink-0 bg-[#fafafa] basis-auto font-['Poppins'] text-[12px] font-normal leading-[18px] text-[rgba(0,0,0,0.25)] relative text-left whitespace-nowrap z-[16]" />
					</div>
				</div>
			</div>
			<div
				class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[24]">
				<span
					class="h-[18px] shrink-0 basis-auto font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#000] relative text-left whitespace-nowrap z-[25]">Set
					as Default Bank Account</span>
				<div @click="toggleSwitch"
					class="flex w-[40px] h-[20px] p-[3px] items-center justify-start bg-[#5ba6e0] rounded-full border border-[rgba(191,191,191,0.25)] shadow-[inset_1px_2px_3px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300"
					:class="isOn ? 'justify-end bg-[#5ba6e0]' : 'justify-start bg-[#ccc]'">
					<div
						class="w-[15px] h-[15px] bg-white rounded-full transition-all duration-300">
					</div>
				</div>
			</div>
		</div>
		<button @click="saveBank"
			class="flex w-[342px] h-[50px] pt-[10px] pr-[48px] pb-[10px] pl-[48px] gap-[10px] justify-center items-center flex-nowrap bg-[#292929] rounded-[12px] relative mt-[87px] mr-0 mb-0 ml-[30px]">
			<span
				class="h-[24px] shrink-0 basis-auto font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[1]">Save</span>
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
      name: sessionStorage.getItem('NameUser'),
      bankName:'',
      accountNumber: '',
      holderName:'',
      BankError: false,
      AccountError: false,
      NameError: false,
    }
  },
  mounted(){
  },
  methods:{    
    toggleSwitch() {
      this.isOn = !this.isOn;
    },
    async saveBank() {
		if(this.bankName === ''){
			this.BankError = true;
		}
	
		if(this.accountNumber === ''){
			this.AccountError = true;
		}

		if(this.holderName === ''){
			this.NameError = true;
		}

		if(this.bankName !== '' && this.holderName !== '' && this.accountNumber !== '' )
		{
			const payload = {
				BankName : this.bankName.toUpperCase(),
				AccountNumber : this.accountNumber,
				AccountHolderName : this.holderName.toUpperCase(),
				isDefault : (this.isOn) ? true: false
			};


			try{
				const response = await api.post('BankAccount/SetupNewBankAccount', JSON.stringify(payload));
				if(response.status === 200){
					toast.success('Setup successfully!');
					
					this.$router.push({ name: 'CardInfos' });
				}
			}
			catch (error) {
				toast.error(error.response.data.message)
			}		
		}                  
    },
    backToCard() {
      this.$router.push({ name: 'CardInfos' });
    }
  }
}

</script>
