import { useState } from "react";
import { useRouter } from "expo-router";

export function useSendCode() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleVerificationCode = async (phone: string) => {
    setError("");
    console.log(phone);
    try {
      const response = await fetch(
        `http://localhost:3000/whatsapp/sendVerificationCode`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: phone }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      if (response.ok) {
        console.log("Código enviado com sucesso!");
        router.push({
          pathname: "/recuperar",
          params: { phone: phone },
        });
      } else {
        console.log(
          "Não foi possível enviar o código para o celular fornecido"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { error, handleVerificationCode };
}
