# ✅ TODO: Connect Frontend & Backend for Happy Thoughts

## 🥇 Step 1: Finalize backend using MongoDB & Mongoose

- [x] Create a `Thought` model in `models/Thought.js`
  - Fields:
    [x]`message` (string, required, min/max length),
    [x]`hearts`,
    [x]`createdAt`
- [ ] Add update thought in frontend and backend
- [x] Seed the database with sample thoughts
- [x] Create route: `GET /thoughts` → return latest (e.g. 20)
- [x] Create route: `POST /thoughts` → save new thought
- [x] Create route: `PATCH /thoughts/:id/like` → increment hearts
- [x] Create route: `DELETE /thoughts/:id` → delete a thought
- [x] BONUS: `GET /thoughts?page=2` → use `.skip().limit()` for pagination
- [ ] BONUS: `GET /thoughts?category=joy` → filter with query params

---

## 🥈 Step 2: Add validation & error handling

- [x] Add Mongoose validation in the model (e.g. min/max message length)
- [x] Use `try/catch` in all routes
- [x] Return proper status codes (400, 404, 500) with `.status().json()
- [x] Return useful error messages for the frontend

---

## 🥉 Step 3: Connect frontend to the API

- [x] Change API URL in `happy-thoughts` frontend
- Update fetch requests:
- [x] GET /thoughts → display the thought list
- [x] POST /thoughts → send a new thought
- [x] PATCH /thoughts/:id/like → like a thought
- [x] DELETE /thoughts/:id → delete a thought
- [x] Show errors and loading states in the UI

## 🏁 Step 4: Deploy & manage environments

- [x] Deploy backend to Render
- [x] Deploy database to MongoDB Atlas
- [x] Add .env on Render with MONGO_URL
- [x] Update the frontend to point to deployed backend

## 🌈 Step 5: Stretch goals – once core functionality is working

- [ ] Add filtering using query parameters (/thoughts?tag=joy)
- [ ] Implement pagination using .skip() and .limit()
- [ ] Add infinite scroll to the frontend
- [ ] Sort thoughts with .sort() – by newest or most liked
- [ ] Group thoughts by category (if using categories)
