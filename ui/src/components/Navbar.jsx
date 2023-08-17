import Logo from "../assets/Group 1000005948.png";

export default function Navbar() {
  return (
    <header className="bg-white drop-shadow-lg">
      <nav
        className="flex items-center justify-center p-0 lg:px-2"
      >
        <div className="m-2">
          <a href="/">
            {" "}
            <h1 className="h-5">
              <img src={Logo} alt="" />
            </h1>
          </a>
        </div>
      </nav>
    </header>
  );
}
