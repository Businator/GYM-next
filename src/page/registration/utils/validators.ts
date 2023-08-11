const validatePassword = (password: string) => {
  let text = "";
  let isValid = true;

  if (password.length < 6) {
    text = "Use at least 6 characters";
    isValid = false;
  }
  if (password === "") {
    text = "Enter a password";
    isValid = false;
  }

  return { text, isValid };
};

const validatePasswordRepeat = (
  passwordRepeat: string,
  password: string = ""
) => {
  let text = "";
  let isValid = true;
  if (passwordRepeat === "") {
    text = "Enter a password";
    isValid = false;
  }
  if (passwordRepeat !== password) {
    text = "Password mismatch";
    isValid = false;
  }

  return { text, isValid };
};

const validateEmail = (email: string) => {
  let text = "";
  let isValid = true;
  const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.match(validEmailRegex)) {
    text = "Invalid E-mail";
    isValid = false;
  }

  if (email === "") {
    text = "Enter a E-mail";
    isValid = false;
  }

  return { text, isValid };
};

const validateName = (name: string) => {
  let text = "";
  let isValid = true;

  if (name.length > 10) {
    text = "Maximum length 10 characters";
    isValid = false;
  }

  if (name.length < 1) {
    text = "Enter a name";
    isValid = false;
  }

  return { text, isValid };
};

const validateAge = (age: string) => {
  let text = "";
  let isValid = true;

  if (Number(age) < 1) {
    text = "Age must be over 1 year old";
    isValid = false;
  }

  if (age.length > 3) {
    text = "Maximum length 3 characters";
    isValid = false;
  }

  return { text, isValid };
};

const validateWeight = (weight: string) => {
  let text = "";
  let isValid = true;

  if (Number(weight) < 1) {
    text = "Weight must be over 1kg";
    isValid = false;
  }

  if (weight.length < 1) {
    text = "Enter a weight";
    isValid = false;
  }

  if (weight.length > 3) {
    text = "Maximum length 3 characters";
    isValid = false;
  }

  return { text, isValid };
};

const validateHeight = (height: string) => {
  let text = "";
  let isValid = true;

  if (Number(height) < 1) {
    text = "height must be over 1sm";
    isValid = false;
  }

  if (height.length < 1) {
    text = "Enter a height";
    isValid = false;
  }

  if (height.length > 3) {
    text = "Maximum length 3 characters";
    isValid = false;
  }

  return { text, isValid };
};

export {
  validatePassword,
  validatePasswordRepeat,
  validateEmail,
  validateName,
  validateAge,
  validateWeight,
  validateHeight,
};
