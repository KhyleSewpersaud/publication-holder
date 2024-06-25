export async function GET() {
    try {
        // Await the fetch response
        let res = await fetch('https://serpapi.com/searches/11b896bf0b5cef3e/6674da80a74fe0d22e886da8.json');
        
        // Check if the fetch was successful
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Convert the response to JSON
        let data = await res.json();

        // Return the JSON data
        return new Response(JSON.stringify(data), {
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