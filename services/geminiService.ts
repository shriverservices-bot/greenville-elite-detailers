
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeCarCondition = async (base64Image: string): Promise<AnalysisResult> => {
  try {
    const response = await ai.models.generateContent({
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
