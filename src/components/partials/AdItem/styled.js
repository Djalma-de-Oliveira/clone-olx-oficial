import styled from "styled-components";

export const Item = styled.div`
  a {
    display: block;
    border: ipx solid #ccc;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 25px;
    color: #000;
    background-color: #fff;
    transition: all ease 0.2s;

    &:hover {
      background-color: #d9ffcc;
      border: 1px solid #b3ff99;
    }

    .itemImage {
      width: 100%;
      border-radius: 15px;
    }

    .itemName {
      font-weight: bold;
    }
  }
`;
