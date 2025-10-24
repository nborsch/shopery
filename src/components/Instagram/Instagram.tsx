import React from "react"
import classes from "./Instagram.module.css"

type Photo = {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string
}

export default function Instagram() {
  const [photos, setPhotos] = React.useState<Photo[] | null>(null)

  React.useEffect(() => {
    // preparing to close connection on unmount
    const controller = new AbortController()

    async function fetchPhotos() {
      const photosResponse = await fetch(
        "https://api.pexels.com/v1/search?query=healthy&orientation=square&per_page=8",
        {
          method: "GET",
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_API_KEY,
          },
          signal: controller.signal,
        }
      )

      if (!photosResponse.ok) {
        console.log(photosResponse)
        return
      }

      const photosData = await photosResponse.json()
      setPhotos(photosData.photos)
    }

    fetchPhotos()

    return () => controller.abort()
  }, [])

  const photosEls = photos
    ? photos.map((photoData: Photo, index: number): React.JSX.Element => {
        return (
          <img
            src={`${photoData.src.small}`}
            className={classes.img}
            key={index}
          />
        )
      })
    : null

  return (
    <>
      <div className={classes.instagram}>
        <h3 className={classes.instagramTitle}>Instagram</h3>
        {photosEls ? photosEls : null}
      </div>
    </>
  )
}
