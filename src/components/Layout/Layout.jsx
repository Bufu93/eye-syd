import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Modal from '../UI/Modal/Modal';
import { useSelector } from 'react-redux';
import ThxMessage from '../UI/AxiosMessage/ThxMessage';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

function Layout() {
    const { isOpenModal, thxMessage } = useSelector((state) => state.store);
    const [isLoaded, setIsLoaded] = useState(false);
    const override = {
        display: 'block',
        margin: 'auto',
        background: 'var(--color-black)',
        width: '100%',
        height: '100vh',
    };

    function checkAllMediaLoaded() {
        const mediaElements = document.querySelectorAll('img, video');
        const promises = [];

        for (let i = 0; i < mediaElements.length; i++) {
            const element = mediaElements[i];
            if (!element.complete) {
                const promise = new Promise((resolve, reject) => {
                    element.addEventListener('load', resolve);
                    element.addEventListener('error', reject);
                });
                promises.push(promise);
            }
        }

        Promise.all(promises).then(() => {
            setIsLoaded(true);
        });

        return isLoaded;
    }

    useEffect(() => {
        setTimeout(() => {
            checkAllMediaLoaded();
        }, 3000);
    }, []);

    return (
        <>
            {isLoaded ? (
                <StyledAppWrapper>
                    <Header />
                    <Outlet />
                    {thxMessage && <ThxMessage />}
                    {isOpenModal && <Modal />}
                    <Footer />
                </StyledAppWrapper>
            ) : (
                <ClimbingBoxLoader
                    color="var(--color-brown)"
                    loading={true}
                    cssOverride={override}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
        </>
    );
}

const StyledAppWrapper = styled.div`
    animation: fade 0.3s linear;
`;

export default Layout;
