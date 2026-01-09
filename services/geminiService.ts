import { GoogleGenAI, Type } from "@google/genai";

export interface AIRecommendation {
  id: string;
  name: string;
  category: string;
  level: string; 
  actionName: string; 
  flavorText: string;
  img: string;
  price: string;
}

export const getAIRecommendations = async (category: string): Promise<AIRecommendation[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Actúa como YAQ! POP, un curador K-Pop. 
  Genera 3 recomendaciones de ${category}. 
  Responde estrictamente en JSON con este formato: id, name, level (9.0-10), actionName (concepto), flavorText, img (URL Unsplash), price.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              name: { type: Type.STRING },
              level: { type: Type.STRING },
              actionName: { type: Type.STRING },
              flavorText: { type: Type.STRING },
              img: { type: Type.STRING },
              price: { type: Type.STRING },
            },
            required: ["id", "name", "level", "actionName", "flavorText", "img", "price"]
          }
        }
      },
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const getGeminiResponse = async (message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [{ role: 'user', parts: [{ text: message }] }],
    config: {
        systemInstruction: "Eres YAQ! POP, un Idol energético. Usa emojis ✨💖. Responde corto y slay.",
    }
  });
  return { text: response.text || "" };
};
