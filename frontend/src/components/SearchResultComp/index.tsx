import { useContext } from "react";
import { QueryContext } from "../../QueryContext";

export const SearchResultComp = (): JSX.Element => {
  const { queryAndLinks } = useContext(QueryContext);

  return (
    <div className="SearchResultComp">
      <h2>Results:</h2>
      <div>
        {queryAndLinks &&
          queryAndLinks.links.map((obj) => (
            <a href={obj.link} key={obj.link} target="_blank">
              <p>{obj.title}</p>
            </a>
          ))}
      </div>
    </div>
  );
};
