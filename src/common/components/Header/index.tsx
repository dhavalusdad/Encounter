import { type PropsWithChildren } from 'react';

export const Header = ({ children }: PropsWithChildren) => (
  <header className="relative">{children}</header>
);

export default Header;
