import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-6 mb-16 md:mb-32">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">
          Blog - Felipe Luis.
        </Link>
      </h1>
      {/* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://www.datocms.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          DatoCMS
        </a>
        .
      </h4> */}
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hey there, my name is Felipe Luis and I am a frontend developer with a strong passion for technology and design. 
      </h4>
    </section>
  );
}
