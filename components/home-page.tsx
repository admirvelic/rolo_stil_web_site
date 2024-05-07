/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { PhotoCard } from "./card";

const photoCards = [
  {
    imgPath: "/grid(3).webp",
    productTitle: "Komarnici",
    productDescription:
      " Najbolji komarnici na tržištu, beton druže moj. Za ove komarnike garantuje Obama lično, on tvrdi da od kako ih je uzeo da ga ni jedan komarac nije uhvatio.",
    route: "/komarnici",
  },
  {
    imgPath: "/grid(4).webp",
    productTitle: "Prozori",
    productDescription:
      " Kao i komarnici prozori su vrh vrhova, znači špicoka. Ne znaš jel bolja zvučna ili tobplotna izolacija. Prozore stavit nego fasadu.",
    route: "/prozori",
  },
  {
    imgPath: "/grid(5).webp",
    productTitle: "Roletne bajo",
    productDescription:
      "Roletne idu gore dole. Imaš sa motorićem ili ručno da motaš. Kad ih spustiš do kraja bude mrkli mrak misliš da će te nešto pojest.",
    route: "/roletne",
  },
  {
    imgPath: "/grid(1).webp",
    productTitle: "Vrata",
    productDescription:
      "Roletne idu gore dole. Imaš sa motorićem ili ručno da motaš. Kad ih spustiš do kraja bude mrkli mrak misliš da će te nešto pojest.",
    route: "/vrata",
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
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Streamline your team's workflow with our intuitive
                    collaboration tools. Boost productivity, enhance
                    communication, and drive innovation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#pozovite-nas"
                  >
                    Pozovite nas
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors texy100 hover:bg-gray-100 text-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
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
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Adresa
                      </h3>
                      <p className="text-gray-600">
                        Misurići BB, Remzina rezidencija
                        <br />
                        Maglaj 74250
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Broj telefona
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Muhidin Basor:{" "}
                        <a href="tel:+38761619033">+38761619033</a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ajdin Basor: <a href="tel:+38762592694">+38762592694</a>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-gray-600">
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
          <p className="text-gray-500 dark:text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link aria-label="Instagram" href="https://www.instagram.com/rolo_stil_maglaj/">
              <InstagramIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
            </Link>
            <Link aria-label="Facebook" href="https://www.facebook.com/profile.php?id=100054437743352">
              <FacebookIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
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
