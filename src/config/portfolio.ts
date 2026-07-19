import cropMobile1 from '../assets/images/projects/cropForecast/CropforecastMobile_1.jpg'
import cropMobile2 from '../assets/images/projects/cropForecast/CropforecastMobile_2.jpg'
import cropMobile3 from '../assets/images/projects/cropForecast/CropforecastMobile_3.jpg'
import cropWeb1 from '../assets/images/projects/cropForecast/Web1.png'
import cropWeb2 from '../assets/images/projects/cropForecast/Web2.png'
import ledger1 from '../assets/images/projects/DagupanGovLedger/748053342_1815650746076989_4377535748222165720_n.jpg'
import ledger2 from '../assets/images/projects/DagupanGovLedger/748704621_1475929937904871_532318235194999167_n.jpg'
import ledger3 from '../assets/images/projects/DagupanGovLedger/748985867_1430165125830789_3239481046344952174_n.jpg'
import pyvid1 from '../assets/images/projects/pyVidNote/pyVideNote1.png'
import pyvid2 from '../assets/images/projects/pyVidNote/pyVideNote2.png'
import pyvid3 from '../assets/images/projects/pyVidNote/pyVideNote3.png'
import pyvid4 from '../assets/images/projects/pyVidNote/pyVideNote4.png'
import greenovationDesktop from '../assets/images/projects/greenovation/greenovation-desktop.png'
import greenovationMobile from '../assets/images/projects/greenovation/greenovation-mobile.png'
import greenovationMobile1 from '../assets/images/projects/greenovation/greenovation-mobile1.png'
import greenovationMobile2 from '../assets/images/projects/greenovation/greenovation-mobile2.png'
import type { Experience, Project, StackGroup } from '../types/portfolio'

export const contact = {
  email: 'catabayjosiah19@gmail.com',
  phone: '+63 995 965 2206',
  location: 'Dagupan City, Philippines',
  github: 'https://github.com/Hosayah',
  linkedin: 'https://linkedin.com/in/hosayah',
}

export const projects: Project[] = [
  {
    slug: 'cropforecast',
    name: 'CropForecast',
    descriptor: 'AI-Driven Agricultural Decision Support System',
    role: 'Full-Stack Engineer',
    context: 'Academic Project',
    summary: 'A full-stack agricultural intelligence platform supporting farmers and agricultural administrators through predictive analytics, machine learning, and AI-assisted decision-making.',
    outcome: 'Turned a large, multi-year agricultural dataset into an accessible decision-support system across web and Android clients.',
    highlights: [
      'Achieved R² = 0.9929, RMSE = 2,221.70, and MAE = 544.44 on a 32,928-row holdout evaluation for model v1.2.',
      'Architected a shared Flask backend with 91 REST endpoints for authentication, farms, recommendations, analytics, administration, knowledge workflows, and the ML lifecycle.',
      'Developed a React SPA with 37 route definitions and protected navigation for five distinct user roles.',
      'Engineered a 165,336-row dataset spanning 2010–2025, 53 provinces, and 89 crops, then refreshed it to 167,699 rows for the 2025 Q4 release.',
    ],
    stack: ['Python', 'Flask', 'React', 'REST APIs', 'Random Forest', 'MySQL', 'Kotlin'],
    images: [
      { src: cropWeb1, alt: 'CropForecast web dashboard displaying agricultural analytics', type: 'desktop', featured: true, caption: 'Agricultural analytics dashboard' },
      { src: cropWeb2, alt: 'CropForecast web application decision-support interface', type: 'desktop', featured: true, caption: 'Web decision-support workspace' },
      { src: cropMobile1, alt: 'CropForecast Android application home screen', type: 'mobile', caption: 'Mobile home' },
      { src: cropMobile2, alt: 'CropForecast mobile crop recommendation screen', type: 'mobile', caption: 'Crop recommendations' },
      { src: cropMobile3, alt: 'CropForecast mobile agricultural analytics screen', type: 'mobile', caption: 'Mobile analytics' },
    ],
  },
  {
    slug: 'dagupan-gov-ledger',
    name: 'DagupanGovLedger',
    descriptor: 'Blockchain Transparency Platform + LLM Assistant',
    role: 'Lead Engineer',
    context: 'Academic Project',
    summary: 'A transparency platform designed to provide tamper-resistant records of Dagupan City government spending and make budgets accessible and auditable for citizens, officials, and auditors.',
    outcome: 'Connected immutable public records with approachable natural-language explanations of budgets, audits, and spending data.',
    highlights: [
      'Built blockchain-backed public spending records using Ethereum smart contracts.',
      'Designed workflows that pair on-chain hashes with off-chain metadata for transparent, verifiable audits.',
      'Integrated an LLM assistant to explain budgets, audits, and spending in natural language.',
      'Owned backend APIs for authentication, role-based access, audit workflows, and analytics.',
    ],
    stack: ['Solidity', 'Ethereum', 'PHP', 'REST APIs', 'MySQL', 'LLM Integration'],
    images: [
      { src: ledger1, alt: 'DagupanGovLedger public transparency dashboard', type: 'desktop', featured: true, caption: 'Public transparency dashboard' },
      { src: ledger2, alt: 'DagupanGovLedger government spending records interface', type: 'desktop', caption: 'Government spending records' },
      { src: ledger3, alt: 'DagupanGovLedger budget and audit detail interface', type: 'desktop', caption: 'Budget and audit details' },
    ],
  },
  {
    slug: 'pyvidnote',
    name: 'PyVidNote',
    descriptor: 'NLP Video Transcription & Summarization',
    role: 'ML Engineer',
    context: 'Academic Project',
    summary: 'A Python mobile application that converts video into transcripts with Whisper and concise summaries with BART, helping users comprehend and review key information efficiently.',
    outcome: 'Delivered an end-to-end, mobile-friendly NLP workflow from file selection to extracted text and summary.',
    highlights: [
      'Built a video-to-text-to-summary pipeline using Whisper for automatic speech recognition and BART for abstractive summarization.',
      'Integrated model inference into a cohesive Python mobile application.',
      'Designed a focused interface for file selection, transcription, summarization, and fast content review.',
    ],
    stack: ['Python', 'Whisper', 'BART', 'Transformers', 'PyTorch', 'NLP'],
    images: [
      { src: pyvid1, alt: 'PyVidNote mobile application welcome screen', type: 'mobile', caption: 'Welcome screen' },
      { src: pyvid2, alt: 'PyVidNote video file selection interface', type: 'mobile', caption: 'Video selection' },
      { src: pyvid3, alt: 'PyVidNote generated transcription screen', type: 'mobile', caption: 'Generated transcript' },
      { src: pyvid4, alt: 'PyVidNote generated video summary screen', type: 'mobile', caption: 'Generated summary' },
    ],
  },
  {
    slug: 'greenovation',
    name: 'Greenovation',
    descriptor: 'Environmental Technology Educational Website',
    role: 'Lead Developer',
    context: 'Academic Team Project',
    summary: 'A responsive educational website showcasing environmental technologies across waste management, green building, and sustainable agriculture. I led the development team and handled the site’s implementation and Firebase deployment.',
    outcome: 'Delivered a publicly accessible environmental education website and led the student team from frontend implementation through Firebase deployment.',
    highlights: [
      'Led the project’s development and coordinated the Solar Syntax student team.',
      'Built the responsive, multi-page frontend using HTML, CSS, and vanilla JavaScript.',
      'Organized educational content across environmental-technology categories and detailed innovation pages.',
      'Created reusable navigation and footer fragments loaded through JavaScript.',
      'Deployed and maintained the public website through Firebase Hosting.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Firebase Hosting'],
    images: [
      { src: greenovationDesktop, alt: 'Greenovation desktop homepage showing environmental technology categories and featured innovations', type: 'desktop', featured: true, caption: 'Responsive educational homepage' },
      { src: greenovationMobile, alt: 'Greenovation mobile homepage showing its introduction and featured innovations', type: 'mobile', caption: 'Mobile homepage' },
      { src: greenovationMobile1, alt: 'Greenovation mobile homepage showing its introduction and featured innovations', type: 'mobile', caption: 'Mobile homepage' },
      { src: greenovationMobile2, alt: 'Greenovation mobile homepage showing its introduction and featured innovations', type: 'mobile', caption: 'Mobile homepage' },
    ],
    liveUrl: 'https://greenovation-c6e72.web.app/index.html',
    supporting: true,
    sections: [
      { label: 'Purpose', text: 'Make environmental technologies easier to discover across waste management, green building, and sustainable agriculture.' },
      { label: 'Personal contribution', text: 'Handled nearly all development work from information architecture and interface implementation through deployment.' },
      { label: 'Frontend implementation', text: 'Built a responsive multi-page experience with HTML, CSS, vanilla JavaScript, and reusable navigation and footer fragments.' },
      { label: 'Team leadership', text: 'Led and coordinated the Solar Syntax student team throughout the academic project.' },
      { label: 'Deployment', text: 'Published the completed website through Firebase Hosting and maintained its live deployment.' },
    ],
  },
]

