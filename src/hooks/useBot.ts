import { useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function bot(message: string) {
  const [error, setError] = useState("");

  const handleChatBot = async (message: string) => {
    setError("");

    try {
      const response = await fetch(`http://localhost:3000/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const json = await response.json();
      console.log(response.status, json);

      if (response.ok) {
      } else {
        setError("Erro ao receber mensagem");
      }
    } catch (err) {
      console.log("Erro ao enviar mensagem: " + err);
      setError("Erro no servidor, tente novamente mais tarde");
    }
  };

  return { error, handleChatBot };
}
