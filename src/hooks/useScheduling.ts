import { useState } from "react";
import { useRouter } from "expo-router";

export function useScheduling() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleScheduling = async (data: any) => {
    setError("");
    console.log("Envio dos dados de atendimento atendimento");
    // Fernando: Vou fazer o backend e depois volto aqui
  };

  return { error, handleScheduling };
}
