"use server";

import prisma from "@/utils/prisma";

export const addDoc = async (formData: FormData) => {
  try {
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      subject: formData.get("subject"),
      pno: formData.get("pno"),
    };

    await prisma.contact.create({
      data: {
        name: rawFormData.name as string,
        email: rawFormData.email as string,
        message: rawFormData.message as string,
        subject: rawFormData.subject as string,
        phone: rawFormData.pno as string,
      },
    });

    console.log("Form Submitted");
  } catch (error) {
    console.log(error);
  }
};
