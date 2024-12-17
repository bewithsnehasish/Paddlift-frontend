"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

const MaintenancePage: React.FC = () => {
  return (
    <BackgroundLines className="min-h-screen flex flex-col justify-center items-center p-4 text-white overflow-hidden">
      <motion.div
        className="z-10 max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo and Site Name */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="w-24 h-24 relative">
            <Image
              src="/Plogo.png"
              alt="PaddleLift Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1 className="text-6xl font-bold">PaddleLift</h1>
        </div>

        {/* Maintenance Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 mx-auto text-yellow-400 mb-8 animate-spin-slow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        {/* Maintenance Text */}
        <h2 className="text-5xl font-bold mb-6">Site Under Maintenance</h2>

        <p className="text-2xl mb-8 max-w-2xl mx-auto">
          We are currently performing some important updates to improve your
          experience. Our team is working diligently to bring you an enhanced
          website.
        </p>

        <div className="bg-blue-500/20 border-l-4 border-blue-500 p-6 rounded-lg text-left max-w-2xl mx-auto">
          <p className="text-xl">
            <span className="font-semibold">Estimated Return:</span> We'll be
            back online very soon! Thank you for your patience.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-4 text-sm opacity-75"
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
