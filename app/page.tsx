import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import Square from "@/public/square.svg";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Home() {
  return (
    <Main>
      <Animate>
        <Image
          src={Logo}
          alt="WIP Design Logo"
          width={64}
          height={35.8}
          className="-ml-1"
        />
        <div></div>
        <h1>WIP Design, tools and resources for designers.</h1>
        <h2 className="text-muted-foreground">
          <em>Work in Progress</em>. A philosophy. A journey. Never settle.
          Always evolve. This is the designer's path. At{" "}
          <a className="inline-link" target="_blank" href="https://wip.ac">
            WIP
          </a>
          , we craft tools for the ever-evolving designer. Explore our curated
          collection—born from the mind of{" "}
          <a
            className="inline-link"
            target="_blank"
            href="https://bridger.to/x"
          >
            Bridger Tower
          </a>
          , designed for you.
        </h2>
        <div className="group">
          <h3 className="opacity-0 group-hover:opacity-100 transition-all mb-2">
            Tools
          </h3>
          <Item
            href="/test"
            name="Example Tool"
            description="This is a an example tool. It does this thing."
            logo={Square}
          />
        </div>
        <div className="group">
          <h3 className="opacity-0 group-hover:opacity-100 transition-all mb-2">
            Resources
          </h3>
          <Item
            inProgress
            href="/test"
            name="Example Resource"
            description="This is a an example resource. It does this thing."
            logo={Square}
          />
        </div>
      </Animate>
    </Main>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6 md:py-24 md:px-12 grid max-w-2xl mx-auto gap-6">
      {children}
    </main>
  );
}

function Animate({ children }: { children: React.ReactNode }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <section
          key={index}
          className="fade-in-up"
          style={{ animationDelay: `${index * 0.25}s` }}
        >
          {child}
        </section>
      ))}
    </>
  );
}

function Item({
  name,
  description,
  logo,
  inProgress = false,
  href,
}: {
  name: string;
  description: string;
  inProgress?: Boolean;
  logo?: string | StaticImport;
  href: string;
}) {
  return (
    <Link
      className="border rounded-md transition-all bg-secondary/50 hover:bg-secondary/20 grid grid-cols-[auto_1fr_auto] gap-4 p-4"
      href={href}
    >
      <Image
        className="w-12 h-12 border rounded-md object-cover overflow-hidden"
        src={logo ?? ""}
        alt={`Logo for ${name}`}
      ></Image>
      <div>
        <h4>{name}</h4>
        <p className="text-muted-foreground font-light">{description}</p>
      </div>
      {inProgress && (
        <p className="text-muted-foreground text-xs border h-fit w-fit py-px bg-muted rounded-sm px-1">
          In Progress
        </p>
      )}
    </Link>
  );
}
