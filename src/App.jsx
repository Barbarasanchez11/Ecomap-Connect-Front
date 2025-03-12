
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyMap from "./components/MyMap";

function App() {
const [message,setMessage] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error al conectar con el backend:", error);
      
      });
  }, []);

  return (
    <>
      <MyMap />
      
    </>
  );
}

export default App;
