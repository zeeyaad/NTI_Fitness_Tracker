// Global array to store all activity data
let activities = [];

// Data structure for the Chart.js graph (Daily Calories)
let chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Calories Burned (kcal)',
        data: [0, 0, 0, 0, 0, 0, 0], // Initial values are 0
        backgroundColor: 'rgba(40, 167, 69, 0.6)', // Corresponds to --accent-color
        borderColor: '#28a745',
        borderWidth: 1,
        tension: 0.3 // Smooth curves
    }]
};

// --- 1. DOM Elements Selection ---
const form = document.getElementById('activity-form');
const logBody = document.getElementById('log-body');
const totalCaloriesElement = document.getElementById('total-calories');
const activityCountElement = document.getElementById('activity-count');

// Initialize the Chart.js instance
const ctx = document.getElementById('caloriesChart').getContext('2d');
const caloriesChart = new Chart(ctx, {
    type: 'bar', // Type of chart (bar, line, pie, etc.)
    data: chartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend since there's only one dataset
            }
        }
    }
});

// --- 2. Core Functions ---

/**
 * Updates the chart data based on the current activities array.
 */
function updateChart() {
    // Reset chart data for the current week (simple simulation)
    // For a real app, you'd calculate calories burned per day
    const newWeeklyData = [0, 0, 0, 0, 0, 0, 0];
    
    // Simple logic: distribute the last 7 activities to simulate daily data
    activities.slice(-7).forEach((activity, index) => {
        const dayIndex = index % 7; // Use modulo to loop through days
        newWeeklyData[dayIndex] += activity.calories;
    });

    // Update the chart's dataset and redraw
    caloriesChart.data.datasets[0].data = newWeeklyData;
    caloriesChart.update();
}

/**
 * Renders the activity data to the log table and updates stats.
 */
function renderLog() {
    // Clear the current table body
    logBody.innerHTML = '';
    
    let totalCalories = 0;

    // Loop through the activities array in reverse (newest first)
    activities.slice().reverse().forEach(activity => {
        totalCalories += activity.calories;

        // Create a new table row (<tr>)
        const row = logBody.insertRow();
        
        // Insert cells (<td>) with the activity data
        row.insertCell().textContent = activity.date;
        row.insertCell().textContent = activity.type;
        row.insertCell().textContent = activity.duration;
        row.insertCell().textContent = activity.calories;
    });

    // Update the quick stats section
    totalCaloriesElement.textContent = `${totalCalories} kcal`;
    activityCountElement.textContent = activities.length;

    // Update the chart visualization
    updateChart();
}

/**
 * Handles the submission of the activity form.
 * @param {Event} e - The form submit event.
 */
function handleFormSubmit(e) {
    e.preventDefault(); // Stop the default form submission/page reload

    // Get values from form inputs
    const type = document.getElementById('activity-type').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    // Create a new activity object
    const newActivity = {
        date: date,
        type: type,
        duration: duration,
        calories: calories
    };

    // Add the new activity to the global array
    activities.push(newActivity);

    // Re-render the entire log and update stats/chart
    renderLog();

    // Clear the form fields for a clean user experience
    form.reset();

    // Scroll to the activity log to show the update (Interactivity)
    document.getElementById('activity-log').scrollIntoView({ behavior: 'smooth' });

    console.log('New activity logged:', newActivity);
}

// --- 3. Event Listeners ---
// Add the submit listener to the form element
form.addEventListener('submit', handleFormSubmit);

// --- 4. Initialization (Pre-populate with sample data) ---
function init() {
    // Sample data to make the dashboard look populated on load
    activities = [
        { date: 'Dec 1', type: 'Run', duration: 45, calories: 450 },
        { date: 'Dec 2', type: 'Lift', duration: 60, calories: 300 },
        { date: 'Dec 3', type: 'Yoga', duration: 30, calories: 150 },
        { date: 'Dec 4', type: 'Cycle', duration: 75, calories: 600 }
    ];
    renderLog(); // Initial render of the log and chart
}

// Run the initialization function when the script loads
init();