import styled from "@emotion/styled";

export const Home = styled.div`
  display: flex;
  .card-info {
    font-family: "Encode Sans Condensed", sans-serif;
    width: 70%;
    flex-direction: column;
    background-color: #cacaca;
    margin: 5px auto;
    border-radius: 35px;
    padding: 5px;
    .info-client {
      float: left;
      width: 500px;
      padding: 5px;
      padding-left: 15px;
    }
    .link a {
      float: right;
      margin-top: 25px;
      color: black;
      font-weight: bold;
      font-size: 1.5em;
      text-decoration: none;
      padding-right: 15px;
    }
  }
`;
