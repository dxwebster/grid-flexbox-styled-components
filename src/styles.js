import styled from 'styled-components';

import BackgroundImg from './assets/background.jpg';

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

export const GridWrapper = styled.div`
  min-height: calc(100vh - 62px); // cola o footer no fim da página
  display: grid; // transforma todos os elementos filhos em grid-items
  grid-template-columns: 1fr 3fr; // fr é a fração  do espaço disponível no container grid

  @media only screen and (max-width: 650px) {
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-position: center;
    background-color: lightgray;
    background-blend-mode: screen;

    display: flex; // no mobile, deixa de ser grid, e vira flex
    flex-direction: column; // um item embaixo do outro;
  }
`;

export const Header = styled.header`
  background: #5d6bc0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1500px;
    margin: 0 auto;

    span {
      font-size: 1.3rem;
      grid-column: 1/2;
      grid-row: 1/3;
      background-color: white;
      width: 30px;
      height: 30px;
      text-align: center;
      color: black;
      border-radius: 50%;
      margin: 10px;
    }

    ul {
      grid-column: 2/3;
      grid-row: 1/2;
      display: flex;
      justify-content: flex-end;
      font-weight: 500;
    }

    li {
      list-style-type: none;
      display: inline;
      padding: 0 10px;
      color: white;
      align-self: center; // alinha o texto verticalmente na li

      &.get-started {
        padding: 2px 10px;
        background-color: #074fe2;
        color: white;
        text-transform: uppercase;
        border-radius: 20px;
      }
    }
  }
`;

export const Aside = styled.aside`
  grid-column: 1/2; // vertical: começa no 1, termina no 2
  grid-row: 2/3; // horizontal: começa no 2, termina no 3

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 3;

  h1 {
    font-size: 6.5rem;
    margin: 0;
    color: #074fe2;
    line-height: 6rem;
    margin: 15px 0;
  }

  h3 {
    margin-top: 30px;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #03b19f;
  }

  .button {
    width: 30%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 20px;
    text-align: center;
    font-weight: 700;
    background-color: #074fe2;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    color: white;
  }
`;

export const Background = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  background-image: url(${BackgroundImg});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Article = styled.article`
  grid-column: 1/3;
  grid-row: 3/4;

  text-align: center;
  padding: 30px 0;

  h1 {
    color: #074fe2;
  }

  div {
    display: flex; // transforma os elementos filhos em flex-items
    gap: 30px; // espaçamento entre os flex-items-filhos

    img {
      background-color: grey;
      flex-grow: 1; // os flex-items-filhos vão se ajustar de acordo com a largura da página;
      width: 100%; // imagem responsiva
    }

    @media (max-width: 650px) {
      flex-direction: column;
      margin-bottom: 20px;
    }
  }
`;

export const Footer = styled.footer`
  grid-column: 1/3;
  grid-row: 4/4;
  background-color: #074fe2;
  color: white;

  .fab {
    font-size: 1.4rem;
    margin: 10px;
  }

  .sign-off {
    font-weight: 500;
  }
`;
