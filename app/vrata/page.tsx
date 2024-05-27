import { Products } from "@/components/products";

const productInfo = {
  imgPaths: [
    "/vrata/vrata(1).webp",
    "/vrata/vrata(2).webp",
    "/vrata/vrata(4).webp",
    "/vrata/vrata(5).webp",
    "/vrata/vrata(6).webp",
    "/vrata/vrata(7).webp",
    "/vrata/vrata(11).webp",
    "/vrata/vrata(12).webp",
    "/vrata/vrata(13).webp",
    "/vrata/vrata(14).webp",
    "/vrata/vrata(15).webp",
    "/vrata/vrata(16).webp",
  ],
  productTitle: "Vrata",
  productDescription:
    "Naša raznolika ponuda PVC ulaznih vrata omogućava širok izbor opcija koje će zadovoljiti različite ukuse i potrebe. Sviđa li vam se klasični stil ili preferirate modernu eleganciju, kod nas ćete pronaći vrata koja odgovaraju vašem ukusu. Osim toga, nudimo izbor različitih vrsta panela kako biste mogli personalizirati svoja vrata prema vašoj želji. Bez obzira jeste li zainteresirani za bijela, antracit, mahagoni ili zlatni hrast, naša PVC ulazna vrata kombinuju estetiku, funkcionalnost i sigurnost kako bi vaš dom bio potpuno zaštićen i stilski usklađen.",
};

export default function Home() {
  return (
    <Products
      imgPaths={productInfo.imgPaths}
      productTitle={productInfo.productTitle}
      productDescription={productInfo.productDescription}
    />
  );
}
