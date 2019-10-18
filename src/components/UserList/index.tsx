import React, { ChangeEvent, MouseEvent } from "react"
import styled from "styled-components";
import { TUser } from "@types"

interface Props {
  query: string
  list: TUser[]
  onQueryChange: (query: string) => void
  onUserClick: (user: TUser) => void
  className?: string
}

const BareUserList = ({ query, list, onQueryChange, onUserClick, className }: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    onQueryChange(value)
  }

  const onClick = (user: TUser) => (event: MouseEvent<HTMLDivElement>) => {
    onUserClick(user)
  }

  return (
    <div className={className}>
      <Input placeholder={"Search for user..."} value={query} onChange={onChange} type="text" />
      <List>
        {list.map(user => <User key={user.username} onClick={onClick(user)}>{user.username}</User>)}
      </List>
    </div>
  )
}

const UserList = styled(BareUserList)`
  flex: 1;
`

const List = styled.div`
  margin: 10px 0 0 11px;
`

const User = styled.div`
  margin-bottom: 7px;
  cursor: pointer;
`

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
`

export default UserList
