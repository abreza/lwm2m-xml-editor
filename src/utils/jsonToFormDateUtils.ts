const jsonToFormData = (object: any) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
};

export default jsonToFormData;
