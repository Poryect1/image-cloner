const startButton = document.getElementById("startCamera");
const video = document.getElementById("video");
const status = document.getElementById("status");

startButton.addEventListener("click", async () => {

    try {

        status.textContent = "Solicitando acceso a la cámara...";

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        video.srcObject = stream;

        status.textContent = "Cámara funcionando";

    } catch (error) {

        console.error(error);

        status.textContent =
            "No se pudo acceder a la cámara.";

    }

});
