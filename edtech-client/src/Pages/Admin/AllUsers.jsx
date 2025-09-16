import { ShieldStarIcon, TrashIcon } from "@phosphor-icons/react";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";
import useGetAllUsers from "../../Hooks/Users/useGetAllUsers";

export default function AllUsers() {
  const { users } = useGetAllUsers();
  console.log(users);
  return (
    <div>
      <DashboardSectionTitle title={"All Users"} />
      <div className="border border-gray-200 rounded-xl p-5">
        <table className="w-full">
          <tr className="text-left">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th></th>
          </tr>
          {users?.map((user, idx) => (
            <tr
              key={idx}
              className={`${user.role === "student" && "bg-gray-50"} ${
                user.role === "teacher" && "bg-blue-50"
              } ${user.role === "admin" && "bg-White text-primary font-bold"}`}
            >
              <td>SEC_{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="flex items-center gap-5 p-5">
                <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
                  <ShieldStarIcon size={32} />
                </div>
                <div className="text-white p-2 bg-primary rounded-full cursor-pointer">
                  <TrashIcon size={32} />
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
