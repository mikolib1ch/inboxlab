import { Link } from "react-router";
import { useState, useEffect } from "react";

interface Rating {
  category: string;
  score: number;
  feedback: string;
}

interface Email {
  id: number;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  originalMessage: string;
  body: string;
  date: string;
  read: boolean;
  overallScore: number;
  ratings: Rating[];
}

// Default emails (copied from Inbox.tsx for consistency)
const defaultEmails: Email[] = [
  {
    id: 1,
    from: "Dr. Sarah Martinez",
    fromEmail: "s.martinez@university.edu",
    subject: "Re: Extension Request for Assignment 3",
    preview: "Thank you for reaching out regarding your extension request...",
    originalMessage: `Dear Dr. Martinez,\n\nI hope this email finds you well. I am writing to request a 3-day extension for Assignment 3, which is currently due on March 10th.\n\nOver the past week, I have been dealing with some unexpected personal circumstances that have made it difficult for me to allocate sufficient time to complete the assignment to the best of my ability. I have already started working on the assignment and have completed approximately 60% of it, but I need a bit more time to ensure the quality of my work meets the course standards.\n\nI would greatly appreciate it if you could grant me an extension until March 13th. I am committed to submitting high-quality work and believe this additional time will allow me to do so.\n\nThank you for considering my request. Please let me know if you need any additional information.\n\nBest regards,\nStudent Name`,
    body: `Dear Student,\n\nThank you for reaching out regarding your extension request for Assignment 3.\n\nI've reviewed your request and the circumstances you've outlined. I understand that you've been dealing with some challenging situations, and I appreciate you communicating this to me in advance.\n\nI'm happy to grant you a 3-day extension for Assignment 3. Your new deadline will be Friday, March 13th at 11:59 PM instead of the original March 10th deadline.\n\nPlease make sure to submit your work through the course portal by the new deadline. If you encounter any additional difficulties or need further support, don't hesitate to reach out to me or visit during my office hours (Tuesdays and Thursdays, 2-4 PM).\n\nBest of luck with your assignment!\n\nBest regards,\nDr. Sarah Martinez\nAssociate Professor, Department of Computer Science\nOffice: Building A, Room 304\nOffice Hours: T/Th 2-4 PM`,
    date: "2026-03-06T12:00:00Z",
    read: false,
    overallScore: 4.2,
    ratings: [], // Not needed for profile summary
  },
  {
    id: 2,
    from: "Prof. Michael Chen",
    fromEmail: "m.chen@university.edu",
    subject: "Re: Question about grade",
    preview: "I received your email regarding your midterm grade...",
    originalMessage: `hey prof,\n\ni just checked my midterm grade and i only got a 78. i thought i did better than that. can you tell me what i got wrong? also is there any extra credit i can do to bring my grade up because i really need at least a B in this class.\n\nthanks`,
    body: `Dear Student,\n\nI received your email regarding your midterm grade.\n\nWhile I understand you may be disappointed with your score, I need to address some concerns about your email communication. In professional and academic settings, it's important to maintain a formal tone and provide complete information in your communications.\n\nRegarding your grade: The detailed feedback for your midterm is available on the course portal. I've left comments on each section explaining where points were deducted. Please review this feedback carefully.\n\nAs for extra credit opportunities, this information is outlined in the course syllabus. We do not typically offer individualized extra credit assignments, as this would not be fair to other students. However, there are two optional assignments later in the semester that can boost your overall grade if completed well.\n\nI encourage you to come to my office hours if you'd like to discuss your performance and strategies for improvement on future assessments.\n\nBest regards,\nProf. Michael Chen\nDepartment of Mathematics\nOffice Hours: M/W 3-5 PM`,
    date: "2026-03-05T12:00:00Z",
    read: true,
    overallScore: 2.8,
    ratings: [],
  },
  {
    id: 3,
    from: "Dr. Jennifer Lopez",
    fromEmail: "j.lopez@university.edu",
    subject: "Re: (no subject)",
    preview: "I'm writing to address your recent email...",
    originalMessage: `can i get the notes from last class?? i wasnt there`,
    body: `Dear Student,\n\nI'm writing to address your recent email, which unfortunately demonstrates several issues with professional communication that we need to discuss.\n\nFirst, your email lacked a subject line, which makes it difficult to organize and prioritize messages. Second, you did not include a proper greeting, your full name, or the specific class you're referring to (I teach four different sections). Third, the tone was demanding rather than making a polite request.\n\nRegarding your request for notes: As stated in the syllabus and announced in class, it is each student's responsibility to obtain notes from classmates when they miss a session. I do not distribute my teaching notes, as the purpose of attending class is to engage with the material in real-time.\n\nI recommend:\n1. Reaching out to a classmate to share notes\n2. Reviewing the recorded lecture on the course portal (available for 7 days)\n3. Checking the syllabus for attendance and note-sharing policies\n\nIn the future, please ensure your emails include:\n- A clear subject line\n- Proper greeting and closing\n- Your full name and course section\n- A polite request rather than a demand\n- Acknowledgment that you've checked available resources first\n\nPlease see me during office hours if you have questions about professional email etiquette or the course material.\n\nDr. Jennifer Lopez\nAssociate Professor, Department of Psychology\nOffice Hours: T/Th 1-3 PM`,
    date: "2026-03-04T12:00:00Z",
    read: true,
    overallScore: 1.4,
    ratings: [],
  },
];

