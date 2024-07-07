import { useState } from "react";

// Custom hook for POST requests
// Pass the url and also the data and headers
export const usePostData = (url, options = {}) => {
  // Hook states
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to trigger the POST request
  const postData = async (body) => {
    setLoading(true); // Indicate loading state
    setError(false);  // Reset error state

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...options.headers, // Include additional headers if provided  // this could be your token
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setData(jsonData); // Set received data
    } catch (err) {
      setError(true); // Set error state if the request fails
    } finally {
      setLoading(false); // Set loading state to false after request completion
    }
  };

  // Return the data, loading, and error states, along with the postData function
  return { data, error, loading, postData };
};



// Example how it is called


// import React, { useState } from "react";
// import { usePost } from "./usePost"; // Import the custom hook

// const PostComponent = () => {
//   const [inputData, setInputData] = useState("");
//   const { data, error, loading, postData } = usePost("https://example.com/api");

//   const handleSubmit = () => {
//     const requestBody = {
//       key: inputData,
//     };
//     postData(requestBody); // Call the postData function with the request body
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputData}
//         onChange={(e) => setInputData(e.target.value)}
//       />
//       <button onClick={handleSubmit} disabled={loading}>
//         Submit
//       </button>

//       {loading && <p>Loading...</p>}
//       {error && <p>Something went wrong!</p>}
//       {data && <p>Data received: {JSON.stringify(data)}</p>}
//     </div>
//   );
// };

// export default PostComponent;