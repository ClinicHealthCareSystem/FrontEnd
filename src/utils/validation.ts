export const validateCPF = (cpf: string) => {
  if (!cpf) return "CPF é obrigatório";
  if (!/^\d{11}$/.test(cpf)) return "CPF deve ter 11 números";
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) return "Senha é obrigatória";
  if (password.length < 8) return "A senha deve ter pelo menos 8 caracteres";
  if (!/^[A-Za-z0-9]+$/.test(password))
    return "Senha deve conter apenas letras e números";
  return "";
};

