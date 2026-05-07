export function Settings() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="w-40 h-8 bg-black"></div>
        <div className="w-80 h-4 bg-[#f6ede4]"></div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white border-2 border-black p-6">
          <div className="w-40 h-6 bg-black mb-6"></div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="w-24 h-4 bg-black mb-2"></div>
                <div className="w-full h-10 border-2 border-black bg-[#f6ede4]"></div>
              </div>
              <div>
                <div className="w-24 h-4 bg-black mb-2"></div>
                <div className="w-full h-10 border-2 border-black bg-[#f6ede4]"></div>
              </div>
            </div>
            <div>
              <div className="w-24 h-4 bg-black mb-2"></div>
              <div className="w-full h-10 border-2 border-black bg-[#f6ede4]"></div>
            </div>
            <div>
              <div className="w-24 h-4 bg-black mb-2"></div>
              <div className="w-full h-32 border-2 border-black bg-[#f6ede4]"></div>
            </div>
          </div>
        </div>

        {/* Toggle Settings */}
        <div className="bg-white border-2 border-black p-6">
          <div className="w-48 h-6 bg-black mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-[#f6ede4] last:border-0">
                <div className="space-y-2">
                  <div className="w-40 h-4 bg-black"></div>
                  <div className="w-64 h-3 bg-[#f6ede4]"></div>
                </div>
                <div className={`w-12 h-6 border-2 border-black rounded-full ${i % 2 === 0 ? 'bg-[#ec78b8]' : 'bg-[#f6ede4]'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Radio Group */}
        <div className="bg-white border-2 border-black p-6">
          <div className="w-40 h-6 bg-black mb-6"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 border-2 border-black hover:bg-[#f6ede4]">
                <div className={`w-5 h-5 rounded-full border-2 border-black ${i === 1 ? "bg-[#ec78b8]" : "bg-white"}`}></div>
                <div className="space-y-1 flex-1">
                  <div className="w-32 h-4 bg-black"></div>
                  <div className="w-48 h-3 bg-[#f6ede4]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checkbox Group */}
        <div className="bg-white border-2 border-black p-6">
          <div className="w-40 h-6 bg-black mb-6"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-5 h-5 border-2 border-black ${i % 2 === 0 ? "bg-[#ec78b8]" : "bg-white"}`}></div>
                <div className="w-48 h-4 bg-[#f6ede4]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-2 border-2 border-black bg-white hover:bg-[#f6ede4]">
            <span className="font-mono text-sm">Cancel</span>
          </button>
          <button className="px-6 py-2 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90">
            <span className="font-mono text-sm">Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}