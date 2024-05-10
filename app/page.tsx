"use client";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <SideBar />
      <>
        <section className="main-screen">
          <div className="container-common">
            <div className="main-screen-wrapper">Welcome! <Link href="/video">Got To Video Section</Link></div>
          </div>
        </section>
      </>
    </div>
  );
}
