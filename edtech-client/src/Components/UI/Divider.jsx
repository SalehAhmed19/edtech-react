export default function Divider({ text }) {
  return (
    <div className="flex items-center gap-3 text-slate-300">
      <div className="border border-slate-300 w-full bg-slate-300 my-5" />{" "}
      {text}
      <div className="border border-slate-300 w-full bg-slate-300 my-5" />
    </div>
  );
}
