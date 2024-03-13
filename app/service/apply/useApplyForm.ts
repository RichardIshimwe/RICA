import { useState } from "react";

import { useForm } from "react-hook-form";


interface measurementType {
  height: number;
  weight: number;
}

export const useApplyForm = () => {
  const methods = useForm<any>({
    defaultValues: {
    },
  });
  const [measurement, setMeasurement] = useState<measurementType>();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    control,
  } = methods;

  const handleSubmit = onSubmit((data) => {
  console.log(data);
    setError("");
  });

  return {
    methods,
    register,
    handleSubmit,
    errors,
    setError,
    error,
    control,
    measurement,
    setMeasurement,
  };
};
