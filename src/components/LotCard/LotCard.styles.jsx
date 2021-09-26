import styled from 'styled-components';

export const Card = styled.article`
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem 3.5rem;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;

  object-fit: cover;
  object-position: 50% 15%;

  margin-bottom: 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

export const CardHeader = styled.h4`
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: hsl(210, 22%, 49%);
`;

export const CardText = styled.p`
  font-size: 0.75rem;
`;

export const CardButton = styled.a`
  padding: 0.35rem 0.75rem;
  letter-spacing: 1.6px;
  font-size: 0.75rem;
  color: #fff;
  background: hsl(205, 78%, 60%);
  border-radius: 0.75rem;
  border-color: transparent;
  text-transform: uppercase;
  transition: all 0.3s linear;
  cursor: pointer;
`;
