
# **Dropdown Helper**

A simple utility to add event listeners to dropdown menus. 

---

## **Installation**

Install the package using npm:

```bash
npm install @simon.jaeggi/dropdown
```

---

## **Usage**

### **HTML Structure**
Ensure your dropdown menus follow this structure:
```html
<div class="dropdown-menu">
  <div class="dropdown-content">
    <!-- Your dropdown content here -->
  </div>
</div>
```

- Use the class `dropdown-menu` for the dropdown container.  
- Use the class `dropdown-content` for the dropdown content.

### **JavaScript Integration**
Import the package into your JavaScript application:

```javascript
const dropdown = require('@simon.jaeggi/dropdown');
```

Initialize dropdown event listeners:

```javascript
dropdown.initializeDropdowns();
```

---

## **Features**

- Toggles visibility for dropdown content on mouse hover.

---

## **Example**

### **HTML**
```html
<div class="dropdown-menu">
  <button>Dropdown Button</button>
  <div class="dropdown-content">
    <p>Option 1</p>
    <p>Option 2</p>
    <p>Option 3</p>
  </div>
</div>
```

### **JavaScript**
```javascript
const dropdown = require('@simon.jaeggi/dropdown');
dropdown.initializeDropdowns(); 
```

---

## **License**

This project is licensed under the ISC License.
