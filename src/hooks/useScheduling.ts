import { useState } from "react";
import { useRouter } from "expo-router";

export function useScheduling() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleScheduling = async (data: any) => {
    setError("");
  };

  return { error, handleScheduling };
}
