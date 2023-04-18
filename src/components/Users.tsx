import { useUsersHook } from "../hooks/useUsersHook";
import { User } from "./User";
import "./../styles/Users.css";
import { Loading } from "./Loading";
import { ErrorComp } from "./ErrorComp";

export const Users = () => {
  const { users, loading, error } = useUsersHook();

  return (
    <div className="Users">
      <h2>Users</h2>
      {loading && <Loading />}
      {error && <ErrorComp error={error} />}
      {users && users.map((data) => <User data={data} key={data.id} />)}
    </div>
  );
};
