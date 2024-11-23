'use client';
import React from 'react';
import { PostCard } from '@/components/post-card';
import { Header } from '@/components/header';
import { DUMMY_POSTS } from '@/lib/dummyData';

function getPosts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  // Return dummy data immediately if no API URL
  if (!apiUrl) {
    console.log('No API URL found, using dummy data');
    return Promise.resolve(DUMMY_POSTS);
  }

  return new Promise((resolve) => {
    // Add timeout to handle cases where server is down
    const timeoutDuration = 5000; // 5 seconds
    const timeout = setTimeout(() => {
      console.log('Request timed out, using dummy data');
      resolve(DUMMY_POSTS);
    }, timeoutDuration);

    fetch(`${apiUrl}/posts`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      clearTimeout(timeout);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      if (data && data.length > 0) {
        resolve(data);
      } else {
        console.log('No data received, using dummy data');
        resolve(DUMMY_POSTS);
      }
    })
    .catch((error) => {
      clearTimeout(timeout);
      console.log('Error fetching data:', error.message);
      resolve(DUMMY_POSTS);
    });
  });
}

export default function Home() {
  const [posts, setPosts] = React.useState(DUMMY_POSTS);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then((data: any) => {
        setPosts(data);
        setError(null);
      })
      .catch(error => {
        console.error('Error in Home component:', error);
        setError('Failed to load posts');
        setPosts(DUMMY_POSTS);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-primary text-center">
          Latest Blog Posts
        </h1>
        
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}