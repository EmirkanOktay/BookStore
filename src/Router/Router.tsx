import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Index from '../Pages/Index';
import NotFound from '../Pages/NotFound';
import AccesibilityPolicy from '../Pages/AccesibilityPolicy';
import Contact from '../Pages/Contact';
import Refund from '../Pages/Refund';
import TermsofUse from '../Pages/TermsofUse';
import AboutUs from '../Pages/AboutUs';
import ForgetPassword from '../Pages/ForgetPassword';
import SearchPage from '../Pages/SearchPage';
import ProductDetails from '../Pages/ProductDetails';
import UserAccount from '../Pages/UserAccount';
import UserFavorite from '../Pages/UserFavorites'
import PrivateRoute from './PrivateRouter';
import MyAccountInfo from '../Pages/UserAccountInfo';
import UserMessages from '../Pages/userMessages';
import UserPayment from '../Pages/UserPayment';
import UserLocation from '../Pages/userLocations';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='accessibility' element={<AccesibilityPolicy />} />
            <Route path='contact' element={<Contact />} />
            <Route path='refund' element={<Refund />} />
            <Route path='terms-of-use' element={<TermsofUse />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='forget-password' element={<ForgetPassword />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/genre/:genre" element={<SearchPage />} />
            <Route path="/product/:query" element={<ProductDetails />} />
            <Route path='myfavorites' element={<UserFavorite />} />

            <Route
                path="/myaccount"
                element={
                    <PrivateRoute>
                        <UserAccount />
                    </PrivateRoute>
                }
            />
            <Route
                path="/myaccountInfo"
                element={
                    <PrivateRoute>
                        <MyAccountInfo />
                    </PrivateRoute>
                }
            />
            <Route
                path="/pay"
                element={
                    <PrivateRoute>
                        <UserPayment />
                    </PrivateRoute>
                }
            />
            <Route
                path="/myLocations"
                element={
                    <PrivateRoute>
                        <UserLocation />
                    </PrivateRoute>
                }
            />
            <Route
                path="/myMessages"
                element={
                    <PrivateRoute>
                        <UserMessages />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
