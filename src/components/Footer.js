import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <div>
        <FooterContainer></FooterContainer>
    </div>
  );
};
export default Footer;