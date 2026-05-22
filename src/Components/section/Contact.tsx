import React from "react";
import Container from "../UI/Container";
import Heading from "../UI/Heading";
import ContactInfo from "../UI/ContactInfo";
import SendEmail from "../UI/SendEmail";
import { cn } from "../../lib/utils";

interface ContactProps {
  theme?: string;
}

const Contact = ({ theme }: ContactProps) => {
  return (
    <Container id={"contacts"} className="my-20">
      <Heading text={"Contact"}></Heading>
      <div className={cn(
        "p-5 md:p-10 mt-5 flex flex-col-reverse lg:flex-row items-start gap-10 border-2 shadow-lg rounded-4xl",
        theme === "light"
          ? "border-slate-200/80"
          : "border-gray-600/50"
      )}>
        <ContactInfo></ContactInfo>
        <SendEmail></SendEmail>
      </div>
    </Container>
  );
};

export default Contact;
