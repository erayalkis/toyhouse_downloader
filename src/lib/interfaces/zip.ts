import type { ImageMetadata, ToyhouseProfile } from "./toyhouse"

export interface ImageBlob {
  blob: Blob
  type: string | null | undefined
  artists: ToyhouseProfile[] | null
  metadata: ImageMetadata | null
}