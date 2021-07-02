import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width: 85vw;
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 10rem;
`;

export const SectionTitleContainer = styled.div`
  text-align: center;
  margin: 4rem 0 6rem 0;
`;

export const Underline = styled.div`
  width: 8rem;
  height: 0.25rem;
  background: hsl(205, 78%, 60%);;
  margin: 0 auto;
`;

export const CardsSection = styled.section`
  width: 90vw;
  max-width: 1170px;
  max-width: 1000px;
  margin: 5rem auto;
  margin: 2rem auto 1rem auto;
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: hsl(205, 90%, 76%);
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s linear;
`;