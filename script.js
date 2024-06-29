const videoElement = document.getElementById("video");
const startButton = document.getElementById("startButton");
const playButton = document.getElementById("playButton");

// Prompt to Select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    startButton.disabled = true;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("hello", error);
    } else {
      console.log(error);
    }
  }
}

startButton.addEventListener("click", selectMediaStream);

playButton.addEventListener("click", async () => {
  await videoElement.requestPictureInPicture();
});
