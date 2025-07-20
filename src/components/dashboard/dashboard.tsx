'use client';

import {
  Users,
  MessageSquare,
  Calendar,
  UserCheck,
  BookOpen,
  BarChart2,
  FileText,
  Building,
  AlertOctagon,
  Bot,
  Trophy,
  Lightbulb,
  MessageCircle,
  Briefcase,
  FileJson,
  Users2,
  Video,
  Rss,
  LayoutGrid,
} from 'lucide-react';
import { DashboardSidebar } from './sidebar';
import { useState } from 'react';
import CreatePost from './create-post';
import PostCard from './post-card';

const categories = [
  { name: 'All Modules', icon: <LayoutGrid className="h-5 w-5" /> },
  { name: 'Academics', icon: <BookOpen className="h-5 w-5" /> },
  { name: 'Career', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Collaboration', icon: <Users className="h-5 w-5" /> },
  { name: 'Community', icon: <MessageSquare className="h-5 w-5" /> },
  { name: 'Campus Life', icon: <Building className="h-5 w-5" /> },
  { name: 'Productivity', icon: <Bot className="h-5 w-5" /> },
];

const posts = [
  {
    id: 1,
    author: 'Aritra Bose',
    username: 'the_aritrabose',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    time: '2h ago',
    content: 'Just wrapped up my session on Generative AI at the annual tech fest! The energy was incredible. Huge thanks to everyone who attended and shared their brilliant questions. ✨ #GenAI #TechFest #CampusX',
    imageUrl: 'https://placehold.co/600x400.png',
    imageDataAiHint: 'tech conference',
    likes: 128,
    comments: 12,
  },
  {
    id: 2,
    author: 'Jane Doe',
    username: 'janedoe_designs',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    time: '5h ago',
    content: 'Found the perfect spot to cram for mid-terms. The library\'s new quiet zone is a game-changer! Wish me luck! 📚☕ #StudyGrind #MidTerms #CampusLife',
    imageUrl: 'https://placehold.co/600x400.png',
    imageDataAiHint: 'library study',
    likes: 74,
    comments: 8,
  },
    {
    id: 3,
    author: 'CampusX Official',
    username: 'campusx_updates',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'brand logo',
    time: '1d ago',
    content: '📢 Announcement: The deadline for project submissions for the "Innovate for Future" hackathon has been extended to this Friday, 11:59 PM. Don\'t miss out!',
    likes: 210,
    comments: 25,
  },
];

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('All Modules');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering logic can be updated later to filter posts
  const filteredPosts = posts.filter((post) =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <DashboardSidebar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 md:ml-64 transition-all duration-300">
        <div className="max-w-2xl mx-auto">
          <header className="mb-8 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl font-black tracking-tighter text-foreground" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>
              Home Feed
            </h1>
            <p className="mt-2 text-muted-foreground">See what's happening on campus</p>
          </header>

          <div className="flex flex-col gap-8">
            <CreatePost animationDelay="0.2s" />
            {filteredPosts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                animationDelay={`${index * 0.1 + 0.3}s`}
              />
            ))}
             {filteredPosts.length === 0 && (
             <div className="text-center py-16 col-span-full animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <p className="text-muted-foreground">No posts found. Try a different search term or start a new conversation!</p>
            </div>
          )}
          </div>
        </div>
      </main>
    </div>
  );
}
