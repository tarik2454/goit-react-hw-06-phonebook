import { createGlobalStyle, styled } from 'styled-components';
import '@csstools/normalize.css';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  background-color: ${({ theme }) => theme.colors.$primiryBgColor};
  line-height: 1;
  letter-spacing: 0.02em;
  }
`;

export const GlobalStyledLink = styled(Link)`
  font-size: 12px;
  color: ${props => props.theme.colors.$primiryTextColor};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.$accentColor};
  }
`;

export const GlobalStyledButton = styled.button`
  max-height: 37px;
  padding: ${props => props.$padding || '10px 15px'};
  margin: ${props => props.$margin || '0'};

  border-radius: ${props => props.theme.$borderRadius};
  color: black;
  background-color: lightblue;

  &:hover,
  &.active {
    color: white;
    background-color: ${props => props.theme.colors.$accentColor};
  }
`;

export const GlobalStyledTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.$secondaryTextColor};
`;

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSection = styled.section`
  width: 100%;
  padding-top: 30px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 24px;
  }
`;
