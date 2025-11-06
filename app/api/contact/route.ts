import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    console.log('Nova mensagem de contato recebida:');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
    console.log('---');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar mensagem de contato:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    );
  }
}
