import type { Metadata } from "next";
import { MeroScene } from "@/components/mero/MeroScene";
import { MERO_SCENES } from "@/lib/mero/scenes";

export const metadata: Metadata = { title: "Radar — ExMero" };

export default function RadarPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-16 text-center">
      <MeroScene id={MERO_SCENES.reading} size="lg" />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-foreground">Radar</h1>
        <p className="text-sm text-foreground-muted leading-relaxed max-w-xs">
          Aquí verás convocatorias activas, próximas a cerrar y actualizaciones
          del portal CNSC. Próximamente disponible.
        </p>
      </div>
    </div>
  );
}
