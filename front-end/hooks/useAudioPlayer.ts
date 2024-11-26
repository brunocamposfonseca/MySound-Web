import { useRef, useState, useEffect, useMemo } from "react";
import tracks from "@/db/tracks";

export const useAudioPlayer = () => { 
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const volumeStorage = useMemo(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      return parseFloat(localStorage.getItem("volume") || "0.5");
    }
    return 0;
  }, []);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(volumeStorage);
  const [volValue, setVolValue] = useState(volumeStorage); 

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
    document.title = track 
    audio.volume = volValue

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
      audioRef.current.volume = volValue;
    }

    const volumeTimeout = setTimeout(() => {
      localStorage.setItem("volume", volume.toString());
      setVolValue(volume);
    }, 500);
  
    return () => clearTimeout(volumeTimeout);
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if(audio){
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
    setIsRepeating((prev) => !prev);
  };

  const toggleShuffle = () => {
    setIsShuffling((prev) => !prev);
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
