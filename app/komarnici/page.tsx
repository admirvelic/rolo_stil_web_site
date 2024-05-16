import { Products } from "@/components/products";

const productInfo = {
  imgPaths: [
    "/komarnici/komarnici(1).webp",
    "/komarnici/komarnici(2).webp",
    "/komarnici/komarnici(3).webp",
    "/komarnici/komarnici(4).webp",
    "/komarnici/komarnici(5).webp",
    "/komarnici/komarnici(6).webp",
    "/komarnici/komarnici(7).webp",
    "/komarnici/komarnici(8).webp",
  ],
  productTitle: "Komarnici",
  productDescription:
    "Naši aluminijski komarnici su savršeno rješenje zaštite od insekata. Dizajnirani su s naglaskom na trajnost i funkcionalnost. U našoj ponudi možete pronaći fiksne, klizne i rolo komarnike, koji se lako prilagođavaju vašim potrebama. S dostupnošću u tri boje - Siva, Bijela i Smedja - možete ih uskladiti s dizajnom vašeg prostora. Odaberite komarnike koji će vam pružiti udobnost u vašem domu.",
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
