import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { format } from 'date-fns';

interface Post {
  id: string;
  title: string;
  created_at: string;
  author: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <Link href={`/blog/${post.id}`} className="block hover:text-blue-600">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <div className="text-gray-600">
                <span>{format(new Date(post.created_at), 'MMMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}