// Import all faculty images
import panditImg from "./fac_img/Santishree Dhulipudi Pandit.jpg";
import brajeshImg from "./fac_img/brajesh pandey rector 1.jpg";
import dipendraImg from "./fac_img/dipendra nath das rector 2.jpg";
import bijoyImg from "./fac_img/Bijoy Kumar Kuanr.jpg";
import satendraImg from "./fac_img/satendra singh.jpg";
import pankajImg from "./fac_img/pankaj thakur.jpg";
import prakashImg from "./fac_img/prakash kanoo.png";
import sandeepImg from "./fac_img/sandeep kumar.png";
import balajiImg from "./fac_img/balaji birajdar.jpg";
import pratimaImg from "./fac_img/pratima solanki.jpg";
import tulikaImg from "./fac_img/tulika prasad.jpg";
import vinodImg from "./fac_img/vinod kumar.png";
import nehaImg from "./fac_img/neha paras.png";


// /keynote speaker
import adish from "./keynoteSpeaker/adish tyagi.png";
import ajit from "./keynoteSpeaker/ajit khosla.png";
import anup from "./keynoteSpeaker/anup kumar.jpg";
import dinesh from "./keynoteSpeaker/dinesh pathak.jpg";
import goutam from "./keynoteSpeaker/goutam dalapati.png";
import prabhat from "./keynoteSpeaker/Prabhat-Chaudhari.webp";
import rajan from "./keynoteSpeaker/rajan patel.png";
import sameer from "./keynoteSpeaker/samir rahatekar.jpeg";
import suman from "./keynoteSpeaker/suman k dhar.jpg";
import kalkur from "./keynoteSpeaker/TS Kalkur.webp";
import veerakumar from "./keynoteSpeaker/V Veerakumar.jpg";
import vijay from "./keynoteSpeaker/vijay-kumar-thakur.jpg";
import vikram from "./keynoteSpeaker/vikram singh.png";
import zainul from "./keynoteSpeaker/Zainul Aabdin.png";


export const data = [
  {
    title: "Message from Convener",
    text: "It gives me immense pleasure to welcome you all to ICRANN-2025...",
    img: "https://via.placeholder.com/120",
    name: "Dr. ABC",
    role: "Conference Convener",
  },
  {
    title: "Message from Organizing Secretary",
    text: "We are delighted to invite participants from across the globe...",
    img: "https://via.placeholder.com/120",
    name: "Prof. XYZ",
    role: "Organizing Secretary",
  },
  {
    title: "Message from Co-Convener",
    text: "ICRANN-2025 will bring together leading scientists and researchers...",
    img: "https://via.placeholder.com/120",
    name: "Dr. LMN",
    role: "Co-Convener",
  },
];
export const facultyData = [
  {
    role: "Patron",
    members: [
      { name: "Hon. VC Prof. S Dhulipudi Pandit, JNU", src: panditImg },
    ],
  },
  {
    role: "Co-Patrons",
    members: [
      { name: "Prof. Brajesh Kumar Pandey (Rector-I), JNU", src: brajeshImg },
      { name: "Prof. Dipendra Nath Das (Rector-II), JNU", src: dipendraImg },
    ],
  },
  {
    role: "Chair",
    members: [
      { name: "Prof. Bijoy Kumar Kuanr, SCNS, JNU", src: bijoyImg },
    ],
  },
  {
    role: "Conveners",
    members: [
      { name: "Prof. Satyendra Singh, SCNS, JNU", src: satendraImg },
      { name: "Dr. Pankaj Thakur, SCNS, JNU", src: pankajImg },
    ],
  },
  {
    role: "Organizing Secretaries",
    members: [
      { name: "Dr. Prakash Kanoo, SCNS, JNU", src: prakashImg },
      { name: "Dr. Sandeep Kumar, SCNS, JNU", src: sandeepImg },
      { name: "Dr. Balaji Birajdar, SCNS, JNU", src: balajiImg },
      { name: "Dr. Pratima Solanki, SCNS, JNU", src: pratimaImg },
      { name: "Dr. Tulika Prasad, SCNS, JNU", src: tulikaImg },
      { name: "Dr. Vinod Kumar, SCNS, JNU", src: vinodImg },
      { name: "Dr. Neha Paras, SCNS, JNU", src: nehaImg },
    ],
  },
  {
    role: "Treasurer",
    members: [
      { name: "Dr. Pankaj Thakur, SCNS, JNU", src: pankajImg },
      { name: "Dr. Prakash Kanoo, SCNS, JNU", src: prakashImg },
    ],
  },
];

