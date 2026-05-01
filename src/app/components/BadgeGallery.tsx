import { ProgressBar } from "./ProgressBar";
const storedProgress = JSON.parse(
  localStorage.getItem("badgeProgress") || "{}",
);

export function BadgeGallery() {
  // 3 unlocked, 6 locked badges for demo
  const badges = [
    // Perfect Tone
    {
      id: 1,
      name: "Perfect Tone I",
      description: "Achieve 5/5 on Professional Tone once",
      icon: "⭐",
      progress: 1 + (storedProgress.professionalTone || 0),
      goal: 1,
      unlocked: 1 + (storedProgress.professionalTone || 0) >= 1,
    },
    {
      id: 2,
      name: "Perfect Tone II",
      description: "Achieve 5/5 on Professional Tone five times",
      icon: "⭐",
      progress: 4 + (storedProgress.professionalTone || 0),
      goal: 5,
      unlocked: 4 + (storedProgress.professionalTone || 0) >= 5,
    },
    {
      id: 3,
      name: "Perfect Tone III",
      description: "Achieve 5/5 on Professional Tone ten times",
      icon: "⭐",
      progress: 4 + (storedProgress.professionalTone || 0),
      goal: 10,
      unlocked: 4 + (storedProgress.professionalTone || 0) >= 10,
    },

    // Early Bird
    {
      id: 4,
      name: "Early Bird I",
      description: "Send 5 timely emails",
      icon: "🕊️",
      progress: 5 + (storedProgress.timeliness || 0),
      goal: 5,
      unlocked: 5 + (storedProgress.timeliness || 0) >= 5,
    },
    {
      id: 5,
      name: "Early Bird II",
      description: "Send 15 timely emails",
      icon: "🕊️",
      progress: 5 + (storedProgress.timeliness || 0),
      goal: 15,
      unlocked: 5 + (storedProgress.timeliness || 0) >= 15,
    },
    {
      id: 6,
      name: "Early Bird III",
      description: "Send 30 timely emails",
      icon: "🕊️",
      progress: 5 + (storedProgress.timeliness || 0),
      goal: 30,
      unlocked: 5 + (storedProgress.timeliness || 0) >= 30,
    },

    // Clear Communicator
    {
      id: 7,
      name: "Clear Communicator I",
      description: "Write 1 email with a perfect subject line",
      icon: "💬",
      progress: 1 + (storedProgress.subjectLine || 0),
      goal: 1,
      unlocked: 1 + (storedProgress.subjectLine || 0) >= 1,
    },
    {
      id: 8,
      name: "Clear Communicator II",
      description: "Write 5 emails with perfect subject lines",
      icon: "💬",
      progress: 1 + (storedProgress.subjectLine || 0),
      goal: 5,
      unlocked: 1 + (storedProgress.subjectLine || 0) >= 5,
    },
    {
      id: 9,
      name: "Clear Communicator III",
      description: "Write 10 emails with perfect subject lines",
      icon: "💬",
      progress: 1 + (storedProgress.subjectLine || 0),
      goal: 10,
      unlocked: 1 + (storedProgress.subjectLine || 0) >= 10,
    },

    // Perfect Completeness
    {
      id: 13,
      name: "Perfect Completeness I",
      description: "Write 1 email with perfect completeness",
      icon: "✅",
      progress: 0 + (storedProgress.completeness || 0),
      goal: 1,
      unlocked: 0 + (storedProgress.completeness || 0) >= 1,
    },
    {
      id: 14,
      name: "Perfect Completeness II",
      description: "Write 5 emails with perfect completeness",
      icon: "✅",
      progress: 0 + (storedProgress.completeness || 0),
      goal: 5,
      unlocked: 0 + (storedProgress.completeness || 0) >= 5,
    },
    {
      id: 15,
      name: "Perfect Completeness III",
      description: "Write 10 emails with perfect completeness",
      icon: "✅",
      progress: 0 + (storedProgress.completeness || 0),
      goal: 10,
      unlocked: 0 + (storedProgress.completeness || 0) >= 10,
    },

    // Reply Master
    {
      id: 16,
      name: "Reply Master I",
      description: "Reply to 5 emails",
      icon: "📨",
      progress: 0 + (storedProgress.replyMaster || 0),
      goal: 5,
      unlocked: 0 + (storedProgress.replyMaster || 0) >= 5,
    },
    {
      id: 17,
      name: "Reply Master II",
      description: "Reply to 20 emails",
      icon: "📨",
      progress: 7 + (storedProgress.replyMaster || 0),
      goal: 20,
      unlocked: 7 + (storedProgress.replyMaster || 0) >= 20,
    },
    {
      id: 18,
      name: "Reply Master III",
      description: "Reply to 50 emails",
      icon: "📨",
      progress: 7 + (storedProgress.replyMaster || 0),
      goal: 50,
      unlocked: 7 + (storedProgress.replyMaster || 0) >= 50,
    },

    // Attachment Ace
    {
      id: 19,
      name: "Attachment Ace I",
      description: "Send 1 email with an attachment",
      icon: "📎",
      progress: 1 + (storedProgress.attachmentAce || 0),
      goal: 1,
      unlocked: 1 + (storedProgress.attachmentAce || 0) >= 1,
    },
    {
      id: 20,
      name: "Attachment Ace II",
      description: "Send 5 emails with attachments",
      icon: "📎",
      progress: 1 + (storedProgress.attachmentAce || 0),
      goal: 5,
      unlocked: 1 + (storedProgress.attachmentAce || 0) >= 5,
    },
    {
      id: 21,
      name: "Attachment Ace III",
      description: "Send 10 emails with attachments",
      icon: "📎",
      progress: 1 + (storedProgress.attachmentAce || 0),
      goal: 10,
      unlocked: 1 + (storedProgress.attachmentAce || 0) >= 10,
    },

    // Perfect Structure
    {
      id: 22,
      name: "Perfect Structure I",
      description: "Write 1 email with perfect structure",
      icon: "🏗️",
      progress: 0 + (storedProgress.structure || 0),
      goal: 1,
      unlocked: 0 + (storedProgress.structure || 0) >= 1,
    },
    {
      id: 23,
      name: "Perfect Structure II",
      description: "Write 5 emails with perfect structure",
      icon: "🏗️",
      progress: 0 + (storedProgress.structure || 0),
      goal: 5,
      unlocked: 0 + (storedProgress.structure || 0) >= 5,
    },
    {
      id: 24,
      name: "Perfect Structure III",
      description: "Write 10 emails with perfect structure",
      icon: "🏗️",
      progress: 0 + (storedProgress.structure || 0),
      goal: 10,
      unlocked: 0 + (storedProgress.structure || 0) >= 10,
    },

    // Speedy Sender
    {
      id: 25,
      name: "Speedy Sender I",
      description: "Send a reply within 5 minutes once",
      icon: "⚡",
      progress: 0 + (storedProgress.timeliness || 0),
      goal: 1,
      unlocked: 0 + (storedProgress.timeliness || 0) >= 1,
    },
    {
      id: 26,
      name: "Speedy Sender II",
      description: "Send a reply within 5 minutes five times",
      icon: "⚡",
      progress: 0 + (storedProgress.timeliness || 0),
      goal: 5,
      unlocked: 0 + (storedProgress.timeliness || 0) >= 5,
    },
    {
      id: 27,
      name: "Speedy Sender III",
      description: "Send a reply within 5 minutes ten times",
      icon: "⚡",
      progress: 0 + (storedProgress.timeliness || 0),
      goal: 10,
      unlocked: 0 + (storedProgress.timeliness || 0) >= 10,
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
