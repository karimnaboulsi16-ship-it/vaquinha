import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

interface DonationCtaProps {
  donationUrl: string;
}

export default function DonationCta({ donationUrl }: DonationCtaProps) {
  return (
    <div className="w-full max-w-[440px] mx-auto text-center px-3 sm:px-4 my-2 animate-in">
      <div className="relative inline-block w-full">
        {/* Outer pulsating radar aura ring */}
        <div className="absolute -inset-2 rounded-3xl bg-green-500/40 blur-md animate-radar pointer-events-none -z-20" />
        <div className="absolute -inset-1 rounded-2xl bg-emerald-400/50 blur-sm animate-pulse pointer-events-none -z-10" />

        {/* Main Bombardeando Green Button */}
        <a
          href={donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex flex-col items-center justify-center w-full py-4 sm:py-5 px-6 sm:px-8 text-white bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-500 hover:from-emerald-500 hover:via-green-400 hover:to-emerald-400 active:scale-[0.97] rounded-2xl transition-all duration-200 border-2 border-emerald-300/80 shadow-[0_0_40px_rgba(34,197,94,0.7),0_10px_30px_rgba(0,0,0,0.6)] animate-bomb cursor-pointer"
        >
          {/* Continuous bright shimmer shine sweep */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer" />

          {/* Button label content */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-2.5 z-10">
            <span className="text-2xl sm:text-3xl animate-bounce">💕</span>
            <span className="text-xl sm:text-2xl md:text-[26px] font-black tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-white">
              AJUDAR AGORA
            </span>
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] group-hover:translate-x-1.5 transition-transform duration-200" />
          </div>

          <div className="relative flex items-center gap-1.5 mt-1 text-[11px] sm:text-xs font-bold text-emerald-950 uppercase tracking-wider bg-emerald-200/90 px-3 py-0.5 rounded-full z-10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-900 fill-emerald-800" />
            <span>Doação Imediata • Salve 47 Cãezinhos</span>
          </div>
        </a>
      </div>

      {/* Trust & security seal */}
      <div className="flex items-center justify-center gap-2 mt-3 text-xs text-zinc-300">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="font-medium">Ambiente 100% seguro • Doação rápida via PIX</span>
      </div>
    </div>
  );
}
