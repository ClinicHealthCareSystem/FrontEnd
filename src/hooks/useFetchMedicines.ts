import { useEffect, useState } from "react";

export function useFetchMedicines(userId: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/medicines/byUser/${userId}`
      );
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError("Erro ao carregar medicamentos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [userId]);

  return { data, loading, error, reload: load };
}
