importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAQLQYXcwyFt5luNw1iA5N2-EfnbF1Bc7U",
  authDomain: "actuscolano.firebaseapp.com",
  databaseURL: "https://actuscolano-default-rtdb.firebaseio.com",
  projectId: "actuscolano",
  storageBucket: "actuscolano.firebasestorage.app",
  messagingSenderId: "62685359731",
  appId: "1:62685359731:web:26819bedd94fcb1ce8c406",
  measurementId: "G-TSVH8PH4RC"
});

const messaging = firebase.messaging();

// Gestione delle notifiche in arrivo quando web app è chiusa/coperta
messaging.onBackgroundMessage((payload) => {
  console.log("BG Notification: ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icons/icon-192.png" // facoltativo
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

