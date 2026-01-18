import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class QuizAutomatedTest {

    public static void main(String[] args) throws Exception {

        System.setProperty(
            "webdriver.chrome.driver",
            "C:\\selenium\\chromedriver.exe"
        );

        WebDriver driver = new ChromeDriver();

        // 1️⃣ Open Landing Page
        driver.get("http://localhost/index.php");
        Thread.sleep(3000);

        // 2️⃣ Verify Title & URL
        System.out.println("Title: " + driver.getTitle());
        System.out.println("URL: " + driver.getCurrentUrl());
        Thread.sleep(1500);

        // 3️⃣ Select Category
        driver.findElement(By.name("category")).sendKeys("Technology");
        Thread.sleep(1500);

        // 4️⃣ Select Difficulty
        driver.findElement(By.name("difficulty")).sendKeys("Medium");
        Thread.sleep(1500);

        // 5️⃣ Start Quiz
        driver.findElement(By.className("primary-btn")).click();
        Thread.sleep(1500);

        // =============================
        // QUESTION 1 → Answer normally
        // =============================
        driver.findElements(By.className("option-btn")).get(0).click();
        Thread.sleep(1500);
        driver.findElement(By.id("nextBtn")).click();
        Thread.sleep(1500);

        // =============================
        // QUESTION 2 → Answer normally
        // =============================
        driver.findElements(By.className("option-btn")).get(1).click();
        Thread.sleep(1500);
        driver.findElement(By.id("nextBtn")).click();
        Thread.sleep(1500);

        // =================================================
        // QUESTION 3 → DO NOTHING (let 10-sec timer expire)
        // =================================================
        System.out.println("Waiting for Q3 timer to auto-submit...");
        Thread.sleep(11000);   // wait slightly more than 10 seconds

        // =============================
        // QUESTION 4 → Answer normally
        // =============================
        driver.findElements(By.className("option-btn")).get(2).click();
        Thread.sleep(1500);
        driver.findElement(By.id("nextBtn")).click();
        Thread.sleep(1500);

        // =============================
        // QUESTION 5 → Answer + Submit
        // =============================
        driver.findElements(By.className("option-btn")).get(0).click();
        Thread.sleep(1500);
        driver.findElement(By.id("nextBtn")).click();
        Thread.sleep(1500);

        // =============================
        // RESULT PAGE VERIFICATION
        // =============================
        WebElement resultHeading = driver.findElement(By.tagName("h2"));
        System.out.println("Result Page Heading: " + resultHeading.getText());
        Thread.sleep(1500);

        // =============================
        // FINISH → THANK YOU PAGE
        // =============================
        driver.findElement(By.className("primary-btn")).click();
        Thread.sleep(1500);

        System.out.println("Final Page Title: " + driver.getTitle());
        System.out.println("Final URL: " + driver.getCurrentUrl());

        // Close browser
        driver.quit();
    }
}
