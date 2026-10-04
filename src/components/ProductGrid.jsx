import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, limit }) {
  const shown = limit ? products.slice(0, limit) : products
  return <div className="product-grid">{shown.map(p => <ProductCard key={p.id} product={p} />)}</div>
}
