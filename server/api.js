import { Router } from "express";
import { Configuration, OpenAIApi } from "openai";

//import db from "./db";

import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

//post corrections route

router.post("/corrections", async (req, res) => {
	const apiKey = process.env.OPENAI_KEY;
	const content = req.body.content; //taking the text data from textarea
	const configuration = new Configuration({
		apiKey: apiKey,
	});
	const openai = new OpenAIApi(configuration);
	// const responseGPT = await openai.listEngines();
	// eslint-disable-next-line no-console
	// console.log(responseGPT.data);
	const text = content;
	//const text = "I iz v good et coding.."; //hard coded text part for test
	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo", //option (text-davinci-003)
		messages: [
			{
				role: "user",
				content: `Can you correct this sentence for grammatical issues and give it three options: ${text}`,
			},
		],
	});

	//part for text-davinci-003

	/*const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Can you correct this sentence for grammatical issues and make it old school : ${text}`,
	}); //console.log(completion.data.choices[0].text);*/

	// eslint-disable-next-line no-console
	console.log(completion.data.choices[0].message);
	res.json({ msg: completion.data });
});

export default router;
