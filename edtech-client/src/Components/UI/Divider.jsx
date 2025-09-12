export default function Divider({ text }) {
  return (
    <div className="flex items-center gap-3 text-gray-200">
      <div className="border border-gray-200 w-full my-5" /> {text}
      <div className="border border-gray-200 w-full my-5" />
    </div>
  );
}
