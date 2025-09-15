import { Fade, Zoom } from "react-awesome-reveal";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";

export default function ReasonToStart() {
  const reasons = [
    {
      icon: icon1,
      title: "Teach your way",
      text: "Publish the course you want, in the way you want, and always have control of your own content.",
    },
    {
      icon: icon2,
      title: "Inspire Learners",
      text: "Teach what you know and help learners explore their interests, gain new skills, and advance their careers.",
    },
    {
      icon: icon3,
      title: "Get rewarded",
      text: "Expand your professional network, build your expertise, and earn money on each paid enrollment.",
    },
  ];
  return (
    <Fade direction="up" cascade={true} duration={800}>
      <div className="p-20 bg-gray-50 text-center">
        <h3 className="font-bold text-3xl text-primary mb-5">
          So many reasons to start
        </h3>
        <div className="grid md:grid-cols-3">
          {reasons.map((reason, idx) => (
            <Zoom key={idx} cascade={true} duration={800}>
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <img src={reason.icon} alt="" className="mx-auto" />
                </div>
                <h5 className="font-bold text-xl text-primary">
                  {reason.title}
                </h5>
                <p>{reason.text}</p>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </Fade>
  );
}
