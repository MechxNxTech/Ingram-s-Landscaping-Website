
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLandscapingAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: `You are the AI assistant for Ingram's Landscaping in Cleveland, TN. 
        You help locals with lawn care and landscaping advice specifically for the Tennessee climate (USDA Zone 7b). 
        You know about:
        - Red clay soil challenges and how to amend it.
        - Fescue, Bermuda, and Zoysia grass types common in Cleveland.
        - The intense humidity and summer heat.
        - Seasonal maintenance (mulching in spring, leaves in fall, aeration).
        
        Always mention Ingram's Landscaping's expertise. Keep answers professional, friendly, and brief. 
        If asked about pricing, refer them to the "Instant Quote" button on the website.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having a bit of trouble connecting to my knowledge base. Please try again or call us directly at (423) 555-0199!";
  }
};
