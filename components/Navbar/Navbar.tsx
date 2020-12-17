import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import StyledNavLink from "../StyledNavLink/StyledNavLink";
import MobileNav from "../MobileNav/MobileNav";
import LazyImg from "../LazyImg";

const Navbar = (props) => {
  const { children } = props;
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const navLinks = [
    { text: "About", to: "/about" },
    { text: "Work", to: "/work" },
    { text: "Services", to: "/services" },
  ];

  return (
    <div className="w-full ">
      <div className="flex w-full items-center justify-between bg-black bg-opacity-80  px-4 py-6 text-white fixed z-50 right-0 left-0">
        <Link href="/">
          <a className="w-28 md:w-40">
            <LazyImg src="/logo-text.svg" alt="Flamy Logo" />
          </a>
        </Link>
        <div className="hidden md:flex w-4/5 items-center justify-between ">
          {navLinks.map((navLink) => {
            return (
              <Link href={navLink.to} key={navLink.to}>
                {/* @ts-ignore */}
                <StyledNavLink
                  active={
                    router.pathname === `${navLink.to}` ||
                    (router.pathname === "/" && navLink.to === "/about")
                  }
                >
                  {navLink.text}
                </StyledNavLink>
              </Link>
            );
          })}
          {children}
        </div>

        {/* Shown for small screen sizes */}
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-blue-500 hover:bg-blue-900 focus:outline-none ${
              mobileMenu ? "bg-blue-900 text-gray-500" : ""
            } transition duration-150 ease-in-out`}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            {/* <!-- Heroicon name: menu --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {mobileMenu && (
          <MobileNav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
