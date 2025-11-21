import { useState } from "react";
import { PlanosType } from "../utils/authPlanos";
export default function planoAssinar(router: any) {
  const [error, setError] = useState("");

  const handleAssinarPlano = async (plano: PlanosType) => {
    setError("");
    const token = await localStorage.getItem("token");

    if (!token) {
      setError("Usuário não autenticado");
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/planos/assinar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ planoId: plano.id, planoNome: plano.nome }),
      });

      if (!response.ok) {
        console.log(error);
        setError("Erro ao assinar o plano");
      }
    } catch {
      console.log(error);
      setError("Erro no servidor, tente novamente mais tarde");
    }
  };

  return { error, handleAssinarPlano };
}
