import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../components/ProductsData'

const categories=['All','Steel','Cement','Roofing','Fertilizers','Aviation','Packaging','Clinker','Rwanda']
export default function ProductsPage(){
 const [params,setParams]=useSearchParams(); const initial=params.get('category')||'All'; const [category,setCategory]=useState(categories.includes(initial)?initial:'All'); const [query,setQuery]=useState('')
 const filtered=useMemo(()=>products.filter(p=>(category==='All'||p.category===category)&&p.name.toLowerCase().includes(query.toLowerCase())),[category,query])
 const choose=c=>{setCategory(c); if(c==='All') params.delete('category'); else params.set('category',c); setParams(params)}
 return <div className="inner-page order-page"><section className="page-title container"><span className="eyebrow">ORDER ONLINE</span><h1>Order Devki Group products<br/>online — <em>cement, steel, roofing<br/>& fertilizer</em></h1><p>Browse the product catalogue, compare options and add products to your order.</p></section><section className="catalogue container section-space"><div className="catalogue-controls"><div className="category-tabs">{categories.map(c=><button className={category===c?'active':''} onClick={()=>choose(c)} key={c}>{c}</button>)}</div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..."/></div><div className="catalogue-meta"><span>{filtered.length} products</span><span>Factory-direct pricing · VAT inclusive</span></div><div className="product-grid catalogue-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div></section></div>
}
