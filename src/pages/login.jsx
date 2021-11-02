import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: #c2c2c2;
`

const Text = styled.text`
    font-size: 18px;
`

const Login = () => {
    return (
        <Container>
            <Text>Login</Text>
        </Container>
    )

}

export default Login;