// Single source of truth for certificates.
// Used by both the "Certifications" section on index.html (first few, newest first)
// and the full certifications.html page.
//
// Fields:
//   title         - certificate name
//   issuer        - university / organization that awards it
//   platform      - where it was taken (Coursera, edX, ...) - optional
//   date          - completion date as "YYYY-MM" or "YYYY-MM-DD" (leave "" if unknown; undated items sort last)
//   duration      - how long it took, e.g. "6 months" - optional
//   skills        - list of tags
//   grade         - grade achieved, e.g. "98%" - optional
//   credentialUrl - verification link - optional
//   icon          - Font Awesome class for the badge

// TODO: fill in your real completion dates, durations and credential links.
const CERTIFICATES = [
    {
        title: "Introduction to MongoDB",
        issuer: "MongoDB Inc.",
        platform: "Coursera",
        date: "2026-11-11",
        duration: "15 hours",
        grade: "93.66%",
        skills: ["MongoDB", "NoSQL", "Data Modeling", "Aggregation Pipelines",
                 "Indexes & Transactions", "Atlas Search"],
        credentialUrl: "",
        icon: "fas fa-leaf"
    },
    {
        title: "Computer Hardware and Software",
        issuer: "University of California, Irvine",
        platform: "Coursera",
        date: "2026-11-10",
        duration: "11 hours",
        grade: "98%",
        skills: ["Computer Hardware", "Operating Systems", "Computer Networking",
                 "Network Security", "Network Protocols", "System Software"],
        credentialUrl: "",
        icon: "fas fa-microchip"
    },
    {
        title: "Meta Back-End Developer Professional Certificate",
        issuer: "Meta",
        platform: "Coursera",
        date: "",
        duration: "",
        skills: ["Python", "Django", "REST APIs", "MySQL", "Git"],
        credentialUrl: "",
        icon: "fab fa-meta"
    },
    {
        title: "Google Machine Learning for Developers",
        issuer: "Google",
        platform: "",
        date: "",
        duration: "",
        skills: ["Linear Regression", "PCA", "Data Transformation", "Neural Networks"],
        credentialUrl: "",
        icon: "fab fa-google"
    },
    {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google",
        platform: "Coursera",
        date: "",
        duration: "",
        skills: ["SQL", "R", "Tableau", "Spreadsheets", "Data Cleaning"],
        credentialUrl: "",
        icon: "fab fa-google"
    },
    {
        title: "CS50: Introduction to Computer Science",
        issuer: "Harvard University",
        platform: "edX",
        date: "",
        duration: "",
        skills: ["C", "Python", "SQL", "Algorithms", "Data Structures"],
        credentialUrl: "",
        icon: "fas fa-university"
    },
    {
        title: "Scientific Computing with Python",
        issuer: "freeCodeCamp",
        platform: "",
        date: "",
        duration: "",
        skills: ["Python", "OOP", "Algorithms"],
        credentialUrl: "",
        icon: "fab fa-free-code-camp"
    }
];
