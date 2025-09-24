import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IssuesManagement from "./components/IssuesManagement";
import { Suspense } from "react";

const fetchIssues = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<h1>Loading....</h1>}>
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
