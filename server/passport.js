import "express";
import passport from "passport";
import "dotenv/config";

const GitHubStrategy = require("passport-github2").Strategy;

const users = [];

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	const user = users.find((u) => u.id === id);
	done(null, user);
});

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID ?? "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
			callbackURLa:
				"/api/auth/github/callback" ??
				"http://localhost:3000/api/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			const user = {
				username: profile.username,
				id: profile.id,
				avatar: profile.photos[0].value,
			};
			const exist = users.find((u) => u.id === user.id);
			if (!exist) {
				users.push(user);
			}
			done(null, user);
		}
	)
);
