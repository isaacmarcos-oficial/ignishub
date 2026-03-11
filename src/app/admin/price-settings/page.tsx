'use client';
import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import Formulario from '../_components/formulario';
import TabelaOS from '../_components/tabela';

export default function PriceSettings() {
  const [codigo, setCodigo] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const senhaCorreta = process.env.NEXT_PUBLIC_SECRET_KEY!; // senha fixa

  function verificarCodigo() {
    if (codigo === senhaCorreta) {
      setAutenticado(true);
    } else {
      toast.error("Código incorreto")
    }
  }

  // if (!autenticado) {
  //   return (
  //     <main className="flex flex-col items-center justify-center h-screen gap-6">
  //       <h1 className="text-2xl font-bold">Área Restrita</h1>
  //       <InputOTP maxLength={4} value={codigo} onChange={setCodigo}>
  //         <InputOTPGroup>
  //           <InputOTPSlot index={0} />
  //           <InputOTPSlot index={1} />
  //           <InputOTPSlot index={2} />
  //           <InputOTPSlot index={3} />
  //         </InputOTPGroup>
  //       </InputOTP>
  //       <Button onClick={verificarCodigo}>Entrar</Button>
  //     </main>
  //   );
  // }

  return (
    <div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="flex flex-col items-center justify-center mx-auto px-6 gap-4 max-w-6xl">
        <h1 className="text-3xl font-bold">Precificação</h1>
        <Formulario onResultado={(res) => console.log(res)} />
        <TabelaOS />
      </div>
    </div>
  );
}