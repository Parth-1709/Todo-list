# 📝 Todo List — React • Spline • Motion • GSAP

A clean, modern, and interactive Todo List built using **React**, featuring draggable task cards, smooth GSAP animations, and a 3D Spline model for an engaging UI experience.  
This project blends functionality with design — simple task management enhanced with motion, interactivity, and visual appeal.

---

## 🚀 Features

### 📝 Core Task Features
- Add new tasks  
- Delete tasks  
- Mark tasks as done / undone  
- Live UI updates with React state

### 🎯 Interactions & Animations
- **Drag & Drop** task cards inside a bounded area (Motion)
- Smooth physics-based drag transitions  
- **GSAP entrance animations** on page load  
- **Scroll-trigger animations** for About section  
- UI waits until **Spline 3D model fully loads**

### 🎨 UI / Visual Design
- Clean and modern layout using Tailwind CSS  
- Interactive 3D Spline model on the homepage  
- Loader screen until the model is ready  
- Responsive and minimal design

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI & component logic |
| **React Router** | Page navigation |
| **Tailwind CSS** | Styling & layout |
| **Motion (Framer Motion)** | Drag & transitions |
| **Spline 3D** | Interactive 3D model |
| **GSAP + ScrollTrigger** | Load & scroll animations |

---

## 🧩 How It Works

### 🏠 Home Page
- Loads an interactive **Spline 3D scene**.
- A loading screen remains visible until the Spline model fully initializes.
- Once loaded, **GSAP** animates:
  - The main heading  
  - Subtitle  
  - Buttons  
  - UI container  
- This creates a smooth, premium entry animation for the landing page.

---

### 📄 About Page
- Uses **GSAP ScrollTrigger** to animate content when it enters the viewport.
- Each section fades or slides in as the user scrolls down.
- Adds a dynamic, modern scrolling experience without overwhelming the user.

---

### 🗂 Todo Page
- Each task is represented as a draggable card.
- Uses **Motion (Framer Motion)** for:
  - Drag functionality  
  - Elastic bounce effects  
  - Smooth physics-based movement  
- Tasks are kept inside a bounding container to avoid overflow.
- Users can:
  - Add tasks  
  - Delete tasks  
  - Mark tasks as done/undone  
- React state updates the UI instantly, keeping everything responsive.

---

### 🎨 Visual Experience
- Tailwind CSS ensures spacing, colors, and layout remain clean and consistent.
- Spline adds 3D interactivity to bring personality to the UI.
- Combined with Motion and GSAP, the app feels fluid and modern.

