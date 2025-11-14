import { useState } from "react";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

export function useUpdateInfoUser() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleUpdateUser = async (
    cpf: string,
    email: string,
    phone: string,
    address: string
  ) => {
    setError("");
    setSuccess("");
    try {
      const response = await fetch(
        `http://localhost:3000/user/updateUserProfile`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cpf, email, phone, address }),
        }
      );

      const json = await response.json();
      console.log(response.status, json);

      if (response.ok) {
        setSuccess("Informações atualizadas com sucesso!");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        setError("Erro ao atualizar informações do usuário");
      }
    } catch (error) {
      console.log("erro no catch de atualizar usuário", error);
      setError("Erro de conexão");
    }
  };

  return { error, success, handleUpdateUser };
}
