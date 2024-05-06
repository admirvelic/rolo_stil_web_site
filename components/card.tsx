/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  imgPath: string;
  productTitle: string;
  productDescription: string;
};
export function PhotoCard(props: Props) {
  return (
    <Card className="flex lg:flex-row flex-col w-full max-w-md md:max-w-none md:gap-6">
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
        <p className="text-gray-500">{props.productDescription}</p>
      </div>
    </Card>
  );
}
