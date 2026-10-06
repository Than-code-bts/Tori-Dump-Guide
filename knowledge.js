//= TORI KNOWLEDGE BASE =//
const TORI_KNOWLEDGE = [
    {
        id: "environmental-science",
        title: "Environmental Science",
        keywords: [
            "environmental science",
            "environment",
            "ecosystem",
            "environmental systems"
        ],
        content: `
Environmental Science is an interdisciplinary field that examines the
relationships between humans, other organisms, and the physical environment.

It integrates knowledge from disciplines such as biology, chemistry,
geology, ecology, geography, atmospheric science, economics, and the
social sciences to understand environmental systems and environmental change.

Environmental Science commonly examines environmental problems,
their causes, consequences, monitoring approaches, and possible solutions.
`
    },
    {
        id: "sustainability",
        title: "Sustainability",
        keywords: [
            "sustainability",
            "sustainable",
            "sustainable development",
            "sustainability science"
        ],
        content: `
Sustainability refers to the ability of systems and societies to maintain
their functions and well-being over the long term while remaining within
ecological, social, and economic limits.

Sustainability considers the interaction between environmental integrity,
social well-being, and economic viability.

Sustainable development seeks to meet present needs while maintaining the
capacity of future generations to meet their own needs.
`
    },
    {
        id: "systems-thinking",
        title: "Systems Thinking",
        keywords: [
            "systems thinking",
            "system",
            "systems",
            "feedback",
            "interconnections",
            "interdependence"
        ],
        content: `
Systems thinking examines how different components interact within a
larger system.

Instead of examining environmental issues as isolated problems, systems
thinking considers relationships, feedback loops, dependencies,
interactions, boundaries, inputs, outputs, and changes over time.

It is particularly useful in sustainability because environmental,
social, and economic systems are interconnected.
`
    },
    {
        id: "planetary-boundaries",
        title: "Planetary Boundaries",
        keywords: [
            "planetary boundaries",
            "planetary boundary",
            "earth system",
            "ecological limits"
        ],
        content: `
The planetary boundaries framework describes a set of critical Earth-system
processes within which humanity can operate while maintaining a relatively
stable and resilient Earth system.

The framework highlights processes such as climate change, biosphere
integrity, land-system change, freshwater change, biogeochemical flows,
and other major Earth-system processes.

The concept emphasizes that human development must consider ecological
limits and the capacity of Earth systems to remain stable.
`
    },
    {
        id: "anthropocene",
        title: "Anthropocene",
        keywords: [
            "anthropocene",
            "human impact",
            "human activities",
            "earth systems"
        ],
        content: `
The Anthropocene is a concept used to describe the period in which human
activities have become a major force influencing Earth's environmental
systems.

Human activities can alter climate, land cover, biodiversity, nutrient
cycles, freshwater systems, and other environmental processes.

The concept emphasizes the scale and significance of human influence on
the Earth system.
`
    },
    {
        id: "sdgs",
        title: "Sustainable Development Goals",
        keywords: [
            "sdg",
            "sdgs",
            "sustainable development goals",
            "un sdgs",
            "2030 agenda"
        ],
        content: `
The Sustainable Development Goals (SDGs) are 17 global goals adopted by
United Nations Member States as part of the 2030 Agenda for Sustainable
Development.

The goals address interconnected challenges including poverty, health,
education, gender equality, clean water, energy, decent work,
inequality, sustainable cities, responsible consumption, climate action,
ecosystems, peace, justice, and partnerships.

The SDGs are designed to be considered together because progress in one
area can affect outcomes in other areas.
`
    },
    {
        id: "environmental-monitoring",
        title: "Environmental Monitoring",
        keywords: [
            "environmental monitoring",
            "monitoring",
            "environmental data",
            "sampling",
            "measurement"
        ],
        content: `
Environmental monitoring is the systematic collection and analysis of
information about environmental conditions over space and time.

Monitoring may involve measurements of air, water, soil, biodiversity,
climate, land cover, or other environmental indicators.

A monitoring program generally requires clearly defined objectives,
indicators, sampling strategies, measurement methods, data management,
quality assurance, analysis, and interpretation.
`
    },
    {
        id: "gis",
        title: "Geographic Information Systems",
        keywords: [
            "gis",
            "geographic information system",
            "geospatial",
            "spatial data",
            "mapping"
        ],
        content: `
A Geographic Information System (GIS) is a system used to collect,
manage, analyze, visualize, and interpret information associated with
geographic locations.

Environmental GIS commonly combines spatial data with attribute data.

GIS can be used to examine spatial patterns, relationships, changes,
environmental risks, land use, ecosystems, infrastructure, and other
geographically referenced information.
`
    },
    {
        id: "remote-sensing",
        title: "Remote Sensing",
        keywords: [
            "remote sensing",
            "satellite",
            "satellite imagery",
            "earth observation",
            "imagery"
        ],
        content: `
Remote sensing is the acquisition of information about Earth's surface
without direct physical contact with the observed object or area.

Satellites, aircraft, drones, and other platforms can collect remotely
sensed information using sensors that detect different portions of the
electromagnetic spectrum.

Remote sensing is widely used for land-cover mapping, vegetation
monitoring, environmental change detection, disaster assessment,
agriculture, and climate-related applications.
`
    },
    {
        id: "environmental-data",
        title: "Environmental Data",
        keywords: [
            "environmental data",
            "data",
            "environmental dataset",
            "data analysis",
            "environmental indicators"
        ],
        content: `
Environmental data are observations or measurements describing
environmental conditions, processes, or changes.

They may be collected through field measurements, sensors, remote sensing,
monitoring stations, surveys, databases, administrative records,
citizen science, and other sources.

Environmental data should be assessed for quality, uncertainty,
completeness, comparability, and appropriate interpretation.
`
    }
];
// ============================================
// TORI KNOWLEDGE SEARCH
// ============================================
function searchToriKnowledge(question) {
    const query = question.toLowerCase().trim();
    if (!query) {
        return [];
    }
    const words = query
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word => word.length > 2);
    const results = TORI_KNOWLEDGE.map(entry => {
        let score = 0;
        // Exact keyword matches
        entry.keywords.forEach(keyword => {
            if (query.includes(keyword.toLowerCase())) {
                score += 10;
            }
            words.forEach(word => {
                if (keyword.toLowerCase().includes(word)) {
                    score += 3;
                }
            });
        });
        // Title matching
        words.forEach(word => {

            if (entry.title.toLowerCase().includes(word)) {
                score += 5;}
        });
        // Content matching
        words.forEach(word => {
            if (entry.content.toLowerCase().includes(word)) {
                score += 1;
            }
        });
        return {
            ...entry,
            score
        };
    });
    return results
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score);
}
// ============================================
// TORI ANSWER GENERATOR
// ============================================
function generateToriAnswer(question) {
    const results = searchToriKnowledge(question);
    if (results.length === 0) {
        return {
            found: false,
            answer: `
I couldn't find enough information in TORI's current knowledge base
to answer that question confidently.

Try asking about a specific topic such as environmental science,
sustainability, systems thinking, planetary boundaries, the SDGs,
environmental monitoring, GIS, remote sensing, or environmental data.
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
