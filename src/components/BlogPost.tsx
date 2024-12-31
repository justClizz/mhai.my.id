import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  title: string;
  content: string;
  created_at: string;
  author: string;
}

export default function BlogPost({ title, content, created_at, author }: BlogPostProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1>{title}</h1>
      <div className="text-gray-600">
        <span>{format(new Date(created_at), 'MMMM d, yyyy')}</span>
        <span className="mx-2">•</span>
        <span>{author}</span>
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}