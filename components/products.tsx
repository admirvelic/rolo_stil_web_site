/* eslint-disable @next/next/no-img-element */
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Home from "@/app/page";
import { SpeedInsights } from "@vercel/speed-insights/next";

type Props = {
  imgPaths: string[];
  productTitle: string;
  productDescription: string;
};

export function Products(props: Props) {
  // Initialize useRouter hook

  return (
    <div>
      <div>
        <header className="flex items-center justify-between h-16 px-4 text-gray-900 shadow-md">
          <div className="flex items-center">
            <a href="/">
              <Button className="rounded-full" size="icon" variant="ghost">
                <ArrowLeftIcon className="h-5 w-5" />
                <span className="sr-only">Go back</span>
              </Button>
            </a>
            <h1 className="text-lg font-medium ml-4">ROLOSTIL</h1>
          </div>
          <div className="flex items-center gap-2" />
        </header>
      </div>
      <div
        key="1"
        className="flex lg:flex-row flex-col lg:pt-5   items-start max-w-6xl px-4 mx-auto py-6"
      >
        <div className="lg:p-10 p-4 items-start">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {props.productTitle}
            </h1>
            <div>
              <p>{props.productDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mx-auto max-w-7xl lg:grid-cols-3 gap-8 pbs-10">
        {props.imgPaths.map((imgPath, i) => (
          <img
            key={i}
            alt="Card Image"
            className="h-full w-full object-cover shadow-lg rounded-lg"
            src={imgPath}
          />
        ))}
      </div>

      <footer className="w-full py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-gray-500 ">
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

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
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
