import Container from "../components/ui/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { COLORS } from "../constants/constants";
import { createUser } from "../functions/api";

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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    createUser({
      email,
      password,
    });
  };

  return (
    <Container>
      <section className="flex flex-col gap-12 items-center justify-center h-full">
        <h2>Skapa användare</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full max-w-[400px] border-current border-black"
        >
          <input
            className="py-4 px-8 rounded-3xl font-semibold "
            type="email"
            placeholder="email"
            {...register("email")}
          />
          <p className={COLORS.TEXT_ERROR}>{errors.email?.message}</p>
          <input
            className="py-4 px-8 rounded-3xl font-semibold "
            type="password"
            placeholder="lösenord"
            {...register("password")}
          />
          <p className={COLORS.TEXT_ERROR}>{errors.password?.message}</p>
          <input
            className="py-4 px-8 rounded-3xl font-semibold "
            type="password"
            placeholder="upprepa lösenord"
            {...register("passwordConfirmation")}
          />
          <p className={COLORS.TEXT_ERROR}>
            {errors.passwordConfirmation?.message}
          </p>
          <button
            className="rounded-3xl py-4 px-8 bg-primary font-semibold"
            type="submit"
          >
            Skapa användare
          </button>
        </form>
      </section>
    </Container>
  );
};

export default Register;
