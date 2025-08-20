import { useEffect, useMemo } from "react";
import { useAudio } from "./useAudio";
import { useInterracted } from "./useInteracted";
import { randomRange } from "@/lib/randomRange";

const themes: [string, number][] = [
  ["emotional-ambient-piece-with-slow-cinematic-textures-370144.mp3", 0.2],
  ["ambient-background-339939.mp3", 0.3],
  ["calm-background-music-ambient-guitar-298550.mp3", 0.5],
  ["space-ambient-351305.mp3", 0.3],
];

export function useBackgroundMusic() {
  const randomTheme = useMemo(() => {
    return themes[randomRange(0, themes.length - 1)];
  }, []);

  const { play } = useAudio(randomTheme[0], randomTheme[1], "music");

  const hasInteracted = useInterracted();

  useEffect(() => {
    if (hasInteracted) play();
  }, [hasInteracted, play]);
}
