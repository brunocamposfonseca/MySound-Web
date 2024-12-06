import { useRef, useState, useEffect, useMemo } from "react";
import tracks from "@/db/tracks";

export const useAudioPlayer = () => {
  const repeatStorage = useMemo(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      return localStorage.getItem("repeat") === "false";
    }
    return true;
  }, []);

  const shuffleStorage = useMemo(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      return localStorage.getItem("shuffle") === "false";
    }
    return true;
  }, []);

  const volumeStorage = useMemo(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      return parseFloat(localStorage.getItem("volume") || "0.5");
    }
    return 0;
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(repeatStorage);
  const [isShuffling, setIsShuffling] = useState(shuffleStorage);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(volumeStorage);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(tracks[currentTrackIndex].url);
    } else {
      audioRef.current.src = tracks[currentTrackIndex].url;
      audioRef.current.load();
    }

    const artists = Object.values(tracks[currentTrackIndex].artist).join(", ");
    const track = tracks[currentTrackIndex].title + " \u2022 " + artists
    const audio = audioRef.current;
    document.title = track;
    audio.volume = volume;

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    audio.addEventListener("timeupdate", updateTime);

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", updateTime);
      audio.pause();
      audioRef.current = null;
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = volume;
    }

    const volumeTimeout = setTimeout(() => {
      localStorage.setItem("volume", volume.toString());
    }, 200);

    return () => clearTimeout(volumeTimeout);
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const handleEnded = () => {
        if (isRepeating) {
          audio.currentTime = 0;
          audio.play();
        } else {
          nextTrack();
        }
      };

      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("ended", handleEnded);
      }
    }
  })

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const nextTrack = () => {
    if (isShuffling) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    }
    setIsPlaying(true);
  };

  const previousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  const setAudioCurrentTime = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleRepeat = () => {
    const repeatTimeout = setTimeout(() => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("repeat", String(isRepeating));
      }
    }, 500);
  
    setIsRepeating((prev) => !prev);
    return () => clearTimeout(repeatTimeout);
  };

  const toggleShuffle = () => {
    const shuffleTimeout = setTimeout(() => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("shuffle", String(isShuffling));
      }
    }, 500);
  
    setIsShuffling((prev) => !prev);
    return () => clearTimeout(shuffleTimeout);
  };

  return {
    currentTrack: tracks[currentTrackIndex],
    volume,
    isPlaying,
    togglePlay,
    nextTrack,
    previousTrack,
    currentTime,
    duration,
    setAudioCurrentTime,
    isRepeating,
    toggleRepeat,
    isShuffling,
    toggleShuffle,
    setVolume,
  };
};
