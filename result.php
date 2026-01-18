<?php 
$score   = $_GET['score'] ?? 0;
$correct = $_GET['correct'] ?? 0;
$wrong   = $_GET['wrong'] ?? 0;
$timeRaw = $_GET['time'] ?? '';
$time    = $timeRaw !== '' ? explode(",", $timeRaw) : [];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Result Analysis</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>

<div class="card">
    <h2>Quiz Result</h2>
    <p>Score: <?= $score ?>/5</p>
    <p>Correct: <?= $correct ?> | Incorrect: <?= $wrong ?></p>

    <canvas id="scoreChart" height="200"></canvas>
    <canvas id="timeChart" height="200"></canvas>

    <form action="thankyou.php">
        <button class="primary-btn">Finish</button>
    </form>
</div>

<script>
new Chart(scoreChart, {
    type: 'pie',
    data: {
        labels: ['Correct','Incorrect'],
        datasets: [{
            data: [<?= $correct ?>, <?= $wrong ?>],
            backgroundColor: ['#4caf50','#f44336']
        }]
    }
});

new Chart(timeChart, {
    type: 'bar',
    data: {
        labels: <?= json_encode(range(1, count($time))) ?>,
        datasets: [{
            label: 'Time (sec)',
            data: <?= json_encode($time) ?>,
            backgroundColor: '#1976d2'
        }]
    }
});
</script>

</body>
</html>
