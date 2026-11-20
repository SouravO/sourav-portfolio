import { profile, journey } from './portfolio'

// The scenes are illustrated interpretations, not photographs of historical events.
export const lifeChapters = [
  { id: 'college', number: '01', era: '2018–2022', title: 'Where it started.', label: 'The college years', caption: 'A notebook full of questions.', summary: 'Computer science, curiosity, and the first building blocks.', story: profile.education + ' ' + journey[1].text, tags: ['Computer science', 'Angular', 'Node.js', 'MongoDB'], alt: 'Comic illustration of Sourav in a teal hoodie at a college computer lab', x: 17, y: 9, rotation: -5 },
  { id: 'media', number: '02', era: 'Electronic media', title: 'Behind the broadcast.', label: 'The media chapter', caption: 'A different kind of live environment.', summary: 'Software engineering in the world of electronic media.', story: 'A software engineering chapter in electronic media and broadcasting, connecting the foundations of full-stack development with a live media environment.', tags: ['Software engineering', 'Electronic media', 'Full-stack development'], alt: 'Comic illustration of Sourav in a charcoal shirt at a broadcast console', x: 80, y: 8, rotation: 5 },
  { id: 'studio', number: '03', era: 'Day One Venture Studio', title: 'Thinking beyond code.', label: 'The studio chapter', caption: 'From a product idea to a working system.', summary: 'Technical leadership, product planning, and architecture.', story: journey[2].text + ' Day One CRM was built and used internally, connecting founder operations, tasks, approvals, and progress tracking.', tags: ['Technical leadership', 'Architecture', 'Product planning'], alt: 'Comic illustration of Sourav in a cream overshirt sketching at a studio whiteboard', x: 18, y: 57, rotation: 4 },
  { id: 'frontier', number: '04', era: 'Current exploration', title: 'Still asking “what if?”', label: 'The next chapter', caption: 'Same curiosity. New tools.', summary: 'Products, coding agents, and the next thing to build.', story: journey[3].text + ' These are ongoing experiments, guided by human review and practical product needs.', tags: ['React', 'Next.js', 'Coding agents', 'Experimentation'], alt: 'Comic illustration of Sourav wearing clear glasses and experimenting at his laptop', x: 81, y: 56, rotation: -4 },
]

export const personalClues = [
  { id: 'gaming', title: 'One more round.', label: 'Gaming', caption: 'The player', story: 'Another side of Sourav: gaming. A little competition, a little escape, and a different kind of challenge.', alt: 'Comic illustration of Sourav smiling with a game controller', x: 42, y: 77, rotation: -7 },
  { id: 'travel', title: 'Take the scenic route.', label: 'Travel', caption: 'The explorer', story: 'Another side of Sourav: travel. This imagined hillside scene represents an interest in exploring, rather than a particular trip or destination.', alt: 'Comic illustration of Sourav with a backpack at an imagined hillside lookout', x: 58, y: 77, rotation: 6 },
  { id: 'music', title: 'Press play. Tune out.', label: 'Music', caption: 'The listener', story: 'Another side of Sourav: music. Headphones on, a little space to slow down, and a soundtrack away from the screen.', alt: 'Comic illustration of Sourav enjoying music with headphones', x: 49, y: 3, rotation: -5 },
]

export const boardProfile = {
  id: 'sourav', title: 'Sourav, in every chapter.', label: 'The connecting thread', era: 'India · ' + profile.experience,
  caption: 'A few chapters. Still unfolding.', summary: 'Engineer. Builder. A few other things, too.', story: profile.bio,
  tags: ['Full-stack engineer', 'Technical lead', 'Product builder'], alt: 'Comic portrait of Sourav with wavy hair, a moustache, and a red shirt',
  image: '/illustrations/cinema/portrait.webp', x: 49, y: 25, rotation: -2,
}
