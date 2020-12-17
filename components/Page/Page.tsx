import Link from "next/link";
import Head from "next/head";
import ContactButton from "../ContactButton/ContactButton";
import NavBar from "../Navbar/Navbar";

const Page = (props) => {
  const { title, children, description, currentURL } = props;

  return (
    <div className="h-full w-full overflow-hidden ">
      <Head>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={currentURL} />
        <meta property="og:image" content="/logo-square.svg" key="ogimage" />
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/logo-square.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
      </Head>
      <NavBar>
        <ContactButton>
          <Link href="/contactus">
            <a>Contact Us</a>
          </Link>
        </ContactButton>
      </NavBar>
      {children}
    </div>
  );
};

export default Page;
