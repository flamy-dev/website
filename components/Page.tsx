import Link from "next/link";
import Head from "next/head";
import ContactButton from "./ContactButton";
import NavBar from "./Navbar";

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
          content="https://www.flamy.dev/static/images/logo-square.png"
          key="ogimage"
        />
        <meta name="theme-color" content="#001a66" />
        <meta name="apple-mobile-web-app-status-bar" content="#001a66" />

        {[
          "57x57",
          "60x60",
          "72x72",
          "76x76",
          "114x114",
          "120x120",
          "144x144",
          "152x152",
          "180x180",
        ].map((size) => (
          <link
            rel="apple-touch-icon"
            sizes={size}
            href={`/static/icons/apple-icon-${size}.png`}
          />
        ))}

        {[
          "32x32",
          "72x72",
          "96x96",
          "128x128",
          "144x144",
          "152x152",
          "192x192",
          "384x384",
          "512x512",
        ].map((size) => (
          <link
            rel="icon"
            href={`/static/icons/icon-${size}.png`}
            type="image/png"
            sizes={size}
          />
        ))}
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/static/images/logo-square.svg"
        />
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
