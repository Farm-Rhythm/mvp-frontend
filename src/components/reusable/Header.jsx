import HeaderGreat from "./HeaderGreat";
import HeaderSmall from "./HeaderSmall";

const Header = ({ searchPage }) => {
  return (
    <div className="sticky-top border-bottom">
      <div className="d-none d-sm-block">
        <HeaderGreat />
      </div>
      <div className="d-sm-none">
        <HeaderSmall />
      </div>
    </div>
  );
};

export default Header;
