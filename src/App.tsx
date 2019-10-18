import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import GlobalStyles from 'components/GlobalStyles'
import PhotoGrid from 'components/PhotoGrid'
import UserList from 'components/UserList'
import Footer from 'components/Footer'
import { TUser, TPhoto } from "@types";
import Api from "Api"
import useDebounce from "hooks/useDebounce";

const App: React.FC = () => {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<TUser[]>([])
  const [selectedUser, setSelectedUser] = useState<TUser | null>(null)
  const [photos, setPhotos] = useState<TPhoto[]>([])
  const debouncedQuery = useDebounce(query, 350);

  useEffect(() => {
    async function searchUsers() {
      const users = await Api.searchUsers(debouncedQuery)
      console.log(`users`, users)
      setList(users)
    }
    if (debouncedQuery) {
      searchUsers()
    } else {
      setList([])
    }
  }, [debouncedQuery])

  const onQueryChange = (query: string) => {
    setQuery(query)
  }

  const onUserClick = async (user: TUser) => {
    const userPhotos = await Api.getUserPhotos(user)
    setPhotos(userPhotos)
    setSelectedUser(user)
  }

  return (
    <Container>
      <GlobalStyles />
      <Row>
        <UserList query={query} list={list} selectedUser={selectedUser} onQueryChange={onQueryChange} onUserClick={onUserClick} />
        <PhotoGrid photos={photos} />
      </Row>
      <Footer />
    </Container>
  );
}

const Row = styled.div`
  display: flex;
  flex: 1 0 auto;
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
`

export default App;
