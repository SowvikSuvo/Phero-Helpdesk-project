import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { useState } from "react";
import Toggles_Btns from "./components/Toggles_Btns";

function App() {
  const [toggleStatus, setToggleStatus] = useState("All");

  console.log(toggleStatus);

  return (
    <>
      <Navbar></Navbar>

      {/* Box */}
      <Container>
        <div className="grid grid-cols-3 gap-5 my-14">
          <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex justify-center items-center flex-col">
            <h1 className="font-bold text-4xl">Pending</h1>
            <p className="font-semibold text-3xl">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250px] bg-purple-500  flex justify-center items-center flex-col">
            <h1 className="font-bold text-4xl">Submitted</h1>
            <p className="font-semibold text-3xl">0</p>
          </div>
          <div className="rounded-md p-7 text-white h-[250px] bg-teal-500  flex justify-center items-center flex-col">
            <h1 className="font-bold text-4xl">Reviewed</h1>
            <p className="font-semibold text-3xl">0</p>
          </div>
        </div>
      </Container>
      {/* Toggle button */}
      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></Toggles_Btns>

      <Footer></Footer>
    </>
  );
}

export default App;
