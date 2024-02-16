import { useState } from "react";
import { COLORS } from "../constants/constants";
import Logo from "../assets/Logo.svg";
import Hamburger from "../assets/icon-hamburger.svg";

import Container from "./ui/Container";
import NavLinks from "./ui/NavLinks";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const links = [
  { name: "Hem", path: "/", id: "home" },
  { name: "Kontakta Oss", path: "contact", id: "contact" },
];

const userLinks = [
  { name: "Logga in", path: "login", id: "login" },
  {
    name: "Checkout",
    path: "/cart",
    id: "checkout",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  //render the mobileMenu content up to desktop size breakpoint
  const mobileMenu = () => {
    return (
      <>
        {open && (
          <section
            className={twMerge(
              "absolute inset-0 flex flex-col px-4 py-12 w-full h-96 mt-[142px] z-50",
              COLORS.BLACK,
              COLORS.TEXT_WHITE
            )}
          >
            <article className="flex flex-col items-center gap-16">
              <ul className={"flex text- gap-6 font-semibold"}>
                <NavLinks links={links} />
              </ul>
              <ul className="flex items-center text-white gap-6 font-semibold ">
                <NavLinks links={userLinks} />
              </ul>
            </article>
          </section>
        )}
      </>
    );
  };

  return (
    <Container bgColor={COLORS.BLACK}>
      <nav className="flex justify-between items-center px-8">
        <article>
          <NavLink to="/">
            <img src={Logo} alt="Company logotype" />
          </NavLink>
        </article>

        <article className="hidden lg:flex items-center gap-16">
          <ul className="flex text-white gap-6 font-semibold">
            <NavLinks links={links} />
          </ul>
          <ul className="flex items-center text-white gap-6 font-semibold ">
            <NavLinks links={userLinks} />
          </ul>
        </article>

        <article className="lg:hidden">
          <img
            src={Hamburger}
            alt="MobileNav"
            onClick={() => setOpen((prev) => !prev)}
          />
        </article>
        {mobileMenu()}
      </nav>
    </Container>
  );
};

export default Navigation;
