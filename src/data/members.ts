export type Member = { name: string; role: string; img?: string, bio: string };
import cleberImg from "@/assets/members/cleber.webp";
import gengiImg from "@/assets/members/gengi.webp";
import jonnyImg from "@/assets/members/jonny.webp";
import rickImg from "@/assets/members/rick.webp";

export const members: Member[] = [
  { name: "Cléber Gonzaga",
    role: "Sanfona",
    img: cleberImg,
    bio: "A sanfona que guia a noite, o balanço pesado do pé de serra com a pressão certa pra ninguém ficar parado, xote e baião com um balanço contagiante." 
  },
  { name: "Gengibre",
    role: "Triângulo",
    img: gengiImg,
    bio: "O brilho do compasso, triângulo afiado, pegada precisa e carisma que costura a zabumba o reco e a sanfona do começo ao fim do baile." },
  { 
    name: "Jonhy Keto",
    role: "Reco-reco",
    img: jonnyImg,
    bio: "O xiado da chinela, a areia das dunas, o reco-reco que temperam as levadas e deixam tudo mais dançante, trazendo o pé de serra raiz."
  },
  { name: "Rick Zabumbão",
    role: "Zabumba",
    img: rickImg,
    bio: "O coração da banda. Graves redondos, viradas certeiras e a pegada que segura o baile sem deixar cair a energia do começo ao fim."
  }
];
