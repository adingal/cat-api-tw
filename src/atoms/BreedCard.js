import React from 'react'

const BreedCard = ({ item }) => {
  return (
    <div className="w-full" key={item.id}>
      <a href={item.id}>
        <img
          className="w-full max-h-[200px] object-cover"
          src={item.url}
          alt="Dummy"
        />
      </a>
    </div>
  )
}

export default BreedCard
