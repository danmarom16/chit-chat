import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function EmptyDashboard() {

  const navigate = useNavigate();
  const moveToLoginPage = e => {
        navigate("/");
  }
  const moveToRegisterPage = e => {
        navigate("/register");
  }

  const [recordUrl, setRecordUrl] = useState("");

  const recordAudio = () =>
    new Promise(async resolve => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];
  
      mediaRecorder.addEventListener("dataavailable", e => {
        audioChunks.push(e.data);
      });
  
      const start = () => mediaRecorder.start();
  
      const stop = () =>
        new Promise(resolve => {
          mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            resolve({ audioBlob, audioUrl });
          });

          mediaRecorder.stop();
        });
  
      resolve({ start, stop });
    });
  
  let recHolder = []
  const handleStart = ((e) => {
    startRecording()
 })

  const handleStop = ((e) => {
    stopRecording(recHolder[0])
  });
  

  async function startRecording(){
      const recorder = await recordAudio();
      recHolder[0] = recorder
      recorder.start();
  }
  
  async function stopRecording(recorder){
    const audio = await recorder.stop();
    setRecordUrl(audio.audioUrl);
  }

  function Blue(){
    return(
      <div className='mt-5'>
      <audio controls src={recordUrl}></audio>
      </div>
    )
  }

  return(

    <div>
    <h1 className='mt-5' style={{color:"white"}}> Please login or register :) </h1>
    <div className='mt-5'>
    <Button variant="light" onClick={moveToLoginPage}>Press to Login</Button>{' '}
    </div>
    <div className='mt-3'>
    <Button variant="light" onClick={moveToRegisterPage}>Press to Register</Button>{' '}
    </div>

    <div className='mt-4'>
    <button onMouseDown={handleStart} onMouseUp={handleStop}> Press and hold to record </button>
    {(recordUrl !== "") ? <Blue/> : ""}
    </div>

    </div>
  );
}

export default EmptyDashboard
