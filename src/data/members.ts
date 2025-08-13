export type Member = { name: string; role: string; img?: string, bio: string };
import cleberImg from "@/assets/members/cleber.webp";
import gengiImg from "@/assets/members/gengi.webp";
import jonnyImg from "@/assets/members/jonny.webp";
import rickImg from "@/assets/members/rick.webp";

export const members: Member[] = [
  { name: "Cléber Gonzaga",
    role: "Sanfona",
    img: cleberImg,
    bio: "Percussionista e produtor. Leva o forró raiz para qualquer canto com alegria e precisão rítmica." 
  },
  { name: "Gengibre",
    role: "Triângulo",
    img: gengiImg,
    bio: "Dá o tom da festa — repertório clássico e moderno com carisma." },
  { 
    name: "Jonhy Keto",
    role: "Reco Reco",
    img: jonnyImg,
    bio: "Sotaque de pé de serra e muita estrada."
  },
  { name: "Rick Zabumbão",
    role: "Zabumba",
    img: rickImg,
    bio: "A pulsação do baile, volume certo e zero dor de cabeça."
  }
];
