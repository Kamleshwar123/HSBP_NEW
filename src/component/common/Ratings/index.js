import React from 'react'
import StarRatings from 'react-star-ratings'

const Ratings = ({ rating }) => {
  return (
    <div>
      <StarRatings
        rating={Number(rating || 0)}
        starDimension="20px"
        starSpacing="0px"
        numberOfStars={5}
        starRatedColor="#FFBD07"
        name='rating'
      />
    </div>
  )
}

export default Ratings