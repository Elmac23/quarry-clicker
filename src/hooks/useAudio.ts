"use client";
import { useSettings } from "@/store/settings";
import { useRef, useEffect, useCallback } from "react";

const audioCache = new Map<string, HTMLAudioElement>();

export function useAudio(
  fileName: string,
  volume: number = 1,
  sfxType: "sfx" | "music" = "sfx"
) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isMusic, isSfx, volume: settingsVolume } = useSettings();

  useEffect(() => {
    const audioPath = `sound/${fileName}`;

    if (sfxType === "music") {
      audioRef.current = new Audio(audioPath);
      audioRef.current.loop = true;
      audioRef.current.preload = "auto";
    } else {
      if (!audioCache.has(audioPath)) {
        const audio = new Audio(audioPath);
        audio.preload = "auto";
        audioCache.set(audioPath, audio);
      }
      audioRef.current = audioCache.get(audioPath)!;
    }

    return () => {
      if (sfxType === "music" && audioRef.current) {
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

  const play = useCallback(async () => {
    if (sfxType === "sfx" && !isSfx) return;
    if (sfxType === "music" && !isMusic) return;

    if (!audioRef.current) return;

    try {
      // For SFX, create a clone to allow overlapping sounds
      if (sfxType === "sfx") {
        const audioClone = audioRef.current.cloneNode() as HTMLAudioElement;
        audioClone.volume = volume * settingsVolume;
        audioClone.currentTime = 0;

        // Clean up clone after playing
        audioClone.addEventListener("ended", () => {
          audioClone.remove();
        });

        await audioClone.play();
      } else {
        // For music, use the original instance
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Audio play failed:", error);
    }
  }, [isMusic, isSfx, sfxType, volume, settingsVolume]);

  const pause = useCallback(() => {
    if (audioRef.current && sfxType === "music") {
      audioRef.current.pause();
    }
  }, [sfxType]);

  const stop = useCallback(() => {
    if (audioRef.current && sfxType === "music") {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [sfxType]);

  return {
    play,
    pause,
    stop,
  };
}
