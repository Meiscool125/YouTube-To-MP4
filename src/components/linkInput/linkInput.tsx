import { TextInput, Button, Center, Text } from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';

export default function LinkInput() {
    const [link, setLink] = useState('');
    const [IsError, setIsError] = useState(false);
    // const downloadVideo = () => {
    //     if (!link.startsWith('https://www.youtube.com/watch?v=')) {
    //         setIsError(true);
    //         return;
    //     }
    //     const videoId = link.split('watch?v=')[1];
    //     const url = `https://www.youtube.com/get_video_info?video_id=${videoId}&as_video_ids=${videoId}`;
    //     fetch(url)
    //     .then(response => response.text())
    // }
    const downloadVideo = async () => { 
    try {
        // Replace with your own backend URL for downloading YouTube videos
        const response = await axios.post('http://localhost:5000/download', { link });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const linkElement = document.createElement('a');
        linkElement.href = url;
        linkElement.setAttribute('download', 'video.mp4');
        document.body.appendChild(linkElement);
        linkElement.click();
        document.body.removeChild(linkElement);
        
    } catch (err) {
        setIsError(true);
    }
    };
    return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
            <TextInput placeholder="YouTube link" error = {IsError ? <Text pb={0}>Not a valid link!</Text> : undefined} pr={10} w={300} onChange={(event) => setLink(event.currentTarget.value)}/>
            <Button variant="filled" color="gray" onClick={downloadVideo}>Download</Button>
        </div>
    </div>
    );
}