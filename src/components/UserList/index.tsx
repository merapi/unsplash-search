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
      <input value={query} onChange={onChange} type="text" />
      <List>
        {list.map(user => <User onClick={onClick(user)}>{user.username}</User>)}
      </List>
    </div>
  )
}

const UserList = styled(BareUserList)`
  flex: 1;
  background: green;
`

const List = styled.div`
  
`

const User = styled.div`
  
`

export default UserList
