import { useEffect } from "react";
import { api } from "./api/axios";

function App() {
  useEffect(() => {
    const testAuth = async () => {
      try {
        const response = await api.get("/users/me");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    testAuth();
  }, []);

  return <div>Dashboard</div>;
}

export default App;