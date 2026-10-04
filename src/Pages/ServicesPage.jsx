import React from 'react'

const services = [
  ['01','Steel Manufacturing','Reinforcement steel, sections, tubes and other building products.'],
  ['02','Cement Production','Cement and related construction materials for projects of every scale.'],
  ['03','Roofing & Building Solutions','Roofing sheets, profiles and complementary building solutions.'],
  ['04','Agricultural Inputs','Fertilizer products designed to support farmers and food production.'],
  ['05','Packaging','Industrial packaging solutions for cement, fertilizer and other products.'],
  ['06','Aviation Services','Charter, aerial survey, medical evacuation and aviation support services.'],
]
export default function ServicesPage(){return <div className="inner-page"><section className="page-title container"><span className="eyebrow">SERVICES</span><h1>Devki Group services —<br/><em>steel, cement, roofing &<br/>agri inputs</em></h1></section><section className="services-list container section-space">{services.map(([n,t,d])=><article key={n}><div className="service-number">{n}</div><div><h2>{t}</h2><p>{d}</p></div><span>↗</span></article>)}</section></div>}
