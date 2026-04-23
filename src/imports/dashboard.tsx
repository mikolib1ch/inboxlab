export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="w-48 h-8 bg-black"></div>
        <div className="w-96 h-4 bg-[#ec78b8]"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border-2 border-black p-6">
            <div className="w-24 h-4 bg-[#f6ede4] mb-3"></div>
            <div className="w-32 h-10 bg-black mb-2"></div>
            <div className="w-20 h-3 bg-[#ec78b8]"></div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-2 bg-white border-2 border-black p-6">
          <div className="w-40 h-6 bg-black mb-6"></div>
          <div className="space-y-3">
            {[100, 80, 120, 90, 110, 95, 105].map((height, i) => (
              <div key={i} className="flex items-end gap-2 h-32">
                <div
                  className="w-full bg-[#ec78b8] border-2 border-black"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="text-xs font-mono text-black">
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white border-2 border-black p-6">
          <div className="w-32 h-6 bg-black mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border-l-4 border-[#ec78b8] pl-3">
                <div className="w-24 h-3 bg-black mb-2"></div>
                <div className="w-full h-3 bg-[#f6ede4] mb-1"></div>
                <div className="w-3/4 h-3 bg-[#f6ede4]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border-2 border-black p-6">
        <div className="w-40 h-6 bg-black mb-4"></div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black">
                {["Name", "Status", "Date", "Amount", "Actions"].map((header) => (
                  <th key={header} className="text-left p-3">
                    <div className="w-20 h-4 bg-black"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-[#f6ede4]">
                  <td className="p-3">
                    <div className="w-32 h-4 bg-[#f6ede4]"></div>
                  </td>
                  <td className="p-3">
                    <div className="w-16 h-6 bg-[#ec78b8]"></div>
                  </td>
                  <td className="p-3">
                    <div className="w-24 h-4 bg-[#f6ede4]"></div>
                  </td>
                  <td className="p-3">
                    <div className="w-20 h-4 bg-[#f6ede4]"></div>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 border-2 border-black"></div>
                      <div className="w-8 h-8 border-2 border-black"></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}