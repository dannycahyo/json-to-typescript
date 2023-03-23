import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";
import { attributeMapperPrompt } from "./prompt";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const typeScriptType: string = req.body.typeScriptType || "";

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: attributeMapperPrompt(typeScriptType),
      temperature: 0.1,
      max_tokens: 3028,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    res.status(500).json({
      error: {
        message: `An error occurred during your request. ${error}`,
      },
    });
  }
}
