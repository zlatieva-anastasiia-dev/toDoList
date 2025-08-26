# Drag-and-Drop To‑Do List

## Description

This is a simple to‑do list app built with React, TypeScript, Vite, Tailwind. For drag-and-drop functionality dnd-kit was used.
Tasks are grouped into columns: To do, In Progress, and Done. This is client-side project, so for persistence items are stored in `localStorage`.

Link: https://to-do-list-awesome.vercel.app/

## Features

- **Drag & drop** between columns using `@dnd-kit` (mouse and touch supported)
- **Local persistence** with `localStorage`
- **Dark mode** support
- **Responsive layout**

## Accessibility

This project supports **keyboard navigation** for drag and drop:

- Navigate to a task using `Tab`.
- Press **`Enter`** to pick it up.
- Use the **arrow keys** (`↑`, `↓`, `←`, `→`) to move the task.
- Press **`Enter`** again to drop it.

## Running Project

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Preview (after build)

```bash
npm run preview
```
