import React, { useState } from 'react';
import { 
  Award, BookOpen, CheckCircle, ChevronRight, Mail, 
  MapPin, Shield, Search, Download, Star, Lock,
  Globe, AlertCircle, Send, Check, Menu, X, ArrowRight
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: string;
  description: string;
  fGasLegal: boolean;
  featured?: boolean;
}

interface CertifiedTech {
  id: string;
  name: string;
  regNumber: string;
  category: string;
  validUntil: string;
  county: string;
  company?: string;
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
}

interface Review {
  id: string;
  author: string;
  company: string;
  rating: number;
  date: string;
  text: string;
  courseTaken: string;
}

const INITIAL_COURSES: Course[] = [
  {
    id: 'fgas-cat1',
    title: 'Certificare F-Gas Categoria I (Regulament UE 2024/573)',
    category: 'Atestare Legală F-Gas',
    duration: '40 ore (Teorie + Practică Laborator UTCB)',
    price: '2.400 RON',
    description: 'Instalare, întreținere, service, recuperare agenți frigorifici fluorurați pentru orice capacitate fără limită de încărcătură.',
    fGasLegal: true,
    featured: true
  },
  {
    id: 'fgas-cat2',
    title: 'Certificare F-Gas Categoria II (< 3kg sistem)',
    category: 'Atestare Legală F-Gas',
    duration: '24 ore',
    price: '1.800 RON',
    description: 'Intervenții pe trasee frigorifice ce conțin mai puțin de 3 kg freon (sau 6 kg pentru sisteme etanșeizate ermetic).',
    fGasLegal: true
  },
  {
    id: 'curs-baza',
    title: 'Curs de Calificare: Meseria de Frigotehnist (Nivel 3)',
    category: 'Calificare Profesională',
    duration: '360 ore (Diploma recunoscută MMPS & MEN)',
    price: '3.200 RON',
    description: 'Formare completă de la zero: termodinamică, sudură oxigaz/azot, scheme electrice, automatizări și diagnosticare defecțiuni.',
    fGasLegal: false,
    featured: true
  },
  {
    id: 'eco-refrigerants',
    title: 'Specializare Agenți Frigorifici Naturali & Inflamabili (R290, R32, CO2)',
    category: 'Tehnologii Noi',
    duration: '16 ore practică',
    price: '1.500 RON',
    description: 'Norme stricte ATEX, unelte antiscânteie, proceduri sigure de vacuumare și încărcare pentru hidrocarburi propan R290 și dioxid de carbon.',
    fGasLegal: true
  },
  {
    id: 'auto-mac',
    title: 'Atestat Climatizare Auto (Sisteme MAC R134a & R1234yf)',
    category: 'Climatizare Auto',
    duration: '8 ore (1 zi)',
    price: '950 RON',
    description: 'Obligatoriu pentru tehnicienii din service-uri auto conform legislației UE pentru recuperarea și reciclarea freonului auto.',
    fGasLegal: true
  }
];

const INITIAL_TECHS: CertifiedTech[] = [
  { id: '1', name: 'Popescu Mihai Andrei', regNumber: 'AGFR-FG-2024-0891', category: 'F-Gas Cat. I (Toate capacitățile)', validUntil: '2029-05-14', county: 'București / Ilfov', company: 'Clima Pro Solution SRL' },
  { id: '2', name: 'Ionescu Radu George', regNumber: 'AGFR-FG-2023-0412', category: 'F-Gas Cat. I + R290 Propan', validUntil: '2028-11-20', county: 'Cluj', company: 'Termo Frigo Tech SRL' },
  { id: '3', name: 'Dumitrescu Cristian', regNumber: 'AGFR-MAC-2024-1102', category: 'Atestat MAC Clima Auto', validUntil: '2029-02-10', county: 'Timiș', company: 'Auto Service Expres' },
  { id: '4', name: 'Stanciu Vasile', regNumber: 'AGFR-FG-2022-0198', category: 'F-Gas Cat. II', validUntil: '2027-08-30', county: 'Iași', company: 'Frigotehnica Moldova' },
  { id: '5', name: 'Radu Gabriel', regNumber: 'AGFR-FG-2025-0014', category: 'F-Gas Cat. I + Amoniac NH3', validUntil: '2030-01-18', county: 'Constanța', company: 'Depozite Frigorifice Port' }
];

