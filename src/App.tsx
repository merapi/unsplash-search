import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import GlobalStyles from 'components/GlobalStyles'
import PhotoGrid from 'components/PhotoGrid'
import UserList from 'components/UserList'
import Footer from 'components/Footer'
import { TUser, TPhoto } from "@types";
import Api from "Api"


const App: React.FC = () => {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<TUser[]>([])
  const [photos, setPhotos] = useState<TPhoto[]>([])

  useEffect(() => {
    async function searchUsers() {
      const users = await Api.searchUsers(query)
      console.log(`users`, users)
      setList(users)
    }
    searchUsers()
  }, [query])

  const onQueryChange = (query: string) => {
    setQuery(query)
  }

  const onUserClick = async (user: TUser) => {
    const userPhotos = await Api.getUserPhotos(user)
    console.log(`userPhotos`, userPhotos)
    setPhotos(userPhotos)
  }

  return (
    <Container>
      <GlobalStyles />
      <Row>
        <UserList query={query} list={list} onQueryChange={onQueryChange} onUserClick={onUserClick} />
        <PhotoGrid photos={photos} />
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
