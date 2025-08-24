export const validateCPF = (cpf: string) => {
  if (!cpf) return "CPF é obrigatório";
  if (!/^\d{11}$/.test(cpf)) return "CPF deve ter 11 números";
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) return "Senha é obrigatória";
  if (password.length < 8) return "A senha deve ter 8 caracteres";
  if (!/^[A-Za-z0-9]+$/.test(password))
    return "Senha deve conter apenas letras e números";
  return "";
};

export const validateName = (name: string) => {
  if (!name) return "Nome é obrigatório";
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,50}$/.test(name)) {
    return "Digite um nome válido";
  }
  if (/\s{2,}/.test(name)) {
    return "Evite espaços em excesso";
  }
  if (name.trim().split(" ").length < 2) {
    return "Informe nome e sobrenome";
  }
  return "";
};

export const maskPhone = (text: string) => {
  let cleaned = text.replace(/\D/g, "");
  if (cleaned.length > 11) cleaned = cleaned.substring(0, 11);
  if (cleaned.length <= 2) {
    return `(${cleaned}`;
  }
  if (cleaned.length <= 6) {
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
  }
  if (cleaned.length <= 10) {
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
      2,
      6
    )}-${cleaned.substring(6)}`;
  }
  return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
    2,
    7
  )}-${cleaned.substring(7)}`;
};

export const unmaskPhone = (text: string) => text.replace(/\D/g, "");

export const validatePhone = (phone: string) => {
  const value = unmaskPhone(phone);
  if (!value) return "Celular é obrigatório";
  if (!/^[0-9]+$/.test(value)) {
    return "Digite apenas números";
  }
  if (value.length !== 10 && value.length !== 11) {
    return "Telefone deve ter 10 ou 11 dígitos (com DDD)";
  }
  const ddd = parseInt(value.substring(0, 2));
  if (ddd < 11 || ddd > 99) {
    return "DDD inválido";
  }
  if (value[2] !== "9") {
    return "O número deve começar com 9 após o DDD";
  }
  return "";
};
