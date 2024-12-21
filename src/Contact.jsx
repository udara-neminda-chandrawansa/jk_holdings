import contact_banner from "./assets/contact_bg.png";
import contact_img from "./assets/contact_img.png";

function Contact() {
  return (
    <div>
      {/*Contact us banner*/}
      <div
        className="relative flex flex-col justify-center py-24 bg-fixed bg-center bg-no-repeat bg-cover h-fit"
        style={{ backgroundImage: `url(${contact_banner})` }}
      >
        {/*text*/}
        <div className="z-10 flex flex-col w-3/4 gap-6 pl-24 text-black line-height-abt max-md:pl-6 max-sm:w-full max-sm:p-6">
          <div className="flex flex-col gap-6">
            <h1 className=" title text-[30px] lg:text-[50px] text-[#C10000] underline font-extralight xl:text-[70px]">
              Contact Us
            </h1>
            <p className="font-semibold text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              We’re delighted that you’re reaching out to J K I Holdings Pvt
              Ltd.Your inquiries and feedback are important to us.
            </p>
          </div>
        </div>
      </div>
      {/*form*/}
      <div className="flex items-center justify-between gap-6 p-12 h-fit max-md:p-6 max-sm:p-3 max-md:flex-col max-md:justify-center">
        {/*map*/}
        <div className="md:w-1/2 h-[350px] max-md:w-full max-md:h-[400px]">
          {/*<img src={contact_img} alt="contact us" className="max-md:h-[300px] object-contain"/>*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6072997558836!2d80.72255229999999!3d7.285442399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3613323edc5b1%3A0x35bf1b56c40c2b55!2sJ%20K%20I%20Holdings%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1734777142649!5m2!1sen!2slk"
            style={{ border: "0px", width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/*form*/}
        <div className="w-1/2 max-md:w-full max-sm:p-0 max-md:h-full">
          <div className="bg-[#00000008] h-full w-full rounded-md p-6 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold uppercase title">
              Get in touch now!
            </h1>
            <div className="relative z-0">
              <input
                type="text"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter Your Name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-l-0 border-r-0 border-b-[1px] border-b-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter Your Email
              </label>
            </div>

            <div class="w-full">
              <select
                id="services"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
              >
                <option selected>Choose a service</option>
                <option value="construction">JKI Constructions</option>
                <option value="facility_mgmt">JKI Facility Management</option>
                <option value="gateways">JKI Gateways</option>
              </select>
            </div>

            <textarea
              id="message"
              className="flex flex-grow p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
              placeholder="Enter Your Message"
            ></textarea>
            <span className="flex justify-end w-full">
              <button
                type="button"
                className="w-full flex justify-center bg-[#C10000] text-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-2.5 py-2.5 text-center items-center gap-6"
              >
                Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-send w-[16px] h-[16px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
