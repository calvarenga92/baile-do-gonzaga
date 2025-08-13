import Section from "@/ui/Section";
import Card from "@/ui/Card";
import { useEffect, useRef, useState } from "react";

type Foto = { id: string; url: string; name: string };

export default function Fotos() {
  const [fotos, setFotos] = useState<Foto[]>(() => {
    try {
      const raw = localStorage.getItem("bdg_fotos");
      return raw ? (JSON.parse(raw) as Foto[]) : [];
    } catch { return []; }
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { localStorage.setItem("bdg_fotos", JSON.stringify(fotos)); }, [fotos]);

  function onFiles(files: FileList | null) {
    if (!files) return;
    const readers = Array.from(files).map(file => new Promise<Foto>((resolve) => {
      const r = new FileReader();
      r.onload = () => resolve({ id: crypto.randomUUID(), url: r.result as string, name: file.name });
      r.readAsDataURL(file);
    }));
    Promise.all(readers).then(arr => setFotos(prev => [...arr, ...prev]));
  }
  function remove(id: string) { setFotos(prev => prev.filter(f => f.id !== id)); }

  return (
    <Section>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Fotos dos shows</h2>
        <div className="flex gap-2">
          <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e)=>onFiles(e.target.files)} />
          <button className="btn-primary" onClick={()=>inputRef.current?.click()}>Adicionar fotos</button>
          <button className="btn-ghost" onClick={()=>setFotos([])}>Limpar tudo</button>
        </div>
      </div>
      <Card className="mb-6">
        <p className="text-muted">
          As fotos ficam salvas no seu navegador (localStorage). Para publicar na web,
          conecte depois com um storage (ex.: Firebase Storage, S3).
        </p>
      </Card>
      {fotos.length === 0 ? (
        <Card className="text-center text-muted">Sem fotos ainda. Clique em “Adicionar fotos”.</Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fotos.map(f => (
            <div key={f.id} className="relative group">
              <img src={f.url} alt={f.name} className="w-full h-40 object-cover rounded-xl border border-zinc-800" />
              <button onClick={()=>remove(f.id)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 btn-ghost px-2 py-1 text-xs">Remover</button>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
