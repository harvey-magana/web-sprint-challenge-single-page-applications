import React from "react";
import styled from 'styled-components';
 
const ConfirmationContainer = styled.div``;

const PostTitle = styled.h3`
    color: green;
    display: block;
    width: 300px;
    margin: 50px auto;
`;

const Confirmation = (props) => {
    const { order } = props
  return (
    <ConfirmationContainer>
        <PostTitle>Here is what you ordered!</PostTitle>
            <pre>{JSON.stringify(order, null, 2)}</pre>
    </ConfirmationContainer>
  );
};
export default Confirmation;