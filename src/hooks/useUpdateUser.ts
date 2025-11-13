import { useState } from "react";
import { useRouter } from "expo-router";

export function useUpdateUser() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUpdateUser = async (data: any) => {
    setError("");

    try {
      const { confirmPassword, ...userData } = data;

      const response = await fetch(
        `http://localhost:3000/user/updatePassword`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const json = await response.json();
      console.log(json);
      console.log(response.status);

      if (!response.ok) {
        throw new Error(`ERROR HTTP: ${response.status}`);
      }

      if (response.ok) {
        console.log("Dados do usuário atualizado com sucesso");
        router.replace("/login");
      }
    } catch (error) {
      console.log("Não foi possível atualizar os dados do usuário: " + error);
      throw new Error("Não foi possível atulizar seus dados: " + error);
    }
  };

  return { error, handleUpdateUser };
}
