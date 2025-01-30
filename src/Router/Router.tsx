import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Index from '../Pages/Index';
import NotFound from '../Pages/NotFound';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}
