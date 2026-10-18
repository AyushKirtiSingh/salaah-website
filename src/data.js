import { Wrench, Mic, Users, MessagesSquare } from 'lucide-react'
const img = (f) => `${import.meta.env.BASE_URL}images/${f}`
export const LINKS = {
  instagram: 'https://www.instagram.com/salaah_abesec/',
  linkedin: 'https://www.linkedin.com/company/salaah-the-mentor-community/',
  email: 'mailto:salaah@abes.ac.in',
}
export const NAV = [
  ['home', 'Home'], ['about', 'About'], ['initiatives', 'Initiatives'],
  ['events', 'Events'], ['team', 'Our Team'], ['contact', 'Contact'],
]
export const VALUES = [
  ['We Aim', 'Connect students with alumni who can share career guidance, professional insights, and valuable experiences.'],
  ['We Grow', 'Encourage continuous learning through training opportunities, workshops, and mentoring.'],
  ['We Win', 'Believe in consistent self-improvement, dedication, and collective growth.'],
]
export const INITIATIVES = [
  { icon: Wrench, title: 'Skill Development Bootcamps', text: 'Build practical, industry-relevant skills through focused learning experiences and hands-on activities.' },
  { icon: Mic, title: 'Tech & Non-Tech Podcasts', text: 'Discover career journeys, professional challenges, and industry perspectives through meaningful conversations.' },
  { icon: Users, title: 'Training & Mentoring Sessions', text: 'Learn from experienced individuals and gain guidance to make more informed career decisions.' },
  { icon: MessagesSquare, title: 'Mock Interviews', text: 'Practise interview scenarios, strengthen your communication, and build confidence before the real opportunity arrives.' },
]
export const MEET = {
  src: img('meet-and-greet.png'),
  alt: 'Salaah Meet & Greet poster featuring Mr. Shivam Sharma, Technical Lead at IBM, USA, on 15 April 2026 at 4:30 PM, Auditorium, Raman Block',
}
const cb = (file, title) => ({ title, src: img(file), alt: `Career Blueprint poster on ${title}` })
export const CAREERS = [
  cb('career-data-analyst.png', 'Data Analyst'),
  cb('career-growth-hacker.png', 'Growth Hacker'),
  cb('career-vlsi-engineer.png', 'VLSI Design Engineer'),
  cb('career-cyber-security.png', 'Cyber Security Analyst'),
  cb('career-cloud-engineer.png', 'Cloud Engineer'),
]
