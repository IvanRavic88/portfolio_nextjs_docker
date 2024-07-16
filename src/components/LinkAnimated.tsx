type socialLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function LinkAnimated({ href, children }: socialLinkProps) {
  return (
    <li className="z-99 mb-2 sm:text-left">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link-animation"
      >
        {children}
      </a>
    </li>
  );
}
