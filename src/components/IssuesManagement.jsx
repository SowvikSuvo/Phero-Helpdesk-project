import React, { use, useState } from "react";
import Toggles_Btns from "./Toggles_Btns";
import CountBox from "./CountBox";
import Container from "./Container";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const Datas = use(fetchPromise);
  const [data, setData] = useState(Datas);

  const filteredData =
    toggleStatus == "All"
      ? data
      : data.filter((element) => element.status == toggleStatus);
  console.log(toggleStatus, filteredData);

  return (
    <div>
      <CountBox data={data}></CountBox>

      {/* Toggle button */}
      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></Toggles_Btns>

      {/* Cards */}
      <Container>
        <div className="grid grid-cols-3 gap-3 mb-10">
          {data.map((issue, ind) => {
            return <Card key={ind} issue={issue}></Card>;
          })}
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
