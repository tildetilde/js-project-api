# ✅ TODO: Connect Frontend & Backend for Happy Thoughts

## 🥇 Step 1: Finalize backend using MongoDB & Mongoose

- [ ] Create a `Thought` model in `models/Thought.js`
  - Fields: `message` (string, required, min/max length), `hearts`, `createdAt`
- [ ] Seed the database with sample thoughts
- [ ] Create route: `GET /thoughts` → return latest (e.g. 20)
- [ ] Create route: `POST /thoughts` → save new thought
- [ ] Create route: `PATCH /thoughts/:id/like` → increment hearts
- [ ] Create route: `DELETE /thoughts/:id` → delete a thought
- [ ] BONUS: `GET /thoughts?page=2` → use `.skip().limit()` for pagination
- [ ] BONUS: `GET /thoughts?category=joy` → filter with query params

---

## 🥈 Step 2: Add validation & error handling

- [ ] Add Mongoose validation in the model (e.g. min/max message length)
- [ ] Use `try/catch` in all routes
- [ ] Return proper status codes (400, 404, 500) with `.status().json()
- [ ] Return useful error messages for the frontend

---

## 🥉 Step 3: Connect frontend to the API

- [ ] Change API URL in `happy-thoughts` frontend
  ```js
  const API_URL = "http://localhost:8080/thoughts"; // or deployed URL
  ```
- Update fetch requests:
- [ ] GET /thoughts → display the thought list
- [ ] POST /thoughts → send a new thought
- [ ] PATCH /thoughts/:id/like → like a thought
- [ ] DELETE /thoughts/:id → delete a thought
- [ ] Show errors and loading states in the UI

## 🏁 Step 4: Deploy & manage environments

- [ ] Deploy backend to Render
- [ ] Deploy database to MongoDB Atlas
- [ ] Add .env on Render with MONGO_URL
- [ ] Update the frontend to point to deployed backend

## 🌈 Step 5: Stretch goals – once core functionality is working

- [ ] Add filtering using query parameters (/thoughts?tag=joy)
- [ ] Implement pagination using .skip() and .limit()
- [ ] Add infinite scroll to the frontend
- [ ] Sort thoughts with .sort() – by newest or most liked
- [ ] Group thoughts by category (if using categories)
