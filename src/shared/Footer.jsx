import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 gap-4">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/privacy-policy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="terms-of-service" className="link link-hover">
          Terms of Service
        </Link>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Resume
          Sync
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
