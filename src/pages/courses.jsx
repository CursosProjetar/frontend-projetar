import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 40px;
    background-color: green;
`

const Text = styled.text`
    font-size: 18px;
`

const Courses = () => {
    return (
        <Container>
            <Text>Courses</Text>
        </Container>
    )

}

export default Courses;