import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { Title } from '../../styles/Title.styled';
import CatalogChapter from './CatalogChapter';
import { useEffect } from 'react';
import { useState } from 'react';

function Catalog() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setResult(data.result))
            .catch((error) => console.error(error));
    }, []);
    // console.log(chapters);
    return (
        <StyledCatalog>
            <Container>
                <Title>Каталог</Title>
                {result.map((item) => (
                    <CatalogChapter key={item.chapterTitle} title={item.chapterTitle} cards={item.products} />
                ))}
            </Container>
        </StyledCatalog>
    );
}

const StyledCatalog = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
`;

export default Catalog;
