# Tech Vista

## Table of Contents

1. [About the Project](#about-the-project)
   - [Background](#background)
   - [Libraries Used](#libraries-used)
   - [Bugs](#bugs)
2. [Getting Started](#getting-started)
3. [Contact](#contact)

## About the Project

### Background

**Tech Vista** is a React E-commerce project, primarily emphasizing the front-end development. The project leverages an external API to fetch data dynamically from a database. Key aspects include responsive design, API integration encompassing user authentication, product ordering, product retrieval, and contact messaging. Additionally, the project focuses on achieving component reusability and global state management for the Cart functionality.

### Libraries Used

- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): A fast build tool for modern web development.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge): A Tailwind CSS plugin for merging utility classes.
- [React Hook Form](https://react-hook-form.com/): A library for flexible and efficient form validation.
- [Yup](https://github.com/jquense/yup): A JavaScript schema builder for value parsing and validation.

### Bugs

- The global state exhibits some issues, causing unexpected behavior in two pages:
  - **Product Page:** Occasionally, the product quantity returns NaN, necessitating a page reload for resolution.
  - **Checkout Page:** The cart is undefined on initial component load, requiring a page reload for correct UI rendering.
  - **Checkout Page:** Removing items from the Cart may result in their reappearance after a page reload.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ALbert-Sezkir/tech-vista.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd tech-vista
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
