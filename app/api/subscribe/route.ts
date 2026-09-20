import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const notification = {
      to: process.env.EMAIL_ADDRESS,
      subject: "New Newsletter Subscription",
      message: `New subscriber: ${email}`,
    };

    // Simulate sending notification
    console.log("Newsletter notification:", notification);

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing!",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}