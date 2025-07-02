import Image from "next/image";
import React from "react";
import logoPng from "@/assets/icons/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <Link
            href="/"
            className="text-xl font-semibold text-base-content flex items-center gap-1"
          >
            <Image src={logoPng} className="w-8 h-8" /> Resume Sync
          </Link>
        </div>
        <div className="navbar-end">
          <a className="secondary-btn">Try it in Google Docs</a>
        </div>
      </div>
    </div>
  );
}
