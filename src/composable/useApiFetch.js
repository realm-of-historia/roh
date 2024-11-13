export async function useApiFetch(meaning) {
  const apiUrl = `https://api.realmofhistoria.com/${meaning}`;
  // const token = process.env.API_TOKEN
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiI3NnlZRkpITGpZODlRWXJ2ZzFkZmNqZ2QySmRrQlkxZFBQclVGOXhzNkxtWiIsImxldmVsIjowLCJpYXQiOjE2OTgwNzc0MjgsImV4cCI6MTY5ODE2MzgyOH0.xeDAvwfXgExteKzYd3gB3orDXB63A7heeKonfGOn8mE'
  const token = process.env.API_FETCH_TOKEN ?? "";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = {
    method: "GET",
    headers: headers,
    cache: "no-store",
  };
  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export async function useUserFetch(meaning, token, method = "GET") {
  const apiUrl = `https://api.realmofhistoria.com/${meaning}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const options = {
    method: method,
    headers: headers,
    cache: "no-store",
  };
  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
