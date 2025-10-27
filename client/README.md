# Client (frontend)

This directory contains the React frontend for the project (Vite + React).

## Clerk authentication (required)

This app uses Clerk for authentication. Before running the dev server you must provide Clerk's publishable key (or frontend API) as a Vite environment variable.

Add one of the following to `client/.env` or `client/.env.local` (do NOT commit this file):

```
VITE_CLERK_PUBLISHABLE_KEY=pk_XXXXXXXXXXXXXXXX
# --or--
VITE_CLERK_FRONTEND_API=frontend_XXXXXXXXXXXXXXXX
```

Where to get the key:

- Log in to your Clerk dashboard (https://clerk.com/dashboard)
- Create or select your application
- Copy the Publishable Key or Frontend API value

After setting the environment variable, restart the Vite dev server so the new env var is picked up.

If you run into a runtime error about `useUser` or `ClerkProvider`, ensure the top-level application is wrapped by `<ClerkProvider />` (this project does so in `src/main.jsx`).
