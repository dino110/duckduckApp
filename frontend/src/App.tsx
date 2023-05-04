import { Header } from "./components/Header";
import { SearchInputComp } from "./components/SearchInputComp";
import { SideBar } from "./components/SideBar";
import { SearchResultComp } from "./components/SearchResultComp";
import { QueryProvider } from "./QueryContext";
import "./scss/main.scss";

function App() {
  return (
    <>
      <Header />
      <QueryProvider>
        <SearchInputComp />
        <div className="MainSection">
          <SideBar />
          <SearchResultComp />
        </div>
      </QueryProvider>
    </>
  );
}

export default App;
