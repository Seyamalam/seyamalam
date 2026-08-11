type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        className="brand-mark-path"
        d="M47 9H25.5C16.4 9 10 14.2 10 22.2c0 7.5 5.7 12.3 14.5 12.3h14.2c3.8 0 6.3 1.8 6.3 5.2 0 3.5-2.7 5.3-6.6 5.3H17"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="square"
      />
      <path className="brand-mark-cut" d="M46.5 4 17.5 60" fill="none" stroke="var(--mark-cut, #eef0ed)" strokeWidth="8" />
      <path className="brand-mark-signal" d="M39 18.5 25 45.5" fill="none" stroke="var(--signal, #ff552e)" strokeWidth="4" />
    </svg>
  );
}
