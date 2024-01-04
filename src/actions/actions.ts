type FormDataType = {
  name: string;
  email: string;
  pno?: string;
  message: string;
  subject: string;
};

export async function addData(formData: FormData) {
  "use server";

  const rawFormData = {
    name: formData.get("name"),
  };

  console.log(rawFormData);
}
