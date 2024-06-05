# Interactive Photo Gallery

This project is an interactive photo gallery with a responsive layout, cool hover effects, and a lightbox feature for full-size image viewing. 
The gallery works seamlessly on both desktop and mobile devices, providing a visually appealing and user-friendly experience.

## Features

- Responsive layout
- Smooth hover effects
- Lightbox for full-size image viewing
- Horizontal scrolling for overflow content
- Intuitive design with seamless interactions

## Setup Instructions

### Prerequisites

- A web server to serve the HTML file (optional, but recommended for local testing)
- Basic knowledge of HTML, CSS, and JavaScript

### Files Structure

```
interactive-photo-gallery/
├── images/
│   ├── fox.png
│   ├── whale.png
│   ├── monkey.png
│   └── deer.png
├── css/
│   └── style.css
├── js/
│   └── script.js
└── index.html
```

### Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gasarosonia/interactive-photo-gallery.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd interactive-photo-gallery
   ```

3. **Open the `index.html` file in your browser:**

   - You can simply double-click the `index.html` file to open it in your default web browser.
  
   - a simple HTTP server with Python:

   ```bash
   python -m http.server 8000
   ```

   - Then navigate to `http://localhost:8000` in your browser.

### Explanation of the Approach

#### HTML

The HTML structure consists of a `div` with the class `gallery` containing multiple `div` elements with the class `gallery-item`. Each `gallery-item` has an image and a `div` with class `details` for the image description. A lightbox `div` is included for displaying full-size images.

#### CSS

- **Responsive Design**: The `gallery` class uses `flex` layout to ensure the items are displayed in a row and allows horizontal scrolling if necessary. 
- **Hover Effects**: Smooth transitions are added for hover effects on images and details using CSS transitions.
- **Lightbox**: The lightbox is styled as a modal with animations for zoom effect and smooth opening and closing transitions.

#### JavaScript

The JavaScript code handles the interaction logic:

- **Hover Effects**: JavaScript adds and removes the hover class on gallery items to trigger CSS transitions.
- **Lightbox**: When a gallery item is clicked, the full-size image is displayed in a lightbox. The lightbox can be closed by clicking the close button or anywhere outside the image.

### Customization

You can customize the gallery by:

- Adding or removing images in the `images` folder.
- Updating the `index.html` file to include new gallery items.
- Modifying the `style.css` file to change the appearance and animations.
- Enhancing the `script.js` file to add more interactions or features.
