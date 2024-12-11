import Link from "next/link";
import ShinyButton from "./ui/shiny-button";
import { BackgroundBeams } from "./ui/background-beams";
const Footer = () => {
  return (
    <div
      className="max-w-7xl mx-auto flex flex-col justify-center antialiased relative border border-dark-300 rounded-xl mb-5"
      id="contact"
    >
      <div>
        <div className="space-y-8 p-10">
          <h1 className="text-5xl font-bold max-w-2xl leading-[110%] relative z-10">
            Like what you see? Reach out{" "}
            <Link
              href="mailto:mandalsneh97@gmail.com"
              className="text-primary hover:text-primary/80 border-b-2 border-primary hover:border-primary/80 transition-colors duration-200"
            >
              via email
            </Link>{" "}
            to collaborate!
          </h1>

          <ShinyButton>
            <Link href="mailto:mandalsneh97@gmail.com">Schedule call</Link>
          </ShinyButton>
        </div>

        <div className="mt-16 p-10 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold relative z-10">
              Snehasish Mandal
            </h3>
            <p className="text-dark-200/70 dark:text-stone-200/70 relative z-10">
              &copy; 2024 | All rights reserved.
            </p>
          </div>

          <div className="flex justify-between gap-0 sm:gap-16">
            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-base sm:text-lg font-semibold">Navigate</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#work">Work</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#about">About</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Socials</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link
                  href="https://www.linkedin.com/in/snehasish-mandal-/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="https://github.com/bewithsnehasish" target="_blank">
                  Github
                </Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="/">Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BackgroundBeams className="hidden sm:flex" />
    </div>
  );
};

export default Footer;
