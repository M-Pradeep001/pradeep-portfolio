import React, { useEffect, useRef, useState } from 'react';
const socialLinks = [
  { icon: 'linkedin', href: 'https://www.linkedin.com/in/pradeep-m-076463272/' },
  { icon: 'github', href: 'https://github.com/M-Pradeep001' },
  { icon: 'twitter', href: 'https://twitter.com/yourhandle' }, // Replace with your actual Twitter handle
  { icon: 'envelope', href: `https://mail.google.com/mail/?view=cm&fs=1&to=maddojupradeep002@gmail.com&su=Let%27s%20Work%20Together&body=Hi%20Pradeep%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20about%20a%20potential%20project.%0A%0ARegards%2C%0A[Your%20Name]` },
];
const About = () => {
  const [visible, setVisible] = useState(false);
  const fadeInRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    fadeInRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      fadeInRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-neutral-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get to Know Me</h1>
          <p className="text-xl max-w-2xl mx-auto">Creative developer with passion for building beautiful, functional digital experiences</p>
        </div>
      </section>

      {/* Photo Scroll */}
      {/* Photo Scroll */}
      <section id="home" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey in Pictures</h2>
          <div className="relative">
            <div
              id="photo-scroll"
              className="photo-scroll flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 smooth-scroll"
            >
              {[
                {
                  img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                  title: 'Early Beginnings',
                  desc1: 'My journey in tech began in 2022 when I enrolled at Neil Gogte Institute of Technology.',
                  desc2: 'It was here that I was introduced to programming—and I quickly developed a strong passion for web development.',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                  title: 'Building My First Projects',
                  desc1: 'In Semester 3, I built my first real project—a simple to-do app—and that moment sparked something in me.',
                  desc2: 'I began actively participating in hackathons, college coding competitions, and developer meetups, which fueled my excitement for coding and real-world problem-solving.',
                },
                {
                  img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
                  title: 'In a Nutshell',
                  desc1: 'I’m a passionate and self-driven student developer, constantly exploring new technologies and improving my skills.',
                  desc2: 'With guidance from my professors, peers, and ChatGPT, I’ve contributed to several college projects, excelled in coding challenges, and grown into a confident developer ready to take on real-world challenges.',
                },
              ].map((item, idx) => (
                <div
                  className={`photo-scroll-item flex-shrink-0 w-full snap-start fade-in ${visible ? 'visible' : ''}`}
                  key={idx}
                  ref={el => fadeInRefs.current[idx] = el}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 px-4">
                    <div className="md:w-1/2">
                      <img src={item.img} alt={item.title} className="w-full h-auto rounded-lg shadow-xl" />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.desc1}</p>
                      <p className="text-gray-600">{item.desc2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* About Me Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 fade-in">
              <h2 className="text-3xl font-bold mb-8">Who Am I?</h2>
              <div className="space-y-6">
                <p>
                  I'm Pradeep Maddoju 👋, a passionate Computer Science student at Neil Gogte Institute of Technology. Ever since I began my journey in 2022, I’ve been driven by a simple idea — to build technology that solves real problems 💡.
                </p>

                <p>
                  From my very first to-do app to deploying AI models that predict material properties, I’ve come a long way in understanding what it means to be a developer. I’ve worked on full-stack web apps, participated in hackathons, and built intelligent systems using tools like React, Node.js, Python, and Transformers.
                </p>

                <p>
                  What excites me most is turning complex ideas into real, working products 🚀. Whether it’s developing a Q&A platform for research papers or leading a college project showcase platform, I aim to make tech useful, accessible, and meaningful.
                </p>

                <p>
                  Beyond code, I enjoy playing chess, mentoring juniors, and learning from every experience. With each project, I’m not just growing as a developer — I’m shaping a future where I can contribute to something bigger.
                </p>

                <p>
                  Let’s build something impactful together! 🙂
                </p>
                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="font-bold text-lg mb-2">My Philosophy</h3>
                  <p>"The code you write makes you a programmer. The code you delete makes you a good one."</p>
                </div>
                <p>When I'm not coding, I'm out exploring the rest — from food to fairs, humor to health, books to beaches, and everything that sparks curiosity and joy in between.</p>
              </div>
            </div>

            <div className="fade-in">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-center">Quick Facts</h3>
                <ul className="space-y-4">
                  {[
                    { icon: 'fa-map-marker-alt', text: 'Based in Hyderabad, India' },
                    { icon: 'fa-graduation-cap', text: 'B.E. CSE, Neil Gogte Institute of Technology' },
                    { icon: 'fa-briefcase', text: 'Hands-on experience in 10+ real-world projects' },
                    { icon: 'fa-code', text: 'Skilled in React, Node.js, Python & ML' },
                    { icon: 'fa-heart', text: 'Passionate about AI, problem-solving & accessibility' },
                  ].map((item, idx) => (
                    <li className="flex items-start" key={idx}>
                      <i className={`fas ${item.icon} text-black mt-1 mr-3`}></i>
                      <span>{item.text}</span>
                    </li>
                  ))}

                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-4">Let's Connect</h4>
                  <p className="font-medium mb-4">I love collaborating with passionate minds and working on ideas that matter. Have a project or collaboration in mind?</p>
                  <p></p>
                  <div className="flex space-x-4">
                    {socialLinks.map((item, idx) => (
                      <a
                        href={item.href}
                        key={idx}
                        className="text-gray-600 hover:text-black mr-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`${item.icon === 'envelope' ? 'fas' : 'fab'} fa-${item.icon} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Branding */}
            <div>
              <h3 className="text-xl font-bold mb-4">MyPortfolio</h3>
              <p>Creating digital experiences that matter.</p>
              <div className="flex space-x-4 mt-4">
                {[
                  { icon: 'linkedin', href: 'https://www.linkedin.com/in/pradeep-m-076463272/' },
                  { icon: 'github', href: 'https://github.com/M-Pradeep001' },
                  { icon: 'twitter', href: 'https://twitter.com/yourhandle' },
                  { icon: 'envelope', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=maddojupradeep002@gmail.com&su=Lets%20Work%20Together&body=Hi%20Pradeep%2C%0AI%20came%20across%20your%20portfolio...' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-lg transition-transform duration-300 transform hover:scale-110"
                  >
                    <i className={`${item.icon === 'envelope' ? 'fas' : 'fab'} fa-${item.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },

                  { name: 'Contact', href: '#contact' },
                ].map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="hover:text-neutral-300 transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div>
              <h4 className="font-bold mb-4">Get In Touch</h4>
              <p className="mb-4">Have a project in mind? Let's make it happen!</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=maddojupradeep002@gmail.com&su=Let's%20Work%20Together&body=Hi%20Pradeep%2C%0AI%20came%20across%20your%20portfolio..."
                className="bg-black hover:bg-neutral-800 px-4 py-2 rounded-full font-medium transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Message
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* About Me Section */}
      {/* ... rest of your component ... */}
    </div>
  );
};

export default About;



