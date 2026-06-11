import { getUsers } from "@/lib/data";

export const dynamic = "force-dynamic";

export default function AdminUsersPage() {
  const users = getUsers();

  return (
    <div className="container-page py-10">
      <h1 className="font-[family-name:var(--font-montserrat)] text-2xl font-extrabold uppercase text-[var(--black)] mb-8">
        Users
      </h1>

      <div className="overflow-hidden rounded-2xl border border-[var(--gray-200)] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--gray-50)] text-left text-xs uppercase text-[var(--black)]">
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-[var(--gray-100)]">
                  <td className="px-4 py-3 font-medium text-[var(--black)]">{user.email}</td>
                  <td className="px-4 py-3 text-[var(--black)]">{user.name}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      user.role === "ADMIN" 
                        ? "bg-purple-100 text-purple-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
