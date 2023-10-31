import React, { useState } from "react";

const Form = ({ email, setEmail, setIsSubmit }) => {
  const [error, setError] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = () => {
    console.log(email.length, error);
    if (email.length > 0 && !error) {
      setIsSubmit(true);
    }
  };
  return (
    <div className="bg-white p-0 sm:p-4 rounded-3xl flex flex-col-reverse justify-end gap-6 sm:gap-0 sm:grid sm:grid-cols-2 h-screen sm:h-auto sm:w-[744px] text-[#242742]">
      <div className="flex flex-col justify-center gap-4 px-6">
        <h1 className="font-bold text-5xl">Stay updated!</h1>
        <p className="text-sm">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="text-sm flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <div className="badge badge-primary badge-xs h-4 w-4 bg-[#ff6257] border-none text-white">
              ✔
            </div>
            Product discovery and building what matters
          </li>
          <li className="flex gap-2 items-center">
            <div className="badge badge-primary badge-xs h-4 w-4 bg-[#ff6257] border-none text-white">
              ✔
            </div>
            Measuring to ensure updates are a success
          </li>
          <li className="flex gap-2 items-center">
            <div className="badge badge-primary badge-xs h-4 w-4 bg-[#ff6257] border-none text-white">
              ✔
            </div>
            And much more!
          </li>
        </ul>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-xs text-[#242742]">
              Email address
            </span>
            {error && (
              <span className="label-text text-xs text-red-500">
                Valid email required
              </span>
            )}
          </label>
          <input
            type="email"
            value={email}
            placeholder="email@company.com"
            className={`input input-bordered w-full bg-white ${
              error && "input-error text-red-500"
            }`}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.match(emailRegex)) {
                setError(false);
              } else {
                setError(true);
              }
            }}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn border-none bg-[#242742] text-white text-xs ease-in-out delay-150 hover:bg-gradient-to-r from-red-400 to-orange-400 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Subscribe to monthly newsletter
        </button>
      </div>
      <div
        className={`bg-signup-mobile sm:bg-signup-desktop h-64 sm:h-[474px] w-full bg-cover bg-center rounded-lg`}
      ></div>
    </div>
  );
};

export default Form;
