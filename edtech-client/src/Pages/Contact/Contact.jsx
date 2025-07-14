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

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 h-96">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/640/076/small_2x/Black_on_white_dotted_world_map_vector.jpg"
            alt=""
          />
        </div>
        <div className="pr-20 text-right place-content-center">
          <SectionTitleTwo title={"Contact"} />
        </div>
      </div>

      <div className="md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-20">
        <div className="grid grid-cols-2">
          <div className="bg-[#0000001a] p-10 rounded-l-md">
            <h3 className="text-2xl font-semibold mb-5">For any queries</h3>
            <ContactForm />
          </div>
          <div className="bg-[#333] p-10 rounded-r-md flex flex-col justify-between gap-5 text-white">
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
                <FaPhone />
                +880 2847 489 376
              </p>
              <p className="flex items-center gap-2">
                <FaPhone />
                +880 2847 489 376
              </p>
            </div>

            <div className="my-5 flex items-center gap-5 text-2xl">
              <p>
                <FaFacebook />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaYoutube />
              </p>
            </div>
          </div>
        </div>
        {/*  */}

        <FeaturedTwo />
        <NewsLetter />
        <ContactSection />
      </div>
    </>
  );
}
