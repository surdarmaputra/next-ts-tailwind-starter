import ColorModeToggle from 'components/atoms/ColorModeToggle';
import Link from 'next/link';
import { ColorModeContext } from 'providers/ColorModeProvider';
import { useContext } from 'react';

export default function Header() {
  const { dark, toggleColorMode } = useContext(ColorModeContext);

  return (
    <header className="container mx-auto flex items-center justify-between p-6">
      <Link href="/">
        <a className="no-underline">
          <span className="text-primary-500">Next</span>{' '}
          <span className="dark:text-dark-100">Starter</span>
        </a>
      </Link>
      <ColorModeToggle
        className="ml-4"
        dark={dark}
        onChange={toggleColorMode}
      />
    </header>
  );
}
