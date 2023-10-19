const deletarUsuario = (cpf: string): Usuario => {
  const bd = lerarquivo() as Usuario[];
  const usuario = bd.find((info) => {
    return info.cpf === cpf;
  });

  if (!usuario) {
    throw new Error("Usuário não encontrado.");
  }

  const resposta = bd.filter((usuarios) => {
    return usuarios.cpf !== cpf;
  });
  escreverArquivo(resposta);
  return usuario;
};
