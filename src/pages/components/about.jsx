import { Img, Text } from "components";

const About = () => {
  return (
    <div className="max-w-[1167px]  px-8 py-14 rounded-md bg-gray-900_9e sm:text-4xl md:text-[38px] text-[40px] text-white-A700 ">
      <Text className="">About Us</Text>

      <div
        className="  self-center flex justify-center sm:flex-col-reverse sm:items-center md:flex-col-reverse md:items-center  lg:flex-row xl:flex-row  "
        size="txtVarelaRoundRegular40"
      >
          <div className="text-base sm:w-full w-[50%] md:w-full lg:w-[50%] xl:w-[5%] mt-10 lg:ml-4 bg-clip-text bg-gradient text-purple-A400">
            <span className="text-white-A700_82 leading-8 font-varelaround text-left text-base lg:text-base xl:text-lg font-normal">
              Global Standard Services (GSS) is a trusted and innovative
              provider of comprehensive IT solutions. We pride ourselves on
              delivering a combination of reliability and innovation to meet the
              specific needs of businesses. With our integrated hardware and
              software services, we empower businesses with cutting-edge
              technologies that drive efficiency and growth. Our commitment to
              customer satisfaction ensures that we deliver tailored solutions
              that make a difference in the ever-changing world of IT. Join us
              at GSS and experience the power of technology to transform your
              business.
            </span>
          </div>
      
        <div className="w-auto xl:w-98 h-auto">
          <img src="./images/about.png" width={400} alt="about image" />
        </div>
      </div>
    </div>
  );
};

export default About;
