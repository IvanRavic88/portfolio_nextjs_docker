type socialLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export default function LinkAnimated({
  href,
  children,
  external = false,
}: socialLinkProps) {
  return (
    <li className="z-99 mb-2 sm:text-left">
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="text-link-animation"
      >
        {children}
      </a>
    </li>
  );
}
