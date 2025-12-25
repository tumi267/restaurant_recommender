'use client'
import React, { useRef, useEffect } from 'react'
import { Restaurant } from '../../../types'
import Card from '../Card/Card'

interface Props {
  title: string
  subtitle: string
  restaurant: Restaurant[]
  horizontal?: boolean
}

function SideScroller({ title, subtitle, restaurant, horizontal = true }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Map vertical scroll to horizontal
  useEffect(() => {
    const container = scrollRef.current
    if (!horizontal || !container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault() // prevent vertical page scroll
      container.scrollLeft += e.deltaY // scroll horizontally
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [horizontal])

  return (
    <div className="my-[1em] px-[1em]">
      <h2 className="text-xl font-bold">{title}</h2>
      <h3 className="text-sm text-gray-500">{subtitle}</h3>

      <div
        ref={scrollRef}
        className="my-[1em] flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {restaurant.map((e, i) => (
          <div
            key={e.id || i}
            className="flex-shrink-0 w-[calc(100%/3_-_1rem)] md:w-[calc(100%/4_-_1rem)]"
          >
            <Card restaurant={e} horizontal={horizontal} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideScroller
