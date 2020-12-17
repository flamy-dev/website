import ContactButton from "../ContactButton/ContactButton";
import Tagline from "../Tagline/Tagline";
import Link from "next/link";

const Welcome = (props) => {
  const { tagline } = props;

  return (
    <div className="z-10 flex justify-center items-center flex-col">
      <Tagline>{tagline}</Tagline>
      <div className="mt-8 md:mt-20 z-20">
        <ContactButton>
          <Link href="/contact">
            <a>Get in touch</a>
          </Link>
        </ContactButton>
      </div>
    </div>
  );
};

export default Welcome;
