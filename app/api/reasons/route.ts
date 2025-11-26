import { NextResponse } from 'next/server';

export interface Reason {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    id: "1",
    icon: "UserCheck",
    title: "Guides so good we call them CEOs",
    description: "Our Chief Experience Officers have local smarts, big energy, and serious skills to make your trip unforgettable."
  },
  {
    id: "2",
    icon: "Users",
    title: "Small groups, lots of passports",
    description: "Small groups mean big connections. And with travellers from all over, every trip feels globally inspired."
  },
  {
    id: "3",
    icon: "Binoculars",
    title: "As ungrouped as it gets",
    description: "The safety of a group, with freedom to explore on your own terms."
  },
  {
    id: "4",
    icon: "HandMetal",
    title: "Immersive experiences are how we roll",
    description: "Get hands-on with culture, food, and local life. No sidelines, just full-on adventure."
  },
  {
    id: "5",
    icon: "Home",
    title: "Doing good has never been so fun",
    description: "Travel that helps people, places, and the planet – powered by our Community Tourism model."
  },
  {
    id: "6",
    icon: "Leaf",
    title: "Book with all the confidence in the world",
    description: "No stress here. Flexible policies, guaranteed departures, and support whenever you need it."
  }
];

export async function GET() {
  return NextResponse.json(reasons);
}