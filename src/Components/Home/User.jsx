import { useState } from "react";
import { useForm } from "react-hook-form";

const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [editId, setEditId] = useState("");
  const [search, setSearch] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (editId) {
      setAllUsers((prevUsers) => prevUsers.map((user) => (user.id === editId ? { ...user, ...data } : user)));
      setEditId("");
    } else {
      setAllUsers([...allUsers, { id: Math.floor(Math.random() * 1000), ...data }]);
    }
    reset();
  };

  const handleDelete = (id) => setAllUsers(allUsers.filter((user) => user.id !== id));

  const handleEdit = (id) => {
    setEditId(id);
    const user = allUsers.find((user) => user.id === id);
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email); 
      setValue("password", user.password);
    }
  };

  const FilterData = allUsers.filter((user) => user.name.includes(search));

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Name
              </label>
              <input type="text" {...register("name", { required: "First name is required" })} placeholder="Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                Email
              </label>
              <input type="email" {...register("email", { required: "First Email is required" })} placeholder="Email id" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
                Password
              </label>
              <input type="password" {...register("password", { required: "First Password is required" })} placeholder="enter your Password" className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            <div>
              <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                {editId ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <form className="max-w-md mx-auto w-100">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" onChange={(e) => setSearch(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        </div>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {FilterData.map((item, index) => (
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.password}</td>
                <td className="px-6 py-4">
                  <a href="#edit" onClick={() => handleEdit(item.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                  <a href="#delete" onClick={() => handleDelete(item.id)} className="font-medium ps-5 text-red-600 dark-red-blue-500 hover:underline">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
