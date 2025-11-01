import React from "react"

export default function useToggle(): [boolean, () => void] {
  const [on, setOn] = React.useState<boolean>(true)

  const toggle = () => setOn((prevOn: boolean) => !prevOn)

  return [on, toggle]
}
