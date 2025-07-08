import laptop from "../../assets/images/laptop.png";

export default function FeaturedTwo() {
  return (
    <div className="bg-black p-10 rounded-md text-white flex justify-between items-center">
      <div>
        <h2 className="text-[40px] font-semibold">
          Your pathway to smarter <br /> learing
        </h2>
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          soluta!
        </p>
        <button className="bg-white rounded-full text-black px-5 py-2 mt-5">
          Ask Edi
        </button>
      </div>
      <img src={laptop} alt="" />
    </div>
  );
}