export const impDates = [
    { event: "Abstract Submission Starts", date: "1st September 2025" },
    { event: "Abstract Submission Deadline (Extended)", date: "18th November 2025"},
    { event: "Notification of Abstract Acceptance / Rejection", date: "19th November 2025" },
    // { event: "Last Date of Early Bird Registration and Full Paper Submission", date: "15th October 2025" },
    { event: "Last Date of Registration", date: "22nd November 2025" },
    // { event: "Camera Ready Full Paper Submission Deadline", date: "15th November 2025" },
    { event: "Conference Dates", date: "20th-21st December 2025" },
];

export const registrationFee = [
  // --- Early Bird Categories ---
  {
    category: "Student / Research Scholar (Early Bird)",
    Indian: "₹3000",
    International: "$150",
    type: "early",
  },
  {
    category: "Faculty from Academics (Early Bird)",
    Indian: "₹4000",
    International: "$200",
    type: "early",
  },

  // --- Regular Categories ---
  {
    category: "Student / Research Scholar",
    Indian: "₹4000",
    International: "$200",
    type: "regular",
  },
  {
    category: "Faculty from Academics",
    Indian: "₹5000",
    International: "$250",
    type: "regular",
  },
  {
    category: "Delegates from Industry",
    Indian: "₹10000",
    International: "$400",
    type: "regular",
  },
  { category: "Co-author/Attendee",
     Indian: "₹3,000",
    International:"$100",
    type:"regular"
     },
];
export const speakers = [
  {
    name: "Prof. T. S. Kalkur",
    designation: "University of Colorado, Colorado, USA",
    image: kalkur,
  },
  {
    name: "Prof. Ajit Khosla",
    designation: "China and Yamagata University, Japan",
    image: ajit,
  },
  {
    name: "Prof. Sameer Rahatekar",
    designation: "Cranfield, UK",
    image: sameer,
  },
  {
    name: "Dr. Goutam Dalapati",
    designation: "Hyden, Singapore",
    image: goutam,
  },
  {
    name: "Prof. Suman K. Dhar",
    designation: "Vice Chancellor, TERI",
    image: suman,
  },
  {
    name: "Dr. Dinesh Pathak",
    designation: "UWI, West Indies",
    image: dinesh,
  },
  {
    name: "Dr. V. Veerakumar",
    designation: "Minnesota, USA",
    image: veerakumar,
  },
  {
    name: "Prof. Vijay Kumar Thakur",
    designation: "SRUC, UK",
    image: vijay,
  },
  {
    name: "Dr. Zainul Aabdin",
    designation: "IMRE, A*STAR, Singapore",
    image: zainul,
  },
  {
    name: "Dr. Adish Tyagi",
    designation: "BARC, Mumbai",
    image: adish,
  },
  {
    name: "Dr. Vikram Singh",
    designation: "IMDEA Energy Institute, Madrid, Spain",
    image: vikram,
  },
  {
    name: "Dr. Anup Kumar",
    designation: "Trinity College, Ireland",
    image: anup,
  },
  {
    name: "Prof. Rajan Patel",
    designation: "Director, Interdisciplinary Research, JMI, New Delhi",
    image: rajan,
  },
  {
    name: "Dr. Prabhat Chaudhary",
    designation: "AIIMS, New Delhi",
    image: prabhat,
  },
];

export const sponsorshipOptions = [
  {
    category:
      "Diamond Sponsor (with one stall, advertisement on Conference banner, full page in Conference booklet, branding on registration desk)",
    price: "₹1,00,000",
  },
  {
    category:
      "Gold Sponsor (with one stall, advertisement on Conference banner, half page in Conference booklet)",
    price: "₹75,000",
  },
  {
    category:
      "Silver Sponsor (with one stall, half page in Conference booklet)",
    price: "₹50,000",
  },
  {
    category:
      "Bronze Sponsor (with one stall, quarter page in Conference booklet)",
    price: "₹25,000",
  },
  {
    category: "Full page color ad in Conference Program",
    price: "₹25,000",
  },
  {
    category: "Half page color ad in Conference Program",
    price: "₹15,000",
  },
  {
    category: "Quarter page color ad in Conference Program",
    price: "₹10,000",
  },
  {
    category: "Branding the registration counters",
    price: "₹5,000",
  },
  {
    category: "Exhibition Stall (3 Mtr. X 2 Mtr.)",
    price: "₹20,000",
  },
];


