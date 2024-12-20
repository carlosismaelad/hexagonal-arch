import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../models/Usuario";
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";

// Se precisássemos receber várias entradas...
// interface RegistrarUsuarioProps {
//   usuario: Usuario;
//   valor: number;
//   texto: string;
// }
// Agora, em vez de uma entrada do tipo usuário receberíamos um RegistrarUsuarioProps
// ou, se preferir especificar os parâmetros podemos alterar a assinatura da interface

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
  async executar(usuario: Usuario): Promise<void> {
    // Não é uma criptografia de verdade!!!
    const senhaCrypto = usuario.senha.split("").reverse().join("");

    const repo = new RepositorioUsuarioEmMemoria();
    const usuarioExistente = await repo.buscarPorEmail(usuario.email);
    if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE);

    const novoUsuario: Usuario = {
      id: Id.gerarHash(),
      nome: usuario.nome,
      email: usuario.email,
      senha: senhaCrypto,
    };

    repo.inserir(novoUsuario);

    console.log(`\n\n${JSON.stringify(novoUsuario)}`);
  }
}
