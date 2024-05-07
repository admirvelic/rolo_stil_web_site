/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  imgPath: string;
  productTitle: string;
  productDescription: string;
  route: string;
};
export function PhotoCard(props: Props) {
  return (
    <Card className="flex lg:flex-row flex-col  w-full max-w-md md:max-w-none md:gap-6">
      <div className=" lg:pl-4 p-4 flex justify-center items-center">
        <div className="  relative  aspect-[4/5] w-full lg:h-64 lg:w-auto">
          <Image
            alt="Card Image"
            className="h-full w-full object-cover rounded-lg"
            src={props.imgPath}
            fill
          />
        </div>
      </div>
      <div className="gap-1 pt-0 lg:px-0 p-4 lg:pr-4 flex justify-center flex-col ">
        <h3 className="text-xl font-bold">{props.productTitle}</h3>
        <p className="pb-8 text-gray-350">{props.productDescription}</p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md borde border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors texy100 hover:bg-gray-100 text-blue-900 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href={props.route}>
          Ponuda
        </Link>
      </div>
    </Card>
  );
}
