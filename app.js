const startButton = document.getElementById("startCamera");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const status = document.getElementById("status");
const targetImage = document.getElementById("target");

const ctx = canvas.getContext("2d");

targetImage.onload = () => {
    console.log("TARGET cargado correctamente");
    console.log("Ancho:", targetImage.naturalWidth);
    console.log("Alto:", targetImage.naturalHeight);
};

targetImage.onerror = () => {
    console.error("No se pudo cargar target.jpg");
};

startButton.addEventListener("click", async () => {

    try {

        status.textContent = "Solicitando acceso a la cámara...";

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        video.srcObject = stream;

        status.textContent = "Cámara funcionando";

        video.addEventListener("loadedmetadata", () => {

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            processVideo();

        }, { once: true });

    } catch (error) {

        console.error(error);

        status.textContent =
            "No se pudo acceder a la cámara.";

    }

});


function processVideo() {

    if (video.readyState >= 2) {

        ctx.drawImage(
            video,
            0,
            0,
            canvas.width,
            canvas.height
        );

    }

    requestAnimationFrame(processVideo);
}
