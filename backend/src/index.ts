import express, { Request, Response, NextFunction, Application } from "express";
import createHttpError from "http-errors";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middlewares";

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

config();

const PORT: Number = Number(process.env.PORT) || 4000;
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api", limiter, router);
app.set("trust proxy", 1);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`);
});
