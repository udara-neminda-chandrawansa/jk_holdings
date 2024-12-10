import logo from "./../assets/logo.png";
import burger from "./../assets/burger.svg";
import { Link } from "wouter";

function Nav() {
  return (
    <div className="h-fit flex justify-center items-center font-thin text-lg bg-white z-50 max-[940px]:h-full max-[940px]:justify-start">
      {/*normal nav*/}
      <div className="flex justify-between w-full px-10 h-[10dvh] max-[940px]:hidden">
        <ul className="flex items-center justify-start w-1/3 h-full">
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              <img
                src={logo}
                alt="logo-for-nav"
                className="h-[8dvh] object-contain"
              />
            </li>
          </Link>
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Home
            </li>
          </Link>
          <Link href="/menu" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Menu
            </li>
          </Link>
          <Link href="/services" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Services
            </li>
          </Link>
        </ul>
        <ul className="flex items-center justify-end w-1/3 h-full">
          <Link href="/aboutus" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              About Us
            </li>
          </Link>
          <Link href="/contact" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Contact Us
            </li>
          </Link>
          <Link href="/projects" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Projects
            </li>
          </Link>
          <Link href="/csr" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              CSR Projects
            </li>
          </Link>
        </ul>
      </div>
      {/*burger button*/}
      <div
        className="hidden place-items-center h-[10dvh] px-10 cursor-pointer place-content-center py-6 max-[940px]:grid text-black"
        data-modal-target="nav-modal"
        data-modal-toggle="nav-modal"
        onClick={()=>alert("Test")}
      >
        <img src={burger} alt="burger-icon" />
      </div>
      {/*Nav Modal for small screens*/}
      <div
        id="nav-modal"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full p-4">
          <div className="relative bg-white rounded-lg shadow">
            {/*head*/}
            <div className="flex items-center justify-between p-2 border-b rounded-t md:p-5">
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
                data-modal-hide="nav-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/*content*/}
            <div className="p-4 space-y-4 md:p-5">
              <ul className="flex flex-col items-center justify-start h-full gap-6">
                <Link href="/" className="w-full text-white no-underline">
                  <li className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm" data-modal-hide="nav-modal">
                    Home
                  </li>
                </Link>
                <Link href="/menu" className="w-full text-white no-underline">
                  <li className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm" data-modal-hide="nav-modal">
                    Menu
                  </li>
                </Link>
                <Link href="/services" className="w-full text-white no-underline">
                  <li className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm" data-modal-hide="nav-modal">
                    Services
                  </li>
                </Link>
                <Link href="/aboutus" className="w-full text-white no-underline">
                  <li className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm" data-modal-hide="nav-modal">
                    About Us
                  </li>
                </Link>
                <Link href="/contact" className="w-full text-white no-underline">
                  <li className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm" data-modal-hide="nav-modal">
                    Contact Us
                  </li>
                </Link>
                <Link href="/projects" className="w-full text-white no-underline">
                  <li className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm" data-modal-hide="nav-modal">
                    Projects
                  </li>
                </Link>
                <Link href="/csr" className="w-full text-white no-underline">
                  <li className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm" data-modal-hide="nav-modal">
                    CSR Projects
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
