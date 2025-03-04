// const api_url = process.env.REACT_APP_API_URL;

// A function to send the login request to the server
const logIn = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  console.log("About to send request");
  console.log(requestOptions.body);
  const response = await fetch(
    `http://localhost:5000/api/employee/login`,
    requestOptions
  );
  return response;
};

// Export the functions

const loginService = {
  logIn,
};
export default loginService;
