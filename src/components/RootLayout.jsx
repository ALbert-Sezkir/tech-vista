import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
