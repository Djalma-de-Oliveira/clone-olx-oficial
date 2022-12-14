import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: #fff;
    border-radius: 25px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
    margin-bottom: 20px;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 500px;

      .area--title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
      }

      .area--input {
        flex: 1;

        input,
        select,
        textarea {
          width: 100%;
          font-size: 14px;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 15px;
          outline: none;
          transition: all ease 0.2s;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }

        textarea {
          height: 150px;
          resize: none;
        }

        button {
          background-color: #3a00ff;
          border: 0;
          outline: 0;
          padding: 5px 10px;
          border-radius: 15px;
          color: #fff;
          font-size: 15px;
          cursor: pointer;

          &:hover {
            background-color: #320cb0;
          }
        }
      }
    }
  }
`;
