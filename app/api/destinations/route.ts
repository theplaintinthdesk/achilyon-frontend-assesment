import { NextResponse } from 'next/server';

export interface Destination {
  id: string;
  title: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: "1",
    title: "Antartica",
    image: "https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg",
  },
  {
    id: "2",
    title: 'Mexico',
    image: "https://images.pexels.com/photos/2239844/pexels-photo-2239844.jpeg"
  },
  {
    id: "3",
    title: 'Peru',
    image: "https://images.pexels.com/photos/90597/pexels-photo-90597.jpeg"
  },
  {
    id: "4",
    title: "Scotland",
    image: "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg",
  },
];

export async function GET() {
  return NextResponse.json(destinations);
}