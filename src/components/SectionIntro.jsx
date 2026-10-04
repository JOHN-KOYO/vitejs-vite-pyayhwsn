import React from 'react'

export default function SectionIntro({ eyebrow, title, children, centered = false }) {
  return (
    <div className={`section-intro ${centered ? 'centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {children && <p>{children}</p>}
    </div>
  )
}