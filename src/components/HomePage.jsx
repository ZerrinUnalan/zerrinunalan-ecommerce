import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Clients } from "./Clients";
import { ShopCard } from "./ShopCards";
import { ProductCardsTop } from "./ProductCardsTop";
import ProductsCards from "./ProductsCards";
import { Content } from "./Content";
import Footer from "./Footer";
import Features from "./Features";
import { FeaturedPosts } from "./FeaturedPosts";

export const HomePage = () => {
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
      <FeaturedPosts />
      <Footer />
    </>
  );
};
