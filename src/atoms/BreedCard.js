import React from 'react'
import { Link } from 'react-router-dom'

const BreedCard = ({ item }) => {
  return (
    <div className="w-full" key={item.id}>
      <Link to={item.id}>
        <img
          className="w-full max-h-[200px] object-cover"
          src={item.url}
          alt="Cat"
        />
      </Link>
    </div>
  )
}

export default BreedCard
