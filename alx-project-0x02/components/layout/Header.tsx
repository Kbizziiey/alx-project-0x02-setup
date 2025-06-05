import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const linkStyle = (path: string) =>
    `px-4 py-2 hover:text-blue-500 ${
      router.pathname === path ? 'font-bold text-blue-600 underline' : ''
    }`;

  return (
    <header className="bg-red-300 p-4 shadow-md mb-6">
      <nav className="flex justify-center gap-6">
        <Link href="/home" className={linkStyle('/home')}>Home</Link>
        <Link href="/about" className={linkStyle('/about')}>About</Link>
        <Link href="/posts" className={linkStyle('/posts')}>Posts</Link>
        <Link href="/users" className={linkStyle('/users')}>Users</Link>
      </nav>
    </header>
  );
};

export default Header;
