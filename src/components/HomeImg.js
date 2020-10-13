import React from "react";
import styled from 'styled-components';
import headerImage from '../images/Pizza.jpg';

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;
 
const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;

const HomeImg = () => {
  return (
    <ImgContainer>
      <Img src={headerImage} />
    </ImgContainer>
  );
};
export default HomeImg;