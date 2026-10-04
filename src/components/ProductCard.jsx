import React from 'react'

const imageMap = {
  Steel: 'https://devkigroupkenya.com/assets/steel-BsH9pX0r.jpg',
  Cement: 'https://devkigroupkenya.com/assets/cement-B2v9g8oG.jpg',
  Roofing: 'https://devkigroupkenya.com/assets/roofing-Bk8w2hQW.jpg',
  Fertilizers: 'https://devkigroupkenya.com/assets/fertilizer-Bh4nG2mP.jpg',
}

export default function ProductCard({ product, compact = false }) {
  const image = imageMap[product.category]
  return (
    <article className={`product-card ${compact ? 'compact' : ''}`}>
      <div className="product-image">
        {image ? <img src={image} alt="" onError={(e) => { e.currentTarget.style.display = 'none' }} /> : null}
        <div className={`product-placeholder ${product.category.toLowerCase()}`}>{product.category}</div>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.unit}</p>
        </div>
        <div className="product-price">KES {product.price.toLocaleString()}</div>
        {!compact && <button className="tiny-red-button">Add to order</button>}
      </div>
    </article>
  )
}
