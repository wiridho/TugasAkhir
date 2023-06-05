export const isData = (res) => {
  const { data } = res?.data;
  return data;
};

export const isMessage = (res) => {
  const { message } = res?.data;
  return message;
};
