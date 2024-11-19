import TerminalUtil from "@/app/util/TerminalUtil";
import polimorfismo from "../fundamentos/polimorfismo";
import dip from "../fundamentos/dependenceInversionPrinciple";

export default async function menuFundamentos() {
  TerminalUtil.titulo("Fundamentos");

  const [indice] = await TerminalUtil.menu([
    "1. Polimorfismo",
    "2. D.I.P",
    "3. Voltar",
  ]);

  switch (indice) {
    case 0:
      await polimorfismo();
      break;
    case 1:
      await dip();
      break;
    default:
      return;
  }

  await menuFundamentos();
}
