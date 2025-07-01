import React from 'react'

export default function SectionTitle({name, title}) {
  return (
    <div className='space-y-2'>
        <span className='text-sm font-medium text-primary uppercase text-center'>{name}</span>
        <h2>{title}</h2>
    </div>
  )
}
