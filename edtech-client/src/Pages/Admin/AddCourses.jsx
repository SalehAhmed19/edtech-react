import { useForm } from "react-hook-form";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";

export default function AddCourses() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <DashboardSectionTitle title={"Add Course"} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-3 "
      >
        <div>
          <label className="font-semibold">Course Title</label>
          <input
            {...register("courseTitle")}
            type="text"
            placeholder="Course Title"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
        {/*  */}
        <div>
          <label className="font-semibold">Subtitle</label>
          <input
            {...register("courseSubtitle")}
            type="text"
            placeholder="Subtitle"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
        {/*  */}
        <div>
          <label className="font-semibold text-center">What you learn</label>
          <input
            {...register("whatYouLearn")}
            type="text"
            placeholder="What you learn"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
        {/*  */}
        <div>
          <label className="font-semibold text-center">Course Outline</label>
          <input
            {...register("courseOutline")}
            type="text"
            placeholder="Course Outline"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
        {/*  */}
        <div>
          <label className="font-semibold text-center">
            Course Designed For
          </label>
          <input
            {...register("courseDesignedFor")}
            type="text"
            placeholder="Course Designed For"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
        <div>
          <label className="font-semibold text-center">Insturctors</label>
          <input
            {...register("whatYouLearn")}
            type="text"
            placeholder="Instructors"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>
        <div>
          <label className="font-semibold text-center">Lessons Number</label>
          <input
            {...register("lessonsNumber")}
            type="text"
            placeholder="Lessons Number"
            className="border border-gray-200 w-full rounded-full px-5 py-3 mt-2"
          />
        </div>

        <button className="bg-primary px-5 py-3 rounded-full text-white">
          Add Course
        </button>
      </form>
    </div>
  );
}
