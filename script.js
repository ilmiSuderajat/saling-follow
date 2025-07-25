// Konfigurasi Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyDcgwRAwrLHKhtTmcmWucb1z3qTqbW0nbU",
  authDomain: "saling-follow.firebaseapp.com",
  databaseURL: "https://saling-follow-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "saling-follow",
  storageBucket: "saling-follow.firebasestorage.app",
  messagingSenderId: "1094414083730",
  appId: "1:1094414083730:web:d92a44972e226a5429284b",
  measurementId: "G-N3S79LL85E"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Form handler
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !whatsapp || !password) {
    alert("Harap isi semua data.");
    return;
  }

  // Simpan ke Firebase
  const newUserRef = db.ref('users').push();
  newUserRef.set({
    username,
    whatsapp,
    password
  }).then(() => {
    document.getElementById('status').textContent = "Pendaftaran berhasil!";
    document.getElementById('registerForm').reset();
  }).catch((error) => {
    console.error(error);
    document.getElementById('status').textContent = "Gagal mendaftar. Coba lagi.";
  });
});
