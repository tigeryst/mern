import Link from "next/link";
import styles from "./UserRecord.module.css";
import clsx from "clsx";

export default function UserRecord({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.position}</td>
      <td>{user.level}</td>
      <td>
        <Link to={`/${user._id}/edit`}>Edit</Link> |
        <a
          href="/"
          onClick={() => {
            deleteUser(user._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
}
