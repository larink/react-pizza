import React from 'react'

export default function Button({ price }) {
  return (
    <button href="/cart.html" className="button button--cart">{price}</button>
  )
}
