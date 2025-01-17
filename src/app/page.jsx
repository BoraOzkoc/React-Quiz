"use client";
import Image from "next/image";
import React from "react";
import Data from "./fetchdata";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen pb-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="">
          <Data />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/bora-ozkoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={16}
            height={16}
          />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/BoraOzkoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github 
        </a>
      </footer>
    </div>
  );
}
