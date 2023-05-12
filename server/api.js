import { Router } from "express";
import { Configuration, OpenAIApi } from "openai";
import passport from "passport";
import "./passport";

import db from "./db";

import logger from "./utils/logger";

const router = Router();

//auth
router.get("/auth/login/success", (req, res) => {
	try {
		if (!req.session.user) {
			res.json();
			throw new Error("no user");
		} else {
			res.json(req.session.user);
		}
	} catch (err) {
		return err;
	}
});

//RETURN for the frontend authentication fetch method! Don't delete please!
router.get("/auth/login/profile", (req, res) => {
	try {
		if (!req.session.user) {
			res.json(false);
			throw new Error("no profile");
		} else {
			res.json(true);
		}
	} catch (error) {
		return error;
	}
});

router.get("/auth/logout", (req, res) => {
	req.session = null;
	res.redirect("/LandingPage");
	res.end();
});

router.get("/auth/login/failed", (req, res) => {
	res.status(401).json({
		success: false,
		message: "Login failed!",
	});
	res.redirect("/LandingPage");
});

router.get(
	"/auth/github",
	passport.authenticate("github", { scope: ["profile"] })
);

router.get("/auth/github/callback", function (req, res, next) {
	passport.authenticate("github", function (err, user) {
		req.session.user = user;
		if (err) {
			return next(err);
		}
		res.redirect("/");
	})(req, res, next);
});

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/stats", (request, response) => {
	const { count, userId } = request.session;
	response.json({ count: count, userId: userId });
	// use {count, userId} for shorthand notation (IF NEEDED!)
});

router.get("/login", (request, response) => {
	request.session.count = 0;
	request.session.userId = "arya123";
	response.json({ message: "Hi there" });
});

router.get("/save", (request, response) => {
	request.session.count++;
	response.json({ message: "Ok saved!" });
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
// eslint-disable-next-line no-console

// Get all histories from db
router.get("/history", (req, res) => {
	const { githubId, search, sort, filterDateFrom, filterDateTo } = req.query;

	if (githubId) {
		let query = `SELECT history.* FROM users INNER JOIN history ON users.id = history.user_id AND users.github_id = ${githubId} `;
		if (search && search.length < 50) {
			query += ` AND ( history.input ~* '${search}' OR history.output ~* '${search}')`;
		}
		if (filterDateFrom) {
			query += ` AND history.timestamp >= '${filterDateFrom}' `;
		}
		if (filterDateTo) {
			query += ` AND history.timestamp <= '${filterDateTo}' `;
		}
		if (["ASC", "DESC"].includes(sort)) {
			query += `ORDER BY ID ${sort}`;
		} else {
			query += "ORDER BY ID ASC";
		}
		db.query(query)
			.then((result) => {
				res.status(200);
				res.json({ success: true, message: "success", data: result?.rows });
			})
			.catch((error) => {
				res.status(500);
				res.json({ success: false, message: error, data: [] });
			});
	} else {
		res.status(403);
		res.json({ success: false, message: "invalid request!", data: [] });
	}
});

router.post("/history", (req, res) => {
	const { input, output, user_id } = req.body;
	// eslint-disable-next-line no-console
	console.log("github id - " + user_id);
	if (input && output && user_id) {
		db.query(
			`INSERT INTO history(input ,output, user_id, timestamp ) VALUES ('${input}' ,'${output}','${user_id}', current_timestamp ) RETURNING id`
		)
			.then((result) => {
				res.status(200);
				res.json(result?.rows);
			})
			.catch((error) => {
				res.status(500);
				res.send(error);
			});
	} else {
		res.status(403);
		res.json({ success: false, message: "invalid request!" });
	}
});

router.delete("/history", (req, res) => {
	const { id } = req.body;
	if (id) {
		db.query(`DELETE FROM history WHERE id =${id}`)
			.then((result) => {
				res.status(200);
				res.json(result?.rows);
			})
			.catch((error) => {
				res.status(500);
				res.send(error);
			});
	} else {
		res.status(403);
		res.json({ success: false, message: "invalid request!" });
	}
});

router.delete("/histories", (req, res) => {
	const { github_id } = req.body;
	if (github_id) {
		db.query(
			`DELETE FROM history WHERE user_id=(SELECT id FROM users WHERE github_id = ${github_id}) `
		)
			.then((result) => {
				res.status(200);
				res.json(result?.rows);
			})
			.catch((error) => {
				res.status(500);
				res.send(error);
			});
	} else {
		res.status(403);
		res.json({ success: false, message: "invalid request!" });
	}
});

export default router;
