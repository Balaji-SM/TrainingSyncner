import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import './App.css';

// Create a Context for global loading state
const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Create an Axios instance with interceptors
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const AxiosInterceptor = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        setLoading(true);
        config.headers["Authorization"] = "Bearer sample-token";
        return config;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        setLoading(false);
        console.log("Response Data:", response.data);
        return response;
      },
      (error) => {
        setLoading(false);
        if (error.response) {
          if (error.response.status === 401) {
            alert("Unauthorized! Please log in.");
          } else if (error.response.status === 404) {
            alert("Resource not found!");
          } else if (error.response.status === 500) {
            alert("Server error! Try again later.");
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [setLoading]);

  return null;
};

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { loading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/posts");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {loading && <div className="text-center mt-3"><div className="spinner-border" role="status"></div></div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <h2>Fetched Data</h2>
      {data.slice(0, 5).map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <AxiosInterceptor />
      <DataFetcher />
    </LoadingProvider>
  );
};

export default App;
