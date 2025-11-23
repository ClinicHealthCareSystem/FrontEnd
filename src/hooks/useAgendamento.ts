import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface CreateAgendamentoData {
  tipo: "CONSULTA" | "EXAME";
  data: string; 
  hora: string; 
  unidade: string;
  convenio: string;
  servico?: string;
  tipoAtendimento?: "PRESENCIAL" | "REMOTO";

  nome?: string;
}

export interface AgendamentoResponse {
  id: string;
  tipo: string;
  data: string;
  hora: string;
  status: string;
  usuario: any;
  unidade: any;
  convenio: any;
  consulta?: any;
  exame?: any;
}


export function useAgendamento() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const createAgendamento = async (data: CreateAgendamentoData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        throw new Error("Usuário não autenticado");
      }

      const response = await fetch(
        `http://localhost:3000/agendamento${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        },
        
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao criar agendamento");
      }

      const json: AgendamentoResponse = await response.json();
      setSuccess(true);
      return json;
    } catch (e: any) {
      const errorMessage = e.message || "Erro ao criar agendamento";
      setError(errorMessage);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    createAgendamento,
    loading,
    error,
    success,
    resetState,
  };
}
