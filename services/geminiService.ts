import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Island, TourInterest, GeneratedItinerary } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateTourItinerary = async (
  island: Island,
  durationHours: number,
  interest: TourInterest
): Promise<GeneratedItinerary> => {
  
  if (!apiKey) {
    // Fallback for demo purposes if API key is not present in environment
    console.warn("No API KEY found. Returning mock data.");
    return {
      title: `Sample ${durationHours}-Hour ${interest} Tour of ${island}`,
      stops: [
        { locationName: "Mdina (Silent City)", description: "Explore the ancient walled city and cathedral.", estimatedDuration: "1.5 hours" },
        { locationName: "Dingli Cliffs", description: "Breathtaking views of the Mediterranean sea.", estimatedDuration: "45 mins" },
        { locationName: "Valletta Waterfront", description: "Lunch with a view of the Grand Harbour.", estimatedDuration: "1.5 hours" }
      ]
    };
  }

  const prompt = `Create a premium private driver tour itinerary for ${island}.
  Duration: ${durationHours} hours.
  Focus: ${interest}.
  The tone should be sophisticated and exciting for a tourist.
  Provide a list of specific stops with a short description for each.`;

  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "A catchy title for the tour itinerary" },
      stops: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            locationName: { type: Type.STRING },
            description: { type: Type.STRING },
            estimatedDuration: { type: Type.STRING }
          },
          required: ["locationName", "description", "estimatedDuration"]
        }
      }
    },
    required: ["title", "stops"]
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedItinerary;

  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw error;
  }
};