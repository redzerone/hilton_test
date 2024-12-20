
// config.js
//easy 
// This is a sample configuration file containing a hardcoded API key.

//something is goint on! 
// WARNING: Hardcoding API keys in your code is a security risk. 
// Use environment variables or a secure vault for sensitive information.

const config = {
    apiKey: "12345-secondtime-working-FGHIJ-09878" // Replace this with your actual API key
};

// Example usage of the API key
function fetchData(endpoint) {
    const url = `https://api.example.com/${endpoint}?api_key=${config.apiKey}`;
    console.log(`Fetching data from: ${url}`);

    // Simulate an API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data retrieved successfully from ${endpoint}`);
        }, 1000);
    });
}
//new comment added in this file 
// Example function call
fetchData("sample-endpoint")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

export default config;
