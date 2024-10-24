import React from "react";
import ContactFormInput from "./ContactFormInput";
import useContactForm from "../hooks/useContactForm";
import Spinner from "./Spinner";

const ContactForm = () => {
  const { form, isLoading, isSubmitDisabled, handleChange, handleSubmit } =
    useContactForm();

  return (
    <form
      className="w-full flex flex-col gap-y-5 items-end"
      onSubmit={handleSubmit}
    >
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
        bg-dark-200
        border-b-2 
      border-brand-primary outline-none 
      placeholder:text-white-darker
        placeholder:px-1
        resize-none
      "
      />
      <button
        disabled={isSubmitDisabled}
        type="submit"
        className={`
        ${
          isSubmitDisabled
            ? "hover:cursor-not-allowed bg-brand-darker"
            : "hover:cursor-pointer hover:bg-brand-darker bg-brand-primary"
        }

        w-min 
        py-2 px-3 
        text-dark-base 
        font-bold
        flex
        items-center
        gap-x-2`}
      >
        {isLoading ? (
          <>
            <Spinner /> "Wysyłam..."
          </>
        ) : (
          "Wyślij"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
