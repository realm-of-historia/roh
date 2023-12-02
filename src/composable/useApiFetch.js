
export async function useApiFetch(meaning){
    const apiUrl = `https://api.realmofhistoria.com/${meaning}`;
    // const token = process.env.API_TOKEN
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiI3NnlZRkpITGpZODlRWXJ2ZzFkZmNqZ2QySmRrQlkxZFBQclVGOXhzNkxtWiIsImxldmVsIjowLCJpYXQiOjE2OTgwNzc0MjgsImV4cCI6MTY5ODE2MzgyOH0.xeDAvwfXgExteKzYd3gB3orDXB63A7heeKonfGOn8mE'
    const token = 'd6074c4e465f1e18e218bf950c852c94b33fa6b97631ee399ca675887359b7bbc42dc4487e7d6b8d7608f3c3474ec81b6e114610e606ae5dee6c212a2a47dc3ea48efa9e067dc2e1e93c733ba5f8b62c11d273160a4871252654fcab0536e8cb99b3b459bd852a5459ece04558ab7d54b67df9e3bdf69dc214e9ab5995487248'
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    const options = {
        method: 'GET',
        headers: headers,
        cache: 'no-store' 
    };
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

export async function useUserFetch(meaning, token){
    const apiUrl = `https://api.realmofhistoria.com/${meaning}`;
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    const options = {
        method: 'GET',
        headers: headers,
        cache: 'no-store' 
    };
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
