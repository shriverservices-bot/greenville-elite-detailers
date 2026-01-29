
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

// Initialize lazily to avoid top-level crashes if API key is missing
let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("VITE_GEMINI_API_KEY is missing!");
    }
    ai = new GoogleGenAI({ apiKey: apiKey || 'dummy_key' }); // Prevent crash on empty key
  }
  return ai;
};

export const analyzeCarCondition = async (base64Image: string): Promise<AnalysisResult> => {
  // Use the lazy client
  const client = getAIClient();
  try {
    const response = await client.models.generateContent({
      model: "gemini-1.5-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: base64Image.split(',')[1] || base64Image
            }
          },
          {
            text: "Analyze this car's exterior/interior condition. Identify dirt, swirl marks, oxidation, or stains. Suggest the best detailing package from: 'Express Shine', 'Elite Full Detail', or 'Ceramic Pro Shield'. Return the result in JSON format."
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            condition: { type: Type.STRING, description: "Detailed description of visible car condition" },
            recommendation: { type: Type.STRING, description: "Specific cleaning recommendation" },
            urgency: { type: Type.STRING, enum: ["low", "medium", "high"] },
            suggestedPackage: { type: Type.STRING, description: "One of the three packages mentioned" }
          },
          required: ["condition", "recommendation", "urgency", "suggestedPackage"]
        }
      }
    });

    return JSON.parse(response.text || '{}') as AnalysisResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw new Error("Failed to analyze car condition. Please try again.");
  }
};
