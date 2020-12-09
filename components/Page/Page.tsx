import Link from "next/link";
import Head from "next/head";
import ContactButton from "../ContactButton/ContactButton";
import NavBar from "../Navbar/Navbar";

const Page = (props) => {
  const { title, children } = props;

  return (
    <div className="h-full w-full overflow-hidden ">
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/logo-square.svg" />
      </Head>
      <NavBar>
        <ContactButton>
          <Link href="contactus">
            <a>Contact Us</a>
          </Link>
        </ContactButton>
      </NavBar>
      {children}
    </div>
  );
};

export default Page;
