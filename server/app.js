import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";

import apiRouter from "./api";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";

const app = express();

app.use(cors());
app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());
app.use(
	cookieSession({
		name: "session",
		keys: ["super_secret_key_dont_hack_please"],

		// Cookie Options
		maxAge: 7 * 24 * 60 * 60 * 1000, // 1 Week
	})
);

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));

app.use(logErrors());

export default app;
