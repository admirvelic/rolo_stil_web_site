import { Products } from "@/components/products";

const productInfo = {
  imgPaths: [
    "/roletne/roletne(1).webp",
    "/roletne/roletne(2).webp",
    "/roletne/roletne(3).webp",
    "/roletne/roletne(4).webp",
    "/roletne/roletne(5).webp",
    "/roletne/roletne(6).webp",
    "/roletne/roletne(7).webp",
    "/roletne/roletne(8).webp",
    "/roletne/roletne(9).webp",
    "/roletne/roletne(10).webp",
    "/roletne/roletne(11).webp",
    "/roletne/roletne(12).webp",
    "/roletne/roletne(13).webp",
    "/roletne/roletne(14).webp",
    "/roletne/roletne(15).webp",
    "/roletne/roletne(16).webp",
    "/roletne/roletne(17).webp",
    "/roletne/roletne(18).webp",
    "/roletne/roletne(19).webp",
    "/roletne/roletne(20).webp",
    "/roletne/roletne(21).webp",
    "/roletne/roletne(22).webp",
    "/roletne/roletne(23).webp",
  ],
  productTitle: "Roletne",
  productDescription:
    "Nudimo visokokvalitetne aluminijske roletne, dostupne u različitim varijantama - na traku ili na motor u širokom spektru boja: Siva, Bijela, Smedja, Zlatni hrast i Antracit. Naše aluminijske roletne sa termo izolacijom pružaju izuzetnu zaštitu stolariji, osiguravajući optimalnu toplotnu izolaciju. Također, nudimo uslugu zatvaranja terasa s roletnama, pružajući vam dodatnu udobnost i privatnost u svim djelovima vašeg doma.",
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
