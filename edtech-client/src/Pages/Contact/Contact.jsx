import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SectionTitleTwo from "../../Components/SectionTitle/SectionTitleTwo";
import FeaturedTwo from "../../Components/FeaturedTwo/FeaturedTwo";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import ContactSection from "../../Components/ContactSection/ContactSection";
import ContactForm from "../../Components/Forms/ContactForm";
import { Fade, Zoom } from "react-awesome-reveal";
import {
  AtIcon,
  FacebookLogoIcon,
  LinkedinLogoIcon,
  PhoneCallIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 h-96">
        <Zoom cascade={true} duration={800}>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/640/076/small_2x/Black_on_white_dotted_world_map_vector.jpg"
              alt=""
            />
          </div>
        </Zoom>
        <div className="pr-20 text-right place-content-center">
          <Fade direction="up" cascade={true} duration={800}>
            <h2 className="text-[45px] font-bold text-center">
              <span className="text-primary">Contact</span> us
            </h2>
            <p className="text-center text-secondary">
              Your next step toward a new skill is just a message away.
            </p>
          </Fade>
        </div>
      </div>

      <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-20">
        <Fade direction="down" cascade={true} duration={800}>
          <div className="grid grid-cols-2">
            <div className="bg-gray-50 p-10 rounded-l-xl">
              <h3 className="text-2xl font-bold mb-5 text-primary">
                For any queries
              </h3>
              <ContactForm />
            </div>
            <div className="bg-[#1e1e1e] p-10 rounded-r-xl flex flex-col justify-between gap-5 text-white">
              <h3 className="text-2xl font-semibold mb-5 text-center">
                Our Location
              </h3>
              <iframe
                className="w-full h-[300px] rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7251.402032230339!2d89.42010138283842!3d24.668417612135116!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1752393192721!5m2!1sen!2sbd"
                //   width="600"
                //   height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div>
                <h5 className="text-xl font-semibold">Office Address:</h5>
                <p>Bogura - 5840, Bangladesh</p>
              </div>

              <div>
                <p className="flex items-center gap-2">
                  <AtIcon size={32} />
                  smart.edu@outlook.com
                </p>
                <p className="flex items-center gap-2">
                  <PhoneCallIcon size={32} />
                  +880 2983 393 829
                </p>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <a href="#">
                  <FacebookLogoIcon size={32} />
                </a>
                <a href="#">
                  <XLogoIcon size={32} />
                </a>
                <a href="#">
                  <LinkedinLogoIcon size={32} />
                </a>
                <a href="#">
                  <YoutubeLogoIcon size={32} />
                </a>
              </div>
            </div>
          </div>
        </Fade>
        {/*  */}

        <FeaturedTwo />
        <NewsLetter />
        <ContactSection />
      </div>
    </>
  );
}
