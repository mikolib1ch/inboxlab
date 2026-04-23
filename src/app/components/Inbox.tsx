import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

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

export function Inbox() {
  const [searchParams] = useSearchParams();
  const emailParam = searchParams.get("email");
  const [selectedEmail, setSelectedEmail] = useState<number | null>(
    emailParam ? parseInt(emailParam) : null,
  );
  // Load initial emails from localStorage, or use default if none
  // ...existing code...

  // Listen for localStorage changes (from Messages page or other tabs)
  useEffect(() => {
    const onStorage = () => {
      setEmails(getAllEmails());
    };
    window.addEventListener("storage", onStorage);
    // Also poll every 2s in case storage event doesn't fire (same tab)
    const interval = setInterval(onStorage, 2000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);
  // ...existing code...
  // Load initial emails from localStorage, or use default if none
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
      ratings: [
        {
          category: "Professional Tone",
          score: 5,
          feedback:
            "Excellent professional tone throughout. Polite and respectful.",
        },
        {
          category: "Subject Line Clarity",
          score: 5,
          feedback:
            "Clear and specific subject line that immediately conveys the purpose.",
        },
        {
          category: "Completeness",
          score: 4,
          feedback:
            "Good context provided. Could have mentioned specific personal circumstances if comfortable.",
        },
        {
          category: "Clarity & Structure",
          score: 4,
          feedback:
            "Well-structured email with clear paragraphs. Easy to understand the request.",
        },
        {
          category: "Timeliness",
          score: 3,
          feedback:
            "Requested close to the deadline. Earlier notice would be better in the future.",
        },
      ],
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
      ratings: [
        {
          category: "Professional Tone",
          score: 2,
          feedback:
            "Too casual ('hey prof'). Use proper greeting and avoid informal language.",
        },
        {
          category: "Subject Line Clarity",
          score: 3,
          feedback:
            "Vague subject line. Should specify which grade/exam and your request (e.g., 'Question about Midterm Grade - Clarification Request').",
        },
        {
          category: "Completeness",
          score: 2,
          feedback:
            "Missing key information: your full name, course number, and specific questions about the exam. Should check syllabus for extra credit policy first.",
        },
        {
          category: "Clarity & Structure",
          score: 3,
          feedback:
            "Run-on sentences and lacks proper structure. Should separate different requests into paragraphs.",
        },
        {
          category: "Timeliness",
          score: 4,
          feedback:
            "Appropriate timing - reaching out soon after grades were posted.",
        },
      ],
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
      ratings: [
        {
          category: "Professional Tone",
          score: 1,
          feedback:
            "No greeting, no closing, demanding tone. This is unacceptable for professional communication.",
        },
        {
          category: "Subject Line Clarity",
          score: 1,
          feedback:
            "No subject line provided. Always include a clear, specific subject.",
        },
        {
          category: "Completeness",
          score: 1,
          feedback:
            "Missing critical information: name, course section, date of missed class, reason for absence. No indication of checking syllabus or course portal first.",
        },
        {
          category: "Clarity & Structure",
          score: 2,
          feedback:
            "Single sentence with no context. No proper structure or organization.",
        },
        {
          category: "Timeliness",
          score: 2,
          feedback:
            "Request made after the fact with no advance notice or explanation for absence.",
        },
      ],
    },
  ];
  // On first load, merge localStorage messages with defaults, and persist read state for hardcoded emails
  function getAllEmails(): Email[] {
    let localMsgs: Email[] = [];
    let readMap: Record<number, boolean> = {};
    try {
      localMsgs = JSON.parse(localStorage.getItem("inboxMessages") || "[]");
    } catch {}
    try {
      readMap = JSON.parse(localStorage.getItem("inboxReadMap") || "{}") || {};
    } catch {}
    // Apply readMap to default emails
    const mergedDefaults = defaultEmails.map((email) =>
      readMap[email.id] !== undefined
        ? { ...email, read: readMap[email.id] }
        : email,
    );
    return [...mergedDefaults, ...localMsgs].sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : a.id;
      const db = b.date ? new Date(b.date).getTime() : b.id;
      return db - da;
    });
  }
  const [emails, setEmails] = useState<Email[]>(getAllEmails());

  // Listen for localStorage changes (from Messages page or other tabs)
  useEffect(() => {
    const onStorage = () => {
      setEmails(getAllEmails());
    };
    window.addEventListener("storage", onStorage);
    // Also poll every 2s in case storage event doesn't fire (same tab)
    const interval = setInterval(onStorage, 2000);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);
  // ...existing code...
  const selectedEmailData = emails.find((email) => email.id === selectedEmail);

  const handleEmailClick = (emailId: number) => {
    setSelectedEmail(emailId);
    setEmails((prevEmails) => {
      const updated = prevEmails.map((email) =>
        email.id === emailId ? { ...email, read: true } : email,
      );
      // Update localStorage for user messages
      try {
        const localMsgs = JSON.parse(
          localStorage.getItem("inboxMessages") || "[]",
        );
        let changed = false;
        const updatedLocalMsgs = localMsgs.map((msg: any) => {
          if (msg.id === emailId && !msg.read) {
            changed = true;
            return { ...msg, read: true };
          }
          return msg;
        });
        if (changed) {
          localStorage.setItem(
            "inboxMessages",
            JSON.stringify(updatedLocalMsgs),
          );
        }
      } catch {}
      // Update readMap for hardcoded emails
      try {
        let readMap: Record<number, boolean> = {};
        try {
          readMap =
            JSON.parse(localStorage.getItem("inboxReadMap") || "{}") || {};
        } catch {}
        if (defaultEmails.some((e) => e.id === emailId)) {
          if (!readMap[emailId]) {
            readMap[emailId] = true;
            localStorage.setItem("inboxReadMap", JSON.stringify(readMap));
          }
        }
      } catch {}
      return updated;
    });
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / 5) * 100;
    if (percentage > 75) return "bg-green-500";
    if (percentage >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="h-[calc(100vh-10rem)] bg-white border-2 border-black flex">
      {/* Left Sidebar - Email List */}
      <div className="w-96 border-r-2 border-black flex flex-col">
        <div className="p-4 border-b-2 border-black">
          <h2
            className="text-lg"
            style={{
              fontFamily: '"Press Start 2P", system-ui',
              fontWeight: 400,
            }}
          >
            Inbox
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {emails.length} message{emails.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {emails.map((email) => (
            <button
              key={email.id}
              onClick={() => handleEmailClick(email.id)}
              className={`w-full p-4 border-b border-[#f6ede4] hover:bg-[#f6ede4] cursor-pointer text-left transition-colors ${
                selectedEmail === email.id ? "bg-[#f6ede4]" : ""
              } ${!email.read ? "bg-[#ec78b8]/10" : ""}`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm truncate flex-1">
                    {email.from}
                  </div>
                  {!email.read && (
                    <div className="w-2 h-2 bg-[#ec78b8] rounded-full ml-2"></div>
                  )}
                </div>
                <div className="font-mono text-xs text-gray-600">
                  {email.date ? new Date(email.date).toLocaleDateString() : ""}
                </div>
                <div className="font-mono text-sm truncate">
                  {email.subject}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {email.preview}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-bold">Score:</span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 border border-black ${getScoreColor(email.overallScore)} text-white`}
                  >
                    {Math.round((email.overallScore / 5) * 100)}%
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Email Reading Pane */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedEmailData ? (
          <>
            {/* Email Header */}
            <div className="p-6 border-b-2 border-black flex-shrink-0">
              <h2 className="font-bold text-xl mb-4">
                {selectedEmailData.subject}
              </h2>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="font-bold">{selectedEmailData.from}</div>
                  <div className="text-sm text-gray-600">
                    {selectedEmailData.fromEmail}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {selectedEmailData.date}
                  </div>
                </div>
                <div className="bg-[#f6ede4] border-2 border-black px-4 py-3 min-w-[250px]">
                  <div className="font-mono text-sm font-bold mb-2">
                    Overall Score
                  </div>
                  <div className="w-full h-6 border-2 border-black bg-white relative">
                    <div
                      className={`h-full transition-all ${
                        (selectedEmailData.overallScore / 5) * 100 > 75
                          ? "bg-green-500"
                          : (selectedEmailData.overallScore / 5) * 100 >= 40
                            ? "bg-orange-500"
                            : "bg-red-500"
                      }`}
                      style={{
                        width: `${(selectedEmailData.overallScore / 5) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="font-mono text-xs mt-1 text-right font-bold">
                    {Math.round((selectedEmailData.overallScore / 5) * 100)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
              {/* Faculty Reply */}
              <div className="p-6 border-b-2 border-black">
                <h3 className="font-bold text-lg mb-3">Faculty Response</h3>
                <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                  {selectedEmailData.body}
                </div>
              </div>

              {/* Original Message */}
              <div className="p-6 border-b-2 border-black">
                <h3 className="font-bold text-lg mb-3">
                  Your Original Message
                </h3>
                <div className="bg-[#f6ede4] border-2 border-black p-4">
                  <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {selectedEmailData.originalMessage}
                  </div>
                </div>
              </div>

              {/* Ratings Section */}
              <div className="p-6 bg-[#f6ede4]">
                <h3 className="font-bold text-lg mb-4">
                  Email Rating & Feedback
                </h3>
                <div className="space-y-3">
                  {selectedEmailData.ratings.map((rating, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-black p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm">
                          {rating.category}
                        </span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-5 h-5 border border-black ${
                                star <= rating.score
                                  ? "bg-[#ec78b8]"
                                  : "bg-white"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 font-mono">
                        {rating.feedback}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 border-t-2 border-black flex-shrink-0">
              <div className="flex gap-3">
                <button className="px-6 py-3 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90 transition-opacity">
                  <span className="font-mono text-sm">Reply</span>
                </button>
                <button
                  className="px-6 py-3 border-2 border-black bg-white hover:bg-[#f6ede4] transition-colors"
                  onClick={() => {
                    if (!selectedEmailData) return;
                    // Remove from localStorage if user message
                    let removed = false;
                    try {
                      const localMsgs = JSON.parse(
                        localStorage.getItem("inboxMessages") || "[]",
                      );
                      const filtered = localMsgs.filter(
                        (msg: any) => msg.id !== selectedEmailData.id,
                      );
                      if (filtered.length !== localMsgs.length) {
                        localStorage.setItem(
                          "inboxMessages",
                          JSON.stringify(filtered),
                        );
                        removed = true;
                      }
                    } catch {}
                    // For hardcoded emails, just remove read state (optional: could hide entirely, but here we just mark as unread)
                    try {
                      let readMap: Record<number, boolean> = {};
                      try {
                        readMap =
                          JSON.parse(
                            localStorage.getItem("inboxReadMap") || "{}",
                          ) || {};
                      } catch {}
                      if (readMap[selectedEmailData.id]) {
                        delete readMap[selectedEmailData.id];
                        localStorage.setItem(
                          "inboxReadMap",
                          JSON.stringify(readMap),
                        );
                        removed = true;
                      }
                    } catch {}
                    // Update state
                    setSelectedEmail(null);
                    setEmails(getAllEmails());
                  }}
                >
                  <span className="font-mono text-sm">Archive</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-gray-300 bg-gray-100 mx-auto mb-4"></div>
              <p className="font-mono text-sm">Select an email to read</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
