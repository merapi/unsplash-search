import React from 'react';
import Unsplash, { toJson } from "unsplash-js"
import styled from "styled-components"
import GlobalStyles from 'components/GlobalStyles'
import PhotoGrid from 'components/PhotoGrid'
import UserList from 'components/UserList'
import Footer from 'components/Footer'

const unsplash = new Unsplash({ accessKey: "5f64fd0ea20fabe32c6e599342b8665f66c86e43630b75f3ca477f0d596279ff" })

unsplash.search.users("stevexxxxxxxxx", 1, 20)
  .then(toJson)
  .then((json: object) => {
    console.log(json)
  });

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Row>
        <UserList />
        <PhotoGrid />
      </Row>
      <Footer />
    </Container>
  );
}

const Row = styled.div`
  display: flex;
`

const Container = styled.div`
  background: gray;
  padding: 5px;
`

export default App;
