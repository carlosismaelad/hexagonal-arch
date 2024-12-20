import TerminalUtil from "@/app/util/TerminalUtil";
import menuPrincipal from "./menuPrincipal";
import registrarUsuario from "../usuario/registrarUsuario";

export default async function menuUsuarios() {
  TerminalUtil.titulo("Usuários");

  const [indice] = await TerminalUtil.menu([
    "1. Registrar usuário",
    "2. Voltar",
  ]);

  switch (indice) {
    case 0:
      await registrarUsuario();
      break;
    case 1:
      await menuPrincipal();
      break;
    default:
      return;
  }
  await menuUsuarios();
}
