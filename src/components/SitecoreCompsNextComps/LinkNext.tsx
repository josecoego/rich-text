import { ReactNode } from "react";

const LinkNext = ({
  className,
  href,
  children,
  ...rest
}: {
  className: string;
  href: string;
  children: ReactNode;
}) => {
  return (
    <a {...rest} href={href} className={className}>
      IT IS A LINK NEXT: {children}
    </a>
  );
};

export default LinkNext;
