// ফুটারে সাল অটো আপডেট
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// লগইন ফাংশন
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorEl = document.getElementById("error");
  const correctUser = "admin";
  const correctPass = "1234";
  if (user === correctUser && pass === correctPass) {
    window.location.href = "index.html";
  } else {
    errorEl.textContent = "ইউজারনেম বা পাসওয়ার্ড ভুল!";
  }
}
