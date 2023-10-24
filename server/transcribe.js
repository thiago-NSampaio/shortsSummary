import { transcriptionExample } from "./utils/transcription.js"

import { Pipeline, pipeline } from "@xenova/transformers"
export async function transcribe(audio) {
    // return transcriptionExample

    try {
        console.log("Realizando a transcrição")
        const transcribe = await pipeline("automatic-speech-recognition", "Xenova/whisper-small")
        const transcption = await transcribe(audio, {
            chunk_length_s: 30,
            stride_length_s: 5,
            language: "portuguese",
            task: "transcribe"
        })

        console.log("transcrição Finalizada com sucesso")
        return transcption?.text.replace("[Música]", "")
    } catch (error) {
        throw new Error(error)
    }
}