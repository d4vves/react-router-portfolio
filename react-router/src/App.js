import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import Blog from './Components/Blog'
import About from './Components/About'
import Projects from './Components/Projects'

function App() {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'CSS Tips and Tricks',
      content: 'CSS is an incredibly powerful language! I personally love CSS, but some may get tripped up by its intricacies. If you are into CSS and want to learn some cool stuff, I would reccomend css-tricks.com',
      date: '7/19/2020'
    },
    {
      title: 'My New Favorite Code Editor',
      content: 'I have used repl.it. I have used codepen. There are so many options for web based editors, but my new favorite has got to be codesandbox.io. Check it out!',
      date: '7/17/2020'
    },
    {
      title: 'Country Music Rules',
      content: 'Country gets a bad wrap. But if you look deeper into the scene, specifically the origins of country, it is incredible! Check out Waylon Jennings, Bobby Bare, The Louvin Brothers, Johnny Western, Glen Campbell, Eddie Noack and the likes for a taste of the real stuff!',
      date: '7/17/2020'
    }
  ])

  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
        </nav>
      </div>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/blog' render={() => <Blog posts={blogPosts} />} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;