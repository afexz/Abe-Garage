// Import from the env
// const api_url = process.env.REACT_APP_API_URL;

// A function to send post request to create a new employee
const createEmployee = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(
    `http://localhost:5000/api/employee`,
    requestOptions
  );
  return response;
};
// Export all the functions
const employeeService = {
  createEmployee,
};
export default employeeService;
