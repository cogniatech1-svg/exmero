export {
  mockUsuario,
  mockConvocatoria,
  mockMisiones,
  mockEstadisticas,
  mockLogros,
  mockMensajeMero,
} from "./data";

// Helpers para simular latencia de API

export async function getMockUsuario() {
  await delay(80);
  const { mockUsuario } = await import("./data");
  return mockUsuario;
}

export async function getMockConvocatoria(id: string) {
  await delay(120);
  const { mockConvocatoria } = await import("./data");
  if (mockConvocatoria.id !== id) return null;
  return mockConvocatoria;
}

export async function getMockMisiones() {
  await delay(100);
  const { mockMisiones } = await import("./data");
  return mockMisiones;
}

export async function getMockEstadisticas() {
  await delay(90);
  const { mockEstadisticas } = await import("./data");
  return mockEstadisticas;
}

export async function getMockLogros() {
  await delay(110);
  const { mockLogros } = await import("./data");
  return mockLogros;
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
