export default function DashboardHomeCourseCard({ cart }) {
  return (
    <div className="border border-gray-200 rounded-xl p-2 flex flex-col gap-3">
      <img src={cart.image} alt="course-thumbnail" className="rounded-lg" />
      <div>
        <h5 className="font-bold text-primary">{cart.courseName}</h5>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          {cart.category}
        </p>

        <button
          className="bg-primary text-white rounded-full px-3 py-1 my-2 w-full"
          style={{ fontSize: "14px" }}
        >
          Continue Course
        </button>
      </div>
    </div>
  );
}
