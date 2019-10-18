export interface TUser {
  username: string
}

export interface TPhoto {
  urls: {
    thumb: string
  }
  id: string
  alt_description: string
}