function getAllEmails(): Email[] {
  let localMsgs: Email[] = [];
  try {
    localMsgs = JSON.parse(localStorage.getItem("inboxMessages") || "[]");
  } catch {}
  // Merge and sort by date (latest first)
  return [...defaultEmails, ...localMsgs].sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : a.id;
    const db = b.date ? new Date(b.date).getTime() : b.id;
    return db - da;
  });
}

export function Profile() {
  const [recentEmails, setRecentEmails] = useState<Email[]>(() =>
    getAllEmails().slice(0, 3),
  );

  // Update on new messages (storage event or polling)
  useEffect(() => {
    const updateEmails = () => {
      setRecentEmails(getAllEmails().slice(0, 3));
    };
    window.addEventListener("storage", updateEmails);
    const interval = setInterval(updateEmails, 2000);
    return () => {
      window.removeEventListener("storage", updateEmails);
      clearInterval(interval);
    };
  }, []);

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

  const getScoreColor = (score: number) => {
    const percentage = (score / 5) * 100;
    if (percentage > 75) return "bg-green-500";
    if (percentage >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white border-2 border-black p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Picture */}
          <div className="w-32 h-32 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>

          {/* Name and Bio */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Alex Johnson</h1>
              <p className="text-sm text-gray-600">
                Computer Science Major • Class of 2027
              </p>
            </div>
            <div className="bg-[#f6ede4] border-2 border-black p-4">
              <p className="font-mono text-sm">
                I'm a sophomore studying computer science with a passion for AI
                and machine learning. Working on improving my professional
                communication skills through inbox lab!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Earned Badges */}
      <div className="bg-white border-2 border-black p-6">
        <h2 className="text-xl font-bold mb-4">Recently Earned Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-[#f6ede4] border-2 border-black p-4 text-center"
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="font-bold font-mono text-sm mb-1">
                {badge.name}
              </div>
              <div className="text-xs text-gray-600">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Recent Ratings */}
      <div className="bg-white border-2 border-black p-6">
        <h2 className="text-xl font-bold mb-4">Most Recent Ratings</h2>
        <div className="space-y-4">
          {recentEmails.map((email) => (
            <Link
              key={email.id}
              to={`/inbox?email=${email.id}`}
              className="block border-2 border-black p-4 bg-[#f6ede4] hover:bg-[#ec78b8] hover:text-white transition-colors cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="font-bold text-sm mb-1">{email.from}</div>
                  <div className="font-mono text-xs opacity-75">
                    {email.subject}
                  </div>
                </div>
                <div className="min-w-[200px]">
                  <div className="font-mono text-xs font-bold mb-1">
                    Overall Score
                  </div>
                  <div className="w-full h-6 border-2 border-black bg-white relative">
                    <div
                      className={`h-full transition-all ${getScoreColor(email.overallScore)}`}
                      style={{ width: `${(email.overallScore / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="font-mono text-xs mt-1 text-right font-bold">
                    {Math.round((email.overallScore / 5) * 100)}%
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
