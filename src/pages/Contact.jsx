import { useState } from "react";
import Container from "../components/ui/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { COLORS } from "../constants/constants";
import { createMessage } from "../functions/api";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    const res = await createMessage({
      name,
      email,
      message,
    });

    setMessage(res.message);
  };

  return (
    <Container>
      <section className="flex flex-col gap-12 items-center justify-center h-full">
        <h2>Kontakta oss</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full max-w-[400px] border-current border-black"
        >
          <input
            className="py-4 px-8 rounded-3xl font-semibold "
            type="name"
            placeholder="namn"
            {...register("name")}
          />
          <p className={COLORS.TEXT_ERROR}>{errors.name?.message}</p>
          <input
            className="py-4 px-8 rounded-3xl font-semibold "
            type="email"
            placeholder="email"
            {...register("email")}
          />
          <p className={COLORS.TEXT_ERROR}>{errors.email?.message}</p>
          <textarea
            className="py-4 px-8 rounded-3xl font-semibold "
            placeholder="Skriv ett meddelande.."
            {...register("message")}
            rows="10"
            cols="30"
          />
          <p className={COLORS.TEXT_ERROR}>{errors.message?.message}</p>
          <button
            className="rounded-3xl py-4 px-8 bg-primary font-semibold"
            type="submit"
          >
            Skicka
          </button>
          <p className=" text-green-700">{message}</p>
        </form>
      </section>
    </Container>
  );
};

export default Contact;
