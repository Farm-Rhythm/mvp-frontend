import Header from "../components/reusable/Header";
import Footer from "../components/reusable/Footer";
import SearchContent from "../components/searchView/SearchContent";

const Search = () => {
  return (
    <div
      className="d-flex flex-column justify-content-between border border-danger"
      style={{ height: "100vh" }}
    >
      <Header />
      <SearchContent />
      <Footer />
    </div>
  );
};

export default Search;
