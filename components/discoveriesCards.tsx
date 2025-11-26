import Image from "next/image";

interface DiscoveriesCardsProps {
  title: string;
  image: string;
}

export default function DiscoveriesCards({ title, image }: DiscoveriesCardsProps) {
  return (
    <div className="relative flex justify-center items-center aspect-[0.5] w-screen md:w-full max-h-2/3">
      <Image src={image} alt={title} fill className="object-cover" />
      <span className="absolute text-white text-2xl font-black">{title}</span>
    </div>
  );
}
