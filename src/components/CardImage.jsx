import React from 'react'

function CardImage({ props }) {
  const { id, title, image } = props;
  
  const handleErroImage = (e) => {
    e.target.parentElement.remove();
  }

  return (
    <div className="card-column">
      <img
        src={image}
        alt=""
        className="responsive-image"
        onError={handleErroImage}
      />

        <h3
          className="font-medium text-gray-900"
        >
          {title}
        </h3>
    </div>
  )
}

export default CardImage