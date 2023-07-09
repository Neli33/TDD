import { describe, it, expect } from "@jest/globals";

function formatarTempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const s = segundos % 60;

  return `${horas}h ${minutos}m ${s}s`;
}

describe("formatarTempo", () => {
  it('deveria retornar "0h 0m 30s" para 30 segundos', () => {
    const tempoFormatado = formatarTempo(30);
    expect(tempoFormatado).toBe("0h 0m 30s");
  });

  it('deveria retornar "0h 5m 50s" para 350 segundos', () => {
    const tempoFormatado = formatarTempo(350);
    expect(tempoFormatado).toBe("0h 5m 50s");
  });

  it('deveria retornar "1h 2m 5s" para 3725 segundos', () => {
    const tempoFormatado = formatarTempo(3725);
    expect(tempoFormatado).toBe("1h 2m 5s");
  });
});
