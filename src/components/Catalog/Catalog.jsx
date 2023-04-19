import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { Title } from '../../styles/Title.styled';
import CatalogChapter from './CatalogChapter';
import { useEffect } from 'react';
import { useState } from 'react';
import CatalogMessage from './CatalogMessage';
import useWindowWidth from 'react-hook-use-window-width';

function Catalog() {
    const width = useWindowWidth();
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [currentTab, setCurrentTab] = useState({});

    useEffect(() => {
        setIsLoading(true);
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                setResult(data.result);
                setCurrentTab(data.result[0]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {}, []);

    return (
        <StyledCatalog id="catalog">
            <Container>
                <Title>Каталог</Title>
                {width < 993 && (
                    <StyledTabs>
                        {result.map((item, index) => (
                            <StyledTab key={index} onClick={() => setCurrentTab(item)} active={currentTab.chapterTitle === item.chapterTitle}>
                                {item.chapterTitle}
                            </StyledTab>
                        ))}
                    </StyledTabs>
                )}
                {width < 992 && currentTab.products && !isLoading ? (
                    <CatalogChapter key={currentTab.chapterTitle} title={currentTab.chapterTitle} cards={currentTab.products} />
                ) : (
                    result.map((item) => <CatalogChapter key={item.chapterTitle} title={item.chapterTitle} cards={item.products} />)
                )}
                <CatalogMessage />
            </Container>
        </StyledCatalog>
    );
}

const StyledTabs = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 24px;
    margin-bottom: 24px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledTab = styled.li`
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    transition: color var(--transition);
    color: ${({ active }) => (active ? 'var(--color-black)' : '#B6B6B6')};
`;

const StyledCatalog = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
    @media (max-width: 992px) {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

export default Catalog;
