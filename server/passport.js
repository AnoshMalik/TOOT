import "express";
import passport from "passport";
import "dotenv/config";

import debe from "../db/db-config.js";

const GitHubStrategy = require("passport-github2").Strategy;

//const users = []; //data variable

// for variable connection
/*passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	const user = users.find((u) => u.id === id);
	done(null, user);
});*/

//for database connection
passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
	debe("users")
		.where({ id: id })
		.then((user) => {
			if (!user) {
				done(new Error("User not found!"));
			}
			done(null, user);
		});
});

//passport strategy connection without database connecting to the data variable
/*passport.use(
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
			//console.log(profile);
			done(null, user);
		}
	)
);*/

// passport strategy with knex connection to database
passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID ?? "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
			callbackURLa:
				"/api/auth/github/callback" ??
				"http://localhost:3000/api/auth/github/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			debe("users")
				.where({ github_id: profile.id })
				.then((user) => {
					if (user.length < 1) {
						return debe("users")
							.insert({
								username: profile.username,
								name: profile.photos[0].value,
								github_id: profile.id,
							})
							.returning("*")
							.then((user) => {
								return done(null, user[0]);
							});
					} else {
						//console.log(user);
						return done(null, user[0]);
					}
				});
		}
	)
);

// another possible database connection with knex try catch function
/*passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID ?? "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
			callbackURLa:
				"/api/auth/github/callback" ??
				"http://localhost:3000/api/auth/github/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			try{
			const user = await debe("users").where({ github_id: profile.id }).first();
			if (!user) {
				const [newUser] = await debe("users").insert({
					username: profile.username,
					name: profile.photos[0].value,
					github_id: profile.id,
				}).returning("*");
				return done (null, newUser);
			} else {
				//console.log(user);
				return done (null, user);
			}
		} catch (err) {
			return ("error here: " + err);
		}
	}
	)
);*/
