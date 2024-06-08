import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Clients } from "../components/Clients";
import { ShopCard } from "../components/ShopCards";
import { ProductCardsTop } from "../components/ProductCardsTop";
import ProductsCards from "../components/ProductsCards";
import { Content } from "../components/Content";
import Footer from "../components/Footer";
import Features from "../components/Features";

export const Header = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Clients />
      <ShopCard />
      <ProductCardsTop />
      <ProductsCards />
      <Content />
      <Features />
      <Footer />
    </>
  );
};
