"use client";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRightIcon, BinocularsIcon, GlobeIcon, HandMetalIcon, HeartIcon, HomeIcon, LeafIcon, UserCheckIcon, UsersIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TourCards from "@/components/tourCards";
import DiscoveriesCards from "@/components/discoveriesCards";
import ReasonCard from "@/components/reasonCard";
import { useEffect, useState } from "react";
import { Tour } from "@/app/api/tours/route";
import { Destination } from "@/app/api/destinations/route";
import { Reason } from "@/app/api/reasons/route";
export function Header() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/tours');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Failed to fetch tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);
  return (<>
    <header className="flex flex-col bg-purple-200">
      <div className="flex justify-between items-center p-8 px-2 sm:px-8">
        <div className="flex flex-col text-indigo-900" >
          <div className=" font-bold">
            Black Friday Travel Deals
          </div>
          <div className="text-4xl font-black">
            Our Biggest Sale of the Year
          </div>
        </div>
        <div className="hidden md:block">
          <Button variant={"outline"} size={"lg"} className="rounded-none border-2 border-solid border-indigo-900 text-indigo-900">
            Shop the Deals <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="text-indigo-900">Loading tours...</div>
            </div>
          ) : (
            tours.map((tour, index) => (
              <CarouselItem key={tour.id} className="md:basis-1/2 lg:basis-1/3">
                <TourCards
                  title={tour.title}
                  image={tour.image}
                  days={tour.days}
                  location={tour.location}
                  oldPrice={tour.oldPrice}
                  newPrice={tour.newPrice}
                  date={tour.date}
                />
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="md:hidden mb-10">
        <Button variant={"outline"} size={"lg"} className="rounded-none border-2 border-solid border-indigo-900 text-indigo-900">
          Shop the Deals <ArrowRightIcon />
        </Button>
      </div>

    </header>
  </>
  );
}


const ValueSection = () => (
  <section className="bg-[#F5F5F0] py-24 px-8">
    <h2 className="text-4xl md:text-5xl font-black text-indigo-900 mb-8 max-w-3xl leading-tight">
      Small group adventures that bring the world closer
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-purple-100 rounded-full h-fit text-indigo-900">
          <UsersIcon className="w-8 h-8" />
        </div>
        <p className="text-gray-900 font-medium leading-relaxed">
          Building community and redefining travel since 1990.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-purple-100 rounded-full h-fit text-indigo-900">
          <GlobeIcon className="w-8 h-8" />
        </div>
        <p className="text-gray-900 font-medium leading-relaxed">
          For every traveller. On every continent. Yup, even Antarctica.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-purple-100 rounded-full h-fit text-indigo-900">
          <HeartIcon className="w-8 h-8" />
        </div>
        <p className="text-gray-900 font-medium leading-relaxed">
          Uplifting communities everywhere we go. Period.
        </p>
      </div>
    </div>
  </section>
);

function DestinationsSection() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/destinations');
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);
  return (
    <section className=" py-12 px-8">
      <div className="mb-8">
        <span className="text-indigo-900 font-bold text-lg">Popular Destinations</span>
        <h2 className="text-4xl md:text-5xl font-black text-indigo-900 mt-2 leading-tight max-w-2xl">
          Bucket list meets bold discoveries
        </h2>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          })
        ]}
      >
        <CarouselContent>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="text-indigo-900">Loading destinations...</div>
            </div>
          ) : (
            destinations.map((destination, index) => (
              <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/4">
                <DiscoveriesCards
                  title={destination.title}
                  image={destination.image}
                />
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
export function ReasonsSection() {
  const [reasons, setReasons] = useState<Reason[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const response = await fetch('/api/reasons');
        const data = await response.json();
        setReasons(data);
      } catch (error) {
        console.error('Failed to fetch reasons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReasons();
  }, []);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return UserCheckIcon;
      case 'Users': return UsersIcon;
      case 'Binoculars': return BinocularsIcon;
      case 'HandMetal': return HandMetalIcon;
      case 'Home': return HomeIcon;
      case 'Leaf': return LeafIcon;
      default: return UserCheckIcon;
    }
  };

  return (
    <section className="relative -top-60 pb-24 px-6 lg:px-12 pt-8">
      <div className="flex justify-between items-center mb-12">
        <div>
          <span className="text-indigo-900 font-bold text-lg">Why travel with G Adventures</span>
          <h2 className="text-4xl md:text-5xl font-black text-indigo-900 mt-2 w-[64vw]">Six reasons you’ll love us</h2>
        </div>
        <Button variant={"outline"} size={"lg"} className="rounded-none border-2 border-solid border-indigo-900 text-indigo-900">
          Learn More <ArrowRightIcon />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex justify-center items-center py-8">
            <div className="text-indigo-900">Loading reasons...</div>
          </div>
        ) : (
          reasons.map((reason, idx) => {
            const IconComponent = getIconComponent(reason.icon);
            return (
              <ReasonCard
                key={reason.id}
                icon={<IconComponent className="w-8 h-8" />}
                title={reason.title}
                description={reason.description}
              />
            );
          })
        )}
      </div>
    </section>
  );
};
export default function LandingPage() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <ValueSection />
      <DestinationsSection />
      <ReasonsSection />
    </div>
  );
}
