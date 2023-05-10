import { useState } from "react";
import Container from "./container";
import Link from "next/link";

export default function Footer() {
  const [date] = useState(new Date());

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-1xl text-zinc-600 font-normal tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            &copy; {date.getFullYear()} Felipe Luis.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="/">
              <a
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                Back to home
              </a>
            </Link>
            {/* <a
              href="https://bit.ly/2EluK9Q"
              className="mx-3 font-bold hover:underline"
            >
              View my GitHub
            </a> */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
