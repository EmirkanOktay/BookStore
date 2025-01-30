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
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