const INITIAL_BLOG: BlogPost[] = [
  {
    id: 'ghid-fgas-2026',
    title: 'Noul Regulament UE 2024/573 explicat: Ce se schimbă pentru tehnicieni în 2026?',
    date: '15 Martie 2026',
    readTime: '5 min lectură',
    category: 'Legislație & Standarde',
    summary: 'Eliminarea treptată a HFC-urilor impune recalificarea obligatorie pe agenți naturali. Află până când sunt valabile atestatele vechi.',
    content: 'Regulamentul European 2024/573 a intrat în vigoare cu cerințe stricte privind emisiile de gaze fluorurate. Începând cu 2026, instalarea de pompe de căldură split și echipamente comerciale autonome ce conțin agenți cu GWP ridicat este interzisă sau sever restricționată. Orice tehnician care intervine pe aceste circuite este obligat să dețină un certificat valabil care atestă competența pe agenți frigorifici naturali inflamabili (A3 / A2L - în special R290 propan și R32). AGFR organizează modulele complementare de laborator la UTCB.'
  },
  {
    id: 'r290-secrete',
    title: 'Ghid practic R290 (Propan): Măsuri de siguranță la pompele de căldură rezidențiale',
    date: '28 Februarie 2026',
    readTime: '7 min lectură',
    category: 'Tehnic & Siguranță',
    summary: 'Protocolul corect de purjare cu azot uscat, senzori portabili de detecție gaz inflamabil și unelte ATEX obligatorii în trusă.',
    content: 'Lucrul cu propanul (R290) nu iartă improvizațiile. Deși este ecologic (GWP = 3, ODP = 0), inflamabilitatea sa ridicată impune respectarea strictă a normelor EN 378. Nu utilizați niciodată pompe de vacuum standard care pot produce scântei interne la pornirea motorului. Ventilarea zonei de lucru și utilizarea manometrelor cu certificare de securitate intrinsecă sunt obligatorii. În atelierele AGFR-UTCB, cursanții fac manevre practice reale pe instalații cu descărcare de siguranță.'
  },
  {
    id: 'cariera-salarii',
    title: 'Cât câștigă un frigotehnist atestat F-Gas în 2026? De la ucenic la contracte mari',
    date: '10 Ianuarie 2026',
    readTime: '4 min lectură',
    category: 'Carieră & Piață',
    summary: 'Criza acută de forță de muncă specializată a crescut veniturile în sectorul HVAC-R cu peste 35% în ultimii doi ani.',
    content: 'Trecerea accelerată a consumatorilor către pompe de căldură aer-apă și climatizare eficientă a creat o cerere fără precedent pe piața muncii din România și Europa. Un frigotehnist autorizat, capabil să citească scheme frigorifice complexe și să certifice punerea în funcțiune conform fișei F-Gas, are venituri lunare ce depășesc frecvent 8.000 - 12.000 RON în mediul privat, iar ca instalator autorizat independent veniturile sunt substanțial mai mari.'
  }
];

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ing. Dan Gheorghiu',
    company: 'Director Tehnic, ColdLogistics',
    rating: 5,
    date: 'Februarie 2026',
    courseTaken: 'F-Gas Cat. I + Agenți Naturali',
    text: 'Am trimis o echipă de 6 tehnicieni la laboratorul UTCB. Calitatea standurilor de sudură cu azot și a echipamentelor de vacuumare/încărcare a fost remarcabilă. Fără teorie inutilă, 100% aplicat pe șantier.'
  },
  {
    id: 'rev-2',
    author: 'Alin Mănescu',
    company: 'Tehnician Independent',
    rating: 5,
    date: 'Ianuarie 2026',
    courseTaken: 'Calificare Frigotehnist (de la zero)',
    text: 'Am făcut reconversie profesională la 38 de ani. Cursul de la AGFR mi-a dat diploma oficială și încrederea să montez și să depanez sisteme VRF și pompe de căldură. Recomand cu toată căldura!'
  }
];

