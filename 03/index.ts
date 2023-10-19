const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {
  const bd = lerarquivo() as Usuario[];
  const usuario = bd.find((info) => {
    return info.cpf === cpf;
  });

  if (!usuario) {
    throw new Error("Usuário não encontrado.");
  }

  Object.assign(usuario, dados);
  escreverArquivo(bd);
  return dados;
};

const detalharUsuario = (cpf: string): Usuario => {
  const bd = lerarquivo() as Usuario[];
  const usuario = bd.find((info) => {
    return info.cpf === cpf;
  });

  if (!usuario) {
    throw new Error("Usuário não encontrado.");
  }
  return usuario;
};
