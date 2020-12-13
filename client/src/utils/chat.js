function ISOtoLongDate(isoString, locale = "en-US") {
  const options = { timeStyle: "medium" };
  const date = new Date(isoString);
  const longDate = new Intl.DateTimeFormat(locale, options).format(date);
  return longDate;
}

const getIsoString = () => new Date().toISOString();

export {
  getIsoString,
  ISOtoLongDate
}