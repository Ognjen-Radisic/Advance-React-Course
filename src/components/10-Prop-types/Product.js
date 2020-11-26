import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  const url = image && image.url
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default sofa'} />
      <h4>{name || 'default sofa'}</h4>
      <p>{price || 3.99}</p>
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// we will set default values directly in Product component with short circuit operators
//
// Product.defaultProps = {
//   name: 'sofa',
//   price: 3.99,
//   image: defaultImage,
// }

export default Product
