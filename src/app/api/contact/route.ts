import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // TODO: Integrate with actual email service (SendGrid, AWS SES, or NodeMailer)
        // For now, valid submission log
        console.log('Contact Form Submission:', { name, email, message });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact Form Error:', error);
        return NextResponse.json(
            { message: 'Error sending message' },
            { status: 500 }
        );
    }
}
