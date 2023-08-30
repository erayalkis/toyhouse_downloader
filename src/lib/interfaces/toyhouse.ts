export interface ToyhouseProfile {
  name: string;
  link: string;
}

export interface CharacterDetails {
  id: string;
  name: string;
  image: string;
  owner: ToyhouseProfile;
}

export interface ImageMetadata {
  date: string;
  description: string;
  tagged_characters: ToyhouseProfile[];
}

export interface GalleryImage {
  artists: ToyhouseProfile[];
  image_metadata: ImageMetadata;
  link: string;
}

export interface OwnershipLog {
  date: String;
  description: String;
  user_link: ToyhouseProfile;
}
