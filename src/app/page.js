"use client"

import Banner from "@/components/Banner"
import Card from "@/components/Card"

export default function Home() {
  return (
    <div className="h-[1200px] grid grid-cols-[2fr_1fr]">
      <div className="mt-16 px-6 pr-10 flex flex-col gap-3">
        <Banner />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="h-80 bg-gray-100 rounded-xl mt-16 sticky top-4 right-4 duration-200 ease-in"/>
    </div>
  )
}
