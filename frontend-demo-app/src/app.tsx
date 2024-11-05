import './app.css'
import axios from "axios";
import {useState} from "react";

export function App() {
  const [messageFromBackend, setMessageFromBackend] = useState('')

    async function sendTestingRequestToBackend() {
      const BACKEND_URL = 'http://localhost:8080';

        const response= await axios.get(BACKEND_URL);
        console.log(response.data);
        setMessageFromBackend(response.data);
    }

  return (
    <>
        <button onClick={sendTestingRequestToBackend}>Get data from backend</button>
        <br/>
        {messageFromBackend && <div>Message from backend = {messageFromBackend}</div>}
        <br/>
    </>
  )
}
