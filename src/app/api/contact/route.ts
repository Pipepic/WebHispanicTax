import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Hispanic Financial <contacto@hispanic.financial>',
            to: [process.env.CONTACT_EMAIL || 'apatino@hispanictaxinc.com'],
            subject: `Mensaje de ${name} desde el formulario de la Web`,
            replyTo: email,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                    <h2 style="color: #263A69; margin-bottom: 20px;">Nuevo mensaje de contacto</h2>
                    <p style="margin-bottom: 10px;"><strong>Nombre:</strong> ${name}</p>
                    <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 20px;">
                        <p style="margin-bottom: 5px;"><strong>Mensaje:</strong></p>
                        <p style="white-space: pre-wrap; color: #475569;">${message}</p>
                    </div>
                    <hr style="margin: 30px 0; border: 0; border-top: 1px solid #e2e8f0;" />
                    <p style="font-size: 12px; color: #94a3b8; text-align: center;">Este mensaje fue enviado desde el formulario de contacto de hispanic.financial</p>
                </div>
            `,
        });

        if (error) {
            return NextResponse.json(
                { message: 'Error from Resend service', error },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Message sent successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
