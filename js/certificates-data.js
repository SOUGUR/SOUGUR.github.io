// Single source of truth for certificates.
// Used by both the "Certifications" section on index.html (first few, newest first)
// and the full certifications.html page.
//
// Fields:
//   title         - certificate / program name
//   issuer        - university / organization that awards it
//   platform      - where it was taken (Coursera, edX, ...) - optional
//   date          - completion date as "YYYY-MM" or "YYYY-MM-DD" (leave "" if unknown; undated items sort last).
//                   For a grouped program, leave it out: it is taken from the latest course.
//   duration      - how long it took, e.g. "6 months" - optional
//   grade         - grade achieved, e.g. "98%" - optional
//   status        - e.g. "In progress" for a program not finished yet - optional
//   courses       - for a multi-course program: one card lists every course you completed in it,
//                   each { title, date, url } - optional
//   skills        - list of tags
//   credentialUrl - verification link - optional
//   icon          - Font Awesome class for the badge
//
// Coursera list last synced: 2026-11-11 (My Learning -> Completed / Certificates).

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
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/J2B29OJ3JN9N",
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
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/HASX1VSNLD9U",
        icon: "fas fa-microchip"
    },
    {
        title: "Meta Back-End Developer Professional Certificate",
        issuer: "Meta",
        platform: "Coursera",
        status: "In progress",
        courses: [
            { title: "The Full Stack", date: "2024-09",
              url: "https://www.coursera.org/account/accomplishments/verify/6QZHFQCAP3JB" },
            { title: "APIs", date: "2024-08",
              url: "https://www.coursera.org/account/accomplishments/verify/55DTQ1O1A1V7" },
            { title: "Django Web Framework", date: "2024-08",
              url: "https://www.coursera.org/account/accomplishments/verify/67CHYMRV6L7N" },
            { title: "Introduction to Databases for Back-End Development", date: "2024-07",
              url: "https://www.coursera.org/account/accomplishments/verify/JG3ULMN8LCPY" },
            { title: "Version Control", date: "2024-07",
              url: "https://www.coursera.org/account/accomplishments/verify/A9VSPZ3QVKRR" },
            { title: "Programming in Python", date: "2024-07",
              url: "https://www.coursera.org/account/accomplishments/verify/UZFCZ88WNUGS" },
            // TODO: completion date + verify link (Coursera -> My Learning -> Certificates, page 2)
            { title: "Introduction to Back-End Development", date: "", url: "" }
        ],
        skills: ["Python", "Django", "REST APIs", "MySQL", "Git"],
        icon: "fab fa-meta"
    },
    {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google",
        platform: "Coursera",
        status: "In progress",
        // TODO: completion dates + verify links (Coursera -> My Learning -> Certificates, page 2)
        courses: [
            { title: "Analyze Data to Answer Questions", date: "", url: "" },
            { title: "Process Data from Dirty to Clean", date: "", url: "" },
            { title: "Prepare Data for Exploration", date: "", url: "" },
            { title: "Ask Questions to Make Data-Driven Decisions", date: "", url: "" },
            { title: "Foundations: Data, Data, Everywhere", date: "", url: "" }
        ],
        skills: ["SQL", "Spreadsheets", "Data Cleaning", "Data Analysis"],
        icon: "fab fa-google"
    },
    // Not on Coursera - kept from the original portfolio.
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
