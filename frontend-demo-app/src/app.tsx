import './app.css'
import axios from "axios";
import {useState} from "react";

export function App() {
  const [messageFromBackend, setMessageFromBackend] = useState('')

    function getBackendUrl() {
        const viteapiurl = import.meta.env.VITE_API_URL;
        console.log('viteapiurl' + viteapiurl)
        return viteapiurl;
    }

    async function sendTestingRequestToBackend() {

        const response= await axios.get(getBackendUrl());
        console.log(response.data);
        setMessageFromBackend(response.data);
    }

  return (
    <>
        <div style={'margin-bottom: 20px'}>Backend url is: <b>{getBackendUrl()}</b></div>
        <button onClick={sendTestingRequestToBackend}>Get data from backend</button>
        <br/>
        {messageFromBackend && <div style={'margin-top: 20px'}>Message from backend = {messageFromBackend}</div>}
        <br/>
    </>
  )
}
