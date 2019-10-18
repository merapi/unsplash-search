import React from "react"
import styled from "styled-components";

interface Props {
  className?: string
}

const BareUserList = ({ className }: Props) => {
  return (
    <div className={className}>UserList</div>
  )
}

const UserList = styled(BareUserList)`
  flex: 1;
  background: green;
`

export default UserList
