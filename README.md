# 💪 FitTrack Pro: Interactive Fitness Dashboard

## 🎯 Project Overview

**FitTrack Pro** is a Single Page Application (SPA) designed as an interactive fitness tracking dashboard. The project simulates a user interface for logging daily physical activities and visualizing cumulative progress, fulfilling the requirements for an interactive web development assignment.

### Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Structure** | HTML5 | Provides the semantic structure and layout of the dashboard. |
| **Styling** | CSS3 (Flexbox, Grid, Media Queries) | Ensures a modern, clean design and full responsiveness across devices. |
| **Interactivity** | Vanilla JavaScript (ES6+) | Handles form submissions, DOM manipulation, dynamic data rendering, and state management. |
| **Data Visualization** | Chart.js (External Library) | Used to render the dynamic 'Weekly Calories Burned' bar chart. |

## ✨ Key Features and Interactivity

The website demonstrates several key concepts of front-end development and client-side interactivity:

1.  **Dynamic Activity Logging:** Users can submit new activities (Type, Duration, Calories) via a responsive form.
2.  **Real-time DOM Updates:** Upon form submission, the new activity is immediately added to the **Recent Activity Log** table without requiring a page reload.
3.  **Statistical Calculation:** Quick stats (**Total Calories Burned** and **Activities Logged**) are automatically recalculated and updated with every submission.
4.  **Data Visualization:** The **Weekly Calories Burned** chart is dynamically updated using Chart.js to reflect the aggregated activity data.
5.  **Responsive Design:** The layout transitions from a multi-column **CSS Grid** structure on desktop to a single-column, stacked layout on mobile devices via **CSS Media Queries**.

## 🚀 Installation and Deployment

### 1. Local Setup

To run this project locally:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/university-fitness-tracker.git](https://github.com/your-username/university-fitness-tracker.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd university-fitness-tracker
    ```
3.  **Open Index:** Simply open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox).

### 2. Live Deployment (GitHub Pages)

The project is hosted publicly using GitHub Pages, a service ideal for static sites.

* **Repository URL:** `https://github.com/your-username/university-fitness-tracker` (Replace with your link)
* **Live Website URL:** `https://your-username.github.io/university-fitness-tracker/` (Replace with your link)

## 📁 File Structure

The project maintains a clean, conventional structure:
