import logo from './../assets/logo.png';
import burger from './../assets/burger.svg';
import { Link } from "wouter";

function Nav() {
  return (
    <div className="h-fit flex justify-center items-center font-thin text-lg bg-white z-50 max-[940px]:h-full max-[940px]:justify-start">
      {/*normal nav*/}
      <div className="flex justify-between w-full px-10 h-[10dvh] max-[940px]:hidden">
        <ul className="flex items-center justify-start w-1/3 h-full">
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              <img src={logo} alt="logo-for-nav" className='h-[8dvh]'/>
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
      <div className="hidden place-items-center h-[10dvh] px-10 cursor-pointer place-content-center py-6 max-[940px]:grid text-black">
        <img src={burger} alt="burger-icon" />
      </div>
    </div>
  );
}

export default Nav;
