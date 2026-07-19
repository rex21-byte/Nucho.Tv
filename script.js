// ===========================
// NuchoTV Script.js
// ===========================

// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC38-5zRDTgWam5dv2mivcP82RViHJcQek",
  authDomain: "nuchotv.firebaseapp.com",
  projectId: "nuchotv",
  storageBucket: "nuchotv.firebasestorage.app",
  messagingSenderId: "370653579015",
  appId: "1:370653579015:web:a8450d121fd177e3b5e7a2",
  measurementId: "G-L3N9EPRZCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ===========================
// SIGN UP
// ===========================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

  signupForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {

      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created successfully!");

      window.location.href = "login.html";

    } catch (error) {

      alert(error.message);

    }

  });

}

// ===========================
// LOGIN
// ===========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

      await signInWithEmailAndPassword(auth, email, password);

      alert("Welcome to NuchoTV!");

      window.location.href = "index.html";

    } catch (error) {

      alert(error.message);

    }

  });

}// ===========================
// LOGOUT
// ===========================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", async () => {

    try {

      await signOut(auth);

      alert("Logged out successfully!");

      window.location.href = "login.html";

    } catch (error) {

      alert(error.message);

    }

  });

}

// ===========================
// AUTH STATE
// ===========================

onAuthStateChanged(auth, (user) => {

  if (user) {

    console.log("Logged in:", user.email);

  } else {

    console.log("No user logged in");

  }

});

// ===========================
// LIKE BUTTON
// ===========================

const likeBtn = document.getElementById("likeBtn");

if (likeBtn) {

  let likes = 0;

  likeBtn.addEventListener("click", () => {

    likes++;

    likeBtn.innerHTML = `❤️ ${likes}`;

  });

}

// ===========================
// COMMENT BUTTON
// ===========================

const commentBtn = document.getElementById("commentBtn");

if (commentBtn) {

  commentBtn.addEventListener("click", () => {

    const comment = prompt("Write your comment:");

    if (comment && comment.trim() !== "") {

      alert("✅ Comment posted!\n\n" + comment);

    }

  });

}// ===========================
// SHARE BUTTON
// ===========================

const shareBtn = document.getElementById("shareBtn");

if (shareBtn) {

  shareBtn.addEventListener("click", async () => {

    if (navigator.share) {

      try {

        await navigator.share({
          title: "NuchoTV",
          text: "Watch amazing videos on NuchoTV!",
          url: window.location.href
        });

      } catch (error) {

        console.log("Share cancelled");

      }

    } else {

      navigator.clipboard.writeText(window.location.href);

      alert("✅ Link copied to clipboard!");

    }

  });

}

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

// ===========================
// SCROLL ANIMATION
// ===========================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

});

document.querySelectorAll("section").forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.8s";

  observer.observe(section);

});// ===========================
// BACK TO TOP BUTTON
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff0050";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,
    behavior: "smooth"

  });

});

// ===========================
// PAGE LOADED
// ===========================

window.addEventListener("load", () => {

  console.log("✅ NuchoTV loaded successfully.");

});
  