const LOGO_BASE = "/images/logo";
const FALLBACK = `${LOGO_BASE}/javascript.svg`;
export const getLogoSrc = (name) => {
    const src = name.trim();
    return src ? `${LOGO_BASE}/${name}.svg` : FALLBACK;
}