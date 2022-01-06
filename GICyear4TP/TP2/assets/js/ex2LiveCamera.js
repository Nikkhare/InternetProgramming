const start = document.getElementById("start");
const stop = document.getElementById("stop");
const canvas = document.getElementById("video_display");
var video = document.querySelector("#videoElement");
let enableVideo;

start.addEventListener("click", function (event) {
    console.log("Start");
    start.style.display = "none";
    stop.style.display = "inline-block";
    drawing();

});

stop.addEventListener("click", function (event) {
    console.log("Stop");
    start.style.display = "inline-block";
    stop.style.display = "none";
    video.srcObject = null;
    enableVideo.stop();
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 375);

});


function drawing() {
    navigator.mediaDevices
    .getUserMedia({
        audio: false,
        video: true,

    })

    .then(function (stream) {
        video.srcObject = stream;
        enableVideo = stream.getVideoTracks()[0];
        setTimeout(loop, 1000 / 30);
    })
    .catch(function (error) {
        console.log(error);
    });

}
function loop() {
    if (video.srcObject) {
        canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
            setTimeout(loop, 1000 / 30);
            console.log(video.srcObject);
    }
}

