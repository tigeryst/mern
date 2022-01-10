import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import methodOverride from "method-override";

import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";

import morgan from "morgan";

import routes from "./routes/index.js";

const app = express();

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/portfolio";
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
const scriptSrcUrls = [
  "https://stackpath.bootstrapcdn.com/",
  "https://kit.fontawesome.com/",
  "https://cdnjs.cloudflare.com/",
  "https://cdn.jsdelivr.net/",
  "https://unpkg.com/axios/",
  "https://cdn.datatables.net/",
  "https://unpkg.com/react@17/",
  "https://unpkg.com/react-dom@17/",
];
if (process.env.NODE_ENV !== "production")
  scriptSrcUrls.push("https://livejs.com/");
const styleSrcUrls = [
  "https://stackpath.bootstrapcdn.com/",
  "https://fonts.googleapis.com/",
  "https://cdn.jsdelivr.net/",
  "https://cdn.datatables.net/",
];
const connectSrcUrls = [
  "https://ka-f.fontawesome.com/",
  "https://ipinfo.io/country",
];
const fontSrcUrls = [
  "https://ka-f.fontawesome.com/",
  "https://fonts.gstatic.com/",
];
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", "blob:"],
      objectSrc: [],
      imgSrc: [
        "'self'",
        "blob:",
        "data:",
        `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`,
        "https://images.unsplash.com/",
      ],
      fontSrc: ["'self'", ...fontSrcUrls],
    },
  })
);

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
