'use client';
import { useState } from 'react';
import Menu from './Menu';

const Links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-background/60 backdrop-blur-xl border border-gray-200 max-w-7xl mx-auto">
      <div className="relative container mx-auto p-4 flex justify-between items-center">
        <Menu isOpen={isOpen} onClick={setIsOpen}></Menu>
        <ul className="flex space-x-4">
          {Links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-black hover:text-gray-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
