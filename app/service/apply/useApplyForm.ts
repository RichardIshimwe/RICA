import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';


export const useApplyForm = (form : any) => {
  const methods = useForm<any>({
    defaultValues: {
    },
  });

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    control,
  } = methods;

  const handleSubmit =  onSubmit((data) => {
  const templateParams = {
    message: JSON.stringify(data),
    email: data.emailAddress
 };
 emailjs.send('service_hnktdz2', 'template_al2g30n', templateParams, 'oRDzBy--ZX20-wWEp')
 .then((response) => {
   console.log('SUCCESS!', response.status, response.text);
 }, (error) => {
   console.log('FAILED...', error);
 });
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
  };
};
