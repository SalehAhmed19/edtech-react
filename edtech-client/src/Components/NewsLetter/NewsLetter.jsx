export default function NewsLetter() {
  return (
    <div className="text-center">
      <h2 className="font-semibold text-[40px]">
        Subscribe for Offer and <br /> Course Update
      </h2>

      <form className="border border-[#0000002e] rounded-full p-2 w-1/3 mx-auto flex items-center mt-5">
        <input
          type="text"
          className="rounded-full px-5 py-2 w-full"
          placeholder="Write your email"
        />
        <button className="bg-[#FC5A57] px-5 py-2 rounded-full text-white">
          Subscribe
        </button>
      </form>
    </div>
  );
}
