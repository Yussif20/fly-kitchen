import { Features, Hero } from "@/sections";
import BranchesPage from "./branches/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <BranchesPage />
    </>
  );
}
