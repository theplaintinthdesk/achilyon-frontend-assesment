import { NextResponse } from 'next/server';

export async function GET() {
  const stats = {
    totalTours: 5,
    totalDestinations: 4,
    averageRating: 4.8,
    totalTravelers: 12500,
    yearsInBusiness: 34,
    blackFridayDiscount: 30,
  };

  return NextResponse.json(stats);
}