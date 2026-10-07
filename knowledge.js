//= TORI KNOWLEDGE BASE =//
const TORI_KNOWLEDGE = [
    // = TORI DUMP = //
    {
        id: "tori-dump",
        title: "Tori Dump",
        keywords: [
            "tori dump",
            "file management",
            "file management system",
            "automated file management",
            "file organization",
            "file routing",
            "file indexing",
            "file retrieval"
        ],
        content: `
Tori Dump is an automated file management system developed under
Tori Network.

It stores files in project directories, organizes and routes uploaded
files, indexes files for search, and enables AI-powered retrieval.

Tori Dump is designed to reduce the difficulty of managing, locating,
and retrieving files in traditional folder-based storage systems.
`
    },
    // = TORI NETWORK = //
    {
        id: "tori-network",
        title: "Tori Network",
        keywords: [
            "tori network",
            "tori",
            "network",
            "about tori"
        ],
        content: `
Tori Network is the platform and system context behind Tori Dump.

Tori Dump serves as a core feature focused on automated file management,
organization, routing, indexing, and AI-powered retrieval.
`
    },
    // = WHY LEGACY STORAGE FAILS = //
    {
        id: "legacy-storage",
        title: "Why Legacy Storage Fails",
        keywords: [
            "legacy storage",
            "traditional storage",
            "traditional search",
            "storage problems",
            "file storage problems",
            "search problems",
            "folder search",
            "folder hunting",
            "unindexed folders",
            "lookup time",
            "18 minutes"
        ],
        content: `
Traditional file storage can become difficult to search and manage
when files have vague names, metadata is ignored, and folders remain
unindexed.

Examples such as "report_v2.pdf" or "Document1.docx" provide few
meaningful keyword tokens and may produce poor search results when
users are looking for specific information.

Cloud drives may also fail to fully use operating-system creation data
and domain context.

The Tori Dump concept identifies an approximately 18-minute lookup
tax associated with unindexed folder hunts, highlighting the time
that can be lost when users manually search through poorly organized
file structures.
`
    },
    // = ACTIVE METADATA EXTRACTION = //
    {
        id: "metadata-extraction",
        title: "Active Metadata Extraction",
        keywords: [
            "metadata",
            "metadata extraction",
            "active metadata",
            "file metadata",
            "author",
            "title",
            "timestamps",
            "file information"
        ],
        content: `
Tori Dump uses active metadata extraction as part of its file
organization and retrieval process.

The system can pull information such as the author, title, and
timestamps into metadata.

This additional context helps the system organize, route, index,
and retrieve files more effectively.
`
    },
    // = FUZZY KEYWORD MATCHING = //
    {
        id: "fuzzy-keyword-matching",
        title: "Fuzzy Keyword Matching",
        keywords: [
            "fuzzy matching",
            "fuzzy keyword matching",
            "fuzzy search",
            "keyword matching",
            "token matching",
            "search typos",
            "typos",
            "short names",
            "misspelled",
            "misspelling"
        ],
        content: `
Tori Dump uses fuzzy keyword and token matching to improve file
retrieval.

Fuzzy matching allows the system to identify relevant files even when
users provide short names or make typos.

This helps make search more tolerant of imperfect queries and improves
the likelihood of finding the intended file.
`
    },
    // = KALASAG AI = //
    {
        id: "kalasag-ai",
        title: "Kalasag AI",
        keywords: [
            "kalasag",
            "kalasag ai",
            "ai",
            "artificial intelligence",
            "ai retrieval",
            "ai search"
        ],
        content: `
Kalasag AI supports the intelligent retrieval capabilities of Tori
Dump.

It works with active metadata extraction and fuzzy token scoring to
help match user queries with stored files.

Kalasag AI supports the contextual search and retrieval functions
that allow Tori Dump to locate relevant records more efficiently.
`
    },
    // = FILE NAMING = //
    {
        id: "file-naming",
        title: "File Naming",
        keywords: [
            "file naming",
            "filename",
            "file name",
            "naming files",
            "good filename",
            "good file name",
            "bad filename",
            "bad file name",
            "descriptive filename",
            "descriptive file name"
        ],
        content: `
Tori Dump follows the principle:

"Be Specific & Descriptive."

Vague filenames such as:

receipt.pdf
report.xlsx
tax_v2.pdf

provide limited information for search indexing.

A more descriptive filename can contain multiple high-signal keywords.

For example:

tax_and_compliance_q3_2026_BIR_VAT_Return_Filing_Receipt.pdf

contains useful tokens such as tax_and_compliance, Q3, 2026, BIR,
VAT, and Receipt.

Meaningful filenames improve the ability of Tori Dump to match
queries to files during retrieval.
`
    },
    // = FILE AND FOLDER MATCHING = //
    {
        id: "folder-file-matching",
        title: "File and Folder Matching",
        keywords: [
            "folder matching",
            "file folder matching",
            "folder name",
            "folder names",
            "filename matching",
            "file name matching",
            "folder tokens",
            "routing accuracy",
            "match file to folder"
        ],
        content: `
Tori Dump uses the relationship between file names and folder names
to improve automated ingestion and search accuracy.

The system cleans the folder name and filename and evaluates their
similarity.

Matching meaningful tokens between a filename and its target folder
helps determine where a file should be routed.
`
    },
    // = AUTOMATED ROUTING = //
    {
        id: "automated-routing",
        title: "Automated File Routing",
        keywords: [
            "routing",
            "automated routing",
            "automatic routing",
            "file routing",
            "route files",
            "route a file",
            "file destination",
            "target folder",
            "automatic organization"
        ],
        content: `
Tori Dump uses AI context and filename-folder relationships to support
automated file routing.

Instead of requiring users to manually determine where every uploaded
file belongs, the system evaluates contextual information and routes
files toward relevant project directories.

The routing process is designed to improve organization while reducing
manual folder management.
`
    },
    // = ROUTING THRESHOLD = //
    {
        id: "routing-threshold",
        title: "Routing Similarity Threshold",
        keywords: [
            "0.4",
            "40 percent",
            "sequence ratio",
            "substring ratio",
            "routing threshold",
            "similarity ratio",
            "routing confidence",
            "100 confidence",
            "100% confidence"
        ],
        content: `
The Tori Dump concept describes a routing rule based on filename and
folder-name similarity.

An exact substring or sequence ratio greater than 0.4 is described as
sufficient to route a file to the target folder with 100% confidence.

This rule is part of the automated ingestion and routing concept.
`
    },
    // = ACTIVE INGESTION = //
    {
        id: "active-ingestion",
        title: "Active Ingestion",
        keywords: [
            "ingestion",
            "active ingestion",
            "file ingestion",
            "upload",
            "upload files",
            "batch upload",
            "drag and drop",
            "drag-and-drop",
            "batch drag and drop"
        ],
        content: `
Tori Dump supports active ingestion through batch drag-and-drop.

Users can drag and drop multiple files into the system, triggering
the ingestion process.

The ingestion workflow can then use file names, folder context,
metadata, and other contextual information to organize and route
uploaded files.
`
    },
    // = TWO-CLICK ACCESS = //
    {
        id: "two-click-access",
        title: "Two-Click Access",
        keywords: [
            "two click",
            "two-click",
            "2 click",
            "2-click",
            "quick access",
            "fast access",
            "folder tree",
            "folder tree hassles",
            "access files"
        ],
        content: `
Tori Dump is designed around two-click access to reduce folder-tree
hassles.

The objective is to make stored files easier and faster to access
without requiring users to navigate through complicated folder
structures.
`
    },
    // = RETRIEVAL = //
    {
        id: "file-retrieval",
        title: "AI-Powered File Retrieval",
        keywords: [
            "retrieval",
            "file retrieval",
            "retrieve",
            "retrieve files",
            "find files",
            "find a file",
            "find document",
            "document retrieval",
            "record retrieval"
        ],
        content: `
Tori Dump provides AI-powered file retrieval.

The retrieval process uses contextual information, metadata, keyword
matching, and fuzzy token scoring to identify relevant files.

The system is designed to reduce the time users spend manually
searching through folders and records.
`
    },
    // = RETRIEVE = //
    {
        id: "retrieve-command",
        title: "/retrieve",
        keywords: [
            "/retrieve",
            "retrieve command",
            "retrieval command",
            "stop words",
            "preview modal",
            "direct preview",
            "preview"
        ],
        content: `
The /retrieve function is part of the Tori Dump retrieval workflow.

It is described as stripping stop words from a query and opening a
direct preview modal for the retrieved record.

This supports faster access to the intended file or record.
`
    },
    // = CONTEXTUAL SEARCH = //
    {
        id: "contextual-search",
        title: "AI-Powered Contextual Search",
        keywords: [
            "contextual search",
            "ai powered search",
            "ai-powered search",
            "query parsing",
            "search query",
            "search results",
            "search accuracy",
            "contextual retrieval"
        ],
        content: `
Tori Dump uses AI-powered query parsing to support contextual search
results.

Search accuracy is strengthened by combining filename information,
folder context, metadata, fuzzy token matching, and other available
context.

This allows users to search for records using meaningful terms rather
than relying only on exact filenames.
`
    },
    // = TORI WORKFLOW = //
    {
        id: "tori-workflow",
        title: "Tori Dump Workflow",
        keywords: [
            "workflow",
            "how tori works",
            "how does tori work",
            "how tori works",
            "tori process",
            "steps",
            "four steps",
            "four step process"
        ],
        content: `
The Tori Dump workflow is presented in four major steps:

Step 1 — Setup:
AI context supports automated file routing.

Step 2 — Tori Dump:
Two-click access reduces folder-tree hassles.

Step 3 — Action:
Batch drag-and-drop triggers active ingestion.

Step 4 — Search:
AI-powered query parsing accelerates contextual search and retrieval
results.
`
    },
    // = R.A. 10121 = //
    {
        id: "ra-10121",
        title: "R.A. 10121 Compliance",
        keywords: [
            "ra 10121",
            "r.a. 10121",
            "republic act 10121",
            "10121",
            "disaster risk reduction",
            "disaster risk management",
            "drrm",
            "drrm information system",
            "compliance"
        ],
        content: `
Tori Dump is presented as supporting compliance with R.A. 10121.

Its stated applications include centralized DRRM information systems
and GIS databases, rapid data retrieval and sharing across
stakeholders during crises, and auditability of LDRRMF and NDRRMF
through records trails.

The system's records-management capabilities support the availability
and traceability of information relevant to disaster risk reduction
and management.
`
    },
    // = DRRM APPLICATION = //
    {
        id: "drrm",
        title: "Disaster Risk Reduction and Management",
        keywords: [
            "drrm",
            "disaster risk reduction",
            "disaster risk management",
            "disaster",
            "emergency",
            "crisis",
            "crisis information",
            "disaster information",
            "drrm database",
            "gis database"
        ],
        content: `
Tori Dump can support disaster risk reduction and management through
centralized information systems and GIS databases.

Its rapid retrieval and sharing capabilities can help stakeholders
access relevant information during crises.

The system can also support records trails that contribute to the
auditability of disaster-related funds and records.
`
    },
    // = ACCOUNTABILITY AND TRANSPARENCY = //
    {
        id: "accountability-transparency",
        title: "Accountability and Transparency",
        keywords: [
            "accountability",
            "transparency",
            "government accountability",
            "government transparency",
            "auditability",
            "audit trail",
            "records trail",
            "records management"
        ],
        content: `
Tori Dump is positioned as a tool that can strengthen accountability
and transparency in government operations.

Its organized records, retrieval capabilities, and records trails can
support traceability and auditability of information and transactions.
`
    },
    // = GOVERNMENT OPERATIONS = //
    {
        id: "government-operations",
        title: "Government Operations",
        keywords: [
            "government",
            "government operations",
            "government services",
            "public sector",
            "government records",
            "government efficiency",
            "operational efficiency",
            "public administration"
        ],
        content: `
Tori Dump is designed to provide value in government operations by
improving records management, information retrieval, and operational
efficiency.

Its stated benefits include strengthening accountability and
transparency, enhancing operational efficiency for LDRRMs, supporting
continuity of government services, and using AI and technology to
improve productivity.
`
    },
    // = CONTINUITY OF GOVERNMENT SERVICES = //
    {
        id: "continuity-government",
        title: "Continuity of Government Services",
        keywords: [
            "continuity",
            "continuity of government",
            "continuity of government services",
            "government continuity",
            "service continuity",
            "business continuity"
        ],
        content: `
Tori Dump can support continuity of government services through
effective records management.

By making records easier to organize, retrieve, and access, the system
can help maintain access to important information needed for ongoing
operations.
`
    },
    // = PRODUCTIVITY AND EFFICIENCY = //
    {
        id: "productivity-efficiency",
        title: "Productivity and Operational Efficiency",
        keywords: [
            "productivity",
            "efficiency",
            "operational efficiency",
            "time saving",
            "save time",
            "faster",
            "lookup time",
            "18 minute lookup",
            "18 minutes"
        ],
        content: `
Tori Dump aims to improve productivity and operational efficiency by
reducing the time spent manually organizing and searching for files.

The Tori Dump concept identifies an approximately 18-minute lookup
tax associated with unindexed folder hunts.

Automated routing, indexing, and AI-powered retrieval are intended to
reduce this burden.
`
    },
    // = OVERALL VALUE = //
    {
        id: "tori-value",
        title: "Beyond Compliance: Value of Tori Dump",
        keywords: [
            "value",
            "benefits of tori",
            "benefits of tori dump",
            "why tori dump",
            "beyond compliance",
            "advantages of tori",
            "what makes tori useful"
        ],
        content: `
Beyond compliance, Tori Dump is positioned as a system that can
strengthen accountability and transparency in government operations,
enhance operational efficiency for LDRRMs, support continuity of
government services through effective records management, and harness
AI and technology to improve productivity.
`
    }

];
// = TORI KNOWLEDGE SEARCH = //
function searchToriKnowledge(question) {
    const query = question.toLowerCase().trim();
    if (!query) {
        return [];
    }
    // - Common question words that usually do not help identify a topic - //
    const stopWords = new Set([
        "what",
        "what's",
        "what is",
        "who",
        "who's",
        "who is",
        "how",
        "how does",
        "how do",
        "how can",
        "why",
        "when",
        "where",
        "which",
        "can",
        "could",
        "would",
        "should",
        "does",
        "do",
        "is",
        "are",
        "the",
        "a",
        "an",
        "of",
        "to",
        "for",
        "in",
        "on",
        "with",
        "about",
        "and",
        "or",
        "it",
        "this",
        "that",
        "tell",
        "me",
        "please",
        "explain",
        "describe",
        "give"
    ]);
    // - Clean the question - //
    const cleanedQuery = query
        .replace(/[^\w\s/-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    // - Create useful search terms - //
    const words = cleanedQuery
        .split(/\s+/)
        .filter(word => word.length > 2)
        .filter(word => !stopWords.has(word));
    // -Create a set for faster matching - //
    const wordSet = new Set(words);
    const results = TORI_KNOWLEDGE.map(entry => {
        let score = 0;
        const title = entry.title.toLowerCase();
        const content = entry.content.toLowerCase();
        const keywords = entry.keywords.map(keyword =>
            keyword.toLowerCase()
        );
        // = EXACT PHRASE MATCH = //
        keywords.forEach(keyword => {
            if (cleanedQuery.includes(keyword)) {
                score += 15;
            }
        });
        // = TITLE MATCH = //
        words.forEach(word => {

            if (title.includes(word)) {
                score += 8;
            }
        });
        // = KEYWORD MATCH = //
        keywords.forEach(keyword => {
            words.forEach(word => {
                // - Exact word match - //
                if (keyword === word) {
                    score += 6;
                }
                // - Keyword contains the search word - //
                else if (keyword.includes(word)) {
                    score += 3;
                }
                // - earch word contains the keyword - //
                else if (word.includes(keyword)) {
                    score += 3;
                }
            });
        });
        // = CONTENT MATCH = //
        words.forEach(word => {
            if (content.includes(word)) {
                score += 1;
            }
        });
        // = MULTIPLE MATCH BONUS = //
        let matchedWords = 0;
        words.forEach(word => {
            const keywordMatch = keywords.some(keyword =>
                keyword.includes(word) || word.includes(keyword)
            );
            const titleMatch = title.includes(word);
            if (keywordMatch || titleMatch) {
                matchedWords++;
            }
        });
        // - Reward entries that match several concepts - //
        if (matchedWords >= 2) {
            score += 5;
        }
        if (matchedWords >= 3) {
            score += 5;
        }
        // = QUERY RELEVANCE RATIO = //
        if (words.length > 0) {
            const relevanceRatio = matchedWords / words.length;
            // - Strong match across most meaningful words - //
            if (relevanceRatio >= 0.75) {
                score += 8;
            }
            // - Moderate match - //
            else if (relevanceRatio >= 0.50) {
                score += 4;
            }
        }
        return {
            ...entry,
            score
        };
    });
    // = SORT RESULTS = //
    results.sort((a, b) => b.score - a.score);
    // Only return meaningful matches
    return results.filter(result => result.score >= 4);
}
// = TORI ANSWER GENERATOR = //
function generateToriAnswer(question) {
    const results = searchToriKnowledge(question);
    if (results.length === 0) {
        return {
            found: false,
            answer: `
I couldn't find enough information in TORI's current knowledge base
to answer that question confidently.

Try asking about Tori Dump, file routing, metadata, fuzzy matching,
Kalasag AI, file retrieval, contextual search, active ingestion,
R.A. 10121, DRRM, or government records management.
            `,
            sources: []
        };
    }
    const bestResults = results.slice(0, 3);
    let answer = "";
    bestResults.forEach((result, index) => {
        if (index === 0) {
            answer += result.content.trim();
        } else {
            answer += "\n\n" + result.content.trim();
        }
    });
    return {
        found: true,
        answer: answer,
        sources: bestResults.map(result => result.title)
    };
}
