export interface TUser {
  username: string
  id: string
  total_photos: number
}

export interface TPhoto {
  urls: {
    thumb: string
  }
  id: string
  alt_description: string
}