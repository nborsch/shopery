import React from "react"
import { FaStar } from "react-icons/fa6"

export default function convertRating(rating: number) {
  const ratingArr = Array(5).fill(<></>)
  const filled = { color: "#ff8a00" }
  const empty = { color: "cccccc"}

  const starsArr = ratingArr.map((item, index) => {
    if (index < rating) {
      return <FaStar style={filled} key={index} />
    } else if (index >= rating) {
      return <FaStar style={empty} key={index} />
    }
  })

  return starsArr
}