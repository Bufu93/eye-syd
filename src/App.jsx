import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CatalogDetails from './components/pages/CatalogDetails';
import MainPage from './components/pages/MainPage';
import { useLocation, useNavigate } from 'react-router-dom';
import useWindowWidth from 'react-hook-use-window-width';
import { useDispatch, useSelector } from 'react-redux';
import { burgerClose } from './redux/slice';

function App() {
    const { body, currentProduct } = useSelector((state) => state.store);
    const width = useWindowWidth();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (width > 992) {
            dispatch(burgerClose());
        }
    }, [width]);

    useEffect(() => {
        if (location.hash !== '') {
            navigate('/');
        }
        if (Object.keys(currentProduct).length === 0) {
            return navigate('/');
        }
    }, []);

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                window.scrollTo({
                    top: elem.offsetTop - 80,
                    left: 0,
                    behavior: 'smooth',
                });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]);

    useEffect(() => {
        if (body) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'auto';
        }
    }, [body]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="product" element={<CatalogDetails />} />
                <Route path="product/*" element={<Navigate to="/product" replace />} />
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default App;
