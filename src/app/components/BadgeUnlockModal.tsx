import { useState } from "react";

interface BadgeUnlockModalProps {
  badges: string[];
  onClose: () => void;
}

export function BadgeUnlockModal({ badges, onClose }: BadgeUnlockModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (badges.length === 0) return null;

  const currentBadge = badges[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? badges.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === badges.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white border-4 border-black rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 font-bold text-xl hover:opacity-60"
        >
          ×
        </button>

        <div className="text-5xl mb-4">🎉</div>

        <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>

        <p className="font-mono text-sm text-gray-600 mb-6">
          You've unlocked a new badge
        </p>

        <div className="mx-auto w-32 h-32 rounded-full border-4 border-black bg-[#ec78b8] flex items-center justify-center text-6xl mb-6">
          🏆
        </div>

        <h3 className="text-xl font-bold font-mono mb-2">{currentBadge}</h3>

        <p className="text-sm text-gray-600 mb-6">
          Great work — keep improving your email skills.
        </p>

        {badges.length > 1 && (
          <div className="flex items-center justify-between gap-3 mb-6">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 border-2 border-black bg-white hover:bg-[#f6ede4]"
            >
              Prev
            </button>

            <span className="font-mono text-xs">
              {currentIndex + 1} / {badges.length}
            </span>

            <button
              onClick={handleNext}
              className="px-4 py-2 border-2 border-black bg-white hover:bg-[#f6ede4]"
            >
              Next
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full px-6 py-3 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90"
        >
          <span className="font-mono text-sm">Awesome!</span>
        </button>
      </div>
    </div>
  );
}
