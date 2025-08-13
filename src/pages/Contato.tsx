import Section from "@/ui/Section";
import Card from "@/ui/Card";

export default function Contato() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-6">Contato</h2>
      <Card className="space-y-4">
        <p className="text-muted">
          Fale com <strong>Gengibre</strong> para fechar datas, valores e formato do baile.
        </p>
        <ul className="space-y-2">
          <li>📧 Email: <a className="text-brand underline" href="mailto:calvarenga92@gmail.com">calvarenga92@gmail.com</a></li>
          <li>📱 WhatsApp: <a className="text-brand underline" target="_blank" rel="noreferrer" href="https://wa.me/5511989490162?text=Oi%20Gengibre!%20Quero%20fechar%20um%20Baile%20do%20Gonzaga.">(11) 98949-0162</a></li>
        </ul>
      </Card>
    </Section>
  );
}