export default function App() {
  const [lang, setLang] = useState<'ro' | 'en' | 'de'>('ro');
  const [activeTab, setActiveTab] = useState<'home' | 'courses' | 'registry' | 'blog' | 'enroll' | 'admin'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [step, setStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({ experience: '', equipment: '', type: '' });
  const [quizResult, setQuizResult] = useState<Course | null>(null);

  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [techs] = useState<CertifiedTech[]>(INITIAL_TECHS);
  const [blog] = useState<BlogPost[]>(INITIAL_BLOG);
  const [reviews] = useState<Review[]>(INITIAL_REVIEWS);

  const [searchTech, setSearchTech] = useState('');
  const [searchCounty, setSearchCounty] = useState('');

  const [enrollForm, setEnrollForm] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: 'fgas-cat1',
    type: 'individual',
    companyName: '',
    message: ''
  });
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const [adminPin, setAdminPin] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPinError, setAdminPinError] = useState(false);
  const [newCourse, setNewCourse] = useState({ title: '', category: 'Atestare Legală F-Gas', duration: '', price: '', description: '', fGasLegal: true });

  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const translations = {
    ro: {
      siteTitle: 'ASOCIAȚIA GENERALĂ A FRIGOTEHNIȘTILOR DIN ROMÂNIA',
      subtitle: 'Partener Academic Universitatea Tehnică de Construcții București (UTCB)',
      navHome: 'Acasă',
      navCourses: 'Cursuri & F-Gas',
      navRegistry: 'Registru Tehnicieni',
      navBlog: 'Ghiduri & Blog',
      navEnroll: 'Înscriere Online',
      navAdmin: 'Panou Admin',
      heroTitle: 'Autoritatea Națională în Calificare și Certificare F-Gas',
      heroDesc: 'Laboratoare didactice ultra-moderne la UTCB. Obține atestatul oficial recunoscut în întreaga Uniune Europeană conform Regulamentului (UE) 2024/573.',
      ctaFindCourse: 'Află ce atestat îți trebuie (30 secunde)',
      quizTitle: 'Simulator Carieră: Află ce atestat îți trebuie în 30 de secunde',
      quizStep1: 'Pasul 1: Care este nivelul tău actual de pregătire?',
      quizStep2: 'Pasul 2: Pe ce tipuri de echipamente dorești să intervii?',
      quizStep3: 'Pasul 3: Cum dorești să urmezi formarea?',
      quizResultTitle: 'Recomandarea Oficială AGFR:',
      applyNow: 'Aplică Direct pentru Acest Curs'
    },
    en: {
      siteTitle: 'GENERAL ASSOCIATION OF REFRIGERATION TECHNICIANS OF ROMANIA',
      subtitle: 'Academic Partner: Technical University of Civil Engineering Bucharest (UTCB)',
      navHome: 'Home',
      navCourses: 'Courses & F-Gas',
      navRegistry: 'Technician Registry',
      navBlog: 'Guides & Articles',
      navEnroll: 'Online Application',
      navAdmin: 'Admin CMS',
      heroTitle: 'National Authority in F-Gas Qualification & Certification',
      heroDesc: 'Cutting-edge practical laboratories at UTCB. Acquire European accredited certificates complying with Regulation (EU) 2024/573.',
      ctaFindCourse: 'Find Your Certificate (30 seconds)',
      quizTitle: 'Career Path Selector: Find what certification you need in 30s',
      quizStep1: 'Step 1: What is your current qualification level?',
      quizStep2: 'Step 2: What systems will you be working on?',
      quizStep3: 'Step 3: What is your enrollment format?',
      quizResultTitle: 'AGFR Official Recommendation:',
      applyNow: 'Apply Now For This Course'
    },
    de: {
      siteTitle: 'ALLGEMEINER VERBAND DER KÄLTETECHNIKER IN RUMÄNIEN',
      subtitle: 'Akademischer Partner: Technische Universität für Bauwesen Bukarest (UTCB)',
      navHome: 'Startseite',
      navCourses: 'Kurse & F-Gase',
      navRegistry: 'Techniker-Register',
      navBlog: 'Ratgeber & Fachartikel',
      navEnroll: 'Online-Anmeldung',
      navAdmin: 'Admin-Bereich',
      heroTitle: 'Nationale Behörde für F-Gas Qualifizierung & Zertifizierung',
      heroDesc: 'Moderne Praxis-Laboratorien an der UTCB Bukarest. Erwerben Sie EU-weit gültige Zertifikate nach Verordnung (EU) 2024/573.',
      ctaFindCourse: 'Zertifikatsfinder (30 Sekunden)',
      quizTitle: 'Karriere-Pfadfinder: Finden Sie Ihr passendes Zertifikat in 30 Sek.',
      quizStep1: 'Schritt 1: Wie ist Ihr aktueller Ausbildungsstand?',
      quizStep2: 'Schritt 2: An welchen Anlagen möchten Sie arbeiten?',
      quizStep3: 'Schritt 3: Wie möchten Sie teilnehmen?',
      quizResultTitle: 'Offizielle AGFR-Empfehlung:',
      applyNow: 'Direkt für diesen Kurs bewerben'
    }
  };

  const t = translations[lang];

  const handleQuizAnswer = (question: 'experience' | 'equipment' | 'type', value: string) => {
    const updated = { ...quizAnswers, [question]: value };
    setQuizAnswers(updated);

    if (question === 'experience') setStep(2);
    else if (question === 'equipment') setStep(3);
    else if (question === 'type') {
      if (updated.equipment === 'auto') {
        setQuizResult(courses.find(c => c.id === 'auto-mac') || courses[0]);
      } else if (updated.equipment === 'r290') {
        setQuizResult(courses.find(c => c.id === 'eco-refrigerants') || courses[0]);
      } else if (updated.experience === 'none') {
        setQuizResult(courses.find(c => c.id === 'curs-baza') || courses[0]);
      } else {
        setQuizResult(courses.find(c => c.id === 'fgas-cat1') || courses[0]);
      }
      setStep(4);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin === '2026') {
      setIsAdminLoggedIn(true);
      setAdminPinError(false);
    } else {
      setAdminPinError(true);
    }
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.title || !newCourse.price) return;
    const course: Course = {
      id: 'curs-' + Date.now(),
      ...newCourse
    };
    setCourses([...courses, course]);
    setNewCourse({ title: '', category: 'Atestare Legală F-Gas', duration: '', price: '', description: '', fGasLegal: true });
    showToast('Cursul a fost adăugat cu succes în catalog!');
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter(c => c.id !== id));
    showToast('Cursul a fost eliminat din catalog.');
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollSuccess(true);
    showToast('Dosarul a fost transmis către departamentul competent!');
  };

  const filteredTechs = techs.filter(tech => {
    const matchName = tech.name.toLowerCase().includes(searchTech.toLowerCase()) || 
                      tech.regNumber.toLowerCase().includes(searchTech.toLowerCase());
    const matchCounty = !searchCounty || tech.county.toLowerCase().includes(searchCounty.toLowerCase());
    return matchName && matchCounty;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-2 border border-emerald-400">
          <Check className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP BAR MULTILINGV */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-sky-400 font-medium">
              <Shield className="w-3.5 h-3.5" />
              Certificări Oficiale F-Gas (UE) 2024/573
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline">Departament Instruire UTCB: Bvd. Lacul Tei 122-124, București</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <button 
                onClick={() => setLang('ro')} 
                className={`px-1.5 py-0.5 rounded ${lang === 'ro' ? 'bg-sky-500 text-white font-bold' : 'hover:text-white'}`}
              >
                RO
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-1.5 py-0.5 rounded ${lang === 'en' ? 'bg-sky-500 text-white font-bold' : 'hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('de')} 
                className={`px-1.5 py-0.5 rounded ${lang === 'de' ? 'bg-sky-500 text-white font-bold' : 'hover:text-white'}`}
              >
                DE
              </button>
            </div>
            <button 
              onClick={() => setActiveTab('admin')} 
              className="flex items-center gap-1 text-slate-400 hover:text-white hover:underline"
            >
              <Lock className="w-3 h-3" />
              {t.navAdmin}
            </button>
          </div>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-12 h-12 bg-sky-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md">
              AGFR
            </div>
            <div>
              <h1 className="font-bold text-base sm:text-lg leading-tight text-slate-900 tracking-tight">
                {t.siteTitle}
              </h1>
              <p className="text-xs text-sky-700 font-medium">
                {t.subtitle}
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-slate-600">
            <button onClick={() => setActiveTab('home')} className={`hover:text-sky-600 transition-colors ${activeTab === 'home' ? 'text-sky-600 font-bold' : ''}`}>
              {t.navHome}
            </button>
            <button onClick={() => setActiveTab('courses')} className={`hover:text-sky-600 transition-colors ${activeTab === 'courses' ? 'text-sky-600 font-bold' : ''}`}>
              {t.navCourses}
            </button>
            <button onClick={() => setActiveTab('registry')} className={`hover:text-sky-600 transition-colors ${activeTab === 'registry' ? 'text-sky-600 font-bold' : ''}`}>
              {t.navRegistry}
            </button>
            <button onClick={() => setActiveTab('blog')} className={`hover:text-sky-600 transition-colors ${activeTab === 'blog' ? 'text-sky-600 font-bold' : ''}`}>
              {t.navBlog}
            </button>
            <button 
              onClick={() => setActiveTab('enroll')} 
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition-all"
            >
              {t.navEnroll}
            </button>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2">
            <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-slate-700">{t.navHome}</button>
            <button onClick={() => { setActiveTab('courses'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-slate-700">{t.navCourses}</button>
            <button onClick={() => { setActiveTab('registry'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-slate-700">{t.navRegistry}</button>
            <button onClick={() => { setActiveTab('blog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-medium text-slate-700">{t.navBlog}</button>
            <button onClick={() => { setActiveTab('enroll'); setMobileMenuOpen(false); }} className="block w-full text-center py-2.5 bg-sky-600 text-white font-semibold rounded-lg">{t.navEnroll}</button>
          </div>
        )}
      </header>

      {/* CONTINUT PRINCIPAL */}
      <main className="flex-1">
        {/* TAB 1: ACASA */}
        {activeTab === 'home' && (
          <div>
            {/* HERO */}
            <section className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white py-16 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs px-3 py-1.5 rounded-full font-medium">
                    <Award className="w-4 h-4 text-sky-400" />
                    Diplome Recunoscute MMPS, MEN & Uniunea Europeană
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    {t.heroTitle}
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                    {t.heroDesc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('quiz-section');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all text-sm"
                    >
                      {t.ctaFindCourse}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setActiveTab('courses')}
                      className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all text-sm"
                    >
                      Vezi Toate Cursurile
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                    <div>
                      <div className="text-2xl font-bold text-sky-400">100%</div>
                      <div className="text-xs text-slate-400">Conformitate UE 2024/573</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-sky-400">3.800+</div>
                      <div className="text-xs text-slate-400">Tehnicieni Atestați</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-sky-400">UTCB</div>
                      <div className="text-xs text-slate-400">Bază Didactică de Stat</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Înscrieri Deschise 2026</span>
                      </div>
                      <span className="text-xs bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">Sesiuni Lunare</span>
                    </div>

                    <div className="space-y-4 my-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-white">Laborator Frigotehnie cu Standuri Reale</div>
                          <div className="text-xs text-slate-400">Sudură oxigaz cu perdea de azot, recuperare freon, manometre electronice.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-white">Traseu Rapid pentru Profesioniști</div>
                          <div className="text-xs text-slate-400">Dacă ai experiență în montaj aer condiționat, faci doar modulul legal F-Gas.</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-white">Laborator Mobil la Sediul Companiilor</div>
                          <div className="text-xs text-slate-400">Deplasăm duba cu standuri de lucru pentru grupe corporate de min. 14 persoane.</div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setActiveTab('enroll')}
                      className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-md"
                    >
                      Completează Cererea Online
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* WIDGET INTERACTIV: MINI-CHESTIONAR (3 CLICK-URI) */}
            <section id="quiz-section" className="py-16 px-4 bg-white border-b border-slate-200">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <span className="text-sky-600 text-xs font-bold uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Orientare Profesională Rapidă
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                    {t.quizTitle}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">Răspunde la 3 întrebări simple și află exact cursul legal obligatoriu conform situației tale.</p>
                  {/* SECTIUNE INCREDERE */}
            <section className="py-16 px-4 bg-white border-t border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">Bază Materială & Absolvenți</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Laboratoare Practice Reale la UTCB</h3>
                  <p className="text-slate-500 text-sm mt-2">La AGFR nu predăm frigotehnie pe videoclipuri. Fiecare cursant sudează, face vacuum, depanează și recuperează agent frigorific cu mâna lui pe standuri certificate.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-amber-400 mb-3">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <p className="text-slate-700 text-sm italic">„{rev.text}”</p>
                      </div>
                      <div className="pt-4 border-t border-slate-200 mt-4 flex justify-between items-center text-xs">
                        <div>
                          <div className="font-bold text-slate-900">{rev.author}</div>
                          <div className="text-slate-500">{rev.company}</div>
                        </div>
                        <span className="text-sky-700 font-medium bg-sky-50 px-2 py-1 rounded border border-sky-100">{rev.courseTaken}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* REVISTA FRIGO-CLIMA */}
            <section className="py-12 px-4 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sky-500/20 text-sky-400 rounded-xl">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-sky-400 tracking-wider">Publicație Tehnico-Științifică</span>
                    <h4 className="text-lg font-bold text-white">Revista „FRIGO-CLIMA” (Edițiile UTCB & AGFR)</h4>
                    <p className="text-xs text-slate-400">Sumare de cercetare, articole ASHRAE traduse și studii de caz pentru ingineri și proiectanți HVAC.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button 
                    onClick={() => showToast('Sumarul ediției curente a fost descărcat!')}
                    className="flex-1 md:flex-initial bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Descarcă Cuprins PDF
                  </button>
                  <button 
                    onClick={() => {
                      setEnrollForm({ ...enrollForm, courseId: 'revista', message: 'Doresc abonament anual la Revista Frigo-Clima.' });
                      setActiveTab('enroll');
                    }}
                    className="flex-1 md:flex-initial bg-sky-500 hover:bg-sky-400 text-slate-950 px-4 py-2.5 rounded-lg text-xs font-bold"
                  >
                    Abonament Anual
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: CURSURI */}
        {activeTab === 'courses' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">Catalog Oficial Programe AGFR</h2>
              <p className="text-slate-500 text-sm mt-2">Toate cursurile includ examinarea oficială și eliberarea certificatelor valabile în Uniunea Europeană.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">{course.category}</span>
                      {course.fGasLegal && (
                        <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                          <Shield className="w-3.5 h-3.5" /> Directivă UE 2024/573
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">{course.title}</h3>
                    <p className="text-slate-600 text-xs mt-3 leading-relaxed">{course.description}</p>
                    <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 mt-4 text-xs">
                      <div>
                        <span className="text-slate-400 block">Durată Formare:</span>
                        <span className="font-semibold text-slate-800">{course.duration}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Investiție / Cursant:</span>
                        <span className="font-bold text-sky-700 text-sm">{course.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button 
                      onClick={() => {
                        setEnrollForm({ ...enrollForm, courseId: course.id });
                        setActiveTab('enroll');
                      }}
                      className="flex-1 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-lg text-xs text-center transition-colors"
                    >
                      Completează Formularul de Înscriere
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-sky-950 text-white rounded-2xl p-8 border border-sky-900 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2 space-y-3">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-wider">Serviciu Corporate Dedicat</span>
                <h3 className="text-2xl font-bold text-white">Laborator Didactic Mobil deplasat la sediul firmei dvs.</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pentru companiile cu echipe de minim 14 tehnicieni, asociația AGFR deplasează microbuzul tehnic complet echipat (standuri didactice de lucru, pompe de vid, butelii de azot, detectoare de scurgeri) oriunde în România, evitând costurile de cazare și deplasare ale angajaților la București.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <button 
                  onClick={() => {
                    setEnrollForm({ ...enrollForm, type: 'company', message: 'Solicit ofertă pentru laboratorul didactic mobil la sediul companiei noastre (minim 14 cursanți).' });
                    setActiveTab('enroll');
                  }}
                  className="bg-white text-slate-950 hover:bg-sky-400 font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-lg"
                >
                  Solicită Ofertă Laborator Mobil
                </button>
              </div>
            </div>
          </div>
        )}
                {/* TAB 3: REGISTRU PUBLIC */}
        {activeTab === 'registry' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">Verificare Atestate Tehnice</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Registrul Tehnicienilor Frigotehniști Atestați</h2>
              <p className="text-slate-500 text-sm mt-2">Bază de date publică pentru verificarea atestatelor F-Gas și MAC eliberate de AGFR.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input 
                  type="text" 
                  value={searchTech} 
                  onChange={(e) => setSearchTech(e.target.value)}
                  placeholder="Caută după nume sau serie certificat (ex: AGFR-FG-2024)..." 
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>
              <input 
                type="text" 
                value={searchCounty} 
                onChange={(e) => setSearchCounty(e.target.value)}
                placeholder="Filtru Județ / Oraș..." 
                className="w-full sm:w-48 px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-700 font-semibold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="p-3">Nume Tehnician</th>
                      <th className="p-3">Nr. Certificat F-Gas</th>
                      <th className="p-3">Categorie Calificare</th>
                      <th className="p-3">Județ</th>
                      <th className="p-3">Valabil Până</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {filteredTechs.length > 0 ? (
                      filteredTechs.map((tech) => (
                        <tr key={tech.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-3 font-bold text-slate-900">{tech.name}</td>
                          <td className="p-3 font-mono text-sky-700">{tech.regNumber}</td>
                          <td className="p-3">{tech.category}</td>
                          <td className="p-3">{tech.county}</td>
                          <td className="p-3">{tech.validUntil}</td>
                          <td className="p-3">
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              <CheckCircle className="w-3 h-3 text-emerald-600" /> Atestat Activ
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="p-6 text-center text-slate-400">
                          Niciun tehnician găsit conform filtrelor introduse.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BLOG */}
        {activeTab === 'blog' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">Articole & Legislație Explicată</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Ghiduri Practice pentru Frigotehniști</h2>
              <p className="text-slate-500 text-sm mt-2">Informații clare, fără limbaj de lemn, despre noile regulamente F-Gas și piața muncii.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blog.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="p-6">
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                      <span>{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{article.title}</h3>
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">{article.summary}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <button 
                      onClick={() => setActiveArticle(article)}
                      className="text-sky-600 hover:text-sky-700 text-xs font-bold flex items-center gap-1 group"
                    >
                      Citește Ghidul Complet <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {activeArticle && (
              <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative">
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <span className="text-xs font-bold uppercase text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">{activeArticle.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-3">{activeArticle.title}</h3>
                  <div className="text-xs text-slate-400 mt-1 mb-6">Publicat la {activeArticle.date} • {activeArticle.readTime}</div>
                  <div className="text-sm text-slate-700 leading-relaxed space-y-4">
                    <p className="font-semibold text-slate-800">{activeArticle.summary}</p>
                    <p>{activeArticle.content}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                    <button 
                      onClick={() => setActiveArticle(null)}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-xs font-semibold"
                    >
                      Închide articolul
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: ÎNSCRIERE */}
        {activeTab === 'enroll' && (
          <div className="py-12 px-4 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">Înregistrare Dosar</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Formular Digital de Înscriere la Curs</h2>
              <p className="text-slate-500 text-xs mt-2">
                După completare, cererea dvs. va fi direcționată automat către departamentul competent:  
                <span className="font-mono text-sky-700 font-semibold"> instruire@agfro.ro</span>
              </p>
            </div>

            {enrollSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">Dosarul a fost transmis cu succes!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Veți primi confirmarea pe email împreună cu lista documentelor necesare (copie act identitate, adeverință medicală) și detaliile de plată.
                </p>
                <button 
                  onClick={() => setEnrollSuccess(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2 rounded-lg text-xs transition-colors"
                >
                  Trimite altă înscriere
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nume și Prenume *</label>
                    <input 
                      type="text" 
                      required
                      value={enrollForm.name}
                      onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                      placeholder="ex: Ion Popescu" 
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Număr de Telefon *</label>
                    <input 
                      type="tel" 
                      required
                      value={enrollForm.phone}
                      onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                      placeholder="ex: 0722 000 000" 
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Adresă de Email *</label>
                  <input 
                    type="email" 
                    required
                    value={enrollForm.email}
                    onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                    placeholder="ex: contact@exemplu.ro" 
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Programul Solicitat *</label>
                  <select 
                    value={enrollForm.courseId}
                    onChange={(e) => setEnrollForm({ ...enrollForm, courseId: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {courses.map(c => (
                      <option key={c.id} value={c.id}>{c.title} — {c.price}</option>
                    ))}
                    <option value="corporate-mobile">Laborator Didactic Mobil la Sediul Firmei (&gt; 14 cursanți)</option>
                    <option value="revista">Abonament Revista FRIGO-CLIMA</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <label className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 text-xs">
                    <input 
                      type="radio" 
                      name="userType" 
                      checked={enrollForm.type === 'individual'} 
                      onChange={() => setEnrollForm({ ...enrollForm, type: 'individual' })} 
                    />
                    <span>Persoană Fizică</span>
                  </label>
                  <label className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 text-xs">
                    <input 
                      type="radio" 
                      name="userType" 
                      checked={enrollForm.type === 'company'} 
                      onChange={() => setEnrollForm({ ...enrollForm, type: 'company' })} 
                    />
                    <span>Companie (Factură PJ)</span>
                  </label>
                </div>

                {enrollForm.type === 'company' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Denumire Companie & CUI</label>
                    <input 
                      type="text" 
                      value={enrollForm.companyName}
                      onChange={(e) => setEnrollForm({ ...enrollForm, companyName: e.target.value })}
                      placeholder="ex: SC INSTAL CLIMA SRL (RO12345678)" 
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Observații / Întrebări</label>
                  <textarea 
                    rows={3}
                    value={enrollForm.message}
                    onChange={(e) => setEnrollForm({ ...enrollForm, message: e.target.value })}
                    placeholder="Menționați nivelul de experiență anterioară sau dacă doriți o anumită sesiune din calendar..."
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Trimite Cererea de Înscriere
                </button>
              </form>
            )}
          </div>
        )}

        {/* TAB 6: ADMIN */}
        {activeTab === 'admin' && (
          <div className="py-12 px-4 max-w-4xl mx-auto">
            {!isAdminLoggedIn ? (
              <div className="max-w-sm mx-auto bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-700">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Panou de Administrare AGFR</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">Introdu PIN-ul de securitate pentru a gestiona cursurile și dosarele.</p>

                <form onSubmit={handleAdminLogin} className="space-y-3">
                  <input 
                    type="password" 
                    value={adminPin}
                    onChange={(e) => setAdminPin(e.target.value)}
                    placeholder="PIN Securitate (2026)" 
                    className="w-full text-center tracking-widest text-lg font-mono py-2 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  {adminPinError && (
                    <div className="text-xs text-rose-600 flex items-center justify-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> PIN incorect.
                    </div>
                  )}
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-lg text-xs transition-colors"
                  >
                    Acces Panou
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">CMS Administrare AGFR (Autentificat)</h3>
                    <div className="text-xs text-slate-500">Gestionează catalogul de cursuri și publicații</div>
                  </div>
                  <button 
                    onClick={() => { setIsAdminLoggedIn(false); setAdminPin(''); }}
                    className="text-xs text-rose-600 hover:underline font-semibold"
                  >
                    Ieșire din cont
                  </button>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Adaugă Curs / Program Nou</h4>
                  <form onSubmit={handleAddCourse} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 mb-1 font-semibold">Titlu Curs</label>
                        <input 
                          type="text" 
                          required
                          value={newCourse.title}
                          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                          placeholder="ex: Modul Avansat Pompe Căldură" 
                          className="w-full p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 mb-1 font-semibold">Categorie</label>
                        <input 
                          type="text" 
                          value={newCourse.category}
                          onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                          className="w-full p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 mb-1 font-semibold">Durată</label>
                        <input 
                          type="text" 
                          value={newCourse.duration}
                          onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                          placeholder="ex: 20 ore" 
                          className="w-full p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 mb-1 font-semibold">Preț</label>
                        <input 
                          type="text" 
                          value={newCourse.price}
                          onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                          placeholder="ex: 1.600 RON" 
                          className="w-full p-2 border border-slate-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-700 mb-1 font-semibold">Descriere Program</label>
                      <textarea 
                        rows={2}
                        value={newCourse.description}
                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                        className="w-full p-2 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg">
                      Publică Cursul în Portal
                    </button>
                  </form>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Cursuri Active ({courses.length})</h4>
                  <div className="divide-y divide-slate-100">
                    {courses.map(c => (
                      <div key={c.id} className="py-3 flex justify-between items-center text-xs">
                        <div>
                          <div className="font-bold text-slate-900">{c.title}</div>
                          <div className="text-slate-500">{c.category} • {c.price}</div>
                        </div>
                        <button 
                          onClick={() => handleDeleteCourse(c.id)}
                          className="text-rose-600 hover:text-rose-800 font-semibold"
                        >
                          Șterge
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-600 text-white rounded flex items-center justify-center font-bold text-sm">
                AGFR
              </div>
              <span className="font-bold text-white text-sm">Portal Oficial AGFR</span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Asociația profesională reprezentativă a sectorului de frigotehnie, pompe de căldură și climatizare din România, în parteneriat cu UTCB.
            </p>
          </div>

          <div>
            <div className="font-bold text-white text-sm mb-3">Departamente & Contact</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-sky-400" /> Cursuri: instruire@agfro.ro</li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-sky-400" /> Clima Auto: clima-auto@agfro.ro</li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-sky-400" /> Companii: corporate@agfro.ro</li>
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-sky-400" /> Bvd. Lacul Tei 122-124, Sector 2, București</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-sm mb-3">Publicații & Standarde</div>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Revista Tehnică FRIGO-CLIMA</li>
              <li>• Standardul European EN 378</li>
              <li>• Regulamentul (UE) 2024/573 (F-Gas III)</li>
              <li>• Norme Tehnice ATEX pentru R290 Propan</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white text-sm mb-3">Parteneri Academici</div>
            <p className="text-slate-500 leading-relaxed mb-3">
              Universitatea Tehnică de Construcții București — Facultatea de Inginerie a Instalațiilor.
            </p>
            <div className="text-[11px] text-slate-600">
              © 2026 Asociația Generală a Frigotehniștilor din România. Toate drepturile rezervate.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
