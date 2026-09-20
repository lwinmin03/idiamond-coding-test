"use client";

import Link from "next/link";
import {
  Menu,
  CalendarDays,
  Heart,
  ShoppingBag,
  Search,
  UserRound,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white text-[#171717]">
      <div className="hidden h-[35px] border-b border-[#3a0b0b] lg:block">
        <div className="relative flex h-full items-center px-8">
          {/* Appointment */}
          <button className="flex items-center gap-2 text-[11px] tracking-wide text-[#24324a]">
            <CalendarDays size={15} strokeWidth={1.4} />
            <span>BOOK AN APPOINTMENT</span>
          </button>

          {/* Announcement */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[11px] tracking-wide">
            <span>•</span>
            <span>
              Exclusive Collection Launch: Discover Timeless Elegance Today
            </span>
            <span>•</span>
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-5">
            <button aria-label="Account">
              <UserRound size={16} strokeWidth={1.3} />
            </button>

            <button aria-label="Wishlist">
              <Heart size={17} strokeWidth={1.3} />
            </button>

            <button aria-label="Shopping bag">
              <ShoppingBag size={17} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>

      <div className="block h-[35px] border-b border-[#3a0b0b] md:hidden lg:hidden">
        <div className="relative flex h-full items-center px-8">
          {/* Announcement */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[11px] tracking-wide">
            <span>•</span>
            <span>
              Exclusive Collection Launch: Discover Timeless Elegance Today
            </span>
            <span>•</span>
          </div>
        </div>
      </div>

      <div className="hidden h-[80px] border-b border-[#e5e5e5] lg:flex">
        {/* Logo */}
        <Link
          href="/"
          className="flex w-[252px] shrink-0 items-center border-r border-[#e5e5e5] px-16"
        >
          <span className="font-serif text-[34px] font-normal tracking-[-1.5px]">
            MyJewel
          </span>
        </Link>

        <nav className="flex flex-1 items-center justify-center">
          <ul className="flex h-full items-center gap-[56px]">
            <NavItem label="JEWELRY" dropdown />
            <NavItem label="LOVE AND ENGAGEMENT" dropdown />
            <NavItem label="GIFTS" dropdown />
            <NavItem label="CUSTOM JEWELRY" />
            <NavItem label="ABOUT" />
            <NavItem label="CONTACT US" />
          </ul>
        </nav>

        <button
          aria-label="Search"
          className="flex w-[105px] shrink-0 items-center justify-center border-l border-[#e5e5e5]"
        >
          <Search size={22} strokeWidth={1.2} />
        </button>
      </div>

      <div className="flex h-[67px] items-center border-b border-[#e5e5e5] px-4 lg:hidden">
        {/* Left */}
        <div className="flex flex-1 items-center gap-4">
          <button aria-label="Menu">
            <Menu size={18} strokeWidth={1.3} />
          </button>

          <button aria-label="Book appointment">
            <CalendarDays size={16} strokeWidth={1.3} />
          </button>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <span className="font-serif text-[27px] font-normal tracking-[-1.2px]">
            MyJewel
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-4">
          <button aria-label="Wishlist">
            <Heart size={18} strokeWidth={1.25} />
          </button>

          <button aria-label="Shopping bag" className="relative">
            <ShoppingBag size={18} strokeWidth={1.25} />

            <span className="absolute -right-[7px] -top-[7px] flex h-[13px] min-w-[13px] items-center justify-center rounded-full bg-[#333] px-[3px] text-[8px] leading-none text-white">
              1
            </span>
          </button>

          <button aria-label="Search">
            <Search size={18} strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </header>
  );
}

type NavItemProps = {
  label: string;
  dropdown?: boolean;
};

function NavItem({ label, dropdown }: NavItemProps) {
  return (
    <li>
      <Link
        href="#"
        className="flex items-center gap-2 whitespace-nowrap text-[12px] font-normal tracking-[0.7px] transition-opacity hover:opacity-60"
      >
        {label}

        {dropdown && <ChevronDown size={12} strokeWidth={1.2} />}
      </Link>
    </li>
  );
}
