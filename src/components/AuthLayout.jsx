import { Outlet } from "react-router-dom";
import Container from "./ui/Container";

const AuthLayout = () => {
  return (
    <Container>
      <main className="px-8 py-40">
        <Outlet />
      </main>
    </Container>
  );
};

export default AuthLayout;
