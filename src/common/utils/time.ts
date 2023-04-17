export function tempoParaSegundos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const horasEmSegundos = parseInt(horas) * 3600;
  const minutosEmSegundos = parseInt(minutos) * 60;

  return horasEmSegundos + minutosEmSegundos + parseInt(segundos);
}

export function segundosParaHoras({ tempo }: { tempo: number | undefined }) {
  const convertido = tempo
    ? new Date(tempo * 1000).toISOString().slice(11, 19)
    : "";

  return String(convertido).split("");
}
