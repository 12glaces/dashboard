import { useState } from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { UserData } from "../Data";

function Trade() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Traidng Volume",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,392,195,1)",
          "#dcf8f1",
          "#FFD580",
          "#CBC3E3",
          "pink",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="Trade">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default Trade;