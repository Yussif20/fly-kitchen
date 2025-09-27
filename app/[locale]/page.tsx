import {
  Sales,
  Hero,
  Branches,
  Solutions,
  Channels,
  Brands,
  CustomerJourney,
  TechFeatures,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Sales />
      <Solutions />
      <Branches />
      <Channels />
      <TechFeatures />
      <CustomerJourney />
      {/* <Brands /> */}
    </>
  );
}
