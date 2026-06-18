// Update these with real contact info
export const PHONE = "+918073374778";
export const WHATSAPP = "918073374778"; // country code + number, no '+'
export const EMAIL = "nextgenmantrika@gmail.com";
export const BUSINESS_HOURS = "Mon – Sat · 9:00 AM – 7:00 PM";

export const whatsappLink = (
  msg = "Hello NextGenMantrika, I am interested in your services.",
) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${PHONE}`;
