import { Router } from "express";
import { Configuration, OpenAIApi } from "openai";

// import db from "./db";

import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/corrections", async (req, res) => {
	const apiKey = process.env.OPENAI_KEY;
	const configuration = new Configuration({
		apiKey: apiKey,
	});
	const openai = new OpenAIApi(configuration);
	// const responseGPT = await openai.listEngines();
	// eslint-disable-next-line no-console
	// console.log(responseGPT.data);
	const text = "I iz v good et coding fam..";
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Can you correct this sentence for grammatical issues and make it sound like a nerd: ${text}`,
	});
	// eslint-disable-next-line no-console
	console.log(completion.data.choices[0].text);
	res.json({ msg: completion.data });
});

export default router;
