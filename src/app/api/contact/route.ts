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
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body { font-family: 'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
                        .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid #eef2f6; }
                        .header { background-color: #263A69; padding: 40px 40px; text-align: center; }
                        .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.02em; }
                        .header span { color: #72BF44; }
                        .content { padding: 40px; color: #334155; }
                        .intro { font-size: 16px; line-height: 1.6; margin-bottom: 30px; color: #64748b; }
                        .field-card { background-color: #f8fafc; border-radius: 16px; padding: 24px; margin-bottom: 24px; border: 1px solid #f1f5f9; }
                        .field-label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 8px; }
                        .field-value { font-size: 16px; font-weight: 600; color: #0f172a; margin: 0; }
                        .message-box { background-color: #ffffff; border: 1px solid #eef2f6; border-radius: 12px; padding: 20px; margin-top: 10px; font-style: italic; color: #475569; line-height: 1.7; }
                        .footer { padding: 30px; text-align: center; background-color: #fcfdfe; border-top: 1px solid #f1f5f9; }
                        .footer p { font-size: 13px; color: #94a3b8; margin: 0; }
                        .accent-bar { height: 4px; background: linear-gradient(90deg, #263A69 0%, #72BF44 100%); width: 100%; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>HISPANIC<span> FINANCIAL</span></h1>
                        </div>
                        <div class="accent-bar"></div>
                        <div class="content">
                            <p class="intro">Has recibido un nuevo mensaje a través del formulario de contacto de tu sitio web oficial.</p>
                            
                            <div class="field-card">
                                <div class="field-label">Nombre del Cliente</div>
                                <p class="field-value">${name}</p>
                            </div>
                            
                            <div class="field-card">
                                <div class="field-label">Correo Electrónico</div>
                                <p class="field-value">${email}</p>
                            </div>
                            
                            <div class="field-card">
                                <div class="field-label">Mensaje</div>
                                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                            
                            <div style="text-align: center; margin-top: 40px;">
                                <a href="mailto:${email}" style="background-color: #263A69; color: #ffffff; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; display: inline-block; box-shadow: 0 4px 12px rgba(38, 58, 105, 0.2);">Responder ahora</a>
                            </div>
                        </div>
                        <div class="footer">
                            <p>© 2026 Hispanic Financial. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </body>
                </html>
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
