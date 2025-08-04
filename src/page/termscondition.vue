<template>
  <div
    class="main-container w-[420px] h-[2952px] bg-[#fff] relative overflow-hidden mx-auto my-0"
  >
    <div
      class="flex w-[342px] justify-between items-center flex-nowrap relative z-[1] mt-[50.148px] mr-0 mb-0 ml-[30px]"
    >
      <div @click="backToHome"
        class="cursor-pointer w-[12.5px] h-[25px] shrink-0 bg-[url('../public/back_arrow.png')] bg-cover bg-no-repeat relative overflow-hidden z-[2]"
      ></div>
    </div>
    <div
      class="w-[104px] h-[97px] bg-[url('../public/sosoda-logo.png')] filter invert  bg-cover bg-no-repeat relative z-[6] mt-[40px] mr-0 mb-0 ml-[149px]"
    ></div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Account Registration</span
        ><span
            class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]"
            >To access our services, you must create an account with accurate,
            complete, and up-to-date information. You are responsible for
            maintaining the security of your login credentials.</span
        >
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Service Coverage</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            Sosoda provides gas cylinder refilling and delivery services
              within selected areas in Malaysia. Availability may vary based on
              your location.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Orders & Payments</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            All orders must be confirmed via our platform. Payments must be
              made through the accepted payment methods. Sosoda reserves the
              right to cancel any order in the case of invalid transactions or
              failed payment.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[20.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Delivery & Access</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            It is your responsibility to provide a valid and accessible
              delivery address. Failed deliveries due to incorrect information
              or restricted access may result in additional charges.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Safety & Usage Compliance</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            You agree to use all cylinders and equipment provided by Sosoda
              in accordance with safety standards, product instructions, and
              Malaysian regulations. Sosoda is not liable for any damage caused
              by misuse or unauthorised handling.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >User Conduct</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            You agree not to:<br />Use our platform for unlawful
              activities.<br />Interfere with or disrupt the platform’s
              functionality.<br />Provide false or misleading information.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[25.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Limitation of Liability</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            While Sosoda strives to provide a reliable service, we do not
              guarantee uninterrupted or error-free access. We are not liable
              for any indirect, incidental, or consequential damages resulting
              from your use of the platform.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[13.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Termination</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            Sosoda reserves the right to suspend or terminate your account if
              any violations of these Terms are found.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[18.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Amendments</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            These Terms may be updated from time to time. You will be
              notified of any significant changes. Continued use of the platform
              after updates means you accept the revised terms.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]"
        >
        <span
            class="h-[13.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[13px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[28]"
            >Governing Law</span>
        <span class="flex w-[332px] h-[36px] justify-start items-center self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left z-[29]">
            These Terms are governed by the laws of Malaysia. Any disputes
              shall be resolved under Malaysian jurisdiction.</span>
    </div>
    <br></br>
    <br></br>
    <div
        class="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[57]"
        >
        <span
            class="h-[18.762px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[10px] font-medium leading-[18.762px] text-[#000] tracking-[0.1px] relative text-left whitespace-nowrap z-[58]"
            >Contact Us</span
        >
        <div
            class="self-stretch shrink-0 font-['Poppins'] text-[10px] font-normal leading-[12px] tracking-[0.1px] relative text-left z-[59]"
        >
            <span
            class="font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#8e8e8e] tracking-[0.1px] relative text-left"
            >For questions or support, please contact our team via Live Chat
            or email us at </span
            ><span
            class="cursor-pointer font-['Poppins'] text-[10px] font-normal leading-[12px] text-[#1b17f5] tracking-[0.1px] relative text-left"
            >support@sosoda.com.my.</span
            >
        </div>
    </div>
  </div>
</template>

<script setup>
import "./index.css";
import { useRouter } from 'vue-router';

const router = useRouter();

const backToHome = () => {
  router.push({ name: 'Login' });
};

</script>
