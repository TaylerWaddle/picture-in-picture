const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to Select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("hello", error);
    } else {
      console.log(error);
    }
  }
}

button.addEventListener();

selectMediaStream();
