import express from "express";
//import apicache from "apicache";
import { getDuck, getQueryList } from "../controllers";

//let cache = apicache.middleware;
const router: express.Router = express.Router();

router.get("/queries", getQueryList);
router.get("/", getDuck);
router.post("/post", getDuck);

export default router;
