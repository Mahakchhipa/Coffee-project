"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import logo from "../../../public/img/logo.webp";

const navigation = [
  { name: "Cafe Menu", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Find Us", href: "#" },
  { name: "Alowishus Catering", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:p-6">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image src={logo} alt="Logo" height={60} width={150} />
        </a>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex gap-x-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </a>
          ))}
        </PopoverGroup>

        {/* Icons & CTA */}
        <div className="hidden lg:flex items-center gap-x-6">
          <ShoppingBagIcon className="w-8 h-8 text-gray-700 hover:text-gray-900 cursor-pointer transition-transform transform hover:scale-110" />
          <button className="text-white bg-black px-5 py-2 rounded-3xl text-lg font-semibold shadow-lg hover:bg-gray-800 hover:scale-105 transition">
            Buy Gift Vouchers
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-gray-700"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <DialogPanel className="fixed inset-0 z-50 bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image src={logo} height={50} width={120} alt="Logo" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg font-semibold text-gray-900 hover:bg-gray-200 p-2 rounded-md"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full text-white bg-black px-5 py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-800 hover:scale-105 transition">
              Buy Gift Vouchers
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
