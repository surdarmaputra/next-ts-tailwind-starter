import { useContext } from 'react';
import Link from 'next/link';

import ColorModeToggle from 'components/atoms/ColorModeToggle';
import { ColorModeContext } from 'providers/ColorModeProvider';

export default function Header() {
  const { dark, toggleColorMode } = useContext(ColorModeContext);

  return (
    <header className="container mx-auto flex items-center justify-between p-6">
      <Link className="no-underline" href="/">
        <span className="text-primary-500">Next</span>{' '}
        <span className="dark:text-dark-100">Starter</span>
      </Link>
      <ColorModeToggle
        className="ml-4"
        dark={dark}
        onChange={toggleColorMode}
      />
    </header>
  );
}
