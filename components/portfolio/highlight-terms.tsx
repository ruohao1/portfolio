export function highlightTerms(text: string, terms: string[]) {
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "g");

  return text.split(pattern).map((part) =>
    terms.includes(part) ? (
      <strong className="text-foreground" key={`${part}-${text}`}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
