"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const MaintenancePage: React.FC = () => {
  return (
    <BackgroundLines className="min-h-screen flex flex-col justify-center items-center p-4 text-white overflow-hidden">
      <motion.div
        className="z-10 max-w-4xl w-full text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo and Site Name */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-12">
          <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
            <Image
              src="/Plogo.png"
              alt="PaddleLift Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            PaddleLift
          </h1>
        </div>

        {/* Lottie Animation */}
        <div className="h-60 sm:h-56 lg:h-64 w-full flex justify-center items-center mb-6">
          <DotLottieReact
            src="https://lottie.host/1023e8ac-8cea-4a7b-b2e7-9ad5418c6dce/uRGfIOl3q1.lottie"
            loop
            autoplay
          />
        </div>

        {/* Maintenance Text */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Site Under Maintenance
        </h2>

        <p className="text-base sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          We are currently performing some important updates to improve your
          experience. Our team is working diligently to bring you an enhanced
          website.
        </p>

        <div className="bg-blue-500/20 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg text-left max-w-2xl mx-auto px-4 sm:px-6">
          <p className="text-base sm:text-xl">
            <span className="font-semibold">Estimated Return:</span> We'll be
            back online very soon! Thank you for your patience.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-4 text-xs sm:text-sm opacity-75 text-center w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        © {new Date().getFullYear()} PaddleLift. All Rights Reserved.
      </motion.div>
    </BackgroundLines>
  );
};

export default MaintenancePage;
