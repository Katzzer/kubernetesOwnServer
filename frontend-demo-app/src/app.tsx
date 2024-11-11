import './app.css';
import axios from "axios";
import {useState} from "react";

export function App() {
    const [messageFromBackend, setMessageFromBackend] = useState('')

    function getBackendUrl() {
        const viteApiUrl = '/api';
        console.log('viteApiUrl = ' + viteApiUrl)
        return viteApiUrl;
    }

    async function sendTestingRequestToBackend() {
        try {
            const response = await axios.get(getBackendUrl());
            console.log(response.data);
            setMessageFromBackend(response.data);
        } catch (error) {
            console.error('Error fetching data from backend:', error);
            setMessageFromBackend('Error fetching data from backend');
        }
    }

    return (
        <>
            <div style={{ marginBottom: '20px' }}>Backend url is: <b>{getBackendUrl()}</b></div>
            <button onClick={sendTestingRequestToBackend}>Get data from backend</button>
            <br/>
            {messageFromBackend && <div style={{ marginTop: '20px' }}>Message from backend = {messageFromBackend}</div>}
            <br/>
        </>
    )
}