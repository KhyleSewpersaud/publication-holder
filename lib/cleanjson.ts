export function extractCitationStatistics(jsonData: any): CitationStat[] {
    try {
        const statistics: CitationStat[] = jsonData?.cited_by?.table?.map((item: CitedByItem) => {
            let statName: string = '';
            let total: number = 0;

            // Determine which type of object we have and extract data accordingly
            if ('citations' in item) {
                statName = 'citations';
                total = (item.citations as Citations)?.all ?? 0;
            } else if ('h_index' in item) {
                statName = 'h_index';
                total = (item.h_index as HIndex)?.all ?? 0;
            } else if ('i10_index' in item) {
                statName = 'i10_index';
                total = (item.i10_index as I10Index)?.all ?? 0;
            }

            return {
                statName,
                total,
            };
        });

        return statistics;
    } catch (error) {
        console.error('Error extracting citation stats:', error);
        return [];
    }
}

export function extractPublications(jsonData: any): Publication[] {
    try {
        const publications: Publication[] = jsonData?.articles?.map((item: ArticleItem) => {
            return {
                title: item.title,
                link: item.link,
                authors: item.authors,
                publicationSource: item.publication,
                numberOfCitations: item.cited_by?.value ?? 0,
                year: item.year
            }
        })

        return publications
    }
    catch (error) {
        console.error('Error extracting citation stats:', error);
        return [];
    }
}