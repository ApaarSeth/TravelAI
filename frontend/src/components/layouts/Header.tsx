import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const router = useRouter();
  router.pathname.split("/")[1].length;
  console.log(router);
  return (
    <div
      style={{
        height: router.pathname.split("/")[1].length ? "20vh" : "50vh",
      }}
    >
      <div
        style={{
          zIndex: -1,
          height: router.pathname.split("/")[1].length ? "20vh" : "50vh",
          background:
            "linear-gradient(0.9deg, rgba(248, 248, 248, 0) -44.03%, rgba(145, 144, 144, 0) -44.02%, rgba(0, 0, 0, 0.25) 17.92%), url('image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex py-3 px-3"
      >
        <h3 className="text-white text-base font-semibold">Travel AI</h3>
        <nav>
          <section className="MOBILE-MENU flex md:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div
              className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}
            >
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">Home</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About Us</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">Contact</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-6 md:flex px-8">
            <li className="text-white">
              <a className="text-xs font-thin" href="/about">
                Home
              </a>
            </li>
            <li className="text-white">
              <a className="text-xs font-thin" href="/about">
                About Us
              </a>
            </li>
            <li className="text-white">
              <a className="text-xs font-thin" href="/about">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
