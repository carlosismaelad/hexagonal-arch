import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";
import Carro from "@/core/fundamentos/Carro";
import Civic from "@/core/fundamentos/Civic";
import { terminal } from "terminal-kit";

export default async function dip() {
  TerminalUtil.titulo("D.I.P");
  const [tipo] = await TerminalUtil.selecao("Tipo de carro?", [
    "Ferrari",
    "Civic",
    "Fusca",
  ]);

  let carro: Carro;
  switch (tipo) {
    case 0:
      carro = new Ferrari();
      break;
    case 1:
      carro = new Civic();
      break;
    default:
      carro = new Fusca();
      break;
  }
  corrida(carro, terminal.red);
  await TerminalUtil.esperarEnter();
}
