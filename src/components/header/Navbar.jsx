import "./Navbar.css";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full py-2">
      <nav className="container">
        <div className="nav_block">
          <div className="header_logo">
            <img src={Logo} className="w-[140px] lg:w-auto" alt="Elemes.id" />
          </div>
          <div className="nav_link hidden lg:block">
            <ul className="lg:flex lg:gap-10">
              <li>Home</li>
              <li>About</li>
              <li className="relative">
                Promotions
                <span className="absolute -right-4 bg-[#E7462D] px-2 text-white rounded-lg py-1 bottom-5">
                  HOT
                </span>
              </li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="nav_button">
            <button className="hidden lg:block">Masuk</button>
            <button className="daftar_btn">Daftar Sekarang</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
