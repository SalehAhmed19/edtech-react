import CartsTable from "../../../Components/UI/Table/CartsTable";

export default function CartsItems({ carts }) {
  // // console.log(carts);
  const tableHeaders = ["Name", "Email", "Role", "Status"];
  const tableData = [
    [
      "Alice Smith",
      "alice@example.com",
      "Student",
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Active
      </span>,
    ],
    [
      "Bob Johnson",
      "bob@example.com",
      "Instructor",
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
        Online
      </span>,
    ],
    [
      "Charlie Brown",
      "charlie@example.com",
      "Admin",
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
        Verified
      </span>,
    ],
    [
      "Diana Prince",
      "diana@example.com",
      "Student",
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
        Inactive
      </span>,
    ],
    [
      "Eve Adams",
      "eve@example.com",
      "Instructor",
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        Pending
      </span>,
    ],
  ];

  return (
    <div>
      <CartsTable headers={tableHeaders} data={tableData} />
    </div>
  );
}
