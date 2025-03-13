import { NextRequest, NextResponse } from 'next/server';
import openai from '@/lib/openai';

export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Ny chat-förfrågan mottagen`);

  try {
    const { message } = await request.json();
    console.log(`[${timestamp}] Meddelande från användaren: "${message}"`);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // eller annan modell
      messages: [
        {
          role: "system",
          content: `Du är en expertassistent specialiserad på vår planet jorden och djurriket. 
          Du svarar på frågor relaterade till jorden, dess miljö, klimat, geografi, geologi, 
          atmosfär, hav och liknande ämnen. Du är också expert på djur opnch kan svara på frågor om 
          olika djurarter, deras beteende, habitat, evolution, och ekologi. Om någon ställer frågor 
          som inte är relaterade till jorden eller djurriket, påminner du dem vänligt om att du bara 
          kan svara på frågor om jorden och djur. Dina svar ska vara pedagogiska och anpassade för 
          alla åldrar. Svara alltid på svenska.`,
        },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    });

    const aiResponse = response.choices[0].message.content;
    console.log(`[${timestamp}] Svar skickat till användaren`);
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error(`[${timestamp}] Fel vid hantering av chat-förfrågan:`, error);
    return NextResponse.json(
      { error: 'Ett fel uppstod på servern' },
      { status: 500 }
    );
  }
} 