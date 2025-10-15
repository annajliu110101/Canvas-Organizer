
type ColorMap = Record<string, string>; // e.g., { "course_68251": "#1f77b4", "user_223080": "#dd2c00" }

export function iconEl(iconClass: string) {
  const i = document.createElement("i");
  i.className = iconClass;        // e.g., "icon-assignment"
  i.setAttribute("aria-hidden", "true");
  return i;
}

export function getBrandVars() {
  const r = getComputedStyle(document.documentElement);
  const read = (k: string) => r.getPropertyValue(k)?.trim() || undefined;
  return {
    primary: read("--ic-brand-primary"),
    secondary: read("--ic-brand-secondary"),
    accent: read("--ic-brand-button--primary-bgd"),
    text: read("--ic-brand-font-color-dark"),
    link: read("--ic-link-color")
  };
}


export async function getUserColors(): Promise<ColorMap> {
  const res = await fetch("/api/v1/users/self/colors", {
    credentials: "include",
    headers: { "Accept": "application/json" },
  });
  if (!res.ok) return {};
  // response shape: { custom_colors: { "course_123":"#xxxxxx", ... } }
  const json = await res.json();
  return json?.custom_colors ?? {};
}
