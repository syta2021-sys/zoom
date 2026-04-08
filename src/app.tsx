import '@/assets/css/style.css';
import Index from '@/pages';
import Login from '@/pages/login';
import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Index />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
