import Section from "@/ui/Section";
import Button from "@/ui/Button";
import Card from "@/ui/Card";
import Badge from "@/ui/Badge";
import { Link } from "react-router-dom";
import avisoImg from "@/assets/aviso.png";
export default function Home() {
  return (
    <>
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge>Caravana Forrozeira</Badge>
              <Badge>Som + DJ + Show</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Baile do Gonzaga</h1>
            <p className="text-muted max-w-prose">
              A proposta é simples e antiga como as caravanas: nós levamos TUDO — Som, DJ, Banda e aquela energia única! <br /><br />Fazemos o show em qualquer casa, quintal ou sala, mesmo sem
              estrutura. Resultado? Mais baile, mais gente dançando, mais forró, PURINHO, PURINHO!!!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/integrantes"><Button>Conheça o grupo</Button></Link>
              <Link to="/fotos"><Button variant="ghost">Ver fotos</Button></Link>
              </div>
          </div>
          <Card className="relative md:h-80 overflow-hidden p-6 flex items-center justify-center text-center">
            <img
              src={avisoImg}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 m-auto max-h-[85%] object-contain opacity-35"
            />
            <p className="text-muted">
              💡 Levar o baile até as pessoas reduz custo de produção, aumenta a frequência de shows e
              melhora a margem. Bora marcar?
            </p>
          </Card>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-6">Como funciona</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Você chama", "Whats (11) 98949-0162 • Gengibre Combinamos a data e o tipo do evento"],
            ["Chegamos com DJ, som e banda", "Montamos o som completo, com qualidade e eficiência."],
            ["A festa rola", "Forró de respeito, volume certo, com balanço e muito pé de serra! Zero dor de cabeça."]
          ].map(([t,d]) => (
            <Card key={t}><h3 className="font-semibold text-lg">{t}</h3><p className="text-muted mt-2">{d}</p></Card>
          ))}
        </div>
      </Section>
    </>
  );
}
