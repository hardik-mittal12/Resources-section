import React, { useState } from 'react';
import './ResourcesPage.css';
import logos from './ccet-logo-white.png'
import ai from './AI.jpg'
import deep from './deep.jpeg'
import heal from './health.jpeg'
import block from './block.jpeg'
import data from './data.jpeg'
import machine from './machine.jpeg'
import meta from './meta.jpeg'
import dev from './devops.png'
import brain from './brain.jpeg'
import ledger from './ledger.png'
import twin from './twin.jpeg'
import ml from './ml.png'
import metav from './metav.jpeg'
import edge from './edge.jpeg'
import blockc from './blockc.jpeg'

// Your static list of all resources with their associated topics
const ALL_RESOURCES = [
  {
    id: 1,
    title: "Brain Computer Interaction (BCI): A Way to Interact with Brain Waves",
    author: "Sudhakar Kumar, Sunil K. Singh",
    tags: ["AI", "Deep Learning", "Healthcare"],
    image: brain
  },
  {
    id: 2,
    title: "Distributed Ledger Technology",
    author: "Manraj Singh, Sudhakar Kumar",
    tags: ["Blockchain"],
    image: ledger
  },
  {
    id: 3,
    title: "Digital Twins",
    author: "Tarun Vats, Sudhakar Kumar",
    tags: ["AI", "Data Science"],
    image: twin
  },
  {
    id: 4,
    title: "MLOps: A New Era Of DevOps, Powered By Machine Learning",
    author: "Muskaan Chopra, Sunik K Singh",
    tags: ["DevOps", "Machine Learning"],
    image: ml
  },
  {
    id: 5,
    title: "Metaverse Technology And It's Applications",
    author: "Mavneet Kaur, B.Gupta",
    tags: ["Blockchain", "Metaverse"],
    image: metav
  },

  {
    id: 6,
    title: "Edge Intelligence: A New Emerging Era",
    author: "A Dahiya, B.Gupta",
    tags: ["AI", "Data Science" ,"Machine Learning"],
    image: edge
  },

  {
    id: 7,
    title: "Blockchain For Data Science",
    author: "Dipesh Singla, Sudhakar Kumar",
    tags: ["Blockchain", "Data Science"],
    image: blockc
  },
  // Add more resources here
];

const TOPICS = [
  "All Topics",
  "AI",
  "Web Development",
  "Deep Learning",
  "Machine Learning",
  "Data Science",
  "Cloud Computing",
  "Cybersecurity",
  "DevOps",
  "Blockchain",
  "Smart Vehicles",
];

const ResourcesPage = () => {
  const [activeTopic, setActiveTopic] = useState('All Topics');

  // Filter resources based on the active topic
  const filteredResources = ALL_RESOURCES.filter(resource => {
    if (activeTopic === 'All Topics') {
      return true;
    }
    return resource.tags.includes(activeTopic);
  });

  return (
    <div className="resources-page">
      <header className="header">
          <div className="logo">
              <img src={logos} alt="ACM CCET Logo" />
          </div>
          <nav className="nav">
              <a href="#">HOME</a>
              <a href="#">ABOUT</a>
              <a href="#">GALLERY</a>
              <a href="#">EVENTS</a>
              <a href="#">TEAM</a>
              <a href="#">ACHIEVEMENTS</a>
              <a href="#" className="active">RESOURCES</a>
              <a href="#">MAGAZINE</a>
              <a href="#">ICRG</a>
              <a href="#">ACM-W</a>
          </nav>
      </header>
      <main className="container">
        <aside className="sidebar">
          <h2>Topics</h2>
          <ul className="topic-list">
            {TOPICS.map(topic => (
              <li
                key={topic}
                onClick={() => setActiveTopic(topic)}
                className={activeTopic === topic ? 'active' : ''}
              >
                {topic}
              </li>
            ))}
          </ul>
        </aside>
        <section className="content">
          <h1>Resources</h1>
          <div className="resource-grid">
            {filteredResources.map(resource => (
              <div className="card" key={resource.id}>
                <img src={resource.image} alt={resource.title} className='Card-img' />
                <div className="card-content">
                  <h3>{resource.title}</h3>
                  <p className="author">{resource.author}</p>
                  <div className="tags">
                    {resource.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="read-more-btn">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResourcesPage;