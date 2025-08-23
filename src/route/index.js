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
const TransactionDetails = () => import('../page/transactiondetails.vue')
const MyVouchersPage = () => import('../page/myvouchers.vue')
const ConfirmationPage = () => import('../page/confirmation.vue')
const DropOffPointPage = () => import('../page/dropoffpoint.vue')
const ProductDetailPage = () => import('../page/productdetail.vue')
const OrderCheckoutPage = () => import('../page/ordercheckout.vue')
const OrderVoucherPage = () => import('../page/ordervoucher.vue')
const TransactionHistoriesPage = () => import('../page/transactionhistories.vue')
const OrderDetailPage = () => import('../page/orderdetail.vue')
const RefillReturnDetailPage = () => import('../page/refill-return-detail.vue')
const ReturnOrderConfirmedPage = () => import('../page/returnorderconfirm.vue')

const routes = [
  {
    path: '/reeturnorderconfirm',
    name: 'ReturnOrderConfirmed',
    component: ReturnOrderConfirmedPage,
  },
  {
    path: '/refill-return-detail/:id',
    name: 'RefillReturnDetail',
    component: RefillReturnDetailPage,
  },
  {
    path: '/orderdetail/:id',
    name: 'OrderDetail',
    component: OrderDetailPage,
  },
  {
    path: '/transactionhistories',
    name: 'TransactionHistories',
    component: TransactionHistoriesPage,
  },
  {
    path: '/ordervoucher',
    name: 'OrderVoucher',
    component: OrderVoucherPage,
  },
  {
    path: '/ordercheckout',
    name: 'OrderCheckout',
    component: OrderCheckoutPage,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductDetailPage,
  },
  {
    path: '/dropoff',
    name: 'DropOffPoint',
    component: DropOffPointPage,
  },
  {
    path: '/confirmation',
    name: 'OrderConfirmed',
    component: ConfirmationPage,
  },
  {
    path: '/transactiondetails',
    name: 'TransactionDetail',
    component: TransactionDetails,
  },
  {
    path: '/myvouchers',
    name: 'MyVouchersList',
    component: MyVouchersPage,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
  },
  {
    path: '/setup-refund',
    name: 'SetupRefund',
    component: RefundSetup,
  },
  {
    path: '/setup-refill',
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
