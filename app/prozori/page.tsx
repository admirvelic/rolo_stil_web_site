import { Products } from "@/components/products";

const productInfo = {
  imgPaths: [
    "/stolarija/stolarija(1).webp",
    "/stolarija/stolarija(2).webp",
    "/stolarija/stolarija(3).webp",
    "/stolarija/stolarija(4).webp",
    "/stolarija/stolarija(5).webp",
    "/stolarija/stolarija(6).webp",
  ],
  productTitle: "Prozori",
  productDescription:
    "Nudimo visoko performantne prozore s dvostrukim ili trostrukim staklom ispunjenim argonom, osiguravajući izvanrednu zvučnu, UV i toplotnu izolaciju. Naša PVC stolarija, uključujući klizni sistem, nudi izvanrednu funkcionalnost i estetiku. Dostupni u bijeloj, zlatnoj hrast, antracit i mahagoni boji, prilagodite ih stilu vašeg doma.",
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
