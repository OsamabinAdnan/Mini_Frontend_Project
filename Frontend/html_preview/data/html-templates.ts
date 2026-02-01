/**
 * Collection of HTML templates for the HTML Previewer app
 */

import { Template } from '@/lib/templates';

export const htmlTemplates: Template[] = [
  {
    id: 'basic-html',
    name: 'Basic HTML Structure',
    category: 'structure',
    description: 'A minimal HTML document with basic elements',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is a basic HTML structure.</p>
</body>
</html>`,
    tags: ['basic', 'minimal', 'structure'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: 'semantic-layout',
    name: 'Semantic Layout',
    category: 'layout',
    description: 'A semantic HTML layout with header, main, and footer',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header, footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
        }
        main {
            padding: 1rem;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        nav li {
            display: inline;
            margin-right: 1rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Website Header</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Main Content</h2>
            <p>This is the main content area.</p>
        </section>
        <aside>
            <h3>Sidebar</h3>
            <p>Additional information here.</p>
        </aside>
    </main>
    <footer>
        <p>&copy; 2023 My Website</p>
    </footer>
</body>
</html>`,
    tags: ['layout', 'semantic', 'responsive'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: 'form-elements',
    name: 'Form Elements',
    category: 'form',
    description: 'Various HTML form elements with styling',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Elements</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 1rem;
        }
        .form-group {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }
        input, select, textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            background-color: #007bff;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Contact Form</h1>
    <form>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="subject">Subject:</label>
            <select id="subject" name="subject">
                <option value="">Choose a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
            </select>
        </div>

        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message here..."></textarea>
        </div>

        <div class="form-group">
            <label>
                <input type="checkbox" name="newsletter" value="yes"> Subscribe to newsletter
            </label>
        </div>

        <button type="submit">Submit</button>
    </form>
</body>
</html>`,
    tags: ['form', 'input', 'validation'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: 'card-grid',
    name: 'Card Grid Layout',
    category: 'layout',
    description: 'Responsive grid of cards with images and text',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Grid</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 1rem;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
        }
        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card-content {
            padding: 1rem;
        }
        .card h3 {
            margin-top: 0;
        }
        .card p {
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Product Cards</h1>
        <div class="grid">
            <div class="card">
                <img src="https://placehold.co/300x200?text=Product+1" alt="Product 1">
                <div class="card-content">
                    <h3>Product 1</h3>
                    <p>Description of product 1 goes here.</p>
                    <p><strong>$29.99</strong></p>
                </div>
            </div>
            <div class="card">
                <img src="https://placehold.co/300x200?text=Product+2" alt="Product 2">
                <div class="card-content">
                    <h3>Product 2</h3>
                    <p>Description of product 2 goes here.</p>
                    <p><strong>$39.99</strong></p>
                </div>
            </div>
            <div class="card">
                <img src="https://placehold.co/300x200?text=Product+3" alt="Product 3">
                <div class="card-content">
                    <h3>Product 3</h3>
                    <p>Description of product 3 goes here.</p>
                    <p><strong>$19.99</strong></p>
                </div>
            </div>
            <div class="card">
                <img src="https://placehold.co/300x200?text=Product+4" alt="Product 4">
                <div class="card-content">
                    <h3>Product 4</h3>
                    <p>Description of product 4 goes here.</p>
                    <p><strong>$49.99</strong></p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,
    tags: ['grid', 'cards', 'responsive'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: 'navigation-menu',
    name: 'Navigation Menu',
    category: 'navigation',
    description: 'Responsive navigation menu with dropdown',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Menu</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
        }

        nav {
            background-color: #333;
            padding: 1rem;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav-menu {
            display: flex;
            list-style: none;
        }

        .nav-item {
            position: relative;
        }

        .nav-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            display: block;
            transition: background-color 0.3s;
        }

        .nav-link:hover {
            background-color: #555;
        }

        .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #444;
            min-width: 160px;
            display: none;
            z-index: 1;
        }

        .dropdown li {
            list-style: none;
        }

        .nav-item:hover .dropdown {
            display: block;
        }

        .dropdown .nav-link {
            padding: 0.75rem 1rem;
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .bar {
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 3px 0;
            transition: 0.3s;
        }

        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background-color: #333;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            }

            .nav-menu.active {
                left: 0;
            }

            .hamburger {
                display: flex;
            }

            .dropdown {
                position: static;
                display: none;
                background-color: #555;
            }

            .nav-item:hover .dropdown {
                display: none;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div class="nav-container">
            <div class="logo">Logo</div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Services</a>
                    <ul class="dropdown">
                        <li><a href="#" class="nav-link">Web Design</a></li>
                        <li><a href="#" class="nav-link">Development</a></li>
                        <li><a href="#" class="nav-link">SEO</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <main style="padding: 2rem; text-align: center;">
        <h1>Responsive Navigation Menu</h1>
        <p>Resize your browser window to see the responsive behavior.</p>
    </main>

    <script>
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    </script>
</body>
</html>`,
    tags: ['navigation', 'responsive', 'menu'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: 'modal-dialog',
    name: 'Modal Dialog',
    category: 'component',
    description: 'Interactive modal dialog with overlay',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modal Dialog</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 2rem;
            background-color: #f0f0f0;
        }

        .btn {
            background-color: #007bff;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .modal {
            background: white;
            border-radius: 8px;
            width: 90%;
            max-width: 500px;
            padding: 1.5rem;
            position: relative;
            transform: translateY(-20px);
            transition: transform 0.3s ease;
        }

        .modal-overlay.active .modal {
            transform: translateY(0);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .modal-title {
            margin: 0;
        }

        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #999;
        }

        .close-btn:hover {
            color: #333;
        }

        .modal-body {
            margin-bottom: 1.5rem;
        }

        .modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
        }

        .btn-secondary {
            background-color: #6c757d;
        }

        .btn-secondary:hover {
            background-color: #5a6268;
        }
    </style>
</head>
<body>
    <h1>Modal Dialog Example</h1>
    <p>Click the button below to open a modal dialog.</p>

    <button id="openModal" class="btn">Open Modal</button>

    <div id="modalOverlay" class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h2 class="modal-title">Modal Title</h2>
                <button id="closeModal" class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p>This is a modal dialog. You can put any content here, such as forms, images, or text.</p>
                <p>Click outside the modal or press the close button to dismiss it.</p>
            </div>
            <div class="modal-footer">
                <button id="cancelBtn" class="btn btn-secondary">Cancel</button>
                <button id="confirmBtn" class="btn">Confirm</button>
            </div>
        </div>
    </div>

    <script>
        const openModalBtn = document.getElementById('openModal');
        const closeModalBtn = document.getElementById('closeModal');
        const cancelBtn = document.getElementById('cancelBtn');
        const confirmBtn = document.getElementById('confirmBtn');
        const modalOverlay = document.getElementById('modalOverlay');

        function openModal() {
            modalOverlay.classList.add('active');
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
        }

        openModalBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);

        // Close modal when clicking outside the modal
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });
    </script>
</body>
</html>`,
    tags: ['modal', 'dialog', 'overlay'],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  }
];

// Add the templates to the TemplateManager
import { TemplateManager } from '@/lib/templates';

// Extend the TemplateManager to include built-in templates
export const initializeTemplates = () => {
  // We'll use a more direct approach to extend the class
  const originalGetBuiltInTemplates = TemplateManager.getBuiltInTemplates;
  TemplateManager.getBuiltInTemplates = (): Template[] => {
    return htmlTemplates;
  };
};

initializeTemplates();