import { useState } from "react";
// Util to save message to localStorage
function saveMessageToInbox(message: any) {
  const inbox = JSON.parse(localStorage.getItem("inboxMessages") || "[]");
  inbox.push(message);
  localStorage.setItem("inboxMessages", JSON.stringify(inbox));
}

export function Messages() {
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [isNewContact, setIsNewContact] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [to, setTo] = useState("");
  const [sending, setSending] = useState(false);

  const contacts = [
    { id: 1, name: "Sarah Martinez" },
    { id: 2, name: "Prof. Cameron Winter" },
    { id: 3, name: "Prof. Michael Chen" },
    { id: 4, name: "Dr. Emily Johnson" },
    { id: 5, name: "Gerard Deulofeu" },
  ];

  const handleContactClick = (id: number) => {
    setSelectedContact(id);
    setIsNewContact(false);
  };

  const handleNewContactClick = () => {
    setSelectedContact(null);
    setIsNewContact(true);
  };

  // Send message handler
  const handleSend = () => {
    if (!subject.trim() || !body.trim()) return;
    setSending(true);
    // Only save the automated reply to the inbox after 10s
    const msg = {
      id: Date.now(),
      from: "You",
      fromEmail: "you@inboxlab.com",
      subject,
      preview: body.slice(0, 60) + (body.length > 60 ? "..." : ""),
      originalMessage: body,
      body,
      date: new Date().toISOString(),
      read: false,
      overallScore: 0,
      ratings: [],
    };
    setTimeout(() => {
      const metrics = [
        "Professional Tone",
        "Subject Line Clarity",
        "Completeness",
        "Clarity & Structure",
        "Timeliness",
      ];
      const wellWritten =
        msg.body.includes(
          "I hope this message finds you well. I am writing to seek your guidance regarding the upcoming coursework",
        ) && msg.body.includes("Kind regards,\nMiko Libich");
      const midWritten =
        msg.body.includes("I had a quick question about the coursework") &&
        msg.body.includes("Thank you");
      const badWritten =
        msg.body.includes("I don’t really get the coursework") &&
        msg.body.includes("You should explain it better");

      let replyBody =
        "Thank you for your message. We will get back to you soon.";
      if (wellWritten) {
        replyBody = `Dear Miko,\n\nThank you for your thoughtful message and for taking the time to review the coursework materials in detail. I appreciate your proactive approach in seeking clarification to ensure you meet the required standards.\n\nFor the upcoming coursework, I recommend focusing on the key objectives outlined in the assignment brief. Pay particular attention to the sections on methodology and analysis, as these are weighted most heavily in the grading rubric. If you would like, I can share additional resources or examples from previous years to help guide your approach.\n\nPlease let me know if you have any specific questions or if there are particular areas you would like more guidance on. I'm happy to support you further.\n\nBest regards,\nProf. Cameron Winter`;
      }

      let replyRatings;
      let overallScore;
      if (wellWritten) {
        replyRatings = [
          {
            category: "Professional Tone",
            score: 5,
            feedback: "Excellent professional tone. Polite and respectful.",
          },
          {
            category: "Subject Line Clarity",
            score: 5,
            feedback: "Clear and specific subject line.",
          },
          {
            category: "Completeness",
            score: 5,
            feedback: "All relevant context and details provided.",
          },
          {
            category: "Clarity & Structure",
            score: 5,
            feedback: "Well-structured, easy to follow.",
          },
          {
            category: "Timeliness",
            score: 5,
            feedback: "Appropriate timing and courteous closing.",
          },
        ];
        overallScore = 5;
      } else if (midWritten) {
        replyRatings = [
          {
            category: "Professional Tone",
            score: 4,
            feedback: "Generally polite, but could be more formal.",
          },
          {
            category: "Subject Line Clarity",
            score: 3,
            feedback: "Subject is vague; could be more specific.",
          },
          {
            category: "Completeness",
            score: 3,
            feedback: "Some context provided, but lacks detail.",
          },
          {
            category: "Clarity & Structure",
            score: 3,
            feedback:
              "Message is understandable but could be better organized.",
          },
          { category: "Timeliness", score: 4, feedback: "Appropriate timing." },
        ];
        overallScore = 3.4;
      } else if (badWritten) {
        replyRatings = [
          {
            category: "Professional Tone",
            score: 1,
            feedback: "Too informal and demanding.",
          },
          {
            category: "Subject Line Clarity",
            score: 1,
            feedback: "No subject or unclear subject.",
          },
          {
            category: "Completeness",
            score: 1,
            feedback: "Missing context and details.",
          },
          {
            category: "Clarity & Structure",
            score: 1,
            feedback: "Unclear and poorly structured.",
          },
          {
            category: "Timeliness",
            score: 2,
            feedback: "Timing is okay, but tone is inappropriate.",
          },
        ];
        overallScore = 1.2;
      }

      if (overallScore === 5) {
        const progress = JSON.parse(
          localStorage.getItem("badgeProgress") || "{}",
        );

        progress.professionalTone = (progress.professionalTone || 0) + 1;
        progress.subjectLine = (progress.subjectLine || 0) + 1;
        progress.completeness = (progress.completeness || 0) + 1;
        progress.structure = (progress.structure || 0) + 1;
        progress.timeliness = (progress.timeliness || 0) + 1;

        localStorage.setItem("badgeProgress", JSON.stringify(progress));
      } else {
        // Fallback to word count logic
        const wordCount = msg.body.trim().split(/\s+/).filter(Boolean).length;
        const isShort = wordCount < 20;
        const score = isShort ? 1 : 5;
        const feedback = isShort ? "Too brief. Needs more detail." : "Perfect!";
        replyRatings = metrics.map((category) => ({
          category,
          score,
          feedback,
        }));
        overallScore = score;
      }

      const reply = {
        id: Date.now(),
        from:
          (selectedContact
            ? contacts.find((c) => c.id === selectedContact)?.name
            : to) || "Staff",
        fromEmail: "staff@inboxlab.com",
        subject: "Re: " + subject,
        preview: replyBody.slice(0, 60) + (replyBody.length > 60 ? "..." : ""),
        body: replyBody,
        originalMessage: msg.body,
        date: new Date().toISOString(),
        read: false,
        overallScore,
        ratings: replyRatings,
      };
      saveMessageToInbox(reply);
    }, 10000);
    setSubject("");
    setBody("");
    setTo("");
    setSending(false);
    alert("Message sent!");
  };

  return (
    <div className="h-[calc(100vh-10rem)] bg-white border-2 border-black flex">
      {/* Left Sidebar - Recently Contacted Staff */}
      <div className="w-80 border-r-2 border-black flex flex-col">
        <div className="p-4 border-b-2 border-black">
          <h2 className="font-bold text-lg">Recently Contacted Staff</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => handleContactClick(contact.id)}
              className={`w-full p-4 border-b border-[#f6ede4] hover:bg-[#f6ede4] cursor-pointer text-left transition-colors ${
                selectedContact === contact.id ? "bg-[#f6ede4]" : ""
              }`}
            >
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 border-2 border-black bg-[#ec78b8] flex-shrink-0"></div>
                <div className="font-mono text-sm">{contact.name}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Contact Someone New Button */}
        <div className="p-4 border-t-2 border-black">
          <button
            onClick={handleNewContactClick}
            className={`w-full px-6 py-3 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90 transition-opacity ${
              isNewContact ? "opacity-90" : ""
            }`}
          >
            <span className="font-mono text-sm">Contact Someone New</span>
          </button>
        </div>
      </div>

      {/* Right Side - Message Compose Area */}
      <div className="flex-1 flex flex-col">
        {selectedContact || isNewContact ? (
          <>
            {/* Message Header */}
            <div className="p-4 border-b-2 border-black">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border-2 border-black bg-[#ec78b8]"></div>
                <div>
                  <div className="font-bold">
                    {selectedContact
                      ? contacts.find((c) => c.id === selectedContact)?.name
                      : "New Contact"}
                  </div>
                  <div className="text-sm text-gray-600">
                    staff@inboxlab.com
                  </div>
                </div>
              </div>
            </div>

            {/* Compose Form */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                {/* To Field (only for new contacts) */}
                {isNewContact && (
                  <div>
                    <label className="block font-mono text-sm mb-2">To:</label>
                    <input
                      type="text"
                      placeholder="Enter staff email or name..."
                      className="w-full p-3 border-2 border-black bg-[#f6ede4] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ec78b8]"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                    />
                  </div>
                )}

                {/* Subject */}
                <div>
                  <label className="block font-mono text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject..."
                    className="w-full p-3 border-2 border-black bg-[#f6ede4] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#ec78b8]"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label className="block font-mono text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    rows={12}
                    className="w-full p-3 border-2 border-black bg-[#f6ede4] font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#ec78b8]"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className="px-6 py-3 border-2 border-black bg-[#ec78b8] text-white hover:opacity-90 transition-opacity"
                    onClick={handleSend}
                    disabled={sending}
                  >
                    <span className="font-mono text-sm">
                      {sending ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                  <button className="px-6 py-3 border-2 border-black bg-white hover:bg-[#f6ede4] transition-colors">
                    <span className="font-mono text-sm">Save Draft</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-gray-300 bg-gray-100 mx-auto mb-4"></div>
              <p className="font-mono text-sm">
                Select a staff member to compose a message
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
