
import { useState } from "react";
import  Logo from "../../assets/Logo.png"

import { LayoutDashboard,Clock3,BarChart2,ArrowRightLeft,MessageCircleQuestion } from "lucide-react";
const Navigationbar = () => {


  const [active,setActive]= useState(0);
  const navlinks= [
      
    {
      name: "Dasboard",
      icon: LayoutDashboard
    },
    {
      name: "Activity",
      icon: Clock3
    },
    {
      name: "Analytics",
      icon: BarChart2
    },
    {
      name: "Transactions",
      icon: ArrowRightLeft
    },
    {
      name: "Help Center",
      icon: MessageCircleQuestion
    }

  

  ]


    return (

        <div className="px-[52px] py-[49px] flex flex-col border-r-2 w-1/5 h-screen bg-[#FDFDFD]">
          
          <div className="logo flex space-x-4 items-center">
           
           <img src={Logo} alt="" />
           <h2>Money Tracker</h2>

          </div>

          <div className=" mt-10 flex flex-col  space-y-10">

             {
              navlinks.map((link,index)=> <div className={"flex gap-3 p-2 rounded cursor-pointer"+(active===index? "bg-[#FF8C8C]  font-semibold" : "")} onClick={()=>setActive(index)} key={index}>
             
               <link.icon/>
              <span>{link.name}</span>


              </div> )
             }
          </div>



        </div>
            
        
    );
};

export default Navigationbar;