import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Clients } from "../components/Clients";
import { ShopCard } from "../components/ShopCards";
import { ProductCardsTop } from "../components/ProductCardsTop";

export const Header = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Clients />
      <ShopCard />
      <ProductCardsTop />
    </>
  );
};
