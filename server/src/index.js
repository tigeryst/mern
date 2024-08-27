import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import methodOverride from "method-override";

import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";

import morgan from "morgan";

import routes from "./routes/index.js";

const app = express();

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/mini-mern";
mongoose
  .connect(dbUrl)
  .then(console.log("Database connected"))
  .catch((e) => console.log(e));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

// Set up securities
app.use(mongoSanitize());
app.use(helmet());

// Set up logging
app.use(
  morgan(function (tokens, req, res) {
    if (tokens.method(req, res) !== "HEAD") {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, "content-length"),
        "-",
        tokens["response-time"](req, res),
        "ms",
      ].join(" ");
    }
  })
);

// Define routes
app.use("/", routes);

// Start up server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
