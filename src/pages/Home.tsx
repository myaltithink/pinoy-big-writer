import { useState } from "react";
import { FaCogs, FaUsers } from "react-icons/fa";

export default function GameUI() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="relative w-full h-screen bg-purple-700 overflow-hidden">
      {/* Menu and Settings Buttons */}
      <div className="absolute top-8 left-8 p-2 bg-teal-400 rounded-lg shadow-lg">
        <FaCogs size={32} className="text-white" />
      </div>
      <div className="absolute top-28 left-8 p-2 bg-teal-400 rounded-lg shadow-lg">
        <FaUsers size={32} className="text-white" />
      </div>

      {/* Currency Display */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="flex items-center px-4 py-2 bg-gray-800 rounded-full shadow-lg">
          <div className="w-6 h-6 bg-blue-400 rounded-full mr-2"></div>
          <span className="text-white font-bold">45</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-gray-800 rounded-full shadow-lg">
          <div className="w-6 h-6 bg-yellow-300 rounded-full mr-2"></div>
          <span className="text-white font-bold">45350</span>
        </div>
      </div>

      {/* Ad Button */}
      <div className="absolute top-8 right-8 bg-yellow-300 p-1 rounded-lg shadow-lg">
        <div className="border-2 border-white px-2 py-1 rounded flex items-center">
          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-1">
            <span className="text-xs font-bold">🎮</span>
          </div>
          <span className="text-xs font-bold">WATCH AD</span>
        </div>
      </div>

      {/* Game Logo */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
        <div className="relative">
          <div className="text-6xl font-extrabold flex justify-center">
            <span className="text-blue-500 drop-shadow-lg">2</span>
            <span className="text-green-500 drop-shadow-lg">3</span>
            <span className="text-yellow-400 drop-shadow-lg">4</span>
          </div>
          <div className="text-4xl font-extrabold text-white leading-none">
            PLAYER
          </div>
          <div className="text-5xl font-extrabold text-white leading-none">
            GAMES
          </div>
        </div>
      </div>

      {/* Game Options */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/4 flex flex-col items-center space-y-4 w-full max-w-md">
        {/* 1 Player Option */}
        <button
          className="w-3/4 max-w-xs bg-gradient-to-r from-red-500 to-red-600 rounded-xl border-4 border-red-400 shadow-lg transform hover:scale-105 transition"
          onClick={() => setSelectedOption("1player")}
        >
          <div className="py-3 text-center">
            <div className="text-4xl font-bold text-white">1</div>
            <div className="text-xl font-bold text-white">PLAYER</div>
          </div>
        </button>

        {/* 2-3-4 Players Option */}
        <button
          className="w-3/4 max-w-xs bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl border-4 border-blue-400 shadow-lg transform hover:scale-105 transition"
          onClick={() => setSelectedOption("234players")}
        >
          <div className="py-3 text-center flex justify-center">
            <div className="flex items-center justify-center">
              <span className="text-4xl font-bold text-white px-2">2</span>
              <span className="text-4xl font-bold text-white px-2">3</span>
              <span className="text-4xl font-bold text-white px-2">4</span>
            </div>
          </div>
          <div className="text-xl font-bold text-white">PLAYERS</div>
        </button>

        {/* Team vs Team Option */}
        <div className="w-3/4 max-w-xs text-center">
          <div className="bg-gray-300 rounded-full py-1 px-4 text-sm font-bold inline-block mb-2">
            TEAM vs TEAM
          </div>
          <button
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl border-4 border-yellow-300 shadow-lg transform hover:scale-105 transition"
            onClick={() => setSelectedOption("4players")}
          >
            <div className="py-3 text-center">
              <div className="text-4xl font-bold text-white">4</div>
              <div className="text-xl font-bold text-white">PLAYERS</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
