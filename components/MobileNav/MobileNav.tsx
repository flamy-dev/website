import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhoneSquareAlt,
  faCode,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const MobileNav = (props) => {
  const { mobileMenu, setMobileMenu } = props;

  const navLinks = [
    { text: "about", to: "/about", icon: faHome },
    { text: "work", to: "/work", icon: faGlobe },
    { text: "services", to: "/services", icon: faCode },
    { text: "contact us", to: "/contactus", icon: faPhoneSquareAlt },
  ];

  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-black bg-opacity-80 z-10 text-white min-h-screen">
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs bg-black bg-opacity-80 divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-10 w-auto"
                  src="/logo-text.svg"
                  alt="flamy logo"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 hover:text-blue-500 hover:bg-blue-900 focus:outline-none focus:bg-blue-900 focus:text-blue-500 transition duration-150 ease-in-out"
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                >
                  {/* <!-- Heroicon name: x --> */}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav className="flex flex-col justify-start text-white w-full h-full">
              {navLinks.map((navLink) => (
                <div className="w-full my-10 group">
                  <Link href={navLink.to} key={navLink.to}>
                    <a className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-blue-900 transition ease-in-out duration-150">
                      <FontAwesomeIcon
                        icon={navLink.icon}
                        size="lg"
                        className="text-gray-100 group-hover:text-red-500 "
                      />

                      <div className="text-md leading-6 font-medium text-gray-100 group-hover:text-white">
                        {navLink.text}
                        {console.log(navLink.text)}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
