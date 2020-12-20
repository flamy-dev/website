import Link from "next/link";
import Head from "next/head";
import ContactButton from "../ContactButton/ContactButton";
import NavBar from "../Navbar/Navbar";

const Page = (props) => {
  const { title, children, description, currentURL } = props;

  return (
    <div className="h-full w-full overflow-hidden ">
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={currentURL} />
        <meta
          property="og:image"
          content="https://www.flamy.dev/logo-square.png"
          key="ogimage"
        />
        <meta name="theme-color" content="#001a66" />
        <meta name="apple-mobile-web-app-status-bar" content="#001a66" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          href="/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/icon-72x72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link
          href="/icon-96x96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
        <link rel="manifest" href="/manifest.json" />
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
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </ContactButton>
      </NavBar>
      {children}
    </div>
  );
};

export default Page;
