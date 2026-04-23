export function Profile() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white border-2 border-black p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-32 h-32 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <div className="w-48 h-8 bg-black"></div>
              <div className="w-32 h-4 bg-[#f6ede4]"></div>
            </div>
            <div className="w-full max-w-2xl h-16 border-2 border-black bg-[#f6ede4]"></div>
            <div className="flex gap-2">
              <div className="w-24 h-8 border-2 border-black bg-[#ec78b8] text-white"></div>
              <div className="w-24 h-8 border-2 border-black bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border-2 border-black p-6 text-center">
            <div className="w-16 h-10 bg-black mx-auto mb-2"></div>
            <div className="w-24 h-4 bg-[#f6ede4] mx-auto"></div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white border-2 border-black">
        <div className="flex gap-2 border-b-2 border-black p-4">
          {["Overview", "Activity", "Posts", "Following"].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2 border-2 font-mono text-sm ${
                i === 0
                  ? "border-black bg-[#ec78b8] text-white"
                  : "border-[#f6ede4] hover:border-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 space-y-4">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="w-32 h-5 bg-black"></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between py-2 border-b border-[#f6ede4]">
                  <div className="w-24 h-4 bg-[#f6ede4]"></div>
                  <div className="w-32 h-4 bg-black"></div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="w-32 h-5 bg-black"></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between py-2 border-b border-[#f6ede4]">
                  <div className="w-24 h-4 bg-[#f6ede4]"></div>
                  <div className="w-32 h-4 bg-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border-2 border-black p-6">
        <div className="w-40 h-6 bg-black mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-4 p-4 border-2 border-[#f6ede4]">
              <div className="w-12 h-12 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="w-64 h-4 bg-black"></div>
                <div className="w-full h-3 bg-[#f6ede4]"></div>
                <div className="w-3/4 h-3 bg-[#f6ede4]"></div>
                <div className="w-24 h-3 bg-[#ec78b8]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}