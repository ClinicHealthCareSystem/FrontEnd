import { useState } from "react";
import { useRouter } from "expo-router";

export function useVerifyCode() {
  const [error, setError] = useState("");
  const router = useRouter();

  const validateCode = async (value: string, phone: string) => {
    setError("");

    const codeValue = value;

    if (!codeValue || codeValue.length !== 6) {
      console.log("Erro: ", "Digite um código válido");
      return;
    }

    const payload = {
      phone: phone,
      code: codeValue,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/whatsapp/verifyCodeAuthenticator`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      if (!result.success) {
        console.log("Código inválido!");
        console.log("Erro", result.message);
        return;
      }

      if (response.ok) {
        console.log("Código válido!");
        router.push({
          pathname: "/novasenha",
        });
      } else {
        console.log("Código inválido");
      }
    } catch (error) {
      console.log("Erro na verificação do código", error);
      console.log("Erro", "Não foi possível verificar o código");
    }
  };

  return { error, validateCode };
}
