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
        return <Img key={photo.id} alt={photo.alt_description} src={photo.urls.thumb} />
      })}
    </div>
  )
}

const PhotoGrid = styled(BarePhotoGrid)`
  flex: 3;
  padding: 0 0 0 5px;
`

const Img = styled.img`
  border-radius: 5px;
  margin: 0 0 5px 5px;
`

export default PhotoGrid
