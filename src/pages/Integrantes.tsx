import Section from "@/ui/Section";
import Card from "@/ui/Card";
import { members } from "@/data/members";

export default function Integrantes() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-6">Cleber Gonzaga e Trio</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {members.map((m) => (
          <Card key={m.name}>
            <img src={m.img} alt={"f.name"} className="w-full h-65 object-cover rounded-xl border border-zinc-800" />
            <h3 className="text-xl font-semibold mt-3">{m.name}</h3>
            <p className="text-brand mt-1">{m.role}</p>
            <p className="text-muted mt-2">{m.bio}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
