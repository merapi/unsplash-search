import React from "react"
import styled from "styled-components";

interface Props {
  className?: string
}

const BarePhotoGrid = ({ className }: Props) => {
  return (
    <div className={className}>PhotoGrid</div>
  )
}

const PhotoGrid = styled(BarePhotoGrid)`
  flex: 3;
  background: blue;
`

export default PhotoGrid
