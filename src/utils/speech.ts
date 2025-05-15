// utils/speech.ts
const synth = window.speechSynthesis;
let currentUtterance: SpeechSynthesisUtterance | null = null;

function getVoice(): SpeechSynthesisVoice | null {
  const voices = synth.getVoices();
  // Try preferred female voice first
  const preferred = voices.find(
    (voice) => voice.name.includes("Female") || voice.name.includes("Zira")
  );
  // Fallback to any voice with "en" language
  return (
    preferred || voices.find((voice) => voice.lang.startsWith("en")) || null
  );
}

export function speak(text: string) {
  stopSpeaking(); // Stop any ongoing speech

  const voice = getVoice();
  if (!voice) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.rate = 0.9; // optional tweak
  currentUtterance = utterance;
  synth.speak(utterance);
}

export function stopSpeaking() {
  if (synth.speaking && currentUtterance) {
    synth.cancel();
    currentUtterance = null;
  }
}
