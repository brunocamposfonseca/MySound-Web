"use client"
import CardGroup from "./components/CardGroup";
import MiniCard from "./components/MiniCard";
import ThinCardBasic from "./components/ThinCardBasic";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold select-none">Welcome back, Bruno!</h1>
      {/*<MiniCard />
      <ThinCardBasic />*/}
      <CardGroup />
      <CardGroup />
      <CardGroup />
      <CardGroup />
      <CardGroup />
      <CardGroup />
      <CardGroup />
    </div>
  );
}