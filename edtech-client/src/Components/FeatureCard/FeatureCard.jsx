export default function FeatureCard() {
  return (
    <div className="bg-[#FC5A57] p-10 text-white flex justify-between rounded-md">
      <div>
        <h2 className="text-[40px] font-semibold mb-5">Ready to join?</h2>
        <p>
          Join now in a exciting mission! <br />
          Build your career now!
        </p>
      </div>
      <div className="flex items-center">
        <button className="bg-white text-[#FC5A57] px-5 py-2 rounded-md font-semibold">
          Register Now
        </button>
      </div>
    </div>
  );
}
