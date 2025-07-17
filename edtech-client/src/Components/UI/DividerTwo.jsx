export default function DividerTwo({ text }) {
  return (
    <div className="flex items-center justify-between gap-5">
      <hr className="border- border-dashed border-slate-300 w-full" />
      <p className="text-slate-300 text-center">{text}</p>
      <hr className="border- border-dashed border-slate-300 w-full" />
    </div>
  );
}
