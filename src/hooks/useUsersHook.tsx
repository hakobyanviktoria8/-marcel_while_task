import { useEffect, useState } from "react";
import { UsersType } from "../interfaceTypes/usersType";
import axios from "axios";

export function useUsersHook() {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/users");
      setUsers(res.data);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error };
}
