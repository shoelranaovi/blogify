import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <div>sidebar</div>
      <Outlet />
    </div>
  );
}

export default Admin;
