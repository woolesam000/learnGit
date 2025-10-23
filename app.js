// Firebase Authentication demo (compat APIs)

// TODO: Replace this with your project's config from the Firebase console
const firebaseConfig = {
  apiKey: "REPLACE_WITH_API_KEY",
  authDomain: "REPLACE_WITH_PROJECT.firebaseapp.com",
  projectId: "REPLACE_WITH_PROJECT",
  storageBucket: "REPLACE_WITH_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Elements
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const googleBtn = document.getElementById("google-signin");
const signoutBtn = document.getElementById("signout");
const userSignedOut = document.getElementById("user-signed-out");
const userSignedIn = document.getElementById("user-signed-in");
const userEmailSpan = document.getElementById("user-email");
const messageP = document.getElementById("message");

function showMessage(msg, isError = false) {
  messageP.textContent = msg;
  messageP.style.color = isError ? "crimson" : "green";
}

// Sign up
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showMessage("Sign up successful.");
      signupForm.reset();
    })
    .catch((err) => {
      showMessage(err.message, true);
    });
});

// Sign in
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showMessage("Signed in successfully.");
      signinForm.reset();
    })
    .catch((err) => {
      showMessage(err.message, true);
    });
});

// Google sign-in
googleBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      showMessage("Signed in with Google.");
    })
    .catch((err) => {
      showMessage(err.message, true);
    });
});

// Sign out
signoutBtn.addEventListener("click", () => {
  auth
    .signOut()
    .then(() => showMessage("Signed out."))
    .catch((err) => showMessage(err.message, true));
});

// Auth state listener
auth.onAuthStateChanged((user) => {
  if (user) {
    userSignedOut.style.display = "none";
    userSignedIn.style.display = "block";
    userEmailSpan.textContent = user.email || user.displayName || "User";
  } else {
    userSignedOut.style.display = "block";
    userSignedIn.style.display = "none";
    userEmailSpan.textContent = "";
  }
});
