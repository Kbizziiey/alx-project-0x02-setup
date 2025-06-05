import { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { PostInput } from '@/interfaces';
import Header from '@/components/layout/Header';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostInput[]>([
    { title: 'Initial Post', content: 'Welcome to the homepage!' },
  ]);

  const handleAddPost = (post: PostInput) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="p-6">
      <Header />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setModalOpen(true)}
        >
          Add Post
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddPost}
      />
    </div>
  );
}
