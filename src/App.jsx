import Dashboard from "./Components/Dashboard";
import Navigationbar from "./Components/Navigationbar/Navigationbar";

function App() {
  return (
    <>
      <div className="w-full flex">
        <Navigationbar></Navigationbar>
       
       <main className="">

       <Dashboard></Dashboard>
       </main>
        
      </div>
    </>
  );
}

export default App;
