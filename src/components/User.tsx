import { UsersType } from "../interfaceTypes/usersType";

interface UserType {
  data: UsersType;
}

export const User = ({ data }: UserType) => {
  return (
    <div className="user">
      <h3>{data.username}</h3>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  );
};
