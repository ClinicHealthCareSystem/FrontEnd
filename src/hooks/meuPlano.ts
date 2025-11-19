import { useEffect, useState } from "react";
export default function meuPlano() {
    const [error, setError] = useState("");
    const [plano, setPlano] = useState<string>("");
    const handlemeuPlano = async () => {
        setError("");
        const token = await localStorage.getItem("token");
        if (!token) {
            setError("Usuário não autenticado");
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/planos/meu-plano`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            const json = await response.json();
            console.log(response.status, json);
            if (response.ok) {
                setPlano(json.plano);
            } else {
                setError("Erro ao buscar o plano");
            }
        } catch {
            console.log(error);
            setError("Erro no servidor, tente novamente mais tarde");
        }
    };

    useEffect(() => {
        handlemeuPlano();
    }, []);
    return { error, plano, refetch: handlemeuPlano };
}