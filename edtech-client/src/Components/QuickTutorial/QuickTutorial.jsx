import tutorial from "../../assets/images/tutorial.svg";

export default function QuickTutorial() {
  return (
    <>
      <div className="bg-[#333] pt-10 text-center text-white">
        <h2 className="text-[40px] font-semibold">Quick Tutorial</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
          Sapiente, at dolore voluptas laboriosam rem incidunt!
        </p>
        <div className="mt-5 bg-white p-5 md:max-w-[920px] lg:max-w-[1280px] mx-auto rounded-t-2xl">
          <img src={tutorial} alt="" className="mx-auto mt-5" />
        </div>
      </div>
      <iframe
        src="https://www.youtube.com/embed/vfOyJ_VuQZ4?si=CfWBwMuXkr2ZS1er"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-1/2 h-96 mx-auto mt-5 rounded-2xl"
      />
    </>
  );
}
