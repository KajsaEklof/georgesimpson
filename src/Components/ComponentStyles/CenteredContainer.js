import React from 'react';
import Styled from 'styled-components';

const CenteredContainer = props => {

    const Container = Styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0em 0em 1em 0em;
    `

    return (
        <Container>{props.children}</Container>
    )
}

export default CenteredContainer;


