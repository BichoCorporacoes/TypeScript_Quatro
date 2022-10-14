import styled from "@emotion/styled";

export const NavBar = styled.div`
  min-height: 8vh;
  width: 100vw;
  display: flex;
  background-color: #343434;
  box-shadow: 0 4px 2px -2px #e6b31e;
  a {
    color: #fcfaf1;
    text-decoration: none;
  }
  .atlantis {
    text-align: center;
    font-family: "Encode Sans Condensed", sans-serif;
    margin: auto;
    font-size: 1.5em;
    width: 25%;
  }
  .sideContent {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: auto;
    width: 75%;
    font-size: 30px;
    table {
      width: 45%;
    }
    a {
      transition: font-size 1s;
    }
    a:hover {
      color: #cacaca;
      font-size: 35px;
    }
  }
`;
