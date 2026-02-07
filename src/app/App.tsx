// Replace all Figma asset imports with local files
import imgRectangle1 from "./assets/a1b68a2eaa5398b5ea390a3a95a81a954c33f1ed.png";
import imgImages1 from "./assets/93cac397aea9a6a25438b02306af3ae239504574.png";
import imgPngwingCom1 from "./assets/8ca7471ae194b646b29a87d27903598685588c4b.png";
import imgPngwingCom51 from "./assets/eff92a7281f8b1fb9f35763ce372aa00e3d87c4f.png";
import imgPngwingCom61 from "./assets/940b2e251208d3a1bfbe638fb6cf666c04b78256.png";
import imgPngwingCom31 from "./assets/996b590210eab293ada23e72b2b5ae14dd3354b6.png";
import img3DCharacterIllustrationOfFrontEndDeveloperFreePng1 from "./assets/c1814ef4cb941765b4e7cf0b27a095dde9672ff.png";
import imgPngwingCom11 from "./assets/02945d6621447d008462cccab0a0979894b5d483.png";
import imgPngwingCom81 from "./assets/92a63a2120c74358abb072fb3f1390d235801906.png";
import imgPngwingCom121 from "./assets/66cbd02478c5adf879d76ec67da8db3fa1a2ded8.png";
import imgPngwingCom141 from "./assets/690764a7ee5d0937c94a3a92cf943f386d68727f.png";



