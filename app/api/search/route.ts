import { NextResponse } from 'next/server';

export interface SearchFilters {
  destination?: string;
  minDays?: number;
  maxDays?: number;
  minPrice?: number;
  maxPrice?: number;
  date?: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const destination = searchParams.get('destination');
  const minDays = searchParams.get('minDays');
  const maxDays = searchParams.get('maxDays');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const date = searchParams.get('date');

  const tours = [
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

  let filteredTours = tours;

  if (destination) {
    filteredTours = filteredTours.filter(tour => 
      tour.location.toLowerCase().includes(destination.toLowerCase()) ||
      tour.title.toLowerCase().includes(destination.toLowerCase())
    );
  }

  if (minDays) {
    filteredTours = filteredTours.filter(tour => tour.days >= parseInt(minDays));
  }

  if (maxDays) {
    filteredTours = filteredTours.filter(tour => tour.days <= parseInt(maxDays));
  }

  if (minPrice) {
    filteredTours = filteredTours.filter(tour => {
      const price = parseFloat(tour.newPrice.replace('$', '').replace(',', ''));
      return price >= parseFloat(minPrice);
    });
  }

  if (maxPrice) {
    filteredTours = filteredTours.filter(tour => {
      const price = parseFloat(tour.newPrice.replace('$', '').replace(',', ''));
      return price <= parseFloat(maxPrice);
    });
  }

  if (date) {
    filteredTours = filteredTours.filter(tour => tour.date.includes(date));
  }

  return NextResponse.json(filteredTours);
}