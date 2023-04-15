import { Outlet } from 'react-router';
import { Container } from '../../styles/Container.styled';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
