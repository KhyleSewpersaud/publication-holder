interface Publication {
    title: string;
    url: string;
    authors: string;
    publication_source: string;
    number_of_citations: number;
    year: string
}

interface CitationStat {
    stat_name: string;
    total: number;
}

export function extractCitationStatistics(jsonData: any): CitationStat[] {
    try {
        const statistics: CitationStat[] = jsonData?.cited_by?.table?.map((item: any) => {
            const stat_name = Object.keys(item)[0]
            const total = item[stat_name]?.all ?? 0;

            return {
                stat_name,
                total,
            };
        });

        return statistics;
    } catch (error) {
        console.error('Error extracting citation stats:', error);
        return [];
    }
}