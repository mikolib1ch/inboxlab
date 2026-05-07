import { Link } from "react-router";

export function Dashboard() {
  const badges = [
    {
      id: 1,
      name: "Perfect Tone",
      description: "Achieved 5/5 on Professional Tone",
      icon: "⭐",
    },
    {
      id: 2,
      name: "Early Bird",
      description: "Sent 10 timely emails",
      icon: "🕊️",
    },
    {
      id: 3,
      name: "Clear Communicator",
      description: "5 emails with perfect subject lines",
      icon: "💬",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="text-center space-y-8 max-w-2xl w-full px-4">
        {/* Welcome Message */}
        <h1 className="text-4xl md:text-5xl font-bold">Welcome back, Miko!</h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/inbox"
            className="px-6 py-2.5 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90 transition-opacity flex-1 sm:flex-none sm:w-44 flex items-center justify-center"
          >
            <span
              style={{
                fontFamily: '"Press Start 2P", system-ui',
                fontWeight: 400,
                fontSize: "0.875rem",
              }}
            >
              Inbox
            </span>
          </Link>
          <Link
            to="/compose"
            className="px-6 py-2.5 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90 transition-opacity flex-1 sm:flex-none sm:w-44 flex items-center justify-center"
          >
            <span className="font-mono text-sm">Compose new message</span>
          </Link>
          <Link
            to="/profile"
            className="px-6 py-2.5 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90 transition-opacity flex-1 sm:flex-none sm:w-44 flex items-center justify-center"
          >
            <span className="font-mono text-sm">View my profile</span>
          </Link>
        </div>

        {/* Recently Earned Badges */}
        <div className="pt-8">
          <h2 className="text-xl font-bold mb-6">Recently Earned Badges</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center gap-3 max-w-[180px]"
              >
                <div className="w-24 h-24 border-2 border-black bg-[#ec78b8] flex items-center justify-center">
                  <div className="text-4xl">{badge.icon}</div>
                </div>
                <div className="font-bold font-mono text-sm text-center">
                  {badge.name}
                </div>
                <div className="text-xs text-gray-600 text-center">
                  {badge.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
