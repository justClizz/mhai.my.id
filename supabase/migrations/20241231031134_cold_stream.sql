/*
  # Create posts table for blog

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `created_at` (timestamp)
      - `author` (text)

  2. Security
    - Enable RLS on `posts` table
    - Add policies for authenticated users to:
      - Read all posts
      - Create their own posts
      - Update their own posts
      - Delete their own posts
*/

CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  author text NOT NULL
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read posts
CREATE POLICY "Anyone can read posts"
  ON posts
  FOR SELECT
  USING (true);

-- Allow authenticated users to create posts
CREATE POLICY "Authenticated users can create posts"
  ON posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow users to update their own posts
CREATE POLICY "Users can update own posts"
  ON posts
  FOR UPDATE
  TO authenticated
  USING (author = auth.email());

-- Allow users to delete their own posts
CREATE POLICY "Users can delete own posts"
  ON posts
  FOR DELETE
  TO authenticated
  USING (author = auth.email());