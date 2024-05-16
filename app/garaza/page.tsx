import { Products } from "@/components/products";

const productInfo = {
  imgPaths: [
    "/garaza/garaza(1).webp",
    "/garaza/garaza(2).webp",
    "/garaza/garaza(3).webp",
  ],
  productTitle: "Garažna vrata",
  productDescription:
    " Razumijemo važnost praktičnosti i sigurnosti kada su u pitanju garažna vrata. Zato vam predstavljamo naša sekciona garažna vrata na daljinski upravljač, koja spajaju ove ključne elemente, omogućavajući vam jednostavno otvaranje i zatvaranje vaše garaže bez napora. Uz to, ponosno nudimo širok izbor boja - Zlatni hrast, Smedja bijela i Siva - kako biste prilagodili vrata vašem stilu i okruženju.",
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
