import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

function App() {
  const [isData, setData] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const successMessages = [
    "Access granted",
    "Congrats! You survived childhood 🎉",
    "Verification successful",
    "Age verified successfully",
    "Welcome",
  ];
  const errorMessages = [
    "Access denyied",
    "Go do your homework 📚",
    "Come back when you're older, kiddo 😅",
    "Age check failed. Childhood detected 🚫",
    "Not today, junior 👶",
  ];
  const randomMessages1 = () => {
    return successMessages[Math.floor(Math.random() * successMessages.length)];
  };
  const randomMessages2 = () => {
    return errorMessages[Math.floor(Math.random() * errorMessages.length)];
  };

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setData(data);
    const age = Number(data.age);
    console.log(age);
    const passwordConfirmed = prompt(
      `Enter your password again to confirm it `
    );
    if (passwordConfirmed === null) {
      toast.error("Password confirmation cancelled.");
      return;
    }
    if (passwordConfirmed == data.password) {
      toast.success("Password confirmed!");
    } else {
      toast.error("Wrong password, try again.");
    }

    if (age >= 18) {
      toast.success(randomMessages1);
    } else {
      toast.error(randomMessages2);
    }
    reset();
  };

  return (
    <div className="flex justify-center items-center pt-40 gap-40">
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name" className="flex flex-col ">
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            className="border text-center px-2 rounded"
            {...register("name", { required: "Name cannot be empty" })}
          />
        </label>
        <label htmlFor="phone" className="flex flex-col ">
          Phone number:
          <input
            type="tel"
            placeholder="Enter your phone number"
            id="phone"
            className="border text-center px-2 rounded"
            {...register("phone")}
          />
        </label>
        <label htmlFor="password" className="flex flex-col ">
          Password
          <input
            type="password"
            placeholder="Enter your password"
            className="border text-center px-2 rounded"
            id="password"
            {...register("password", { required: "Password cannot be empty!" })}
          />
        </label>
        <label htmlFor="age" className="flex flex-col ">
          Age:
          <input
            type="number"
            placeholder="Enter your age"
            id="age"
            className="border text-center px-2 rounded"
            {...register("age", { required: "Age cannot be empty" })}
          />
        </label>
        <button className="cursor-pointer border bg-slate-200 hover:bg-amber-200 hover:shadow-lg hover:border active:bg-slate-500 active:text-white px-4 rounded mt-2">
          {isSubmitting ? "Loading..." : "Submit"}{" "}
        </button>
      </form>
      {isData && (
        <div>
          <h1>Name:{isData.name} </h1>
          <h1>Age:{isData.age} </h1>
          <h1>Phone:{isData.phone} </h1>
          <h1>Password:{isData.password} </h1>
        </div>
      )}
    </div>
  );
}

export default App;
