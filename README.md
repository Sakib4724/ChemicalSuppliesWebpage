# **Design Documentation for Chemical Data Table Web Application**

## **Project Summary**
This project is a web-based application that displays a table containing chemical data. Users can interact with the table by performing various actions like adding new items, deleting existing ones, moving items up or down, sorting by columns, and saving the data to `localStorage` for persistence.

## **Main Features**

### **Dynamic Table Display:**
- The application loads chemical data from the `defaultChemicalData` (declared in `constants.js` file).
- The table includes several columns such as `id`, `Chemical Name`, `Vendor`, `Density`, `Viscosity`, `Packaging`, `Pack Size`, `Unit`, and `Quantity`.

### **User Actions:**
- **Add Item**: Opens a form to input and add new chemical data to the table.
- **Delete Item**: Removes an item that has been selected by the user.
- **Move Item Up/Down**: Allows users to reorder items within the table.
- **Refresh Table**: Reloads the table data from `localStorage`, applying any updates.
- **Sort Columns**: Clicking on any column header sorts the table data by that column.
- **Save Data**: Saves the current state of the table to `localStorage`.

## **Design and Development Decisions**

### **1. Layered Structure**
- **HTML**: Defines the structure of the page, including the table, form, and control buttons.
- **CSS**: Manages the visual styling, including responsive behavior for different devices.
- **JavaScript**: Handles functionality such as table rendering, user interactions, and managing data storage.

This separation ensures the code is organized, maintainable, and scalable.

### **2. Modular Approach**
- Each JavaScript function is designed to handle a specific task (e.g., rendering the table, adding an item, saving data).
- This structure improves readability and makes it easier to maintain or add new features in the future.

### **3. Persistent Data Storage**
- The table data is stored in the browser’s `localStorage`, meaning any changes (such as adding or deleting items) are preserved even if the page is refreshed or closed.
- If there is no data in `localStorage` when the page loads, it uses a predefined JSON dataset.

### **4. Form for Adding Data**
- Clicking the "Add Item" (+) button reveals a form that allows users to input new chemical data.
- When submitted, the new entry is added to the table and saved to `localStorage`.

### **5. Table Row Management**
- **Item Selection**: Clicking an item row highlights it, allowing users to move or delete it.
- **Move Up/Down**: Repositions a selected row either above or below its current position.
- **Delete**: Removes the selected item, then updates and re-renders the table.
- **Refresh**: Reloads the table from `localStorage`, reflecting any changes made during the session.

## **Technology Stack**
- **HTML5**: Defines the webpage structure and elements.
- **CSS3**: Styles the page, providing responsive design for different devices.
  - **Flexbox**: Used for positioning elements like buttons and tables.
  - **Media Queries**: Ensures that the layout adjusts for various screen sizes.
- **JavaScript (ES6)**: Implements the core functionality, including:
  - Rendering the table.
  - Handling sorting, selection, and moving of items.
  - Saving and loading data to/from `localStorage`.
- **Font Awesome**: Provides icons (e.g., the "plus" icon for the "Add Item" button).
