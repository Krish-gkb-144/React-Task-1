import { ChangeEvent, FormEvent, useState } from "react";

interface recordType {
  id: number;
  email: string;
  password: string;
  name: string;
}

const User = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [record, setRecord] = useState<recordType[]>([]);
  const [editId, setEditId] = useState<number>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password, name } = input;
    if (!email || !password || !name) {
      alert("please Enter Your Record..");
    } else {
      if (editId) {
        const { email, password, name } = input;
        const data = record.map((item) => {
          if (item.id === editId) {
            return { ...item, name, email, password };
          }
          return item;
        });
        setRecord(data);
        setEditId(undefined);
      } else {
        setRecord([...record, { id: Math.floor(Math.random() * 1000), name, email, password }]);
      }
      setInput({ name: "", email: "", password: "" });
    }
  };

  const handleDelete = (id: number) => setRecord(record.filter((item) => item.id !== id));

  const handleEdit = (id: number) => {
    let ans = record.filter((item) => item.id === id);
    setInput(ans[0]);
    setEditId(id);
  };

  return (
    <>
      <form className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="name" id="name" value={input.name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" id="email" value={input.email} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="password" id="password" value={input.password} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
        </div>
        <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {editId ? "Edit" : "Submit"}
        </button>
      </form>

      <div className="relative overflow-x-auto mt-10 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
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
            {record &&
              record.map((item, index) => (
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
                    <a href="#delete" onClick={() => handleDelete(item.id)} className="font-medium ms-5 text-red-600 dark:text-red-500 hover:underline">
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
