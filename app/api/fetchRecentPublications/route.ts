import { extractCitationStatistics } from "@/lib/cleanjson";

export async function GET() {
    try {
        // Await the fetch response
        let res = await fetch('https://serpapi.com/searches/52c628de215f6771/6674de1dc504e99a2188879d.json');
        
        // Check if the fetch was successful
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Convert the response to JSON
        let data = await res.json();

        // Return the JSON data
        const citationStats = extractCitationStatistics(data);

        // Return the extracted citation stats as JSON response
        return new Response(JSON.stringify(citationStats), {
            headers: { 'Content-Type': 'application/json' },
        });


    } catch (error) {
        // Handle any errors that occurred during fetch
        console.error('Error fetching data:', error);

        // Return an error response
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}