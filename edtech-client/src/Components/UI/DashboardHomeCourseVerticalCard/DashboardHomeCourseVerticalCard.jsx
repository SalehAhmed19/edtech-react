export default function DashboardHomeCourseVerticalCard({ cart }) {
  return (
    <div className="border border-gray-200 rounded-xl p-2 flex gap-3">
      <img
        src={cart.image}
        alt="course-thumbnail"
        className="rounded-lg w-36"
      />
      <div className="w-full">
        <h5 className="font-bold text-primary">{cart.courseName}</h5>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          {cart.category}
        </p>

        <button
          className="bg-primary text-white rounded-full px-5 py-3 ml-auto block"
          style={{ fontSize: "14px" }}
        >
          Continue Course
        </button>
      </div>
    </div>
  );
}
