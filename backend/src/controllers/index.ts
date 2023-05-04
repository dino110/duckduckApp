import { Request, Response } from "express";
import axios from "axios";
import { duckResObj } from "../types";
import {
  saveQueryToLocal,
  filterLinkAndTitle,
  readQueriesFromLocal,
} from "../utils";

export const getDuck = async (req: Request, res: Response) => {
  const query = req.method == "GET" ? req.query.q : req.body.query; // get query from body if method is not GET (POST)
  if (!query) {
    return res.status(400).send({
      error: "No query provided!",
    });
  }

  try {
    const duckResponse = await axios.get(
      `https://api.duckduckgo.com/?q=${query}&format=json`
    );

    if (duckResponse.status >= 200 && duckResponse.status < 300) {
      const finalData: duckResObj[] = filterLinkAndTitle(
        duckResponse.data.RelatedTopics
      );
      saveQueryToLocal(String(query));
      res.status(200).send(finalData);
    } else {
      res.status(duckResponse.status).send("Error...");
    }
  } catch (error: any) {
    const err = error.message || "Some error occured..";
    console.error(err);
    res.status(error.response.status || 500).send(err);
  }
};

// read history of queries stored in local file (./)
export const getQueryList = async (_: Request, res: Response) => {
  // try {
  const queries = await readQueriesFromLocal();
  res.status(200).send({ queries });
  /* } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Error reading file" });
  }*/
};
