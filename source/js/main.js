'use strict';

// In this codelab, you  only stream video, not audio (video: true).
const mediaStreamConstraints = {
    video: true,
    audio: true,
};

// The video element where the stream is displayed
const localVideo = document.querySelector('video');

// The local stream that's displayed on the video
let localStream;

// Video resolution
const hdConstraints = {
    video: {
        width: {
            min: 1280
        },
        height: {
            min: 720
        }
    }
}

// Handle success and add the MediaStream to the video element
function gotLocalMediaStream(mediaStream) {
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
}

// Handle error and log a message to the console with the error message
function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

// Initialize media stream
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);