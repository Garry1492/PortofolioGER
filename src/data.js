import HeroImage from "/assets/hero-img.webp";
import logoImage from "/assets/logo1.png";

const Image = {
  HeroImage, 
};

const Image1 = {
  logoImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/Jupyter.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/python.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/davinci.png";
import Tools8 from "/assets/tools/capcut.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/premiere.png";
import Tools11 from "/assets/tools/aftereffect.png";
import Tools12 from "/assets/tools/figma.png";
import Tools13 from "/assets/tools/colab.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools3,
    nama: "Jupyter Notebook",
    ket: "Code Editor",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Python",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Davinci Resolve",
    ket: "Editing Software",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Capcut",
    ket: "Editing Software",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Adobe Premiere Pro",
    ket: "Editing Software",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Adobe After effect",
    ket: "Editing Software",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Google Colab",
    ket: "Code Editor",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/PASI.png";
import Proyek2 from "/assets/proyek/tesis.png";
import Proyek3 from "/assets/proyek/UID.png";
import Proyek4 from "/assets/proyek/2021.png";
import Proyek5 from "/assets/proyek/2022.png";
import Proyek6 from "/assets/proyek/ger.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website PASI",
    desk: "This website is the official company profile of a NGO, created to share who they are and what they do.",
    tools: ["Wordpress", "CSS", "Javascript",],
    dad: "200",
    link: "https://ayamsejahtera.id/"

  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Cataract Classification",
    desk: "yup, This is my thesis project, where I discussed and built a model to classify cataracts in the human eye.",
    tools: ["Python", "TensorFlow", "CNN", "Vgg-19"],
    dad: "300",
    link: "https://drive.google.com/file/d/1IgA7m_q2f7tKJNiVR8BjFa4aSKuWu6QN/view?usp=sharing"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Unity in Diversity",
    desk: "This project was created for a competition in celebration of Semarang’s anniversary. Btw this video placed #4 😄.",
    tools: ["Premiere Pro", "After Effect", "Davinci Resolve"],
    dad: "400",
    link:"https://youtu.be/aRmpMwxRe0Y"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "HMIF Profile Video 2021",
    desk: "A profile video project I contribute for an college organization I used to be part of (2021).",
    tools: ["Premiere Pro", "After Effect"],
    dad: "500",
    link:"https://www.youtube.com/watch?v=3NRnR2bdZBI"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "HMIF Profile Video 2022",
    desk: "A profile video project I contribute for an college organization I used to be part of (2022).",
    tools: ["Premiere Pro", "After Effect"],
    dad: "600",
    link:"https://www.youtube.com/watch?v=F-4QQuaeKfs&t=701s"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "GER. PROJECT",
    desk: "If you wondering what is GER.PROJECT, basically that is my small business that run in the IT and creative field.",
    tools: ["Me", "My Self", "&","I"],
    dad: "700",
    link:"#Home"
  },
];
import Equipment1 from "/assets/proyek/leptop.png";
import Equipment2 from "/assets/proyek/cam.png";
import Equipment3 from "/assets/proyek/lensa1.png";
import Equipment4 from "/assets/proyek/lensa2.png";
import Equipment5 from "/assets/proyek/ipad.png";
import Equipment6 from "/assets/proyek/hp.png";
import Equipment7 from "/assets/proyek/tws.png";
import Equipment8 from "/assets/proyek/jam.png";

export const listEquipment = [
  {
    id: 1,
    gambar: Equipment1,
    nama: "ROG G531GD",
    desk: "kinda old, but working as well",
    tools: ["Intel i5 gen 9", "GTX1050"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Equipment2,
    nama: "Panasonic Lumix G85",
    desk: "MFT camera from lumix",
    tools: ["IBIS", "4k", "Flip Screen"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Equipment3,
    nama: "Lumix Lens 25mm f1.7",
    desk: "Super cinematic lens",
    tools: ["O.I.S"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Equipment4,
    nama: "Lumix Lens 16-35mm f3.5-5.6",
    desk: "cheap and powerfull",
    tools: ["O.I.S"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Equipment5,
    nama: "Ipad Gen 10",
    desk: "an entry level ipad but not that bad",
    tools: ["Apple A11 Bionic", "64 GB Storage"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Equipment6,
    nama: "Samsung A52",
    desk: "Daily driver phone",
    tools: ["Snapdragon 720", "256 GB Storage"],
    dad: "700",
  },
  {
    id: 7,
    gambar: Equipment7,
    nama: "Soundcore Liberty 4nc",
    desk: "Sometimes you need a silence",
    tools: ["LDAC", "ANC"],
    dad: "700",
  },
  {
    id: 8,
    gambar: Equipment8,
    nama: "Huawei GT 5 Pro",
    desk: "Time is Money, Right?",
    tools: ["can show time"],
    dad: "700",
  },
];