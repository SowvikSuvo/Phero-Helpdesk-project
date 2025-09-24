import React from "react";
import Container from "./Container";

const CountBox = ({ data }) => {
  console.log(data);

  const pendingData = data.filter((element) => element.status == "Pending");
  const submittedData = data.filter((element) => element.status == "Submitted");
  const reviewedData = data.filter((element) => element.status == "Reviewed");
  console.log({ pendingData, submittedData, reviewedData });

  return (
    <Container>
      <div className="grid grid-cols-3 gap-5 my-14">
        <div className="rounded-md p-7 text-white h-[250px] bg-gray-600 flex justify-center items-center flex-col">
          <h1 className="font-bold text-4xl">Pending</h1>
          <p className="font-semibold text-3xl">{pendingData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-purple-500  flex justify-center items-center flex-col">
          <h1 className="font-bold text-4xl">Submitted</h1>
          <p className="font-semibold text-3xl">{submittedData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-teal-500  flex justify-center items-center flex-col">
          <h1 className="font-bold text-4xl">Reviewed</h1>
          <p className="font-semibold text-3xl">{reviewedData.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
