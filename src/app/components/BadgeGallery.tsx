import { ProgressBar } from "./ProgressBar";

export function BadgeGallery() {
  // 3 unlocked, 6 locked badges for demo
  const badges = [
    {
      id: 1,
      name: "Perfect Tone",
      description: "Achieved 5/5 on Professional Tone",
      icon: "⭐",
      unlocked: true,
      progress: 5,
      goal: 5,
    },
    {
      id: 2,
      name: "Early Bird",
      description: "Sent 10 timely emails",
      icon: "🕊️",
      unlocked: true,
      progress: 10,
      goal: 10,
    },
    {
      id: 3,
      name: "Clear Communicator",
      description: "5 emails with perfect subject lines",
      icon: "💬",
      unlocked: true,
      progress: 5,
      goal: 5,
    },
    {
      id: 4,
      name: "Inbox Zero",
      description: "Clear your inbox completely",
      icon: "📭",
      unlocked: false,
      progress: 2,
      goal: 5,
    },
    {
      id: 5,
      name: "Perfect Completeness",
      description: "5 emails with perfect completeness",
      icon: "✅",
      unlocked: false,
      progress: 0,
      goal: 5,
    },
    {
      id: 6,
      name: "Reply Master",
      description: "Reply to 20 emails",
      icon: "📨",
      unlocked: false,
      progress: 7,
      goal: 20,
    },
    {
      id: 7,
      name: "Attachment Ace",
      description: "Send 5 emails with attachments",
      icon: "📎",
      unlocked: false,
      progress: 1,
      goal: 5,
    },
    {
      id: 8,
      name: "Perfect Structure",
      description: "5 emails with perfect structure",
      icon: "🏗️",
      unlocked: false,
      progress: 0,
      goal: 5,
    },
    {
      id: 9,
      name: "Speedy Sender",
      description: "Send a reply within 5 minutes",
      icon: "⚡",
      unlocked: false,
      progress: 0,
      goal: 1,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Badge Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`flex flex-col items-center p-8 rounded-xl border-2 border-black bg-white shadow-md transition-all ${badge.unlocked ? "" : "opacity-60"}`}
            >
              <div
                className={`w-28 h-28 flex items-center justify-center text-6xl mb-4 border-2 border-black rounded-full ${badge.unlocked ? "bg-[#ec78b8] text-white" : "bg-gray-200 text-gray-400"}`}
              >
                {badge.icon}
              </div>
              <div className="font-bold font-mono text-lg text-center mb-2">
                {badge.name}
              </div>
              <div className="text-xs text-gray-600 text-center mb-4 min-h-[2.5em]">
                {badge.description}
              </div>
              <ProgressBar value={badge.progress} max={badge.goal} />
              <div className="text-xs font-mono text-gray-700 mt-2">
                {badge.unlocked
                  ? "Unlocked!"
                  : `Progress: ${badge.progress} / ${badge.goal}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
