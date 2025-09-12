export default function SectionTitle({ title, className }) {
  return (
    <h2 className={`text-[40px] font-semibold text-center ${className}`}>
      {title}
    </h2>
  );
}
