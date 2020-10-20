import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1500px;
    margin: 0 auto;

    span {
      font-size: 1.3rem;

      background-color: white;
      width: 30px;
      height: 30px;
      text-align: center;
      color: black;
      border-radius: 50%;
      margin: 10px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

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
          background: ${(props) => props.theme.colors.secundary};
          color: white;
          text-transform: uppercase;
          border-radius: 20px;
          margin-right: 50px;
        }
      }
    }
  }
`;
