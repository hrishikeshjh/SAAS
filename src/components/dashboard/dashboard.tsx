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
  LayoutGrid
} from 'lucide-react';
import { DashboardCard } from './dashboard-card';
import { DashboardSidebar } from './sidebar';
import { useState } from 'react';

const modules = [
  {
    title: 'Smart Project Partner Matcher',
    description: 'Match with students by skills, courses, or interests.',
    icon: <Users className="h-8 w-8" />,
    actionText: 'Find Partners',
    category: 'Collaboration',
  },
  {
    title: 'Campus Community',
    description: 'Reddit-style threaded discussion boards and interest-based channels.',
    icon: <MessageSquare className="h-8 w-8" />,
    actionText: 'Join Discussion',
    category: 'Community',
  },
  {
    title: 'Study Meetup Organizer',
    description: 'Create and join group study sessions with location/time suggestions.',
    icon: <Calendar className="h-8 w-8" />,
    actionText: 'Schedule Meetup',
    category: 'Academics',
  },
  {
    title: '1-on-1 Doubt Clearing',
    description: 'Request, schedule or instantly join mentor sessions with teachers.',
    icon: <UserCheck className="h-8 w-8" />,
    actionText: 'Request Session',
    category: 'Academics',
  },
  {
    title: 'Syllabus Management Panel',
    description: 'Visual subject progress with timelines and resources.',
    icon: <BookOpen className="h-8 w-8" />,
    actionText: 'View Syllabus',
    category: 'Academics',
  },
  {
    title: 'Weekly Batch Health Reports',
    description: 'Analytics for faculty showing which batch needs a re-class.',
    icon: <BarChart2 className="h-8 w-8" />,
    actionText: 'View Reports',
    category: 'Academics',
  },
  {
    title: 'Note Sharing & Info Hub',
    description: 'Markdown-enabled student-shared notes and live collaboration docs.',
    icon: <FileText className="h-8 w-8" />,
    actionText: 'Share Notes',
    category: 'Academics',
  },
  {
    title: 'Event Manager',
    description: 'Organize campus fests, talks, and assign rooms conflict-free.',
    icon: <Building className="h-8 w-8" />,
    actionText: 'Manage Events',
    category: 'Campus Life',
  },
  {
    title: 'Complaint & Announcement Tracker',
    description: 'Submit issues anonymously and track resolution status.',
    icon: <AlertOctagon className="h-8 w-8" />,
    actionText: 'Track Issues',
    category: 'Campus Life',
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'Answers campus queries, finds events, gives deadlines.',
    icon: <Bot className="h-8 w-8" />,
    actionText: 'Chat Now',
    category: 'Productivity',
  },
  {
    title: 'Personal Dashboard & Leaderboard',
    description: 'Tracks internships, hackathons, GitHub projects with gamification.',
    icon: <Trophy className="h-8 w-8" />,
    actionText: 'View Dashboard',
    category: 'Career',
  },
  {
    title: 'Trending Skill Class Requests',
    description: 'Suggest & vote on workshops like GenAI, Web3, Rust.',
    icon: <Lightbulb className="h-8 w-8" />,
    actionText: 'Vote for Skills',
    category: 'Career',
  },
  {
    title: 'Discussion Room Manager',
    description: 'Create or auto-join temporary project or subject-specific rooms.',
    icon: <MessageCircle className="h-8 w-8" />,
    actionText: 'Join Room',
    category: 'Collaboration',
  },
  {
    title: 'Freelance Finder/Poster',
    description: 'Find or post micro-jobs (e.g. design, coding) in a student economy model.',
    icon: <Briefcase className="h-8 w-8" />,
    actionText: 'Find Gigs',
    category: 'Career',
  },
  {
    title: 'Smart CV Builder',
    description: 'Auto-fetch user data and build resumes with LinkedIn/GitHub support.',
    icon: <FileJson className="h-8 w-8" />,
    actionText: 'Build CV',
    category: 'Career',
  },
  {
    title: 'Alumni Connect Zone',
    description: 'Message alumni, browse by domain/company, get mentorship.',
    icon: <Users2 className="h-8 w-8" />,
    actionText: 'Connect Alumni',
    category: 'Career',
  },
  {
    title: 'Live Class Page',
    description: 'Attend & host classes, with shared notes & video integration.',
    icon: <Video className="h-8 w-8" />,
    actionText: 'Join Class',
    category: 'Academics',
  },
  {
    title: 'Interest-Based Feed',
    description: 'Personalized scroll feed showing content from subscribed topics.',
    icon: <Rss className="h-8 w-8" />,
    actionText: 'View Feed',
    category: 'Community',
  },
];

const categories = [
  { name: 'All Modules', icon: <LayoutGrid className="h-5 w-5" /> },
  { name: 'Academics', icon: <BookOpen className="h-5 w-5" /> },
  { name: 'Career', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Collaboration', icon: <Users className="h-5 w-5" /> },
  { name: 'Community', icon: <MessageSquare className="h-5 w-5" /> },
  { name: 'Campus Life', icon: <Building className="h-5 w-5" /> },
  { name: 'Productivity', icon: <Bot className="h-5 w-5" /> },
];

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('All Modules');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModules = modules
    .filter(
      (module) => activeCategory === 'All Modules' || module.category === activeCategory
    )
    .filter((module) =>
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase())
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
              CampusX Feed
            </h1>
            <p className="mt-2 text-muted-foreground">{`Showing ${filteredModules.length} modules in "${activeCategory}"`}</p>
          </header>

          <div className="flex flex-col gap-8">
            {filteredModules.map((module, index) => (
              <DashboardCard
                key={module.title}
                title={module.title}
                description={module.description}
                icon={module.icon}
                actionText={module.actionText}
                animationDelay={`${index * 0.05 + 0.2}s`}
              />
            ))}
          </div>
          {filteredModules.length === 0 && (
             <div className="text-center py-16 col-span-full animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <p className="text-muted-foreground">No modules found. Try a different search term or category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
