export default function Vault() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-full text-center bg-white p-4 shadow-md rounded-xl mb-8 flex items-center justify-center gap-3">
        <span className="text-2xl font-bold">PRACTICE STATION</span>
        <span className="text-yellow-400 text-2xl">💡</span>
      </div>

      {/* Folder Section */}
      <div className="flex gap-8 mb-8">
        {[
          { label: "Folder 1: Capitalization" },
          { label: "Folder 2: Punctuation" },
          { label: "Folder 3: Spelling" },
        ].map((folder, i) => (
          <div key={i} className="flex flex-col items-center cursor-pointer">
            <div className="w-24 h-20 bg-yellow-200 border-4 border-yellow-400 rounded-md shadow-md"></div>
            <span className="mt-2 text-sm font-medium text-gray-700 text-center">
              {folder.label}
            </span>
          </div>
        ))}
      </div>

      {/* Home Button */}
      <button className="bg-white p-3 rounded-full shadow-md border-2 border-gray-300 hover:bg-gray-200 transition">
        ⬆️
      </button>
    </div>
  );
}
