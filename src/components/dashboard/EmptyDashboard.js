import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './EmptyDashboard.css'

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
    <h1 className='mt-5 text-light display-2 dark-blue-brand-color'> Please login or register </h1>
    <div className='mt-5'>
    <div className='text-light'>Aleardy registered?</div>
    <Button className='button' variant="light" onClick={moveToLoginPage}>
    Press here to Login <i className="bi bi-door-open"></i> </Button>{' '}
    </div>
    <div className='mt-3'>
    <div className='text-light'>Not registered?</div>
    <Button className='button' variant="light" onClick={moveToRegisterPage}>Press here to Register <i class="bi bi-pencil-square"></i></Button>{' '}
    </div>

    <div className='mt-4'>
    <button onMouseDown={handleStart} onMouseUp={handleStop}> Press and hold to record </button>
    {(recordUrl !== "") ? <Blue/> : ""}
    </div>

    </div>
  );
}

export default EmptyDashboard
