import { useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function login(router: any) {
  const [error, setError] = useState("");

  const handleSignIn = async (CPF: string, password: string) => {
    setError("");

    try {
      const response = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ CPF, password }),
      });

      const json = await response.json();
      console.log(response.status, json);

      if (response.ok) {
        const token = json.access_token;

        if (token) {
          try {
            if (typeof window !== "undefined" && window.localStorage) {
              localStorage.setItem("token", token);
              console.log("Token salvo no localStorage");
            } else {
              await SecureStore.setItemAsync("token", token);
              console.log("Token salvo no SecureStore");
            }

            router.replace("/menu");
          } catch (storageError) {
            console.error("Erro ao armazenar:", storageError);
          }
        } else {
          setError("Token não recebido do servidor");
        }
      } else {
        setError("CPF ou senha inválidos");
      }
    } catch (err) {
      console.log("Erro ao logar: " + err);
      setError("Erro no servidor, tente novamente mais tarde");
    }
  };

  return { error, handleSignIn };
}
