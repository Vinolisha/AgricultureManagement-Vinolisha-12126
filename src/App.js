import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./Components/ForgetPassword";
import LoginAdmin from "./Components/LoginAdmin";
import LoginPage from "./Components/LoginPage";
import LoginRetailer from "./Components/LoginRetailer";
import AboutPage from "./Components/AboutPage";
import LoginNavbars from "./Components/LoginNavbars";
import AdminLoading from "./ContentLoading/AdminLoading";
import LoginNavLoading from "./ContentLoading/LoginNavLoading";
import FarmerLoading from "./ContentLoading/FarmerLoading";
import BidderLoading from "./ContentLoading/BidderLoading";
import HomePageVideo from "./Pages/HomePageVideo";
import NavbarVegetables from "./Layout/NavbarVegetables";
import Vegetables from "./Ordering/Vegetables";
import RegisterAdmin from "./Components/RegisterAdmin";
import RegisterFarmer from "./Components/RegisterFarmer";
import RegisterCustomer from "./Components/RegisterCustomer";
import HeroSections from "./HomeNavbar/HeroSections";
import Programs from "./HomeNavbar/Programs";
import Sample from "./Common/Sample";
import GetProduct from "./FarmerProduct/GetProduct";
import BuyVegetables from "./Ordering/BuyVegetables";
import Testimonials from "./HomeNavbar/Testimonials";
import About from "./HomeNavbar/About";
import Contact from "./HomeNavbar/Contact";
import FarAddProducts from "./FarmerProduct/FarAddProducts";
import AdminFarmerPage from "./FarmerProduct/AdminFarmerPage";
import AddingProducts from "./FarmerProduct/AddingProducts";
import VegetablesLoading from "./ContentLoading/VegetablesLoading";
import FruitsLoading from "./ContentLoading/FruitsLoading";
import InformationsLoading from "./ContentLoading/InformationsLoading";
import ViewVegLoading from "./ContentLoading/ViewVegLoading";
import AdminSellerPage from "./SellerProduct/AdminSellerPage";
import SeedLoading from "./ContentLoading/SeedLoading";
import SeedViewLoading from "./ContentLoading/SeedViewLoading";
import ToolViewLoading from "./ContentLoading/ToolViewLoading";
import ToolLoading from "./ContentLoading/ToolLoading";
import SelAddProducts from "./SellerProduct/SelAddProducts";
import GetSellerProduct from "./SellerProduct/GetSellerProduct";
import HomePageShopping from "./VegShoppingPage/HomePageShopping";
import Seeds from "./VegShoppingPage/Seeds";
import NavbarSeedTool from "./VegShoppingPage/NavbarSeedTool";
import HomePage from "./SellerProduct/HomePage";
import Cart from "./Common/Cart";
import NavbarPurchase from "./FarmerProduct/NavbarPurchase";
import SeedsCart from "./SellerProduct/SeedsCart";
import CartSample from "./Common/CartSample";
import CustomerPayment from "./Payment/CustomerPayment";
import CartNavbar from "./Common/CartNavbar";
import SampleNavbar from "./Common/SampleNavbar";
import SampleSeedShoping from "./Common/SampleSeedShoping";
import SeedCart from "./Common/SeedCart";
import ComibinedPage from "./CropsOrderDetails/CombinedPage";
import SeedCartSample from "./Common/SeedCartSample";
import AdminHomePages from "./FarmerProduct/AdminHomePages";
import ViewCustomerDetails from "./FarmerProduct/ViewCustomerDetails";
import ViewFarmerDetails from "./SellerProduct/ViewFarmerDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbars/> */}
        <Routes>
          <Route path="/program" element={<Programs />} />
          <Route path="/adminLogin" element={<LoginAdmin />} />
          <Route path="/farmerLogin" element={<LoginRetailer />} />
          <Route path="/registerFarmer" element={<RegisterFarmer />} />
          <Route path="/customerLogin" element={<LoginPage />} />
          <Route path="/registerCustomer" element={<RegisterCustomer />} />
          <Route path="/registerAdmin" element={<RegisterAdmin />} />
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/aboutuss" element={<AboutPage />} />
          <Route path="/vegetablesLoading" element={<VegetablesLoading />} />
          <Route path="/fruitsLoading" element={<FruitsLoading />} />
          <Route path="/informationsLoading" element={<InformationsLoading />}/>
          <Route path="/viewVegLoading" element={<ViewVegLoading />} />
          <Route path="/" element={<HeroSections />} />
          <Route path="/loginloading" element={<LoginNavLoading />} />
          <Route path="/adminloading" element={<AdminLoading />} />
          <Route path="/farmerloading" element={<FarmerLoading />} />
          <Route path="/bidderloading" element={<BidderLoading />} />
          <Route path="/loginnavbars" element={<LoginNavbars />} />
          <Route path="/vedio" element={<HomePageVideo />} />
          <Route path="/navVeg" element={<NavbarVegetables />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/registerAdmin" element={<RegisterAdmin />} />
          <Route path="/addingProducts" element={<AddingProducts />} />
          <Route path="/getProduct" element={<GetProduct />} />
          <Route path="/sample" element={<Sample />} />          <Route path="/buyVegetables" element={<BuyVegetables />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addingVegetables" element={<FarAddProducts />} />
          <Route path="/adminFarmer" element={<AdminFarmerPage />} />
          <Route path="/adminSeller" element={<AdminSellerPage />} />
          <Route path="/seedLoading" element={<SeedLoading />} />
          <Route path="/toolLoading" element={<ToolLoading />} />
          <Route path="/seedViewLoading" element={<SeedViewLoading />} />
          <Route path="/toolViewLoading" element={<ToolViewLoading />} />
          <Route path="/sellAddProducts" element={<SelAddProducts />} />
          <Route path="/getSellerProduct" element={<GetSellerProduct />} />
          <Route path="/seedShoping" element={<SampleSeedShoping />} />
          <Route path="/navBarSeed" element={<NavbarSeedTool />} />
          <Route path="/homePageShopping" element={<HomePageShopping />} />
          <Route path="/seed" element={<Seeds />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/Nav" element={<NavbarPurchase />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/seedsCart" element={<SeedsCart />} />
          <Route path="/cartSample" element={<CartSample />} />
          <Route path="/customerPayment" element={<CustomerPayment />} />
          <Route path="/cartnavbar" element={<CartNavbar />} />
          <Route path="/sampleNavbar" element={<SampleNavbar />} />
          <Route path="/seedCart" element={<SeedCart />} />
          <Route path="/sampleSeed" element={<SampleSeedShoping />} />
          <Route path="/combinedPayment" element={<ComibinedPage />} />
          <Route path="/seedCartSample" element={<SeedCartSample />} />
           <Route path="/seedCartSample" element={<SeedCartSample />} />
           <Route path="/adminHomePage" element={<AdminHomePages />} />
           <Route path="/viewCustomerDetails" element={<ViewCustomerDetails />} />
           <Route path="/farmerViewDetails" element={<ViewFarmerDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
