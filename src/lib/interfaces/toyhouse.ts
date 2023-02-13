export interface ToyhouseProfile {
  name: string,
  profile: string
}

export interface ImageMetadata {
  date: string,
  description: string,
  tagged_characters: ToyhouseProfile[]
}

export interface GalleryImage {
  artists: ToyhouseProfile[],
  image_metadata: ImageMetadata
  link: string,
}