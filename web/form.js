const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")
import { server } from "./server"

form.addEventListener("submit", async(e) => {
    e.preventDefault()
    content.classList.add("placeholder")

    const videoURL = input.value
    
    if (!videoURL.includes("shorts")) {
        return content.textContent = "Esse vídeo parece não ser um short"
    }
    
    const [_, params] = videoURL.split("/shorts/");
    const videoID = params.split("?si")

    content.textContent = "obtendo o texto do áudio."
    
    const transcption = await server.get("summary/" + videoID)

    content.textContent = "Realizando o resumo..."

    content.textContent = transcption.data.result

    const summary = await server.post("/summary", {
        text: transcption.data.result,
    })

    content.textContent = summary.data.result
    content.classList.remove("placeholder")
    // alert(videoID[0])
})