import OpenAI from "openai";
import { OPENAIKEY } from "./constant";

const openai = new OpenAI({
  apiKey: OPENAIKEY,
  dangerouslyAllowBrowser: true,
  // This is the default and can be omitted
});

export default openai;
