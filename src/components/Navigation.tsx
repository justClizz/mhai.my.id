import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

export default function Navigation() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link href="/blog" className="text-gray-900 hover:text-gray-600">
              Blog
            </Link>
            <Link href="/blog/new" className="text-gray-900 hover:text-gray-600">
              New Post
            </Link>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}