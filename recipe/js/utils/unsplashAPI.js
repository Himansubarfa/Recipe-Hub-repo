// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';
const UNSPLASH_BASE_URL = 'https://api.unsplash.com/search/photos';

async function searchUnsplashImage(query) {
    try {
        const response = await fetch(`${UNSPLASH_BASE_URL}?query=${encodeURIComponent(query)}&per_page=1`, {
            headers: {
                'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });
        const data = await response.json();
        return data.results[0]?.urls?.regular;
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}