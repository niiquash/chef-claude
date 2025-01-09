import Chef from "../assets/chef.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Chef} alt="chef icon" className="header--logo" />
      <span className="header--logo__text">chef claud</span>
    </header>
  );
};

export default Header;
