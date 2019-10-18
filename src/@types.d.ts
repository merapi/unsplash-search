export interface TUser {
  username: string
  id: string
  total_photos: number
}

export interface TPhoto {
  urls: {
    thumb: string
    small: string
    regular: string
  }
  id: string
  alt_description: string
}