# Firebase Auth Demo

This small demo shows how to add Firebase Authentication (Email/Password + Google) to a static HTML page.

Steps to set up:

1. Create a Firebase project at https://console.firebase.google.com/
2. In the project, add a Web App and copy the firebaseConfig object.
3. Replace the placeholder values in `app.js` with your project's config.
4. In the Firebase Console > Authentication > Sign-in method, enable Email/Password and Google providers.
5. Serve the folder locally (some browsers block OAuth redirects from file://). Example using Python:

```powershell
# In the project folder
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Notes:

- The demo uses the compat build of Firebase v9 for simplicity. For production, consider using modular APIs.
- Keep API keys out of public repos if the project is private-sensitive (API keys in Firebase are not secret by themselves but follow best practices).
