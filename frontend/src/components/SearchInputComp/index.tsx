import { useState, useContext, useEffect } from "react";
import searchIcon from "../../assets/Search.svg";
import duckLogo from "../../assets/duckgo.svg";
import { QueryContext, Link } from "../../QueryContext";
import { getData, getUsedQueries } from "../../api";

export const SearchInputComp = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>("");
  const { queryAndLinks, addQueryAndLinks, addToQueryList } =
    useContext(QueryContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const links: Link[] = await getData(searchInput.trim());
    addQueryAndLinks({ query: searchInput, links: [...links] });
    addToQueryList([searchInput.trim()]);
  };

  const setUsedQueries = async () => {
    const queries = await getUsedQueries();
    addToQueryList([...queries]);
  };

  useEffect(() => {
    setUsedQueries();
  }, []);

  useEffect(() => {
    if (queryAndLinks) {
      setSearchInput(queryAndLinks.query);
    }
  }, [queryAndLinks]);

  return (
    <div className="SearchInputComp">
      <section className="DuckLogo">
        <img src={duckLogo} width={72} height={72}></img>
        <h2>DuckDuckGo</h2>
      </section>

      <form className="SearchInputForm" onSubmit={handleSubmit}>
        <img src={searchIcon} className="SearchIcon" />
        <input
          placeholder="Input query"
          type="text"
          autoComplete="off"
          value={searchInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="SearchButton"
          disabled={searchInput.trim().length == 0}
          type="submit"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};
