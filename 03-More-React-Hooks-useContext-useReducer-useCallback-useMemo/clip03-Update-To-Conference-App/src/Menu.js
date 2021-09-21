import React from 'react';
// Import the router Link export from the next/link package.
import Link from 'next/link';
// Simple components with no incoming properties.
// Add some Bootstrap nav fromatting classes, and return a link with the href pointing to our site Home page, just slash.
// Same again but for Speakers
// 
export const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a> {/* return a link with the href pointing to our site Home page */}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/speakers">
              <a className="nav-link">Speakers</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
