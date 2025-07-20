import React, { useState } from 'react';
import { useRouter } from 'next/router'; // for Next.js
import LoadingOverlay from './LoadingOverlay'; // ✅ import correctly

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // show video

    // fake login delay to show video
    setTimeout(() => {
      setLoading(false); // hide video (optional)
      router.push('/dashboard'); // redirect
    }, 3500); // adjust this to match video duration
  };

  return (
    <div className="relative">
      {loading && <LoadingOverlay />}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
}
