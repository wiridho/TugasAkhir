export const FormatMataUang = (number) => {
  // return number.toLocaleString("en-US", {
  //   minimumFractionDigits: 3,
  // });

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
