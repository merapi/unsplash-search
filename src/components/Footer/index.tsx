import React from "react"
import styled from "styled-components";

interface Props {
  className?: string
}

const BareFooter = ({ className }: Props) => {
  return (
    <div className={className}>Footer</div>
  )
}

const Footer = styled(BareFooter)`
  flex: 1;
  background: #444;
`

export default Footer
