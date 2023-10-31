import React from "react";

const SubmitForm = ({ setIsSubmit, email, setEmail }) => {
  return (
    <div className="p-8 rounded-3xl bg-white flex flex-col justify-center gap-6 text-[#242742] h-screen sm:h-auto sm:w-[450px]">
      <div className="badge badge-primary badge-xs h-12 w-12 bg-[#ff6257] border-none text-white text-3xl">
        ✔
      </div>
      <h1 className="font-bold text-5xl">Thanks for subscribing!</h1>
      <p className="text-sm">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button
        onClick={() => {
          setIsSubmit(false);
          setEmail("");
        }}
        className="btn border-none bg-[#242742] text-white text-xs ease-in-out delay-150 hover:bg-gradient-to-r from-red-400 to-orange-400 hover:-translate-y-1 hover:scale-110 duration-300 "
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SubmitForm;
