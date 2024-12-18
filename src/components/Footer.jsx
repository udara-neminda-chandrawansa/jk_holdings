import logo from "./../assets/logo.png";
import footer_bg from "./../assets/footer_bg.png";
import { Link } from "wouter";
import fb from "./../assets/Footer/fb_icon.png";
import tk from "./../assets/Footer/tk_icon.png";
import wa from "./../assets/Footer/wa_icon.png";
import ins from "./../assets/Footer/in_icon.png";

function Footer() {
  return (
    <footer
      className="h-[50dvh] border-t-[1px] bg-no-repeat bg-center font-normal bg-contain px-12 max-md:px-6 max-sm:px-3 text-lg max-lg:text-base max-sm:pt-3 max-md:text-sm"
      style={{ backgroundImage: `url(${footer_bg})` }}
    >
      <div className="flex items-center justify-center gap-6 h-1/4 max-md:h-fit">
        <img src={logo} alt="logo" />
        <p className="text-justify optima">
          Build everlasting relationships through architectonic constructions &
          innovative, economic & exceptional customer service, and evolve
          continuously along with advanced technology.To be the epitome of
          Service Providing industry.
        </p>
      </div>
      {/*
      <div className="flex items-center h-1/4 max-sm:h-fit max-sm:py-3">
        <ul className="flex w-full justify-evenly h-fit max-sm:flex-col max-sm:gap-3">
          <li className="hover:text-red-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-red-500">
            <Link href="/csr">CSR Projects</Link>
          </li>
        </ul>
      </div>
      */}
      <div className="flex items-center h-1/4">
        <ul className="flex justify-between w-full max-sm:flex-col max-sm:gap-3">
          <li className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-red-700 bi bi-telephone-outbound-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
              />
            </svg>
            <p> +94 773 606 487 / +94 773 037238 </p>
          </li>
          <li className="flex items-center gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-red-700 bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <p> No: 10, Theldeniya Road, Balagolla,Kengalla, Kandy.</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center h-1/4">
        <ul className="flex justify-start w-full gap-6 max-sm:justify-center max-sm:gap-3">
          <li className="flex items-center gap-6 transition-all hover:scale-90">
            <a href="https://www.facebook.com/jkiholdingspvtltd">
              <img src={fb} alt="fb-icon" />
            </a>
          </li>
          <li className="items-center hidden gap-6 transition-all hover:scale-90">
            <a href="https://www.tiktok.com/">
              <img src={tk} alt="tk-icon" />
            </a>
          </li>
          <li className="flex items-center gap-6 transition-all hover:scale-90">
            <a href="https://wa.me/94773606487">
              <img src={wa} alt="fb-icon" />
            </a>
          </li>
          <li className="items-center hidden gap-6 transition-all hover:scale-90">
            <a href="https://www.instagram.com/">
              <img src={ins} alt="tk-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="h-1/4 border-t-2 optima tracking-widest text-center border-t-[#C10000] flex items-center justify-center">
        <p>
          2024 © All Rights Reserved | JKI Holdings | Designed & Developed by
          Silicon Radon Networks (Pvt) Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
