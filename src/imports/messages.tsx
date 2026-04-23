export function Messages() {
  return (
    <div className="h-[calc(100vh-10rem)] bg-white border-2 border-black flex">
      {/* Sidebar with message list */}
      <div className="w-80 border-r-2 border-black flex flex-col">
        {/* Search */}
        <div className="p-4 border-b-2 border-black">
          <div className="w-full h-10 border-2 border-black bg-[#f6ede4]"></div>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className={`p-4 border-b border-[#f6ede4] hover:bg-[#f6ede4] cursor-pointer ${
                i === 1 ? "bg-[#f6ede4]" : ""
              }`}
            >
              <div className="flex gap-3">
                <div className="w-12 h-12 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-2">
                    <div className="w-32 h-4 bg-black"></div>
                    <div className="w-16 h-3 bg-[#f6ede4]"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-3 bg-[#f6ede4]"></div>
                    <div className="w-3/4 h-3 bg-[#f6ede4]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-black bg-[#ec78b8]"></div>
            <div className="space-y-1">
              <div className="w-32 h-4 bg-black"></div>
              <div className="w-20 h-3 bg-[#f6ede4]"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 border-2 border-black"></div>
            <div className="w-8 h-8 border-2 border-black"></div>
            <div className="w-8 h-8 border-2 border-black"></div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Received message */}
          <div className="flex gap-3 max-w-[70%]">
            <div className="w-8 h-8 border-2 border-black bg-[#f6ede4] flex-shrink-0"></div>
            <div className="space-y-2">
              <div className="p-3 border-2 border-black bg-[#f6ede4]">
                <div className="w-48 h-3 bg-black mb-2"></div>
                <div className="w-64 h-3 bg-black"></div>
              </div>
              <div className="w-16 h-3 bg-[#f6ede4]"></div>
            </div>
          </div>

          {/* Sent message */}
          <div className="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>
            <div className="space-y-2">
              <div className="p-3 border-2 border-black bg-[#ec78b8]">
                <div className="w-40 h-3 bg-white mb-2"></div>
                <div className="w-56 h-3 bg-white"></div>
              </div>
              <div className="w-16 h-3 bg-[#f6ede4] ml-auto"></div>
            </div>
          </div>

          {/* Received message */}
          <div className="flex gap-3 max-w-[70%]">
            <div className="w-8 h-8 border-2 border-black bg-[#f6ede4] flex-shrink-0"></div>
            <div className="space-y-2">
              <div className="p-3 border-2 border-black bg-[#f6ede4]">
                <div className="w-56 h-3 bg-black"></div>
              </div>
              <div className="w-16 h-3 bg-[#f6ede4]"></div>
            </div>
          </div>

          {/* Sent message */}
          <div className="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>
            <div className="space-y-2">
              <div className="p-3 border-2 border-black bg-[#ec78b8]">
                <div className="w-48 h-3 bg-white mb-2"></div>
                <div className="w-64 h-3 bg-white mb-2"></div>
                <div className="w-40 h-3 bg-white"></div>
              </div>
              <div className="w-16 h-3 bg-[#f6ede4] ml-auto"></div>
            </div>
          </div>

          {/* Received message */}
          <div className="flex gap-3 max-w-[70%]">
            <div className="w-8 h-8 border-2 border-black bg-[#f6ede4] flex-shrink-0"></div>
            <div className="space-y-2">
              <div className="p-3 border-2 border-black bg-[#f6ede4]">
                <div className="w-32 h-3 bg-black"></div>
              </div>
              <div className="w-16 h-3 bg-[#f6ede4]"></div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t-2 border-black">
          <div className="flex gap-2">
            <div className="w-10 h-10 border-2 border-black flex-shrink-0"></div>
            <div className="flex-1 h-10 border-2 border-black bg-[#f6ede4]"></div>
            <div className="w-10 h-10 border-2 border-black flex-shrink-0"></div>
            <div className="w-20 h-10 border-2 border-black bg-[#ec78b8]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}