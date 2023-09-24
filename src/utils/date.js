export function formatExpliciteDate(date = new Date(), locale = "fr-FR") {
  return date
    .toLocaleDateString(locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