export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const qualificationsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: aboutRef, name: 'about' },
        { ref: skillsRef, name: 'skills' },
        { ref: qualificationsRef, name: 'qualifications' },
        { ref: experienceRef, name: 'experience' },
        { ref: hobbiesRef, name: 'hobbies' },
        { ref: contactRef, name: 'contact' }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string, ref: React.RefObject<HTMLDivElement>) => {
    setActiveSection(section);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-black min-h-screen relative">
      {/* Navigation Sidebar */}
      <nav className="fixed left-4 top-64 z-50 bg-[rgba(15,23,42,0.16)] border border-[#22c55e] rounded-[38px] p-4 w-36 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => scrollToSection('home', homeRef)}
            className={`text-left text-xs font-['Inter'] transition-colors ${
              activeSection === 'home' ? 'text-[#22c55e]' : 'text-white hover:text-[#22c55e]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about', aboutRef)}
            className={`text-left text-xs font-['Inter'] transition-colors ${
              activeSection === 'about' ? 'text-[#22c55e]' : 'text-white hover:text-[#22c55e]'
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('skills', skillsRef)}
            className={`text-left text-xs font-['Inter'] transition-colors ${
              activeSection === 'skills' ? 'text-[#22c55e]' : 'text-white hover:text-[#22c55e]'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('qualifications', qualificationsRef)}
            className={`text-left text-xs font-['Inter'] transition-colors ${
              activeSection === 'qualifications' ? 'text-[#22c55e]' : 'text-white hover:text-[#22c55e]'
            }`}
          >
            Qualifications
          </button>
          <button
            onClick={() => scrollToSection('experience', experienceRef)}
            className={`text-left text-xs font-['Inter'] transition-colors ${
              activeSection === 'experience' ? 'text-[#22c55e]' : 'text-white hover:text-[#22c55e]'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('hobbies', hobbiesRef)}
            className={`text-left text-xs font-['Inter'] transition-colors ${
              activeSection === 'hobbies' ? 'text-[#22c55e]' : 'text-white hover:text-[#22c55e]'
            }`}
          >
            Hobbies
          </button>
          <button
            onClick={() => scrollToSection('contact', contactRef)}
            className={`text-left text-xs font-['Inter'] transition-colors ${
              activeSection === 'contact' ? 'text-[#22c55e]' : 'text-white hover:text-[#22c55e]'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 ml-52">
        {/* Home Section */}
        <section ref={homeRef} className="min-h-screen flex flex-col items-center justify-center pt-12 pb-24">
          <div className="flex flex-col items-center gap-6">
            <img
              src={imgRectangle1}
              alt="Kaimbo Sikelete"
              className="w-72 h-84 object-cover rounded-[30px]"
            />
            <div className="font-['JetBrains_Mono'] text-white max-w-md text-center">
              <p className="text-[#22c55e] mb-4">&gt; Initializing intro...</p>
              <p className="leading-relaxed">
                Hi there. I'm Kaimbo Sikelete, a third year Software Engineering student at the University of Zambia, Lusaka Zambia.
              </p>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section ref={aboutRef} className="min-h-[60vh] py-24">
          <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-sm mb-6">About Me</p>
          <p className="font-['Inter'] text-white leading-relaxed max-w-2xl">
            Software Engineering student & UX/UI Designer. I build scalable web solutions with a focus on clean architecture and intuitive user journeys. From technical documentation to GitHub-driven collaboration and Vercel deployments, I bridge the gap between complex system logic and user-centric UI. I'm driven by the challenge of turning technical problems into elegant, real-world solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="min-h-screen py-24">
          <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-sm mb-8">Skills</p>
          
          <div className="bg-black border border-[#22c55e] rounded-[29px] p-8 max-w-md">
            <div className="bg-white rounded-[26px] p-8 overflow-x-auto">
              <div className="flex gap-8 pb-4">
                <div className="flex flex-col items-center gap-3 min-w-[140px]">
                  <img src={imgPngwingCom61} alt="Graphic Design" className="w-20 h-20 object-contain" />
                  <p className="text-black text-center text-sm">Graphic Design</p>
                </div>
                
                <div className="flex flex-col items-center gap-3 min-w-[140px]">
                  <img src={imgImages1} alt="Software Development" className="w-20 h-20 object-contain" />
                  <p className="text-black text-center text-sm">Software Development</p>
                </div>
                
                <div className="flex flex-col items-center gap-3 min-w-[140px]">
                  <img src={imgPngwingCom1} alt="Hosting" className="w-20 h-20 object-contain" />
                  <p className="text-black text-center text-sm">Hosting</p>
                </div>
                
                <div className="flex flex-col items-center gap-3 min-w-[140px]">
                  <img src={imgPngwingCom51} alt="UX/UI Design" className="w-20 h-20 object-contain" />
                  <p className="text-black text-center text-sm">UX/UI Design</p>
                </div>
                
                <div className="flex flex-col items-center gap-3 min-w-[140px]">
                  <img src={imgPngwingCom11} alt="Database Administration" className="w-20 h-20 object-contain" />
                  <p className="text-black text-center text-sm">Database Admin</p>
                </div>
                
                <div className="flex flex-col items-center gap-3 min-w-[140px]">
                  <img src={img3DCharacterIllustrationOfFrontEndDeveloperFreePng1} alt="Front End Development" className="w-20 h-20 object-contain" />
                  <p className="text-black text-center text-sm">Front End Dev</p>
                </div>
                
                <div className="flex flex-col items-center gap-3 min-w-[140px]">
                  <img src={imgPngwingCom31} alt="GitHub" className="w-20 h-20 object-contain" />
                  <p className="text-black text-center text-sm">Git Hub</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-3">
              <p className="font-['JetBrains_Mono'] text-white">SCROLL</p>
              <svg className="w-48 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 190 14.7279">
                <path d={svgPaths.p18579500} fill="#22C55E" />
              </svg>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section ref={qualificationsRef} className="min-h-screen py-24">
          <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-sm mb-8">Qualifications</p>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-x-20">
            <div>
              <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-xs mb-6">Academic Qualifications</p>
              <div className="space-y-4 font-['Inter'] text-white text-sm">
                <p>
                  <span className="text-[#22c55e]">&gt; </span>
                  <span className="font-semibold">BACHELOR OF COMPUTER SCIENCE IN SOFTWARE ENGINEERING</span>
                  <span className="block ml-3 text-gray-400">(ON-GOING)</span>
                </p>
                <p>
                  <span className="text-[#22c55e]">&gt; </span>
                  <span className="font-semibold">HIGHSCHOOL CERTIFICATE</span>
                </p>
              </div>
            </div>
            
            <div className="md:border-l-2 md:border-[#22c55e] md:pl-12">
              <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-xs mb-6">Professional Qualifications</p>
              <div className="space-y-3 font-['Inter'] text-white text-sm">
                <p><span className="text-[#22c55e]">&gt; </span>IT ESSENTIALS</p>
                <p><span className="text-[#22c55e]">&gt; </span>C++ ESSENTIALS 1</p>
                <p><span className="text-[#22c55e]">&gt; </span>LINUX UNHATCHED</p>
                <p><span className="text-[#22c55e]">&gt; </span>PROJECT MANAGEMENT</p>
                <p><span className="text-[#22c55e]">&gt; </span>INTRODUCTION TO AGILE DEVELOPMENT AND SCRUM</p>
                <p><span className="text-[#22c55e]">&gt; </span>UI/UX DESIGN FUNDAMENTALS</p>
                <p><span className="text-[#22c55e]">&gt; </span>UI/UX WIREFRAMING AND PROTOTYPING WITH FIGMA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="min-h-[60vh] py-24">
          <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-sm mb-8">Work Experience</p>
          
          <div className="space-y-8 font-['Inter'] text-white">
            <div>
              <p className="font-medium">
                Software Engineer <span className="text-[#22c55e]">at CINGS Enterprises</span>
              </p>
              <p className="text-[#94a3b8] text-sm">2023 to present</p>
            </div>
            
            <div>
              <p className="font-medium">
                Documentation Lead <span className="text-[#22c55e]">at SparkNext Learning Hub</span>
              </p>
              <p className="text-[#94a3b8] text-sm">2026 to present</p>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section ref={hobbiesRef} className="min-h-[60vh] py-24">
          <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-sm mb-8">Hobbies</p>
          
          <div className="space-y-4 font-['Roboto_Mono'] text-white">
            <p><span className="text-[#22c55e]">[1]</span> Gaming</p>
            <p><span className="text-[#22c55e]">[2]</span> Travelling</p>
            <p><span className="text-[#22c55e]">[3]</span> Music</p>
            <p><span className="text-[#22c55e]">[4]</span> Reading</p>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="min-h-screen py-24">
          <p className="font-['JetBrains_Mono'] italic text-[#22c55e] text-sm mb-12">Contacts</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <img src={imgPngwingCom121} alt="Email" className="w-14 h-14 object-contain" />
              <p className="font-['Inter'] font-medium text-white">Email: sikeletekay@mail.com</p>
            </div>
            
            <div className="flex items-center gap-6">
              <img src={imgPngwingCom141} alt="Phone" className="w-14 h-14 object-contain" />
              <p className="font-['Inter'] font-medium text-white">Phone: +260 979460277</p>
            </div>
            
            <div className="flex items-center gap-6">
              <img src={imgPngwingCom81} alt="WhatsApp" className="w-12 h-12 object-contain" />
              <p className="font-['Inter'] font-medium text-white">WhatsApp: +260 954215515</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
