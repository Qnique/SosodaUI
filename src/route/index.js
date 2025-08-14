import { createRouter, createWebHistory } from 'vue-router';
const Login = () => import('../page/index.vue')
const VerificationPage = () => import('../page/verification.vue')
const TemrsPage = () => import('../page/termscondition.vue')
const SignUpPage = () => import('../page/register.vue')
const HomePage = () => import('../page/homepage.vue')
const AboutUsPage = () => import('../page/aboutus.vue')
const StampsPage = () => import('../page/stamps.vue')
const VoucherPage = () => import('../page/vouchers.vue')
const AccountPage = () => import('../page/account.vue')
const WalletPage = () => import('../page/wallet.vue')
const AddressPage = () => import('../page/addresses.vue')
const ProfilePage = () => import('../page/profile.vue')
const QRPage = () => import('../page/qr.vue')
const CardInfoPage = () => import('../page/cardinfo.vue')
const AddBankPage = () => import('../page/addbank.vue')
const AddCardPage = () => import('../page/addcard.vue')
const MethodPage = () => import('../page/refillmethod.vue')
const ReturnMetodPage = () => import('../page/returnmethod.vue')
const AddAddress = () => import('../page/addaddress.vue')
const EditAddress = () => import('../page/editaddress.vue')
const MenuPage = () => import('../page/menu.vue')
const RefillSetup = () => import('../page/setup-refill.vue')
const RefundSetup = () => import('../page/setup-refund.vue')
const CheckoutPage = () => import('../page/checkout.vue')

const routes = [
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
  },
  {
    path: '/setup-refund/:refundmethod',
    name: 'SetupRefund',
    component: RefundSetup,
  },
  {
    path: '/setup-refill/:refillmethod',
    name: 'SetupRefill',
    component: RefillSetup,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage,
  },
  {
    path: '/updateAddress/:id',
    name: 'UpdateAddress',
    component: EditAddress,
  },
  {
    path: '/setupAddress',
    name: 'SetupAddress',
    component: AddAddress,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/verification',
    name: 'Verification',
    component: VerificationPage
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TemrsPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage
  },
  ,
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUsPage
  },
  {
    path: '/stamps',
    name: 'Stamps',
    component: StampsPage
  },
  {
    path: '/vouchers',
    name: 'Vouchers',
    component: VoucherPage
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: AccountPage
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: WalletPage
  },
  {
    path: '/address',
    name: 'Addresses',
    component: AddressPage
  },
  {
    path: '/profile',
    name: 'Profiles',
    component: ProfilePage
  },
  {
    path: '/qrcode',
    name: 'QRCodes',
    component: QRPage
  },
  {
    path: '/cardinfo',
    name: 'CardInfos',
    component: CardInfoPage
  },
  {
    path: '/addbank',
    name: 'AddBanks',
    component: AddBankPage
  },
  {
    path: '/addcard',
    name: 'AddCards',
    component: AddCardPage
  },
  {
    path: '/refillmethod',
    name: 'Methods',
    component: MethodPage
  },
  {
    path: '/returnMethod',
    name: 'ReturnMethods',
    component: ReturnMetodPage
  },
  // {
  //   path: '/product/:id',
  //   name: 'Product',
  //   component: Product,
  //   props: true,
  // },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
