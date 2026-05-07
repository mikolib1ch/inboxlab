export function Settings() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-600">Manage your account preferences</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white border-2 border-black p-6">
        <h2 className="text-xl font-bold mb-6">Profile</h2>
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          {/* Profile Picture */}
          <div className="w-32 h-32 border-2 border-black bg-[#ec78b8]"></div>

          {/* User Info */}
          <div className="text-center">
            <h3 className="text-xl font-bold">Miko Libich</h3>
            <p className="text-sm text-gray-600">
              Computer Science Major • Class of 2026
            </p>
          </div>

          {/* Log Out Button */}
          <button className="w-full max-w-xs px-6 py-3 border-2 border-black bg-white hover:bg-[#f6ede4] transition-colors">
            <span className="font-mono text-sm font-bold">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
