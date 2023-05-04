import { duckResObj, proxyResObj } from "../types";
import fs from "fs";

const filePath = "./queries.txt";

const writeToFile = (query: string): void => {
  fs.appendFile(filePath, query + "\n", (appendError) => {
    if (appendError) {
      console.error("Error saving file:", appendError);
    } else {
      console.log("File saved successfully!");
    }
  });
};

export const saveQueryToLocal = (query: string): void => {
  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) {
      //if the file does not exist
      writeToFile(query);
      return;
    }

    // Check if the query already exists in the file
    if (!data.includes(query)) {
      writeToFile(query);
      return;
    }
    // console.log("Query already exists in the file:", query);
  });
};

export const readQueriesFromLocal = (): Promise<string[]> => {
  return new Promise((resolve, _) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      //if the file does not exist, return empty array
      if (error) {
        resolve([]);
        //if the file does exist but it is empty, return empty array
      } else if (data.trim() === "") {
        resolve([]);
      } else {
        // return array of queries
        resolve(
          data
            .trim()
            .split("\n")
            .map((query) => query.trim())
        );
      }
    });
  });
};

export const filterLinkAndTitle = (
  relatedTopics: duckResObj[]
): proxyResObj[] => {
  if (relatedTopics) {
    return relatedTopics
      .filter(
        (obj: duckResObj) =>
          obj.hasOwnProperty("FirstURL") && obj.hasOwnProperty("Text")
      )
      .map((obj: duckResObj) => ({ link: obj.FirstURL, title: obj.Text }));
  } else {
    return []; // Jay-Z example: DuckDuck returns 200 with empty body
  }
};
