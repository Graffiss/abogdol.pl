"use client";

import Link from "next/link";
import { CountrySelector } from "../country-selector/country-selector";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <CountrySelector />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
