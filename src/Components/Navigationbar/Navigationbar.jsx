
import { useState } from "react";
import  Logo from "../../assets/Logo.png"
import rightArrow from "../../assets/rightArrow.svg"
import { motion } from "framer-motion"

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
  const variants= {

    expanded:{width:"20%"},
    nonExpanded: {width: "5%"}
  }
  const [isExpanded, setIsExpanded]= useState(true);
       

    return (

        <motion.div animate={isExpanded ? "expanded" : "nonExpanded"} variants={variants} 
        className={
          
            `py-12 flex flex-col border border-r-2 w-1/5 h-screen bg-[#FDFDFD] relative ${isExpanded ? "px-10" : "px-2"}`
        
          
          }>
          
          <div className="logo flex space-x-4 items-center">
           
           <img src={Logo} alt="" />
           <h2 className={isExpanded? "block": "hidden"}>Money Tracker</h2>

          </div>

          <div onClick={()=>setIsExpanded(!isExpanded)} className="w-5 h-5 absolute bg-[#FF8C8C] rounded-full -right-[10.5px] top-14 flex items-center justify-center ">
              <img src={rightArrow} className="w-[6px]"  />
          </div>

          <div className=" mt-10 flex flex-col  space-y-10">

             {
              navlinks.map((link,index)=> <div className={`flex gap-3 p-2 rounded cursor-pointer${active === index ? " bg-[#FF8C8C] font-semibold" : ""}`}
              onClick={()=>setActive(index)} key={index}>
             
               <link.icon/>
              <span className={isExpanded? "block": "hidden"}>{link.name}</span>


              </div> )
             }
          </div>



        </motion.div>
            
        
    );
};

export default Navigationbar;