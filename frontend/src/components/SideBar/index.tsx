import { useContext } from "react";
import { QueryContext, Link, Query } from "../../QueryContext";
import { getData } from "../../api";

export const SideBar = (): JSX.Element => {
  const { queryList, addQueryAndLinks } = useContext(QueryContext);

  const repeatApiReq = async (query: Query) => {
    const links: Link[] = await getData(query);
    addQueryAndLinks({ query, links: [...links] });
  };

  return (
    <div className="SideBar">
      <h2>Queries list:</h2>
      <div className="QueriesList">
        {queryList.map((query: Query, index: number) => (
          <p key={index} onClick={() => repeatApiReq(query)}>
            {query}
          </p>
        ))}
      </div>
    </div>
  );
};
