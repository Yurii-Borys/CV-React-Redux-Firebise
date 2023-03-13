export default {
    firebaseConfig: {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    },
    emailJsConfig: {
        SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
        TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
        PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY
    }
}