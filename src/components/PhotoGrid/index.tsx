import React from "react"
import styled from "styled-components";
import { TPhoto } from "@types";

interface Props {
  photos: TPhoto[]
  className?: string
}

const BarePhotoGrid = ({ photos, className }: Props) => {
  return (
    <div className={className}>
      {photos.map(photo => {
        return <img src={photo.urls.thumb} />
      })}
    </div>
  )
}

const PhotoGrid = styled(BarePhotoGrid)`
  flex: 3;
  background: blue;
`

export default PhotoGrid
