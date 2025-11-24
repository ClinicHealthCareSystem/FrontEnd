import { useState } from "react";

export function useConsultation() {
  const [error, setError] = useState("");

  const consultation = async (data: any) => {
    setError("");
  };

  return { error, consultation };
}
