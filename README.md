# Dynamic Quiz Application

A modern, interactive quiz application built with PHP, HTML, CSS, and JavaScript. This application features a timer-based quiz system with multiple categories and difficulty levels, complete with visual result analysis.

## Features

- **Multiple Categories**: Choose from General Knowledge, Technology, or Mathematics
- **Difficulty Levels**: Easy, Medium, and Hard options for each category
- **Timer-Based Questions**: 10-second timer per question with auto-submit functionality
- **Visual Results**: Interactive charts showing score distribution and time analysis
- **Modern UI**: Clean, responsive design with smooth animations
- **No Back Navigation**: Prevents users from going back during the quiz

## Project Structure

```
htdocs/
├── index.php          # Landing page with category and difficulty selection
├── quiz.php           # Main quiz interface
├── result.php         # Results page with charts and statistics
├── thankyou.php       # Completion page
├── script.js          # Quiz logic and question bank
├── style.css          # Styling and responsive design
├── favicon.ico        # Site favicon
├── img/               # Image assets
└── dashboard/         # XAMPP dashboard (if using XAMPP)
```

## Requirements

- **Web Server**: Apache (XAMPP, WAMP, or similar)
- **PHP**: PHP 7.0 or higher
- **Browser**: Modern browser with JavaScript enabled

## Installation

### Using XAMPP (Windows)

1. **Install XAMPP** (if not already installed)
   - Download from [Apache Friends](https://www.apachefriends.org/)
   - Install to your desired location

2. **Copy Project Files**
   - Copy the `htdocs` folder contents to `C:\xampp\htdocs\` (or your XAMPP installation directory)

3. **Start XAMPP Services**
   - Open XAMPP Control Panel
   - Start Apache server

4. **Access the Application**
   - Open your browser
   - Navigate to `http://localhost/` or `http://localhost/index.php`

### Using Other Web Servers

1. Place all project files in your web server's document root directory
2. Ensure PHP is enabled
3. Access via your server's URL (e.g., `http://localhost/`)

## Usage

1. **Start Quiz**
   - Select a category (General Knowledge, Technology, or Mathematics)
   - Choose difficulty level (Easy, Medium, or Hard)
   - Click "Start Quiz"

2. **Answer Questions**
   - Read each question carefully
   - Select your answer from the options
   - Click "Next" to proceed (or wait for auto-submit after 10 seconds)
   - Note: You cannot go back to previous questions

3. **View Results**
   - After completing all 5 questions, view your results
   - See your score, correct/incorrect answers
   - Analyze time spent per question with interactive charts

4. **Complete**
   - Click "Finish" to complete the quiz session

## Question Bank

The application includes a comprehensive question bank:

- **General Knowledge**: 15 questions (5 per difficulty level)
- **Technology**: 15 questions covering web technologies and programming
- **Mathematics**: 15 questions ranging from basic arithmetic to algebra

All questions are stored in `script.js` and can be easily modified or extended.

## Customization

### Adding New Questions

Edit `script.js` and add questions to the `questionBank` object:

```javascript
const questionBank = {
    category_name: {
        difficulty_level: [
            {
                q: "Your question here?",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                ans: "Correct Answer"
            }
        ]
    }
};
```

### Modifying Timer Duration

Change the timer duration in `script.js`:

```javascript
let time = 10; // Change to desired seconds
```

### Styling

Customize the appearance by editing `style.css`. The application uses:
- Modern gradient backgrounds
- Card-based layout
- Smooth transitions and hover effects
- Responsive design principles

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP
- **Charts**: Chart.js (via CDN)
- **Server**: Apache (via XAMPP)

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Edge
- Safari
- Opera

## File Descriptions

- **index.php**: Landing page with quiz configuration form
- **quiz.php**: Main quiz interface with timer and question display
- **result.php**: Results page with score and time analysis charts
- **thankyou.php**: Completion confirmation page
- **script.js**: Contains quiz logic, question bank, and timer functionality
- **style.css**: All styling and responsive design rules

## Features in Detail

### Timer System
- 10-second countdown per question
- Visual timer display
- Auto-submission when timer reaches zero
- Time tracking for each question

### Result Analysis
- Score calculation (out of 5)
- Correct/Incorrect answer count
- Pie chart showing answer distribution
- Bar chart displaying time spent per question

### User Experience
- Clean, modern interface
- Smooth transitions and animations
- Disabled navigation during quiz
- Clear instructions and feedback

## Troubleshooting

### Quiz Not Loading
- Ensure Apache server is running
- Check PHP is enabled
- Verify file permissions

### Charts Not Displaying
- Check internet connection (Chart.js loads from CDN)
- Verify browser console for JavaScript errors

### Timer Not Working
- Ensure JavaScript is enabled in browser
- Check browser console for errors

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## Author

Created as part of the Frugal Testing project.

---

**Note**: This application is designed for local development and testing. For production deployment, ensure proper security measures are implemented.

