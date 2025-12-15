import React from "react";
import "remixicon/fonts/remixicon.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const passRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast.success("Message is copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
    // console.log("Text copied to clipboard:", text);
  };

  const showPassword = () => {
    passRef.current.type = "password";
    if (ref.current.src.includes("/icons/eye-off-fill.svg")) {
      ref.current.src = "/icons/eye-fill.svg";
      passRef.current.type = "password";
    } else {
      ref.current.src = "/icons/eye-off-fill.svg";
      passRef.current.type = "text";
    }
  };
  const savePassword = () => {
    // console.log(form);
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
    setForm({ site: "", username: "", password: "" });
  };

  const deletePassword = (id) => {
    console.log(`deleting password with using ${id}`,id)
    let confirm = window.confirm("Are you sure you want to delete this password?")
    if(confirm){
    setPasswordArray(passwordArray.filter((items) => items.id !== id))
  localStorage.setItem("passwords",JSON.stringify(passwordArray.filter((items) => items.id !== id)))
    }
  }

  const editPassword = (id) => {
    console.log(`editing password with using ${id}`,id)
    setForm(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
  }
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className=" myContainer">
        <h1 className="text-4xl text font-bold  text-center">
          <span className="text-green-400">&lt;</span>
          <span className="text-[#3E8E7E]">Vaulty/</span>
          <span className="text-green-400">&gt;</span>
        </h1>
        <p className="text-green-600 text-center text-xl">
          Your Password Manager
        </p>
        <div className="text-black flex flex-col items-center p-4 gap-8">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-[#3E8E7E] w-full p-4 py-1"
            type="text"
            name="site"
            id=""
            placeholder="Enter Website URL"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              name="username"
              className=" rounded-full border border-[#3E8E7E] w-full p-4 py-1"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                ref={passRef}
                value={form.password}
                onChange={handleChange}
                type="password"
                name="password"
                className="rounded-full border border-[#3E8E7E] w-full py-1 p-4 "
                placeholder="Enter Password"
              />
              <span
                className="absolute right-0 top-0 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-2"
                  width={35}
                  src="/icons/eye-fill.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-400 w-fit rounded-full px-7 py-1 hover:bg-green-300 gap-1.5 font-medium border-2 border-green-700 "
          >
            <lord-icon
              className=""
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div> No Password to show </div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-[#01796F] text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-[#51e8b1a5]">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center w-32 py-2 font-medium capitalize ">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <i
                          onClick={() => {
                            copyText(item.site);
                          }}
                          className="ri-file-copy-fill pl-1 cursor-pointer icon-copy text-[20px] items-center"
                        ></i>
                      </td>
                      <td className="text-center w-32 py-2 font-medium capitalize">
                        {item.username}
                        <i
                          onClick={() => {
                            copyText(item.username);
                          }}
                          className="ri-file-copy-fill pl-1 cursor-pointer icon-copy text-[20px] items-center"
                        ></i>
                      </td>
                      <td className="text-center w-32 py-2 font-medium capitalize">
                        {item.password}
                        <i
                          onClick={() => {
                            copyText(item.password);
                          }}
                          className="ri-file-copy-fill pl-1 cursor-pointer icon-copy text-[20px] items-center"
                        ></i>
                      </td>
                      <td className="text-center w-32 py-2 font-medium capitalize">
                        <span onClick={() => deletePassword(item.id)}><i className="ri-delete-bin-6-fill  cursor-pointer text-[20px] pl-2"></i></span>
                        <span onClick={() => editPassword(item.id)}><i className="ri-pencil-ai-fill cursor-pointer pl-2 text-[20px]"></i></span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
