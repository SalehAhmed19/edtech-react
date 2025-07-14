import help from "../../assets/images/help-avatar.svg";

export default function HelpBanner() {
  return (
    <div className="bg-[#333] w-full flex justify-between items-center rounded-md mt-10 text-white px-10">
      <img src={help} alt="" className="w-36 mt-[-40px]" />
      <h5 className="text-xl font-semibold">Need help?</h5>
      <div>
        <p className="font-semibold">Call Now</p>
        <p>+880 9374 864 826</p>
      </div>
    </div>
  );
}
