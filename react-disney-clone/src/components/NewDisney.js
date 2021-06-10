import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewDisney = () => {
  return (
    <Container>
      <h4>New to Disney</h4>
      <Content>
        <Wrap>
          <Link to="/" >
            <img src="" alt="" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/" >
            <img src="" alt="" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/" >
            <img src="" alt="" />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/" >
            <img src="" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 26px 30px -5px rgb(0 0 0 / 80%);
  border: 3px solid rgba(249, 249, 249, 0.1);

  /* img {
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    z-index: 1;
    opacity: 1;
  } */

  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;

export default NewDisney;

