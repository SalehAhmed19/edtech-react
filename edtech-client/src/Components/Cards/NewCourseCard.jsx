export default function NewCourseCard({ course }) {
  const { courseTitle, courseBannerImage } = course;
  return (
    <div className="flex gap-5 items-center border border-dashed border-slate-300">
      <img src={courseBannerImage} alt="" className="w-46" />
      <div className="py-3">
        <h3 className="text-primary font-semibold text-xl">{courseTitle}</h3>
        <p className="text-[#787878] mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          accusantium quam ex, expedita tempora voluptatem velit doloribus
          corrupti veritatis magnam!
        </p>
        <p className="text-primary font-semibold my-2">Price: 20$</p>
      </div>
    </div>
  );
}
