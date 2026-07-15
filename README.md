# ExMero — Sistema

Motor CognIA de preparación para concursos públicos.

## Estructura

```
sistema/
├── frontend/     # Next.js 15 (App Router) — lo que el usuario ve
├── backend/      # API (Proceso 1+)
├── packages/
│   ├── ui/       # @exmero/ui — Design System
│   └── config/   # @exmero/config — TypeScript, ESLint, Tailwind compartidos
├── database/     # Drizzle schema + migraciones (Proceso 1+)
├── scripts/      # Utilidades de desarrollo
└── tests/        # Tests end-to-end
```

## Documentación del producto

La documentación de estrategia, marca, modelo de conocimiento y roadmap vive en
el directorio padre (`03_Productos/exmero/`), fuera de este repositorio.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Gobernanza técnica

Ver `ENGINEERING_CONSTITUTION.md` en `03_Productos/exmero/`.
