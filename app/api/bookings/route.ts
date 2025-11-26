import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, tourId, message } = body;

    if (!name || !email || !tourId) {
      return NextResponse.json(
        { error: 'Name, email, and tour ID are required' },
        { status: 400 }
      );
    }

    const booking = {
      id: `BK-${Date.now()}`,
      name,
      email,
      tourId,
      message: message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    console.log('New booking:', booking);

    return NextResponse.json({
      success: true,
      booking,
      message: 'Booking submitted successfully. We will contact you soon.'
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}