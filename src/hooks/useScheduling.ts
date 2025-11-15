import { useState } from "react";

export function useScheduling() {
  const [error, setError] = useState("");

  const handleScheduling = async (data: any) => {
    setError("");
  };

  return { error, handleScheduling };
}
