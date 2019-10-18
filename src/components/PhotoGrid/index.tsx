import React from "react"
import styled from "styled-components";
import { TPhoto, TUser } from "@types";

interface Props {
  photos: TPhoto[]
  user: TUser | null
  className?: string
}

const BarePhotoGrid = ({ photos, user, className }: Props) => {
  if (!user) return null

  const renderPhotos = () => {
    return (
      <div>
        <Info>User {user.username} has {user.total_photos} photo{user.total_photos === 1 ? `` : `s`}</Info>
        <div>{photos.map(photo => {
          return <Img key={photo.id} alt={photo.alt_description} src={photo.urls.thumb} />
        })}</div>
      </div>
    )
  }

  return (
    <div className={className}>
      {photos.length ? renderPhotos() : <Info>User {user.username} has no photos :(</Info>}
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

const Info = styled.div`
  margin-top: 6px;
  margin-bottom: 20px;
`

export default PhotoGrid
