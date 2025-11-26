import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Calendar, MapPin } from "lucide-react";

interface TourCardsProps {
  title: string;
  image: string;
  days: number;
  location: string;
  oldPrice: string;
  newPrice: string;
  date: string;
}

export default function TourCards({ title, image, days, location, oldPrice, newPrice, date }: TourCardsProps) {
  return (
    <Card className=" border-none shadow-none gap-0 bg-purple-200">
      <CardHeader className="p-0">
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            src={image}
            alt="Tour Cards"
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="text-lg">
            {title}
          </div>
          <div className="flex items-center gap-4 text-sm ">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{days} days</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2 pt-2">
            <span className="text-sm ">From <del>{oldPrice}</del></span>
            <span className="text-md font-bold ">{newPrice}</span>
            <span className="text-sm font-medium">• on {date}</span>
          </div>

        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full pt-2">
          <a href="#" className="text-indigo-900 font-bold text-sm underline underline-offset-4">View tour</a>
        </div>
      </CardFooter>
    </Card>
  );
}
