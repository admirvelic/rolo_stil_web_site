import { Products } from "@/components/products";

const productInfo =   {
    imgPaths:["/grid(3).webp",
    "/grid(3).webp",
    "/grid(3).webp",
    "/grid(3).webp"],
    productTitle: "Komarnici",
    productDescription:
      " Najbolji komarnici na tržištu, beton druže moj. Za ove komarnike garantuje Obama lično, on tvrdi da od kako ih je uzeo da ga ni jedan komarac nije uhvatio.",
  }

export default function Home() {
  return <Products
  imgPaths={productInfo.imgPaths}
  productTitle={productInfo.productTitle}
  productDescription={productInfo.productDescription}
/>;
}
