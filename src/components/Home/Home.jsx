import React from "react";
import "./Home.css";
import { motion } from "framer-motion";


function Home() {
  return (
    <div className="home-container">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave-line"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 64L60 96C120 128 240 192 360 213.3C480 235 600 213 720 208C840 203 960 213 1080 202.7C1200 192 1320 160 1380 144L1440 128"
          stroke="#D96ED4"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 96L60 90C120 85 240 75 360 96C480 117 600 171 720 165.3C840 160 960 96 1080 85.3C1200 75 1320 117 1380 138.7L1440 160"
          stroke="yellow"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 128L60 144C120 160 240 192 360 186.7C480 181 600 139 720 112C840 85 960 75 1080 85.3C1200 96 1320 128 1380 144L1440 160"
          stroke="blue"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 160L60 154.7C120 149 240 139 360 133.3C480 128 600 128 720 144C840 160 960 192 1080 192C1200 192 1320 160 1380 144L1440 128"
          stroke="green"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 192L60 186.7C120 181 240 171 360 149.3C480 128 600 96 720 112C840 128 960 192 1080 202.7C1200 213 1320 171 1380 149.3L1440 160"
          stroke="orange"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 224L60 202.7C120 181 240 139 360 133.3C480 128 600 160 720 160C840 160 960 128 1080 144C1200 160 1320 224 1380 234.7L1440 245.3"
          stroke="red"
          strokeOpacity="0.5"
          strokeWidth="10"
        />

        {/* Líneas adicionales */}
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 256L60 240C120 224 240 192 360 197.3C480 203 600 245 720 234.7C840 224 960 160 1080 149.3C1200 139 1320 181 1380 202.7L1440 213.3"
          stroke="purple"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 288L60 293.3C120 299 240 309 360 277.3C480 245 600 171 720 154.7C840 139 960 181 1080 170.7C1200 160 1320 96 1380 64L1440 96"
          stroke="teal"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 320L60 314.7C120 309 240 299 360 277.3C480 256 600 224 720 234.7C840 245 960 299 1080 288C1200 277 1320 203 1380 170.7L1440 160"
          stroke="maroon"
          strokeOpacity="0.5"
          strokeWidth="10"
        />
      </motion.svg>

      <img
        className="imagenprincipal"
        src="/png.png"
        alt=""
      />
    </div>
  );
}

export default Home;