import React, { useState } from 'react';
import './index.css';
import resumeWebappImage from './assets/CV.png';
import churnIMG from './assets/churn.png';
import docaiIMG from './assets/docai.png';
import hpIMG from './assets/HP.png';
import sbiIMG from './assets/sbi.png';
import sqlIMG from './assets/sq;.png';
import prf from './assets/prf.jpg';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-gray-900/80 border-b border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Shreyansh Dutt Mehra</h1>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'Experience', 'Projects', 'Certification'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-medium hover:text-blue-400 transition-colors ${activeTab === tab ? 'text-blue-400' : ''}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-10">
        <div className="flex justify-around py-2">
          {['Home', 'Experience', 'Projects', 'Certification', ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex flex-col items-center p-2 ${activeTab === tab ? 'text-blue-400' : ''}`}
            >
              {tab === 'Home' && <HomeIcon />}
              {tab === 'Experience' && <BriefcaseIcon />}
              {tab === 'Projects' && <ProjectIcon />}
              {tab === 'Certification' && <TrophyIcon />}
              {/* {tab === 'Blog' && <BlogIcon />} */}
              <span className="text-xs mt-1">{tab}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content Sections */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'Home' && <HomeSection />}
        {activeTab === 'Experience' && <ExperienceSection />}
        {activeTab === 'Projects' && <ProjectsSection />}
        {activeTab === 'Certification' && <CertificationSection />}
        {/* {activeTab === 'Blog' && <BlogSection />} */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-12 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © {new Date().getFullYear()} Shreyansh Dutt Mehra | Built with React & TailwindCSS
        </div>
      </footer>
    </div>
  );
};

// Icons
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);
const ProjectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M20 9h1.5a2.5 2.5 0 0 0 0-5H20"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V2"></path>
    <path d="M12 2v3"></path>
  </svg>
);
const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

// Sections
const HomeSection = () => (
  <section className="max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg">
        <img src= {prf} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hi, I am Shreyansh</h2>
        <p className="text-lg text-gray-300 mb-6">Aspiring Data Scientist | 3rd Year Undergraduate at IIT Guwahati</p>
        <p className="text-gray-400 mb-6 max-w-lg">
          I'm passionate about Machine Learning and AI, and enjoy working on data analysis, predictive modeling, and automation projects. Currently in my third year at IIT Guwahati, I’m actively seeking internship opportunities where I can contribute, learn, and grow as a future data scientist. Always eager to explore real-world problems through data-driven solutions.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1VWau6jbTt_ORxOK5zW2f8nqhShGJp3eh"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </div>

     {/* Education section */}
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Education</h3>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <ul className="space-y-4 text-gray-300">
          <li className="flex flex-col md:flex-row md:justify-between">
            <div>
              <strong>Indian Institute of Technology, Guwahati</strong>
              <div>B.Tech in Civil Engineering (Expected 2027)</div>
            </div>
            <div className="text-right md:text-left">CPI: 8.08/10</div>
          </li>
        </ul>
      </div>
    </div>


    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <ul className="space-y-2 text-gray-300">
          <li>📞 +91-6378181759</li>
          <li>✉️ s.mehra@iitg.ac.in</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Socials</h3>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/shreyansh-dutt-mehra-a97316282/" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="https://github.com/ShreyanshMehra" className="hover:text-blue-400 transition-colors">GitHub</a>
          {/* <a href="#" className="hover:text-blue-400 transition-colors">Codeforces</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LeetCode</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Kaggle</a> */}
        </div>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2">
          {["Python", "matplotlib", "seaborn", "C/C++", "scikit-learn", "NLP", "TensorFlow", "Numpy", "Power BI", "Pandas", "Keras", "SQL"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);


const ExperienceSection = () => {
  const experiences = [
    {
      title: "Summer Reasearch Intern",
      company: "IDEAS @ ISI Kolkata",
      duration: "May 2025 - July 2025",
      description: "Built a full machine learning pipeline to forecast crop yields using over 20 years of historical rainfall, temperature, and reservoir data. Leveraged Facebook Prophet to predict environmental indicators, which were then used as features for an ensemble of regression models. Achieved a test R² score of 0.84, demonstrating strong predictive performance in real-world conditions.",
      techStack: ["Python", "scikit-learn", "Data Analysis",'Machine Learning', "Time Series Forecasting", "Facebook Prophet"],
    },
    {
      title: "Data Analyst Intern",
      company: "NoQs Digital",
      duration: "May 2024 - Jun 2024",
      description: "Automated HR communication processes by extracting employee data from Excel and generating personalized messages using JavaScript. Designed and deployed interactive dashboards in Excel and Power BI to monitor employee workflows and improve operational transparency. The solution streamlined internal reporting and reduced manual effort in routine tasks.",
      techStack: ["Data Analysis", "Automation", "JavaScript","PowerBI","Excel","Dashboards "],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 pb-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400">{exp.company} • {exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



const ProjectsSection = () => {
  const projectTags = ["Machine Learning","Deep Learning","LangChain","RAG","SQL","Embeddings", "NLP", "Data Analysis","Deployment"];
  const [selectedTags, setSelectedTags] = useState([]);

  const projects = [
    {
      title: "Resume Screening WebApp",
      description: "Built a FastAPI-based platform for LLM-powered resume screening and job matching. Used embeddings to compute semantic similarity and score resumes based on relevance to a given job description.",
      image: resumeWebappImage,
      link: "https://cv-align.onrender.com/",
      tags: ["LLM", "RAG","FastAPI", "NLP", "Embeddings","Deployment"],
    },
    {
      title: "TechDocs Assistant",
      description: "Built a local AI assistant to answer questions from technical documents using semantic search and context-based answer generation. Used LangChain for orchestration, ChromaDB for vector storage, and MiniLM for embeddings.",
      image: docaiIMG,
      link: "https://github.com/ShreyanshMehra/DocQuery-Assistant ",
      tags: ["LangChain","RAG","NLP", "Embeddings"],
    },
    {
      title: "Holiday Package Purchase Prediction",
      description: "Built a classification model to predict which employees are likely to buy a holiday package based on behavioral and demographic features. Used ensemble ML techniques (XGBoost, Random Forest, etc.) with hyperparameter tuning and AUC evaluation to achieve ~91% AUC with XGBoost.",
      image: hpIMG,
      link: "https://github.com/ShreyanshMehra/Holiday-Package-Prediction",
      tags: ["Machine Learning", "Classification","XGBoost",],
    },
    {
      title: "Inventory Analytics Project: Urban Retail Co.",
      description: "Designed an inventory analytics system for Urban Retail Co. using SQL and Power BI. Identified stock inefficiencies, estimated reorder points, and highlighted demand patterns to support data-driven inventory decisions.",
      image: sqlIMG,
      link: "https://github.com/ShreyanshMehra/inventory_forcasting",
      tags: ["SQL", "Power BI","Data Analysis",],
    },
    {
      title: "Customer Churn Prediction",
      description: "Built and deployed an Artificial Neural Network (ANN) to predict customer churn based on user data like geography, credit score, and balance. Preprocessed features, trained the model using TensorFlow/Keras, and deployed a real-time prediction app using Streamlit.",
      image: churnIMG,
      link: "https://github.com/ShreyanshMehra/ANN-Classification-churn",
      tags: ["Deep Learning", "Deployment"],
    },
    {
      title: "SBI-Fraud-Detection",
      description: "Developed machine learning and deep learning models to detect fraud and localize defaulters using anonymized financial and location data. Handled noisy, imbalanced data with a focus on interpretability and robustness.",
      image: sbiIMG,
      link: "https://github.com/ShreyanshMehra/SBI-Fraud-Detection",
      tags: ["Deep Learning", "Machine Learning","Data Analysis",],
    },
  ];

  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project => project.tags.some(tag => selectedTags.includes(tag)));

  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
      
      {/* Filter Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {projectTags.map((tag) => (
          <button
            key={tag}
            onClick={() =>
              setSelectedTags((prev) =>
                prev.includes(tag)
                  ? prev.filter((t) => t !== tag)
                  : [...prev, tag]
              )
            }
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedTags.includes(tag)
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="px-3 py-1 rounded-full text-sm font-medium bg-red-900 text-red-200 hover:bg-red-800 transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Project
                </a>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-blue-900 text-blue-200 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CertificationSection = () => {
  // const awards = [
  //   {
  //     title: "Best Paper Award",
  //     issuer: "International Conference on Data Science",
  //     date: "2023",
  //     description: "Awarded for outstanding research paper on deep learning applications in healthcare.",
  //   },
  //   {
  //     title: "Gold Medalist",
  //     issuer: "IIT Guwahati",
  //     date: "2022",
  //     description: "Recognized as the top performer in the Data Science department.",
  //   },
  // ];

  const certifications = [
    {
      title: "Introduction to Retrieval-Augmented Generation (RAG)",
      issuer: "Duke University(Coursera)",
      date: "May, 2025",
      link: "https://drive.google.com/uc?export=download&id=1LIDyECQSf-rMTDMiSuinwmRJeZOX3zgd",
    },
    {
      title: "Data Science Projects Bootcamp",
      issuer: "Krish Naik(Udemy)",
      date: "June, 2025",
      link: "https://drive.google.com/uc?export=download&id=1E8CB3sSAOHbBrXa0Olne0dKO4BCtRT6p",
    },
    {
      title: "Solving Inventory Inefficiencies Using SQL",
      issuer: "C&A IITG Summer Projects ’25",
      date: "June, 2025",
      link: "https://drive.google.com/uc?export=download&id=1tDCSr_GeTrszmVt-tACu3thj_oo7GyyD",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Certifications</h2>
      
      <div className="space-y-8">
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">🎖️ Awards & Honors</h3>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-medium">{award.title}</h4>
                <p className="text-gray-400">{award.issuer} • {award.date}</p>
                <p className="mt-1 text-gray-300">{award.description}</p>
              </div>
            ))}
          </div>
        </div> */ }

        <div>
          <h3 className="text-xl font-semibold mb-4"></h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium">{cert.title}</h4>
                <p className="text-gray-400">{cert.issuer} • {cert.date}</p>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// const BlogSection = () => {
//   const posts = [
//     {
//       title: "Understanding Transformers in NLP",
//       date: "2024-03-15",
//       tags: ["NLP", "Deep Learning"],
//       content: "In this post, we explore how transformers have revolutionized the field of Natural Language Processing...",
//     },
//     {
//       title: "Building Effective Machine Learning Pipelines",
//       date: "2024-02-20",
//       tags: ["ML", "Data Engineering"],
//       content: "Learn best practices for designing scalable and maintainable machine learning pipelines...",
//     },
//   ];

//   return (
//     <section className="max-w-4xl mx-auto">
//       <h2 className="text-2xl md:text-3xl font-bold mb-6">Blog</h2>
      
//       <div className="space-y-8">
//         {posts.map((post, index) => (
//           <article key={index} className="border-b border-gray-700 pb-6 mb-6">
//             <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//             <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//               <span>{new Date(post.date).toLocaleDateString()}</span>
//               <div className="flex gap-2">
//                 {post.tags.map((tag, i) => (
//                   <span key={i} className="px-2 py-0.5 bg-gray-700 text-gray-200 rounded-full text-xs">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <p className="text-gray-300">{post.content}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

export default App;