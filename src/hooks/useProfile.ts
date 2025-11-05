import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserProfile {
  name: string;
  phone: string;
  CPF: string;
}

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = await AsyncStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await fetch("http://localhost:3000/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error when searching profile");
        }

        const data = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return { profile, loading, error };
}
