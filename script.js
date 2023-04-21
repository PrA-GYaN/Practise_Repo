function viewpassword() {
  const inp = document.getElementById("password");
  const pass = document.getElementById("eone");
  const pass_class = document.getElementById("eone").className;
  const open_eye = "fa-solid fa-eye";
  const close_eye = "fa-solid fa-eye-slash";
  if (pass_class == open_eye) {
    pass.className = close_eye;
    inp.setAttribute("type", "text");
  } else {
    pass.className = open_eye;
    inp.setAttribute("type", "password");
  }
}
