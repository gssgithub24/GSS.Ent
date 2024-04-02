import React, { useState, useEffect ,useRef} from "react";

import { Button, Img, Input, Text, TextArea } from "components";

const RdpartyPage = () => {
 const [isHeaderVisible, setIsHeaderVisible] = useState(true);

 useEffect(() => {
   let lastScrollTop = 0;
   const header = document.querySelector(".header");

   const handleScroll = () => {
     const scrollTop = window.scrollY || document.documentElement.scrollTop;

     if (scrollTop > lastScrollTop) {
       setIsHeaderVisible(false); // Scrolling down
     } else {
       setIsHeaderVisible(true); // Scrolling up
     }

     lastScrollTop = scrollTop;
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

   const handleScrollToAbout = () => {
     const aboutSection = document.getElementById("about");

     if (aboutSection) {
       window.scrollTo({
         top: aboutSection.offsetTop,
         behavior: "smooth",
       });
     }
   };
   const handleScrollToServices = () => {
     const aboutSection = document.getElementById("services");

     if (aboutSection) {
       window.scrollTo({
         top: aboutSection.offsetTop,
         behavior: "smooth",
       });
     }
   };
   const handleScrollToProducts = () => {
     const aboutSection = document.getElementById("product");

     if (aboutSection) {
       window.scrollTo({
         top: aboutSection.offsetTop,
         behavior: "smooth",
       });
     }
   };
   const handleScrollToContact = () => {
     const aboutSection = document.getElementById("contact");

     if (aboutSection) {
       window.scrollTo({
         top: aboutSection.offsetTop,
         behavior: "smooth",
       });
     }
   };

  return (
    <>
      <div className="bg-black-900 flex flex-col font-seravek items-end justify-start mx-auto pb-[29px] w-full">
        <div className="flex flex-col items-center w-full">
          <header
            className={`bg-black-900_14 backdrop-blur-sm border-b-2 border-gray-700_7f border-solid flex md:gap-10 h-[57px] md:h-auto items-center justify-between md:px-5 px-[90px] py-[15px] w-full fixed z-50 transition-all duration-300 ${
              isHeaderVisible ? "top-0 " : "-translate-y-full"
            }`}
          >
            <Img
              className="h-[38px] md:h-auto object-cover w-12"
              src="images/img_gssenterpriselogo.png"
              alt="gssenterpriselo"
            />
            <ul className="flex flex-row sm:hidden items-center justify-center common-row-list">
              <li onClick={handleScrollToAbout}>
                <div className="text-[15px] text-white-A700">
                  <Text size="txtSeravek15">ABOUT US</Text>
                </div>
              </li>
              <li onClick={handleScrollToServices}>
                <div
                  href="javascript:"
                  className="ml-[59px] text-[15px] text-white-A700"
                >
                  <Text size="txtSeravek15">SERVICES</Text>
                </div>
              </li>
              <li onClick={handleScrollToProducts}>
                <div
                  href="javascript:"
                  className="ml-[62px] text-[15px] text-white-A700"
                >
                  <Text size="txtSeravek15">PRODUCTS</Text>
                </div>
              </li>
            </ul>
          </header>
        </div>
        <div
          className="flex flex-col font-varelaround xl:gap-[10px] md:gap-5 xs:gap-44 sm:gap-44  items-start justify-start md:px-5 w-[94%] md:w-full"
          id="about"
        >
          <div className="md:h-[711px] h-[780px] relative w-full">
            <div className="absolute md:h-[711px] h-[780px] inset-y-[0] my-auto right-[0] w-[59%] md:w-full">
              <Img
                className="absolute  right-[0] top-[0]"
                src="images/Group 11.svg"
                alt="groupTen"
              />
              {/* <Img
                className="absolute bottom-[0] h-[675px] object-cover right-[0] w-[83%]"
                src="images/img_rectangle19.png"
                alt="rectangleNineteen"
              /> */}
            </div>
            <div className="absolute flex flex-col gap-[10px] md:h-auto h-max inset-y-[0] items-start justify-start left-[0] max-w-[734px] my-auto w-full">
              <div className="flex flex-col gap-[15px] h-[319px] md:h-auto items-start justify-start max-w-[734px] w-full">
                <Text
                  className="max-w-[582px] md:max-w-full md:text-5xl text-[76.24px] text-blue_gray-100"
                  size="txtVarelaRoundRegular7624"
                >
                  <span className="text-blue_gray-100 font-raleway text-left font-extrabold">
                    GSS - THE{" "}
                  </span>
                  <span className="text-purple-A400 font-raleway text-left font-extrabold">
                    ONE
                  </span>
                  <span className="text-blue_gray-100 font-raleway text-left font-extrabold">
                    {" "}
                    SOLUTION
                  </span>
                </Text>
                <Text
                  className="max-w-[734px] md:max-w-full text-blue_gray-100 text-xl"
                  size="txtVarelaRoundRegular20"
                >
                  Welcome to Global Standard Services (GSS), where innovation
                  meets reliability in the world of comprehensive IT solutions.
                  As a leading provider of integrated hardware and software
                  services, GSS is committed to empowering businesses with
                  cutting-edge technologies tailored to their unique needs.
                </Text>
              </div>
              <div className="flex flex-row gap-[22px] h-[45px] md:h-auto items-start justify-start w-[316px] mt-5">
                <Button
                  className="cursor-pointer h-[45px] bg-gradient-to-r from-purple-A400 to-purple-A700 hover:from-purple-A700 hover:to-purple-A400 text-white-A700 leading-[normal] text-[12.31px] text-center uppercase w-[147px]"
                  shape="round"
                  // color="purple_A400_purple_A700"
                  onClick={handleScrollToContact}
                >
                  GET IN TOUCH
                </Button>
                <Button
                  className="cursor-pointer h-[45px] leading-[normal] text-[11.97px] text-center uppercase w-[147px]"
                  shape="round"
                  color="white_A700"
                  variant="outline"
                  onClick={handleScrollToServices}
                >
                  learn more
                </Button>
              </div>
            </div>
          </div>
          <div id="services">
            <Text
              className="md:ml-[0] ml-[3px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase w-[47%] sm:w-full mt-28"
              size="txtVarelaRoundRegular40"
            >
              <span className="text-white-A700 font-varelaround text-left font-normal">
                what do we provide ? everything making your services{" "}
              </span>
              <span className="text-purple-A400 font-varelaround text-left font-normal">
                faster{" "}
              </span>
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-varelaround md:gap-10 gap-[205px] items-center mt-16 md:px-10 sm:px-5 px-[60px] w-full">
          <div className="flex flex-col h-[654px] md:h-auto items-center justify-center max-w-[1319px] mx-auto md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[116px] items-center justify-start w-[90%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-[23px] items-center justify-end w-auto">
                  <Img
                    className="h-[190px] md:h-auto object-cover w-[190px]"
                    src="images/img_technicalsupport.png"
                    alt="technicalsuppor"
                  />
                  <Text
                    className="bg-clip-text bg-gradient2  capitalize sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-auto"
                    size="txtVarelaRoundRegular25"
                  >
                    IT Consulting
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[23px] items-center justify-end w-auto sm:w-full">
                  <Img
                    className="h-[190px] md:h-auto object-cover w-[190px]"
                    src="images/img_coding11.png"
                    alt="codingEleven"
                  />
                  <Text
                    className="bg-clip-text bg-gradient2  capitalize sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-auto"
                    size="txtVarelaRoundRegular25"
                  >
                    Software development /designing
                  </Text>
                </div>
                <div className="flex flex-col gap-[23px] items-center justify-end w-auto">
                  <Img
                    className="h-[190px] md:h-auto object-cover w-[190px]"
                    src="images/img_infrastructure1.png"
                    alt="infrastructureOne"
                  />
                  <Text
                    className="bg-clip-text bg-gradient2  capitalize sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-auto"
                    size="txtVarelaRoundRegular25"
                  >
                    Network Infrastructure{" "}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[54%] md:w-full">
                <div className="flex flex-col gap-[38px] items-center justify-end w-auto">
                  <Img
                    className="h-[190px] md:h-auto object-cover w-[190px]"
                    src="images/img_datamanagement.png"
                    alt="datamanagement"
                  />
                  <Text
                    className="bg-clip-text bg-gradient2  capitalize sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-auto"
                    size="txtVarelaRoundRegular25"
                  >
                    Database Management
                  </Text>
                </div>
                <div className="flex flex-col gap-[38px] items-center justify-center w-auto">
                  <Img
                    className="h-[190px] md:h-auto object-cover w-[190px]"
                    src="images/img_firewall1.png"
                    alt="firewallOne"
                  />
                  <Text
                    className="bg-clip-text bg-gradient2  capitalize sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-auto"
                    size="txtVarelaRoundRegular25"
                  >
                    Firewalls
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1226px] mx-auto w-full">
            <div
              className="flex flex-col items-center justify-start"
              id="product"
            >
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
                size="txtVarelaRoundRegular40"
              >
                <span className="text-white-A700 font-varelaround text-left font-normal">
                  OUR{" "}
                </span>
                <span className="text-purple-A400 font-varelaround text-left font-normal">
                  PRODUCTS{" "}
                </span>
                <span className="text-white-A700 font-varelaround text-left font-normal">
                  {" "}
                </span>
              </Text>
            </div>
            <div className="flex flex-col h-[617px] md:h-auto items-center justify-center max-w-[1167px] mt-[72px] w-full">
              <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                  <div className="bg-gray-900_9e flex sm:flex-1 flex-col h-[182px] md:h-auto items-start justify-center sm:px-5 px-6 py-[39px] rounded-lg hover:scale-105 w-[569px] sm:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2 capitalize text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                      size="txtVarelaRoundRegular30"
                    >
                      <span className="text-white-A700 font-varelaround text-left font-normal">
                        <>
                          Laptops and Desktop Computers
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        Devices for personal and professional computing tasks.
                      </span>
                    </Text>
                  </div>

                  <div className="bg-gray-900_9e flex sm:flex-1 flex-col h-[182px] md:h-auto items-center  hover:scale-105 justify-center sm:px-5 px-6 py-[39px] rounded-lg w-[569px] sm:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  capitalize text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                      size="txtVarelaRoundRegular30"
                    >
                      <span className="text-white-A700 font-varelaround text-left font-normal">
                        <>
                          Software Applications
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        Programs designed to perform specific tasks,{" "}
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        such as word processors, graphic design software, or
                        operating systems like Windows or macOS.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                  <div className="bg-gray-900_9e flex sm:flex-1 flex-col h-[182px] hover:scale-105 md:h-auto items-center justify-center sm:px-5 px-[25px] py-[39px] rounded-lg w-[569px] sm:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  capitalize max-w-[519px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                      size="txtVarelaRoundRegular30"
                    >
                      <span className="text-white-A700 font-varelaround text-left font-normal">
                        Servers
                      </span>
                      <span className="text-purple-A400 font-varelaround text-left font-normal">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        Powerful computers designed to manage network{" "}
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        resources and provide services to other computers
                        (clients) in the network.
                      </span>
                    </Text>
                  </div>
                  <div className="bg-gray-900_9e flex sm:flex-1 flex-col hover:scale-105 h-[182px] md:h-auto items-center justify-center sm:px-5 px-6 py-[50px] rounded-lg w-[570px] sm:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  capitalize text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                      size="txtVarelaRoundRegular30"
                    >
                      <span className="text-white-A700 font-varelaround text-left font-normal">
                        <>
                          Printers and Scanners
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        Devices for producing physical
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        <>
                          {" "}
                          copies of digital documents <br />
                          or converting physical documents into digital format.
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                  <div className="bg-gray-900_9e flex sm:flex-1  hover:scale-105 flex-col h-[183px] md:h-auto items-center justify-center sm:px-5 px-[25px] py-[49px] rounded-lg w-[569px] sm:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  capitalize max-w-[519px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                      size="txtVarelaRoundRegular30"
                    >
                      <span className="text-white-A700 font-varelaround text-left font-normal">
                        Storage{" "}
                      </span>
                      <span className="text-white-A700 font-varelaround text-left font-normal">
                        Devices
                      </span>
                      <span className="text-purple-A400 font-varelaround text-left font-normal">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        Hard drives, solid-state drives
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        {" "}
                        (SSDs), and other devices used for data storage.
                      </span>
                    </Text>
                  </div>
                  <div className="bg-gray-900_9e flex sm:flex-1 hover:scale-105 flex-col h-[182px] md:h-auto items-center justify-center sm:px-5 px-[25px] py-[50px] rounded-lg w-[569px] sm:w-full">
                    <Text
                      className="bg-clip-text bg-gradient2  capitalize max-w-[519px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                      size="txtVarelaRoundRegular30"
                    >
                      <span className="text-white-A700 font-varelaround text-left font-normal">
                        Networking Equipment
                      </span>
                      <span className="text-purple-A400 font-varelaround text-left font-normal">
                        <>
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        Routers, switches,{" "}
                      </span>
                      <span className="text-white-A700_82 font-varelaround text-left text-lg font-normal">
                        and modems that facilitate communication and data
                        transfer in computer networks.
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div id="">
              {" "}
              <Text
                className="mt-[238px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
                size="txtVarelaRoundRegular40"
              >
                <span className="text-white-A700 font-varelaround text-left font-normal">
                  CONTACT{" "}
                </span>
                <span className="text-purple-A400 font-varelaround text-left font-normal">
                  US
                </span>
              </Text>
            </div>

            {/* <div className="border-[3px] border-solid flex flex-col gap-[45px] h-[624px] md:h-auto items-start justify-center max-w-[1226px] mt-[41px] purple_A400_purple_A700_border md:px-10 sm:px-5 px-[75px] py-[53px] rounded-[10px] w-full">
              <div className="">
             
              </div>
            </div> */}
            <div
              className=" flex justify-center w-full h-full  mt-[62px]"
              id="contact"
            >
              <div className="m-4 h-full w-[85%] rounded-xl bg-gradient-to-r from-pink-600 via-purple-800 to-purple-900 p-1">
                <div className="h-full w-full rounded-lg bg-black-900">
                  <div className="p-10">
                    <div className="flex sm:flex-col xl:flex-row md:flex-row w-full justify-between gap-5">
                      <div className="mb-7 flex-1">
                        <input
                          className="focus:shadow-outline w-full appearance-none border px-3 py-3 rounded-lg leading-tight shadow focus:outline-none text-white-A700 bg-transparent"
                          id="username"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="mb-7 flex-1">
                        <input
                          className="focus:shadow-outline w-full appearance-none border px-3 py-3 rounded-lg leading-tight shadow focus:outline-none text-white-A700 bg-transparent"
                          id="last"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="mb-7">
                      <input
                        className="focus:shadow-outline w-full appearance-none  border px-3 py-3 rounded-lg leading-tight  shadow focus:outline-none text-white-A700 bg-transparent"
                        id="email"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-7">
                      <textarea
                        className="focus:shadow-outline w-full appearance-none  border px-3 py-3 rounded-lg leading-tight  shadow focus:outline-none text-white-A700 bg-transparent h-36"
                        id="textarea"
                        placeholder="Message"
                      />
                    </div>
                    <div className="">
                      <div className="text-white-A700 bg-gradient-to-r from-purple-A400 via-purple-A700_01 to-purple-A700 hover:from-purple-A700 hover:to-purple-A400 p-3 w-40 flex justify-center rounded-lg">
                        <p className="text-xl">Submit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-center md:ml-[0] ml-[421px] mt-[106px] w-auto sm:w-full">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_phcopyright.svg"
                alt="phcopyright"
              />
              <Text
                className="capitalize text-[14.97px] text-center text-white-A700 w-auto"
                size="txtVarelaRoundRegular1497"
              >
                2024 GSS Enterprises computer repair & it services
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RdpartyPage;
