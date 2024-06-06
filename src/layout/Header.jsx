import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Clients } from "../components/Clients";
import { ShopCard } from "../components/ShopCards";

export const Header = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Clients />
      <ShopCard />
    </>
  );
};
