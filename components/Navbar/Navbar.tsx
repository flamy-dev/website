import Link  from "next/link";
import { useRouter } from "next/router";
import StyledNavLink from "../StyledNavLink/StyledNavLink";

const Navbar = (props) => {

  const { children } = props;
  const router = useRouter();
  console.log(router);
  const navLinks = [
    { text: "About", to: "about" },
    { text: "Work", to: "work" },
    { text: "Services", to: "services" },
  ];

  return (
    <div className="flex w-full items-center justify-between z-1 bg-black bg-opacity-80  px-4 py-6 text-white absolute right-0 left-0">
      <Link href="/" >
        <a className="w-40">
          <img src="/logo-text.svg" alt="Flamy Logo"/>
        </a>
      </Link>
      <div className="hidden md:flex w-4/5 items-center justify-between ">
        {navLinks.map((navLink) => {
          return (
            <Link href={navLink.to} key={navLink.to}>
              <StyledNavLink
                active={
                  router.pathname === `/${navLink.to}` ||
                  (router.pathname === "/" && navLink.to === "about")
                }
              >
                {navLink.text}
              </StyledNavLink>
            </Link>
          )
        })}
        {children}
      </div>

      {/* Shown for small screen sizes */}
      
    </div>
  )
}

export default Navbar;