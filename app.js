const startButton = document.getElementById("startCamera");
const video = document.getElementById("video");
const status = document.getElementById("status");

const targetImage = new Image();

targetImage.src = "assets/target.jpg";

targetImage.onload = () => {
    console.log("TARGET cargado correctamente");
    console.log("Ancho:", targetImage.width);
    console.log("Alto:", targetImage.height);
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

    } catch (error) {

        console.error(error);

        status.textContent =
            "No se pudo acceder a la cámara.";

    }

});
