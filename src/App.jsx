import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './components/pages/MainPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
