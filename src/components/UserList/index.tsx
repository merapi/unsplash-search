import React, { ChangeEvent } from "react"
import styled from "styled-components";
import { TUser } from "@types"

interface Props {
  query: string
  list: TUser[]
  onQueryChange: (query: string) => void
  className?: string
}

const BareUserList = ({ query, list, onQueryChange, className }: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    onQueryChange(value)
  }

  return (
    <div className={className}>
      <input value={query} onChange={onChange} type="text" />
      <List>
        <User>username</User>
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
