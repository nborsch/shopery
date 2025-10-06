import React from "react"

export default function Address({lines}){

    if (lines === 2) return <span>1234 Mardi Gras Lane<br />New Orleans LA 70112</span>
    
    return <span>1234 Mardi Gras Lane, New Orleans LA 70112</span>
}