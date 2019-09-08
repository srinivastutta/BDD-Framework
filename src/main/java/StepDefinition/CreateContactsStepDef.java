package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CreateContactsStepDef {
	WebDriver driver;
	
@Given("^user is on login page$")
public void user_is_on_login_page() {
	System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Selenium Setup Files\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.get("https://freecrm.com/");
	driver.manage().window().maximize();	
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
}

@When("^title of login page is free crm$")
public void title_of_login_page_is_free_crm() {
	String title=driver.getTitle(); 
	System.out.println(title);
	Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
	driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div[2]/div/div[2]/ul/a/span[2]")).click();
}

@Then("^user enters \"(.*)\" and \"(.*)\"$")
public void user_enters_username_and_password(String username, String password) {
driver.findElement(By.name("email")).sendKeys(username);
driver.findElement(By.name("password")).sendKeys(password);
driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
	
}

@Then("^user clicks on login button$")
public void user_clicks_on_login_button() {
	driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
	
}

@Then("^user is on homepage$")
public void user_is_on_homepage() throws InterruptedException {
	//Thread.sleep(5000);
	String HpTitle=driver.getTitle();
	System.out.println(HpTitle);
	Assert.assertEquals("CRM", HpTitle);
  
}

@Then("^user clicks on Contacts$")
public void user_clicks_on_Contacts() {
driver.findElement(By.linkText("Contacts")).click();

}

@Then("^user clicks on New button$")
public void user_clicks_on_New_button() throws InterruptedException {
driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a/button")).click();
//Thread.sleep(5000);	
}

@Then("^user enter Contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enter_Contact_details_and_and(String firstname, String lastname, String department) {
driver.findElement(By.name("first_name")).sendKeys(firstname);
driver.findElement(By.name("last_name")).sendKeys(lastname);
driver.findElement(By.name("department")).sendKeys(department);
   
}

@Then("^user clicks on Save button$")
public void user_clicks_on_Save_button() {
driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click();

}

@Then("^close the browser$")
public void close_the_broser() {
driver.quit();
	
}
	}
