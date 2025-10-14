import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Add form-name for Netlify Forms detection
    formData.append('form-name', 'contact');

    // Netlify Forms accepts application/x-www-form-urlencoded
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
