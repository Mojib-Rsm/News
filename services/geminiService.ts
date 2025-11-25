import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client safely.
// In a real production app, you might want to handle the missing key more gracefully in the UI.
const ai = new GoogleGenAI({ apiKey });

export const summarizeArticle = async (articleContent: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const prompt = `
      You are a professional news editor. Please summarize the following news article text in Bengali.
      Keep it concise (under 100 words), engaging, and capture the main points.
      
      Article Text:
      ${articleContent}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "দুঃখিত, এই মুহূর্তে সারসংক্ষেপ তৈরি করা যাচ্ছে না।";
  } catch (error) {
    console.error("Error summarizing article:", error);
    return "সারসংক্ষেপ তৈরিতে সমস্যা হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।";
  }
};