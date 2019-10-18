import React from "react"
import styled from "styled-components";

interface Props {
  className?: string
}

const BareFooter = ({ className }: Props) => {
  return (
    <div className={className}>© Copyright 2019 merapi</div>
  )
}

const Footer = styled(BareFooter)`
  flex-shrink: 0;
  margin-top: 20px;
  text-align: right;
  padding-bottom: 20px;
`

export default Footer
