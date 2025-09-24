import React, { use, useState } from "react";
import Toggles_Btns from "./Toggles_Btns";
import CountBox from "./CountBox";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const Data = use(fetchPromise);
  console.log(Data);
  return (
    <div>
      <CountBox></CountBox>
      {/* Toggle button */}
      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></Toggles_Btns>
    </div>
  );
};

export default IssuesManagement;
