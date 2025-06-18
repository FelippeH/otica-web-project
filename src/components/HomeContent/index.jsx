import Header from "@/components/Header";
import Cover from "@/components/Cover";
import Products from "@/components/Products";
import Newsletter from "@/components/Newsletter";
import FooterMenu from "@/components/FooterMenu";
import Footer from "@/components/Footer";

export default function HomeContent() {
  return (
    <>
      <Header />
      <Cover />
      <Products />
      <Newsletter />
      <FooterMenu />
      <Footer />
    </>
  );
}
