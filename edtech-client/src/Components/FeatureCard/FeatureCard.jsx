export default function FeatureCard() {
  return (
    <div className="bg-[#1e1e1e] p-10 text-white flex justify-between rounded-lg">
      <div>
        <h2 className="text-[40px] font-semibold mb-5 text-primary">
          Ready to join?
        </h2>
        <p>
          Join now in a exciting mission! <br />
          Build your career now!
        </p>
      </div>
      <div className="flex items-center">
        <button className="bg-[#CE2823] text-white px-5 py-3 rounded-full font-semibold">
          Register Now
        </button>
      </div>
    </div>
  );
}
