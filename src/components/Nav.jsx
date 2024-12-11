import logo from "./../assets/logo.png";
import burger from "./../assets/burger.svg";
import { Link } from "wouter";

function Nav() {
  return (
    <div className="h-fit flex justify-center items-center font-thin text-lg bg-white z-50 max-[940px]:h-full max-[940px]:justify-between">
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
          <Link href="#" className="text-white no-underline">
            <li
              className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs"
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
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
        data-coreui-toggle="modal"
        data-coreui-target="#staticBackdrop"
      >
        <img src={burger} alt="burger-icon" className="scale-150" />
      </div>
      {/*logo for small screen nav*/}
      <div className="hidden max-[940px]:block pr-6">
        <img src={logo} alt="logo-for-small-screen" className="scale-75" />
      </div>
      {/*Nav Modal for small screens*/}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-coreui-backdrop="static"
        data-coreui-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-coreui-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="flex flex-col items-center justify-start h-full gap-6">
                <Link href="/" className="w-full text-white no-underline">
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Home
                  </li>
                </Link>
                <Link
                  href="#"
                  className="w-full text-white no-underline"
                  data-coreui-toggle="offcanvas"
                  data-coreui-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Menu
                  </li>
                </Link>
                <Link
                  href="/services"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Services
                  </li>
                </Link>
                <Link
                  href="/aboutus"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    About Us
                  </li>
                </Link>
                <Link
                  href="/contact"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Contact Us
                  </li>
                </Link>
                <Link
                  href="/projects"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/csr" className="w-full text-white no-underline">
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    CSR Projects
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*offcanvas for menu*/}
      <div
        className="offcanvas offcanvas-top"
        data-coreui-backdrop="false"
         data-coreui-scroll="true"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-coreui-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="grid grid-cols-4 gap-2 text-sm max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:text-xs">
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/construction">Construction</Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/facility-management">
                Facility Management
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/getaways">Getaways</Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/architectural-designing">
                Architectural Designing
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/interior-designing">
                Interior Designing
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/masonry-tile-interlock-services">
                Masonry, Tile & Interlock Services
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/plumbing-services">Plumbing Services</Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/wood-based-services">
                Wood-based Services
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/aluminum-fabrication">
                Aluminum Fabrication
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/electrical-services">
                Electrical Services
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/property-management">
                Property Management
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/manpower-supply">Manpower Supply</Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/janitorial-services">
                Janitorial Services
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/landscape-designing">
                Landscape Designing
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/garden-maintenance">
                Garden Maintenance
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/residential-construction">
                Residential Construction
              </Link>
            </li>
            <li
              data-coreui-toggle="offcanvas"
              data-coreui-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <Link href="/services/commercial-construction">
                Commercial Construction
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
