import React from 'react'
import SectionIntro from '../components/SectionIntro'

export default function AboutPage() {
  return <div className="inner-page">
    <section className="page-title container"><span className="eyebrow">ABOUT DEVKI</span><h1>About Devki Group — <em>Kenya's manufacturing</em> conglomerate</h1><p>Devki Group is a leading East African manufacturing conglomerate headquartered in Nairobi, Kenya, with businesses spanning steel, cement, roofing, fertilizer, packaging, aviation and related services.</p></section>
    <section className="about-timeline container section-space"><SectionIntro eyebrow="OUR STORY" title="From one mill<br/>to a group."/><div className="timeline"><div><span>01</span><h3>A single steel mill</h3><p>The journey began with a focused ambition to grow Kenya's industrial capacity.</p></div><div><span>02</span><h3>Expansion into cement</h3><p>National Cement Company broadened the Group's manufacturing footprint and reach.</p></div><div><span>03</span><h3>Roofing, fertilizer, packaging</h3><p>New businesses expanded the range of products supporting construction and agriculture.</p></div><div><span>04</span><h3>A regional industrial force</h3><p>Today the Group operates across multiple industries and markets in East Africa.</p></div></div></section>
    <section className="principles container section-space"><SectionIntro eyebrow="OUR PRINCIPLES" title="Four principles.<br/>Every product."/><div className="principle-grid">{[['01','Quality','We make products with consistency, durability and purpose.'],['02','Innovation','We keep improving how we manufacture and serve customers.'],['03','Sustainability','We consider communities, resources and the environment.'],['04','Growth','We create opportunity by growing people and industry.']].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
  </div>
}
