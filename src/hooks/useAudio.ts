import { useSettings } from "@/store/settings";
import { useRef, useEffect, useCallback } from "react";

export function useAudio(
  fileName: string,
  volume: number = 1,
  sfxType: "sfx" | "music" = "sfx"
) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMusic, isSfx, volume: settingsVolume } = useSettings();

  useEffect(() => {
    audioRef.current = new Audio(`sound/${fileName}`);
    audioRef.current.loop = sfxType === "music";

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [fileName, sfxType]);

  useEffect(() => {
    if (!audioRef.current) return;

    const shouldBeMuted =
      (sfxType === "music" && !isMusic) || (sfxType === "sfx" && !isSfx);
    audioRef.current.volume = shouldBeMuted ? 0 : volume * settingsVolume;

    if (sfxType === "music" && !isMusic && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, [isMusic, isSfx, volume, settingsVolume, sfxType]);

  const play = useCallback(() => {
    if (sfxType === "sfx" && !isSfx) return;
    if (sfxType === "music" && !isMusic) return;
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }
  }, [isMusic, isSfx, sfxType]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  return {
    play,
    pause,
  };
}
