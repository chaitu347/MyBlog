import React, { useState } from 'react';
import { Moon, Sun, ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const App= () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks: A Complete Guide",
      excerpt: "Dive deep into React Hooks and learn how they revolutionize state management and side effects in functional components.",
      author: "Chaitanya",
      date: "2025-06-21",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      content: `
        <h2 class="text-2xl font-bold mb-4">What are React Hooks?</h2>
        <p class="mb-4">React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have completely changed how we write React applications.</p>
        
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=300&fit=crop" alt="Code on screen" class="w-full h-64 object-cover rounded-lg mb-6" />
        
        <h3 class="text-xl font-semibold mb-3">Why Use Hooks?</h3>
        <p class="mb-4">Before Hooks, you had to convert function components to class components to use state or lifecycle methods. This often led to:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Complex component hierarchies</li>
          <li>Wrapper hell with higher-order components</li>
          <li>Hard to reuse stateful logic</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Common Hooks</h3>
        <p class="mb-4"><strong>useState:</strong> Manages local state in functional components</p>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <code class="text-sm">
            const [count, setCount] = useState(0);
          </code>
        </div>
        
        <p class="mb-4"><strong>useEffect:</strong> Handles side effects like API calls, subscriptions, or DOM manipulation</p>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <code class="text-sm">
            useEffect(() => {<br/>
            &nbsp;&nbsp;// Side effect logic<br/>
            }, [dependencies]);
          </code>
        </div>
        
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=300&fit=crop" alt="React development" class="w-full h-64 object-cover rounded-lg mb-6" />
        
        <h3 class="text-xl font-semibold mb-3">Best Practices</h3>
        <p class="mb-4">When using React Hooks, keep these best practices in mind:</p>
        <ul class="list-disc list-inside mb-4 space-y-2">
          <li>Always call Hooks at the top level of your React function</li>
          <li>Don't call Hooks inside loops, conditions, or nested functions</li>
          <li>Use the ESLint plugin for Hooks to catch common mistakes</li>
          <li>Custom Hooks should start with "use" prefix</li>
        </ul>
        
        <p class="mb-4">React Hooks have made functional components much more powerful and are now the recommended way to write React components. They provide a more direct API to the React concepts you already know.</p>
      `
    },
    
    {
      id: 2,
      title: "Moonlight on Broken Waters",
      excerpt: "A deeply moving tale of Steve Harrington's journey through childhood trauma, adolescent struggles, and the search for love and acceptance in the quiet town of Hawkins.",
      author: "Sarah Johnson",
      date: "2024-06-10",
      readTime: "8 min read",
      category: "Stories",
      image: "https://media.vanityfair.com/photos/5d1cbc641c225a00086f40d3/4:3/w_1332,h_999,c_limit/steve-harrington-stranger-things.jpg",
      content: `
        <h2 class="text-2xl font-bold mb-4">The Silent Heart of Hawkins</h2>
        <p class="mb-4">In the small town of Hawkins, where secrets whisper through autumn leaves and every street corner holds a memory, lived a boy whose story would unfold like moonlight casting shadows on broken waters. This is the story of Steve Harrington—not the hero you might expect, but the wounded soul learning to find his voice in a world that seemed determined to silence him.</p>
        
        <img src="https://th.bing.com/th/id/OIP.jtPiXuEogAbM3pWvYer30gHaHa?w=180&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="Small town at twilight" class="w-97 h-97 object-cover rounded-lg mb-6" />
        
        <h3 class="text-xl font-semibold mb-3">Phase One: The Bright Beginning (Ages 6-14)</h3>
        <p class="mb-4">Steve was once a burst of sunshine in human form. His laughter echoed through the Harrington household as he raced from room to room, his small hands always reaching for his parents, his heart always seeking connection. He was the kind of child who collected friends like treasures, spending countless afternoons in their homes, becoming part of their families in the way only children can.</p>
        
        <p class="mb-4">But even sunshine can cast shadows. When first grade began, Steve's boundless energy collided with classroom expectations. The homework complaints started trickling home like the first drops of a storm. His emotional heart, so open and trusting, couldn't understand why his teachers' voices grew sharp, why their eyes held disappointment instead of warmth.</p>
        
        <img src="https://th.bing.com/th/id/OIP.P9z1RJ2dNZNB-k6hkOEf4wHaEK?w=268&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="School hallway shadows" class="w-97 h-97 object-cover rounded-lg mb-6" />
        
        <p class="mb-4">The marks on his papers weren't just numbers—they became weights on his small shoulders. Teachers, meaning well but missing the mark, delivered their feedback with a harshness that cut deeper than they knew. It wasn't that they disliked Steve; they saw the effort his parents put in, the potential that seemed just out of reach. But their methods were like using a hammer when a gentle touch was needed.</p>
        
        <p class="mb-4">The worst part wasn't the scolding—it was the laughter that followed. When Steve was called to the front of the class, when his mistakes were displayed for all to see, some of his classmates found entertainment in his pain. The boy who had once collected friends now felt them slipping away, replaced by whispers and pointed fingers.</p>
        
        <p class="mb-4">By fifth grade, Steve had learned to make himself smaller, to speak softer, to hope that maybe if he didn't take up so much space, the hurt would find someone else to visit.</p>
        
        <h3 class="text-xl font-semibold mb-3">Phase Two: The Gathering Storm (Ages 14-17)</h3>
        <p class="mb-4">Sixth grade brought new faces and, with them, new hope. Steve smiled again, tentatively at first, like a flower testing the warmth of spring sun. He found friends who seemed to see past his reputation, who laughed with him instead of at him.</p>
        
        <img src="https://th.bing.com/th/id/OIP.1GkBdTMf_LNcY0vd9MWiyQHaHa?w=159&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="Lonely teenager by window" class="w-97 h-97 object-cover rounded-lg mb-6" />
        
        <p class="mb-4">But patterns have a way of repeating themselves, like songs stuck on replay. The complaints resumed, the harsh words returned, and Steve found himself once again at the center of a storm he couldn't escape. This time, though, the damage cut deeper. He wasn't just a child learning to navigate disappointment—he was a teenager whose sense of self was still forming, still fragile.</p>
        
        <p class="mb-4">Fear became his constant companion. In crowded hallways, he saw judgment in every glance. Former friends became strangers, some actively avoiding him, others joining in the cruel chorus of mockery. Steve began to believe what the voices around him seemed to say: that he was the problem, that he was broken, that he was unworthy of acceptance.</p>
        
        <p class="mb-4">The loneliness was a living thing now, growing inside his chest, making it hard to breathe some days. Instead of reaching out, Steve turned inward, blaming himself for every slight, every rejection. If he was the common denominator in all his pain, then surely he was the cause.</p>
        
        <p class="mb-4">But life has a way of surprising us. In tenth grade, one teacher saw through the scared exterior to the intelligent, sensitive boy beneath. With patient encouragement, Steve discovered he could succeed, that his mind was sharper than he'd been led to believe. Good grades became a lifeline, proof that maybe he wasn't as worthless as he'd come to think.</p>
        
        <p class="mb-4">Eleventh grade bloomed with possibility. New friends entered his life—real friends who valued his quiet wisdom and gentle heart. For a moment, Steve thought he might have outrun his past.</p>
        
        <p class="mb-4">But twelfth grade hit like a wave against weathered cliffs. The familiar loneliness returned with renewed force, accompanied now by a deeper ache—the realization that he had no one special, no one who looked at him and saw home.</p>
        
        <h3 class="text-xl font-semibold mb-3">Phase Three: The Search for Light (Ages 17-21)</h3>
        <p class="mb-4">Indiana welcomed Steve with the promise of reinvention. College was supposed to be different, a fresh start where his past couldn't follow. And on that first day, something magical did happen—he saw her.</p>
        
        <img src="https://th.bing.com/th/id/OIP.FyhyCOqoo3QZB_cz8riW6gHaNJ?w=115&h=181&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="College campus in golden hour" class="w-97 h-97 object-cover rounded-lg mb-6" />
        
        <p class="mb-4">She sat to his left, and suddenly the world made sense in a way it never had before. But Steve's heart, scarred by years of rejection, trembled with familiar fear. What if she saw what others had seen? What if his face, his voice, his very presence was somehow wrong?</p>
        
        <p class="mb-4">So he retreated into silence, spending days alone in his room, watching the world through windows instead of participating in it. College became another stage where he played the role of observer rather than participant.</p>
        
        <p class="mb-4">But kindness has a way of breaking through the strongest walls. New friends appeared—genuine souls who saw past his defensive silence to the loving heart beneath. They didn't need him to be perfect; they just needed him to be present.</p>
        
        <p class="mb-4">For two years, Steve carried his feelings like a secret flame, stealing glances at the girl who had unknowingly become his North Star. When he finally found the courage to speak to her, his heart hammered against his ribs like a caged bird desperate for flight.</p>
        
        <img src="https://th.bing.com/th/id/OIP.uhJerUtZl4U-9DjpBzs5EwHaNI?w=112&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="Two people talking under starlight" class="w-97 h-97 object-cover rounded-lg mb-6" />
        
        <p class="mb-4">What followed was the most beautiful and terrifying period of Steve's life. She didn't run from his awkward attempts at conversation. Instead, she listened, she laughed, she saw something in him worth knowing. For the first time in years, Steve felt like he was enough.</p>
        
        <p class="mb-4">He gave her everything—his attention, his care, his dreams of a future where loneliness was just a memory. She became his sunrise and sunset, the reason his heart remembered how to hope. In quiet moments, he would imagine growing old beside her, building a life where love was the foundation and fear was just a distant echo.</p>
        
        <p class="mb-4">But love, Steve learned, could be its own kind of prison. His care became overwhelming, his attention perhaps too intense. He watched her closely for signs of discomfort, terrified that his damaged heart might somehow damage hers. The boy who had never felt worthy of love poured all of himself into someone who might not have been ready to receive such devotion.</p>
        
        <h3 class="text-xl font-semibold mb-3">The Sacrifice of Love</h3>
        <p class="mb-4">The hardest lesson Steve would learn was that sometimes loving someone means letting them go. When he realized that his intensity might be causing her discomfort, that his desperate need for connection might be suffocating the very person he cherished most, he made the most painful decision of his young life.</p>
        
        <img src="https://ts4.mm.bing.net/th?id=OIP.qjfBO7GqC4e3l6aNpiSt9gHaHa&pid=15.1" alt="Moonlight on water surface" class="w-97 h-97 object-cover rounded-lg mb-6" />
        
        <p class="mb-4">He stepped back into the shadows, not out of anger or resentment, but out of love so pure it demanded selflessness. If his presence in her life brought stress instead of joy, then he would remove himself. If his love was too much, too needy, too scarred by his own wounds, then he would carry it alone.</p>
        
        <p class="mb-4">The silence that followed was different from any loneliness Steve had known before. This wasn't the isolation of rejection or the pain of being unwanted. This was the ache that comes from choosing to walk away from everything you've ever wanted because you love it too much to see it suffer.</p>
        
        <p class="mb-4">Now, at 21, Steve finds himself in a familiar place—alone, but changed. The boy who once blamed himself for every hurt has learned a harder truth: that love doesn't always mean possession, that caring sometimes requires distance, that the deepest wounds can come from our own desperate need to be needed.</p>
        
        <h3 class="text-xl font-semibold mb-3">Lessons from Broken Waters</h3>
        <p class="mb-4">Steve's story is far from over. As he stands on the threshold of Phase Four, he carries with him the hard-won wisdom of someone who has loved deeply and lost profoundly. He has learned that happiness cannot be borrowed from others, that self-worth cannot be measured by external validation, and that sometimes the greatest act of love is learning to love yourself enough to not need someone else to complete you.</p>
        
        <p class="mb-4">His parents still represent hope—a reminder that success and stability might provide the foundation for healing. His work, whatever it may become, offers the possibility of purpose beyond the ache of lost love.</p>
        
        <p class="mb-4">But perhaps most importantly, Steve has learned that expectations can be the enemy of authentic connection. "We can love someone," he now understands, "but at the end we should not expect from other people always." This isn't cynicism—it's freedom. The freedom to love without conditions, to give without keeping score, to hope without demanding guarantees.</p>
        
        <p class="mb-4">In the quiet town of Hawkins, where his story began, moonlight still falls on broken waters. But maybe, just maybe, those broken waters reflect not destruction but transformation—the beautiful, painful process of becoming whole not through another person, but through the courage to face your own reflection and finally see someone worth loving.</p>
        
        <p class="mb-4"><em>Phase Four awaits, and with it, the possibility that the boy who learned to love others might finally learn to love himself.</em></p>
      `
    }
  ];
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (selectedBlog) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setSelectedBlog(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Blog Content */}
          <article className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {/* Hero Image */}
            <img 
              src={selectedBlog.image} 
              alt={selectedBlog.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
            
            {/* Title and Meta */}
            <div className="mb-8">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                selectedBlog.category === 'Technology'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
              }`}>
                {selectedBlog.category}
              </span>
              
              <h1 className="text-4xl font-bold mb-4">{selectedBlog.title}</h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {selectedBlog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {new Date(selectedBlog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {selectedBlog.readTime}
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`border-b transition-colors ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                TechCine Blog
              </h1>
              <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Exploring technology and cinema
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:scale-105' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-16 ${darkMode ? 'bg-gradient-to-r from-gray-900 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Welcome to Our Blog
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Dive into the latest insights on technology trends, programming tutorials, and captivating movie reviews. Join us on a journey through code and cinema.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Latest Posts
          </h2>
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              {blogPosts.length} Posts
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-750' 
                  : 'bg-white hover:bg-gray-50 shadow-lg'
              }`}
              onClick={() => setSelectedBlog(post)}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    post.category === 'Technology'
                      ? 'bg-blue-500 text-white'
                      : 'bg-purple-500 text-white'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={14} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t mt-16 ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              TechCine Blog
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 TechCine Blog. Crafted with passion for technology and cinema.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;