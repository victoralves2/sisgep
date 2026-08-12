// app/(sistema)/layout.tsx
import Navbar from "@/components/Navbar";

export default function SistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // A div que aplica a cor de fundo e o padding em todas as páginas do sistema
    <div className="flex-1 w-full flex flex-col bg-[#dbe4f4] p-4 md:p-6">
      
      {/* A Navbar renderizada para todas as rotas internas */}
      <Navbar />
      
      {/* Aqui entrarão as páginas específicas (ex: page.tsx de Denúncias) */}
      {children}
    </div>
  );
}