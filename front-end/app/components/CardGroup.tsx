// @/app/components/TrackCarousel.tsx

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Card from "@/app/components/Card"
import tracks from "@/db/tracks"
import Link from "next/link"

export default function CardGroup() {
  return (
    <Carousel className="w-full max-w-8xl flex flex-col gap-4">
      <div className="flex gap-2 w-full justify-between items-center">
        <Link href="" className="text-xl font-bold hover:underline">The Best of the Day</Link>
        <div className="flex gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        
      </div>
      <CarouselContent className="-ml-1">
        {tracks.map((track) => (
          <CarouselItem key={track.id} className="pl-1 md:basis-1/2 lg:basis-1/5 max-w-64">
            <div className="p-1 h-full">
              <Card
                id={track.id}
                name={track.title}
                artist={track.artist}
                cover={track.cover}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
