import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import GlobalStyles from 'components/GlobalStyles'
import PhotoGrid from 'components/PhotoGrid'
import UserList from 'components/UserList'
import Footer from 'components/Footer'
import { TUser } from "@types";
import Api from "Api"


const App: React.FC = () => {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<TUser[]>([])

  useEffect(() => {
    async function searchUsers() {
      const users = await Api.searchUsers(query)
      setList(users)
    }
    searchUsers()
  }, [query])

  const onQueryChange = (query: string) => {
    setQuery(query)
  }

  return (
    <Container>
      <GlobalStyles />
      <Row>
        <UserList query={query} list={list} onQueryChange={onQueryChange} />
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
