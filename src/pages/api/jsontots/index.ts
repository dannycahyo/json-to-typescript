import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";
import { jsonToTsPrompt } from "./prompt";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonData: string = req.body.jsonData || "";
  try {
    JSON.parse(jsonData);
  } catch (error) {
    res.status(400).json({
      error: "Please enter a valid JSON",
    });
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: jsonToTsPrompt(jsonData),
      temperature: 0.2,
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
