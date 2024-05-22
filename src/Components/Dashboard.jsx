import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-6 py-14 px-10">
      <h2 className="font-bold text-xl">Dashboard</h2>

      <div className="flex space-x-[155px]">
        <div className="w-[525px] h-[177px] flex flex-col justify-center border rounded p-12 ">
          <span>Nafis Fuad Tanvir</span>
          <span>your Balance is : $50000</span>
        </div>

        <div className="w-[525px] h-[177px] flex flex-col justify-center border rounded p-12 ">
          <span>Nafis Fuad Tanvir</span>
          <span>your Expense : $10000</span>
        </div>
      </div>

      <div className="flex space-x-[155px] w-4/5  flex-col ">
        <h2 className="font-bold text-xl">Expense chart</h2>
        <Chart className="w-4/5"></Chart>
      </div>

      <div className="flex space-x-[155px]">
        <div className="w-[525px] h-[177px] flex flex-col space-y-2 justify-center border rounded p-12 ">
          <span>Yout Activity</span>
          <li><span>sent  $5000 to your mother</span></li>
        </div>

        <div className="w-[525px] h-[177px] flex flex-col space-y-2 justify-center border rounded p-12 ">
          <span>pending Bills</span>
          <li><span>Wifi bill : $100</span></li>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
