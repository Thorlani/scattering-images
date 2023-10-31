import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{
          opacity: 0.8,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          borderRadius: "12%",
          position: "relative",
        }}
        animate={{
          opacity: 1,
          borderRadius: "0%",
          backgroundColor: "#fff",
        }}
        transition={{
          delay: 0.75,
          duration: 1,
          ease: "linear",
        }}
        className="wrapper"
      >
        <motion.div
          initial={{
            opacity: 1,
            top: "38%",
            left: "45%",
            width: "150px",
            height: "150px",
          }}
          animate={{
            opacity: 1,
            top: "5%",
            left: "10%",
            top: num === 5 ? "5%" : num === 0 ? "5%" : "55%",
            left: num === 5 ? "10%" : num === 0 ? "10%" : "65%",
            width: num === 5 ? "500px" : num === 0 ? "150px" : "150px",
            height: num === 5 ? "500px" : num === 0 ? "150px" : "150px",
            backgroundColor: num === 5 ? "#fff" : "rgb(189, 189, 189)",
          }}
          transition={{
            delay: num === 5 ? 0.5 : num === 0 ? 1.6 : 0.5,
            duration: 1.7,
            ease: "linear",
          }}
          className="green"
          onClick={() => setNum(5)}
          onDoubleClick={() => setNum(0)}
        >
          <motion.img
            initial={{
              width: "100%",
              height: "100%",
            }}
            animate={{
              width: num === 5 ? "90%" : "100%",
              height: num === 5 ? "90%" : "100%",
            }}
            src="5.jpg"
            alt="fashionable image"
          />
          <h1>Lorence Lozano</h1>
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            top: "38%",
            left: "45%",
            width: "150px",
            height: "150px",
          }}
          animate={{
            opacity: 1,
            top: num === 4 ? "5%" : num === 0 ? "70%" : "70%",
            left: num === 4 ? "10%" : num === 0 ? "80%" : "80%",
            width: num === 4 ? "500px" : num === 0 ? "150px" : "150px",
            height: num === 4 ? "500px" : num === 0 ? "150px" : "150px",
            backgroundColor: num === 4 ? "#fff" : "rgb(189, 189, 189)",
          }}
          transition={{
            delay: num === 4 ? 0.5 : num === 0 ? 1.6 : 0.5,
            duration: 2,
            ease: "linear",
          }}
          className="red"
          onClick={() => setNum(4)}
          onDoubleClick={() => setNum(0)}
        >
          <motion.img
            initial={{
              width: "100%",
              height: "100%",
            }}
            animate={{
              width: num === 4 ? "90%" : "100%",
              height: num === 4 ? "90%" : "100%",
            }}
            src="4.jpg"
            alt="fashionable image"
          />
          <h1>100K MAKHASETTE</h1>
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            top: "38%",
            left: "45%",
            width: "150px",
            height: "150px",
          }}
          animate={{
            opacity: 1,
            top: num === 2 ? "5%" : num === 0 ? "70%" : "25%",
            left: num === 2 ? "10%" : num === 0 ? "10%" : "65%",
            width: num === 2 ? "500px" : num === 0 ? "150px" : "150px",
            height: num === 2 ? "500px" : num === 0 ? "150px" : "150px",
            backgroundColor: num === 2 ? "#fff" : "rgb(189, 189, 189)",
          }}
          transition={{
            delay: num === 2 ? 0.5 : num === 0 ? 1.2 : 0.5,
            duration: 2,
            ease: "linear",
          }}
          className="yellow"
          onClick={() => setNum(2)}
          onDoubleClick={() => setNum(0)}
        >
          <motion.img
            initial={{
              width: "100%",
              height: "100%",
            }}
            animate={{
              width: num === 2 ? "90%" : "100%",
              height: num === 2 ? "90%" : "100%",
            }}
            src="3.jpg"
            alt="fashionable image"
          />
          <h1>cottonbro studio</h1>
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            top: "38%",
            left: "45%",
            width: "150px",
            height: "150px",
          }}
          animate={{
            opacity: 1,
            top: num === 1 ? "5%" : num === 0 ? "5%" : "5%",
            left: num === 1 ? "10%" : num === 0 ? "80%" : "80%",
            width: num === 1 ? "500px" : num === 0 ? "150px" : "150px",
            height: num === 1 ? "500px" : num === 0 ? "150px" : "150px",
            backgroundColor: num === 1 ? "#fff" : "rgb(189, 189, 189)",
          }}
          transition={{
            delay: num === 1 ? 0.5 : num === 0 ? 1.8 : 0.5,
            duration: 2,
            ease: "linear",
          }}
          className="blue"
          onClick={() => setNum(1)}
          onDoubleClick={() => setNum(0)}
        >
          <motion.img
            initial={{
              width: "100%",
              height: "100%",
            }}
            animate={{
              width: num === 1 ? "90%" : "100%",
              height: num === 1 ? "90%" : "100%",
            }}
            src="2.jpg"
            alt="fashionable image"
          />
          <h1>Aleksandr Neplokhov</h1>
        </motion.div>
        <motion.div
          initial={{
            opacity: 1,
            top: "38%",
            left: "45%",
            width: "150px",
            height: "150px",
          }}
          animate={{
            opacity: 1,
            top: num === 3 ? "5%" : num === 0 ? "25%" : "35%",
            left: num === 3 ? "10%" : num === 0 ? "39%" : "80%",
            width: num === 3 ? "500px" : num === 0 ? "300px" : "150px",
            height: num === 3 ? "500px" : num === 0 ? "300px" : "150px",
            backgroundColor: num === 3 ? "#fff" : "rgb(189, 189, 189)",
          }}
          transition={{
            delay: num === 3 ? 0.5 : num === 0 ? 1.4 : 0.5,
            duration: 2,
            ease: "linear",
          }}
          className="lightcoral"
          onClick={() => setNum(3)}
          onDoubleClick={() => setNum(0)}
        >
          <motion.img
            initial={{
              width: "100%",
              height: "100%",
            }}
            animate={{
              width: num === 3 ? "90%" : "100%",
              height: num === 3 ? "90%" : "100%",
            }}
            src="1.jpg"
            alt="fashionable image"
          />
          <h1>PNW Production</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
