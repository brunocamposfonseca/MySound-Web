"use client"

import { createContext, useContext } from "react";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";

interface PlayerContextProps {
  currentTrack: {id:string; title: string; artist: Record<string, string>; url: string; cover: string };
  isPlaying: boolean;
  togglePlay: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  currentTime: number;
  duration: number;
  setCurrentTime: (time: number) => void;
  setAudioCurrentTime: (time: number) => void;
  isRepeating: boolean;
  toggleRepeat: () => void;
  isShuffling: boolean;
  toggleShuffle: () => void;
  setVolume: (vol: number) => void
  volume: number
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined); // Criando o <PlayerContext>

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    currentTrack,
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
    volume,
    setVolume,
  } = useAudioPlayer(); // Importando as constantes do hook useAudioPlayer

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        togglePlay,
        nextTrack,
        previousTrack,
        currentTime,
        duration,
        setCurrentTime: setAudioCurrentTime,
        setAudioCurrentTime,
        isRepeating,
        toggleRepeat,
        isShuffling,
        toggleShuffle,
        volume,
        setVolume,
      }} // Define os valores compartilhados
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("Error: usePlayer must be used within a PlayerProvider"); // Informa erro informando que o usePlayer deve ser usado dentro de um PlayerProvider(provedor de player)
  }
  return context;
};
