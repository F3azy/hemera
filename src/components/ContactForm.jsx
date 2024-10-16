import React from "react";
import ContactFormInput from "./ContactFormInput";
import useContactForm from "../hooks/useContactForm";

const ContactForm = () => {
  const { form, isLoading, isSubmitDisabled, handleChange, handleSubmit } =
    useContactForm();

  return (
    <form className="w-full flex flex-col gap-y-5 items-end" onSubmit={handleSubmit}>
      <ContactFormInput
        placeholder="Imie"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <ContactFormInput
        placeholder="Numer Telefonu"
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />
      <ContactFormInput
        placeholder="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        placeholder="Wiadomość"
        name="message"
        value={form.message}
        onChange={handleChange}
        className="w-full 
        h-28
        bg-transparent border-b-2 
      border-brand-primary outline-none 
      placeholder:text-white-darker
      placeholder:px-1
      resize-none
      "
      />
      <button
        type="submit"
        className="bg-brand-primary 
        hover:bg-brand-darker
        w-min 
        py-2 px-3 
        text-dark-base 
        font-bold"
      >
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
