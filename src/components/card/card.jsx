import React from 'react'

export default function Card(props) {
  return (
    <div>
        <h1>{props.cardValue()}</h1>
    </div>
  )
}
