/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/images/front-logo-darktheme.png"
            className="h-8"
            alt="Eduardo Aparicio Cardenes Website Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            My Website
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-white hover:bg-gray-800 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-gray-400 hover:bg-gray-800 hover:text-white md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-gray-400 hover:bg-gray-800 hover:text-white md:p-0"
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-gray-400 hover:bg-gray-800 hover:text-white md:p-0"
              >
                My Experience
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-gray-400 hover:bg-gray-800 hover:text-white md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
