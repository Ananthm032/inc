
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React,{ useEffect } from "react";
import First from "./FirstPage/First";
import Second from "./Secondpage/Second"
import Third from "./Thirdpage/Third"
import Forth from "./Forthpage/Forth"
import Fifith from "./Fifthpage/Fifith";
import "./Full.css"
const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0.3, scale: 0.3 }
};

const Box = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
     className="Full"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1> {num} </h1>
    </motion.div>
  );
};

export default function Full() {
  return (
    <div className="App">
      <Box num={<First/>}>
       
      </Box>
      <Box num={<Second/>}>
       
      </Box>
      <Box num={ <Third/>}>
      
      </Box>
      <Box num={ <Forth/>}>
      
      </Box>
      <Box num={ <Fifith/>}>
      
      </Box>
    </div>
  );
}
