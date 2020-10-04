import styled from "styled-components";

export const Container = styled.aside`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    display: none;
  }

  .profile-container {
    width: 100%;
    height: 170px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;

    .hidded-options {
      top: 0;
      left: 0;
      position: absolute;
      width: 330px;
      height: 170px;
      background: #0061da;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 30px 0 rgba(45, 130, 255, 0.75);

      img {
        object-fit: cover;
        width: 50px;
        height: 50px;
        border-radius: 25px;
      }

      ul {
        list-style: none;
        width: 75%;

        li {
          button {
            width: 100%;
            height: 100%;
            font-weight: 700;
            color: #fff;
            background: transparent;
            border: none;
          }
        }
      }
    }
  }

  .options {
    margin-top: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;

    .option {
      width: 195px;
      padding: 0px 10px;
      height: 73px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      a,
      button {
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
        align-items: center;

        span {
          padding: 1rem;
          color: #000;
          font-weight: 500;
        }
      }

      button {
        background: transparent;
        border: none;
        color: #0061da;

        &:active {
          border: none;
        }
      }
    }
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  object-fit: cover;
`;
