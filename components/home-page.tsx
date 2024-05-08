/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { PhotoCard } from "./card";
import { SpeedInsights } from "@vercel/speed-insights/next";

const photoCards = [
  {
    imgPath: "/grid(3).webp",
    productTitle: "Komarnici",
    productDescription:
      "Naši komarnici su dizajnirani s fokusom na trajnost i funkcionalnost. Nudeći različite stilove, uključujući klizne, rolo i fiksne modele, prilagođavamo se vašim potrebama.",
    route: "/komarnici",
  },
  {
    imgPath: "/grid(4).webp",
    productTitle: "Prozori",
    productDescription:
      "Nudimo prozore visokih performansi sa dvoslojnim ili troslojnim staklom ispunjenim argonom, osiguravajući vrhunsku zvučnu, UV i toplotnu izolaciju.",
    route: "/prozori",
  },
  {
    imgPath: "/grid(5).webp",
    productTitle: "Aluminijske roletne",
    productDescription:
      "Naše aluminijske roletne sa termo izolacijom pružaju izvanrednu zaštitu stolariji, osiguravajući optimalnu toplotnu izolaciju.",
    route: "/roletne",
  },
  {
    imgPath: "/grid(1).webp",
    productTitle: "Vrata",
    productDescription:
      "Širok izbor PVC vrata nudi raznovrsne opcije, uključujući dekorativne panele, inox rukohvate i električne brave. Spajamo stil, funkcionalnost i sigurnost u svakom dizajnu.",
    route: "/vrata",
  },
  {
    imgPath: "/grid(1).webp",
    productTitle: "Garazna vrata",
    productDescription:
      "Naša sekciona garažna vrata na daljinski upravljač kombinuju praktičnost i sigurnost, omogućavajući jednostavno otvaranje i zatvaranje uz dodatnu udobnost daljinskog upravljanja.",
    route: "/garaza",
  },
];

export function HomePage() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="relative  mx-auto w-full flex items-center justify-center">
        <section className="h-full">
          <div className="h-full">
            <div className="flex lg:flex-row flex-col lg:h-screen pt-10 lg:pt-0 gap-6">
              <div className=" lg:w-2/5 w-full flex flex-col lg:pl-16 lg:pr-4 justify-center space-y-4 lg:pt-10 p-10">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                    ROLOSTIL
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-l">
                    Sa više od 10 godina iskustva u proizvodnji i montaži PVC
                    stolarije, roletni, komarnika i garažnih vrata, naša
                    porodična firma je vaš pouzdan partner. Posvećeni smo
                    kvalitetu i detaljima, pružajući funkcionalna i estetski
                    privlačna riješenja za vaš prostor. Zadovoljstvo kupaca je
                    naš prioritet, te se trudimo da svaki korisnik bude potpuno
                    zadovoljan.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex w-1/2 h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="#pozovite-nas"
                  >
                    Pozovite nas
                  </Link>
                  <Link
                    className="inline-flex w-1/2 h-10 items-center justify-center rounded-md border border-gray-500 bg-white px-8 text-sm font-medium shadow-sm transition-colors texy100 hover:bg-gray-100 text-gray-500 hover:text-gray-900 hover:border-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="#ponuda"
                  >
                    Ponuda
                  </Link>
                </div>
              </div>
              <div className=" lg:w-3/5 w-full relative aspect-square">
                <Image
                  src="/landing-1.webp"
                  fill
                  className="object-cover"
                  alt="prozori"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto px-4 md:px-10 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h1 id="ponuda" className="text-center py-20 text-5xl font-bold">
            Ponuda
          </h1>
          <div className="grid md:grid-cols-2 mx-auto w-fit lg:grid-cols-2 gap-8 pbs-10">
            {photoCards.map((photoCard, i) => (
              <PhotoCard
                key={i}
                imgPath={photoCard.imgPath}
                productDescription={photoCard.productDescription}
                productTitle={photoCard.productTitle}
                route={photoCard.route}
              />
            ))}
          </div>

          <div className=" py-12 md:py-16 lg:py-20">
            <div className="mx-auto px-4 md:px-6 lg:px-8">
              <div id="pozovite-nas" className="mx-auto">
                <div className="mb-8 md:mb-10 lg:mb-12">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Pozovite nas
                  </h2>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Adresa
                      </h3>
                      <p className="text-blue-900">
                        Misurići BB, Remzina rezidencija
                        <br />
                        Maglaj 74250
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Broj telefona
                      </h3>
                      <p className="text-blue-900 ">
                        Muhidin Basor:{" "}
                        <a href="tel:+38761619033">+38761619033</a>
                      </p>
                      <p className="text-blue-900 ">
                        Ajdin Basor: <a href="tel:+38762592694">+38762592694</a>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-blue-900">
                        {" "}
                        <a href="mailto:info@rolostil.com">info@rolostil.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-gray-500">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              aria-label="Instagram"
              href="https://www.instagram.com/rolo_stil_maglaj/"
            >
              <InstagramIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 " />
            </Link>
            <Link
              aria-label="Facebook"
              href="https://www.facebook.com/profile.php?id=100054437743352"
            >
              <FacebookIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 " />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props: Record<string, string>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: Record<string, string>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
