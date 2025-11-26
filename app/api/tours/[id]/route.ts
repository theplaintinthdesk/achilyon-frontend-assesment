import { NextResponse } from 'next/server';
import { Tour } from '../route';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'Tour ID is required' }, { status: 400 });
  }

  const tours: Tour[] = [
    {
      id: "1",
      title: "Japan - The Land of the Rising Sun",
      image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
      days: 13,
      location: "Kyoto, Japan to Tokyo, Japan",
      oldPrice: "$11,799.00",
      newPrice: "$8,259.00",
      date: "Dec 01, 2025",
    },
    {
      id: "2",
      title: "Columbia River Cruise",
      image: "https://images.pexels.com/photos/176816/pexels-photo-176816.jpeg",
      days: 6,
      location: "Columbia, MD, United States",
      oldPrice: "$2,949.00",
      newPrice: "$2,507.00",
      date: "Apr 18, 2026",
    },
    {
      id: "3",
      title: "Hildesheim – The Heart of Romanesque Splendor",
      image: "https://images.pexels.com/photos/591383/pexels-photo-591383.jpeg",
      days: 20,
      location: "Hildesheim, NDS, Germany",
      oldPrice: "$3,549.00",
      newPrice: "$2,484.00",
      date: "Dec 12, 2025",
    },
    {
      id: "4",
      title: "The Great Wall of China",
      image: "https://images.pexels.com/photos/1423580/pexels-photo-1423580.jpeg",
      days: 20,
      location: "Beijing, China",
      oldPrice: "$3,549.00",
      newPrice: "$2,484.00",
      date: "Dec 12, 2025",
    },
    {
      id: "5",
      title: "Saint-Florent – Between Vineyards and Viridian Seas",
      image: "https://images.pexels.com/photos/34832675/pexels-photo-34832675.jpeg",
      days: 20,
      location: "Saint-Florent, Corse, France",
      oldPrice: "$3,549.00",
      newPrice: "$2,484.00",
      date: "Dec 12, 2025",
    }
  ];

  const tour = tours.find(t => t.id === id);
  
  if (!tour) {
    return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
  }

  return NextResponse.json(tour);
}