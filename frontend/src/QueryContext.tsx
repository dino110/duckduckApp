import { createContext, useState, ReactNode } from "react";

export type Query = string;

export type Link = {
  title: string;
  link: string;
};

export type QueryAndLinks = {
  query: Query;
  links: Link[];
};

type QueryProvideProps = {
  children: ReactNode;
};

interface QueryContextInterface {
  queryAndLinks: QueryAndLinks;
  queryList: Query[];
  addQueryAndLinks: (queryAndLinks: QueryAndLinks) => void;
  addToQueryList: (queryList: Query[]) => void;
}

const initialQueries = {
  queryAndLinks: {
    query: "",
    links: [],
  },
  queryList: [],
  addQueryAndLinks: (queryAndLinks: QueryAndLinks) => {},
  addToQueryList: (queryList: Query[]) => {},
} as QueryContextInterface;

export const QueryContext = createContext(initialQueries);

export const QueryProvider = ({ children }: QueryProvideProps) => {
  const [queryAndLinks, setQueryAndLinks] = useState<QueryAndLinks>({
    query: "",
    links: [],
  });
  const [queryList, setQueryList] = useState<Query[]>([]);

  const addQueryAndLinks = (newQueryAndLinks: QueryAndLinks) => {
    setQueryAndLinks(newQueryAndLinks);
  };

  const addToQueryList = (queryListNew: Query[]) => {
    const uniqArr = Array.from(new Set([...queryList, ...queryListNew]));
    setQueryList([...uniqArr]);
  };

  return (
    <QueryContext.Provider
      value={{ queryAndLinks, queryList, addQueryAndLinks, addToQueryList }}
    >
      {children}
    </QueryContext.Provider>
  );
};
