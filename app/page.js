import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="https://your-deployed-app-url.com">Deployed App</a></li>
              <li><a href="https://github.com/your-repo">GitHub Repo</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SE Foundations Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="https://github.com/ay-sqli/HomeCookedMealsPlatform">Deployed App</a></li>
            <li><a href="https://github.com/ay-sqli/HomeCookedMealsPlatform">GitHub Repo</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/ay-sqli/HomeCookedMealsPlatform" className="btn btn-primary">Get Started</a>
        </div>
      </div>

      {/* Hero Section */}
      <div id="home" className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Home chef App</h1>
            <p className="mb-5 text-lg">A marketplace for home-prepared dishes, powered by modern tech like React, Node.js, and MongoDB, offering real-time chat and a seamless user experience.</p>
            <a href="https://github.com/ay-sqli/HomeCookedMealsPlatform" className="btn btn-primary btn-lg">Explore the Project</a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Intuitive Design", desc: "Clean and user-friendly interface enhancing the overall experience", icon: "🎨" },
              { title: "Seamless Backend Integration", desc: "Robust backend supporting all functionalities", icon: "🖥️" },
              { title: "Responsive UI/UX", desc: "A design that adapts perfectly to all devices", icon: "📱" }
            ].map((feature, index) => (
              <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <figure className="px-10 pt-10">
                  <div className="text-6xl bg-primary text-primary-content rounded-full p-4">{feature.icon}</div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl">{feature.title}</h3>
                  <p className="text-base-content/80">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">About the Project</h2>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <p className="text-lg mb-6">
                This project was inspired by the need for developers to showcase their skills effectively. 
                Developed over a 3-week period, our goal was to create a platform that simplifies portfolio creation. 
                This is a Portfolio Project for <a href="https://www.holbertonschool.com" className="link link-primary">Holberton School</a>.
              </p>
              <h3 className="text-2xl font-bold mb-4">Team Members</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h4 className="card-title">Ayoub Esqalli</h4>
                    <div className="card-actions justify-end">
                      <a href="https://www.linkedin.com/in/ayoub-esqalli" className="btn btn-sm btn-outline">LinkedIn</a>
                      <a href="https://github.com/ay-sqli" className="btn btn-sm btn-outline">GitHub</a>
                      <a href="https://twitter.com/ayoub-esqalli" className="btn btn-sm btn-outline">Twitter</a>
                    </div>
                  </div>
                </div>
                {/* Add more team members here if needed */}
              </div>
              <div className="text-center">
                <a href="https://github.com/ay-sqli/HomeCookedMealsPlatform" className="btn btn-primary">View GitHub Repository</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Project Overview</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe className="w-full h-96 rounded-lg shadow-lg" src="https://www.youtube.com/embed/your-video-id" title="Project Overview" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="#home" className="link link-hover">Home</a> 
            <a href="#features" className="link link-hover">Features</a> 
            <a href="#about" className="link link-hover">About</a>
            <a href="https://github.com/ay-sqli/HomeCookedMealsPlatform" className="link link-hover">Deployed App</a>
            <a href="https://github.com/ay-sqli/HomeCookedMealsPlatform" className="link link-hover">GitHub Repo</a>
          </div> 
        </div> 
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a> 
            <a className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
            </a> 
            <a className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
          </div>
        </div> 
        <div>
          <p>Copyright © 2024 Ayoub Esqalli, All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}