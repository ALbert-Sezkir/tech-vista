import { useState, useEffect } from "react";
import { COLORS, STORED_VALUES } from "../constants/constants";
import Button from "./ui/Button";
import PersonIcon from "../assets/person-icon.svg";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../functions/functions";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function LoginDropdown() {
  const [isShown, setIsShown] = useState(false);
  const [token, setToken] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = getFromLocalStorage(STORED_VALUES.TOKEN);
    setToken(getToken);
  }, [token]);

  const handleClick = () => {
    const removedToken = removeFromLocalStorage("token");

    setToken(removedToken);
    navigate("/");
  };

  return (
    <>
      <img
        className="cursor-pointer"
        onMouseEnter={() => setIsShown(true)}
        onClick={() => setIsShown((prev) => !prev)}
        src={PersonIcon}
        alt="login"
      />
      {isShown && (
        <section
          onMouseLeave={() => setIsShown(false)}
          className={
            "absolute left-[-70px] md:left-[-300px] top-20 max-w-fit max-h-fit bg-black z-20 rounded-3xl"
          }
        >
          <article className=" flex flex-col md:flex-row gap-6 py-2 px-3">
            {token ? (
              <button
                className={twMerge(
                  "rounded-3xl py-4 px-8 bg-primary font-semibold",
                  COLORS.TEXT_BLACK
                )}
                onClick={handleClick}
              >
                Logga ut
              </button>
            ) : (
              <Button to="/auth/login" style={COLORS.TEXT_BLACK} size="S">
                Logga in
              </Button>
            )}
            <Button style={COLORS.TEXT_BLACK} size="M">
              Skapa användare
            </Button>
          </article>
        </section>
      )}
    </>
  );
}

export default LoginDropdown;
