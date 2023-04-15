import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { Title } from '../../styles/Title.styled';
import CatalogChapter from './CatalogChapter';
// import chapters from '../../../public/data.js';
import { useEffect } from 'react';

function Catalog() {
    useEffect(() => {
        fetch('./json.json')
            .then((response) => console.log(JSON.parse(response)))

            .catch((error) => console.error(error));
    }, []);
    // console.log(chapters);
    return (
        <StyledCatalog>
            <Container>
                <Title>Каталог</Title>
                {/* {chapters.map((item) => (
                    <CatalogChapter key={item.chapterTitle} title={item.chapterTitle} cards={item.products} />
                ))} */}
            </Container>
        </StyledCatalog>
    );
}

const StyledCatalog = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
`;

export default Catalog;
