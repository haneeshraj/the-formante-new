"use server";

import prisma from "@/utils/prisma";
import { toast } from "sonner";

type FormDataType = {
  name: string;
  email: string;
  message: string;
  subject: string;
  pno?: string;
};

export const addDoc = async (formData: FormData) => {
  try {
    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message") ||
      !formData.get("subject")
    ) {
      return {
        error: "Please fill all the fields",
      };
    }

    var hasAlphabetRegex = /[a-zA-Z]/g;

    if (
      formData.get("pno") &&
      hasAlphabetRegex.test(formData.get("pno") as string)
    ) {
      return {
        error: "Please enter a valid phone number",
      };
    }

    var emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (
      formData.get("email") &&
      !emailRegex.test(formData.get("email") as string)
    ) {
      return {
        error: "Please enter a valid email",
      };
    }

    const rawFormData: FormDataType = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      subject: formData.get("subject") as string,
      pno: formData.get("pno") as string,
    };

    await prisma.contact.create({
      data: {
        name: rawFormData.name,
        email: rawFormData.email,
        message: rawFormData.message,
        subject: rawFormData.subject,
        phone: rawFormData.pno,
      },
    });

    return {
      success: true,
      message: "Your message has been received. I will get back to you soon!",
    };
  } catch (error) {
    return {
      error: (error as Error).message,
    };
  }
};
