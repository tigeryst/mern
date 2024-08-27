import styles from "./page.module.css";
import UserRecord from "./_components/UserRecord";

const users = [];

export default function Page() {
  return (
    <>
      <h1>All Users</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((currentUser) => {
            return <UserRecord user={currentUser} key={currentUser._id} />;
          })}
        </tbody>
      </table>
    </>
  );
}
