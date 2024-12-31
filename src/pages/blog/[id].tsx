import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import BlogPost from '@/components/BlogPost';

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  author: string;
}

export default function BlogPostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      async function fetchPost() {
        const { data } = await supabase
          .from('posts')
          .select('*')
          .eq('id', id)
          .single();
        
        if (data) setPost(data);
      }

      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return <BlogPost {...post} />;
}