export const stackGroups: StackGroup[] = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'PHP', 'Java', 'SQL'], evidence: 'Core languages used across CropForecast, DagupanGovLedger, and PyVidNote.' },
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'], evidence: 'Role-based dashboards, responsive interfaces, single-page applications, and the live Greenovation educational website.' },
  { category: 'Backend', items: ['REST APIs', 'Model Inference APIs', 'JWT Authentication', 'Flask'], evidence: '91-endpoint shared backend, protected workflows, and deployed model access patterns.' },
  { category: 'AI / ML', items: ['Random Forest', 'Whisper', 'BART', 'Transformers', 'PyTorch', 'LLM Integration', 'Pandas', 'Matplotlib', 'Sci-kit'], evidence: 'Forecasting, speech recognition, summarization, and natural-language budget assistance.' },
  { category: 'Data', items: ['MySQL', 'Firebase', 'Supabase'], evidence: 'Relational application data, authentication workflows, and cloud-backed products.' },
  { category: 'Blockchain', items: ['Solidity', 'Ethereum'], evidence: 'Immutable transaction records and verifiable public-spending audit trails.' },
  { category: 'Deployment', items: ['Firebase Hosting'], evidence: 'Public deployment and hosting of the Greenovation multi-page website.' },
]

export const experiences: Experience[] = [
  { date: '2023 — 2024', title: 'Web Developer (OJT)', org: 'PHINMA University of Pangasinan', text: 'Delivered a production-ready web system recognized with the Best in Business Venture award.' },
  { date: 'School Project', title: 'Full-Stack Engineer', org: 'CropForecast', text: 'Led full-stack architecture spanning a Flask API, role-based React application, Android client, agricultural data engineering, and model evaluation.' },
  { date: 'School Project', title: 'Lead Engineer', org: 'DagupanGovLedger', text: 'Designed blockchain-backed audit workflows, an LLM budget assistant, authentication, role-based access, and analytics APIs.' },
  { date: 'School Project', title: 'ML Engineer', org: 'PyVidNote', text: 'Built an end-to-end NLP inference pipeline for mobile video transcription and abstractive summarization.' },
  { date: 'Academic Team Project', title: 'Lead Developer', org: 'Greenovation', text: 'Led the Solar Syntax student team, implemented the responsive multi-page frontend, and deployed the public website through Firebase Hosting.' },
]
