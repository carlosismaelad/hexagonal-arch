import TerminalUtil from "@/app/util/TerminalUtil";
import menuFundamentos from "./menuFundamentos";
import menuUsuarios from "./menuUsuarios";

export default async function menuPrincipal() {
  TerminalUtil.titulo("Menu Principal");

  const [indice] = await TerminalUtil.menu([
    "1. Fundamentos",
    "2. Usuário",
    "Sair",
  ]);

  switch (indice) {
    case 0:
      await menuFundamentos();
      break;
    case 1:
      await menuUsuarios();
    default:
      process.exit(0);
  }

  menuPrincipal();
}
