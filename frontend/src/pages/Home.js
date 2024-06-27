import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
`;

function Home() {
  return (
    <Container>
      <Title>Welcome to YoFuel</Title>
      <Subtitle>
        Discover our delicious Greek yogurt and protein mixes.
      </Subtitle>
    </Container>
  );
}

export default Home;
