import React from 'react';
import Unsplash, { toJson } from "unsplash-js"
import styled from "styled-components"

const unsplash = new Unsplash({ accessKey: "5f64fd0ea20fabe32c6e599342b8665f66c86e43630b75f3ca477f0d596279ff" })

unsplash.search.users("stevexxxxxxxxx", 1, 20)
  .then(toJson)
  .then((json: object) => {
    console.log(json)
  });

const App: React.FC = () => {
  return (
    <Container>
      init
    </Container>
  );
}

const Container = styled.div`
  background: red;
  padding: 20px;
`

export default App;
