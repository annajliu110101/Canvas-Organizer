# Canvas Calendar Editor

Hate the way half your assignments don't get the strike-through even after you submit?  Are you taking classes at two different institutions and just want to see all your homework in one place?  Tired of forgetting about an entire class because your professor can't figure out how to use Canvas?

Try this TypeScript-based Chrome extension that integrates directly with any Canvas LMS instance to give yourself a unified, private view of all your courses, assignments and calendar events - no matter which university or Canvas domain you're using!

Everything happens client-side: your data stays on your computer.  This extension uses your existing Canvas APIs (via your logged-in sessions) to gather assignments and events, and stores all your preferences locally!

✨ Features

Gradescope Integration

    - Auto-import Gradescope assignments per course (with permission).

    - Submitted work is automatically marked complete or grayed out in the calendar.

- Custom Categories & Filtering

    - Create your own categories (“Exams”, “Labs”, “Projects”) with icons and colors.
    
    - Filter or hide categories dynamically in the Calendar view.
    
    - Restore defaults anytime.
      
- Unified Calendar View
  
    - Merge events and assignments across multiple Canvas accounts and Gradescope.

    - View all coursework in a single calendar overlay inside Canvas.

    - Filter by host (UCSD, SBCC, etc.) or by category (Assignments, Exams, Quizzes, To-          Dos, etc.).

- Virtual Assignments & Notes

    - Add personal To-Dos or external assignments not listed in Canvas.

    - Attach notes, links, and metadata (extra fields) for each assignment.

    - Mark items complete — they strike through automatically.

Syllabus Import

    - If a Canvas course has an empty Syllabus page, import your own PDF or HTML for easy         access.

Multi-Host Merge

    - Seamlessly combine multiple Canvas domains (UCSD, SBCC, etc.) in one dashboard.

    - Uses your existing logins; no extra credentials or cloud storage needed.

Local-Only Privacy

    - All data and preferences stored in chrome.storage.local / IndexedDB.
