import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/form";
import SubmitForm from "./components/submit";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <main className="h-screen w-full bg-[#36384e] flex flex-col gap-6 items-center justify-center">
      {isSubmit ? (
        <SubmitForm
          email={email}
          setIsSubmit={setIsSubmit}
          setEmail={setEmail}
        />
      ) : (
        <Form email={email} setEmail={setEmail} setIsSubmit={setIsSubmit} />
      )}

      <div className="hidden sm:flex gap-1 text-xs">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/jpentinio"
          target="_blank"
          className="link"
        >
          Joshua M. Pentinio
        </a>
      </div>
    </main>
  );
}

export default App;
