"use server";

type FormDataType = {
  name: string;
  email: string;
  pno?: string;
  message: string;
  subject: string;
};

export async function addData(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
  };
  //  formante-contact@formante-contact.iam.gserviceaccount.com
  console.log(rawFormData);
}
