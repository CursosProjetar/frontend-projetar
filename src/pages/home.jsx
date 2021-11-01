import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: blue;
`

const Text = styled.text`
    font-size: 18px;
`

const Home = () => {
    return (
        <Container>
            <Text>Home</Text>
        </Container>
    )

}

export default Home;