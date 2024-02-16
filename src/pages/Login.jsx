import { useState } from "react";
import ShowPass from "../assets/show-password.svg";
import { useContext } from "react";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { COLORS } from "../constants/constants";
import { loginUser } from "../functions/api";
import { useNavigate } from "react-router-dom";
import { savetoLocalStorage } from "../functions/functions";
import { CartContext } from "../context/cartContext";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required(),
  password: yup
    .string()
    .min(6, "Password must be between 6 and 12 characters long")
    .max(12, "Password must be between 6 and 12 characters long")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { cartItems } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;

    if (!password) {
      setError("passwordConfirmation");
    }
    const user = await loginUser({
      email,
      password,
    });

    console.log("user", user.message);

    const { token } = user;

    savetoLocalStorage("token", token);

    if (user && cartItems) {
      navigate("/product");
    }

    if (user) {
      navigate("/");
    }
  };
  return (
    <Container>
      <section className="flex flex-col gap-12 items-center justify-center h-full">
        <h2>LOGGA IN</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full max-w-[400px] border-current border-black"
        >
          <input
            className="py-4 px-8 rounded-3xl font-semibold "
            type="text"
            placeholder="email"
            {...register("email")}
          />
          <p className={COLORS.TEXT_ERROR}>{errors.email?.message}</p>
          <div className=" relative">
            <input
              className="py-4 px-8 rounded-3xl font-semibold w-full"
              type={showPassword ? "text" : "password"}
              placeholder="lösenord"
              {...register("password")}
            />
            <img
              src={ShowPass}
              alt=""
              className="absolute top-3 right-3 cursor-pointer"
              onMouseEnter={() => setShowPassword((prev) => !prev)}
              onMouseLeave={() => setShowPassword((prev) => !prev)}
            />
          </div>

          <p className={COLORS.TEXT_ERROR}>{errors.password?.message}</p>

          <button
            className="rounded-3xl py-4 px-8 bg-primary font-semibold"
            type="submit"
          >
            Logga in
          </button>
          <Button to="/auth/register" size="L" style="mt-2">
            Skapa användare
          </Button>
        </form>
      </section>
    </Container>
  );
};

export default Login;
