import type { ToyhouseProfile } from "./toyhouse"

export interface ImageBlob {
  blob: Blob
  type: string | null | undefined
  artists: ToyhouseProfile[]
}