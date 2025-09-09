import { useState } from "react";
import { useRouter } from "expo-router";

export function useSignUp() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (
    name: string,
    CPF: string,
    phone: string,
    password: string
  ) => {
    setError("");
    console.log(name, CPF, phone, password);

    try {
      const response = await fetch(`http://localhost:3000/user/signUp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, CPF, phone, password }),
      });

      const json = await response.json();
      console.log(response.status, json);

      if (response.ok) {
        router.replace("/login");
      } else {
        setError("Erro ao cadastrar");
      }
    } catch (error) {
      console.log("erro no catch do signup", error);
      setError("Erro de conexão");
    }
  };

  return { error, handleSignUp };
}
