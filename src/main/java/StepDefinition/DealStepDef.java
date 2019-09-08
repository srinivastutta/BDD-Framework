//package StepDefinition;
//
//import java.util.Map;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class DealStepDef {
//
//	WebDriver driver;
//	
//@Given("^user is on login page$")
//public void user_is_on_login_page() {
//	System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\Selenium Setup Files\\chromedriver.exe");
//	driver=new ChromeDriver();
//	driver.get("https://freecrm.com/");
//	driver.manage().window().maximize();	
//	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//}
//
//@When("^title of login page is free crm$")
//public void title_of_login_page_is_free_crm() {
//	String title=driver.getTitle(); 
//	System.out.println(title);
//	Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
//	driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div[2]/div/div[2]/ul/a/span[2]")).click();
//}
//
//@Then("^user enters username and password$")
//public void user_enters_username_and_password(DataTable Credentials) {
//	for(Map<String, String> data: Credentials.asMaps(String.class, String.class)) {
//	
//		driver.findElement(By.name("email")).sendKeys(data.get("username"));
//		driver.findElement(By.name("password")).sendKeys(data.get("password"));
//		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
//	
//}}
//
//@Then("^user clicks on login button$")
//public void user_clicks_on_login_button() {
//	driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
//	
//}
//
//@Then("^user is on homepage$")
//public void user_is_on_homepage() throws InterruptedException {
//	//Thread.sleep(5000);
//	String HpTitle=driver.getTitle();
//	System.out.println(HpTitle);
//	Assert.assertEquals("CRM", HpTitle);
//  
//}
//
//@Then("^user clicks on deals$")
//public void user_clicks_on_Contacts() {
//driver.findElement(By.linkText("Deals")).click();
//
//}
//
//@Then("^user clicks on New button$")
//public void user_clicks_on_New_button() throws InterruptedException {
//driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a[2]/button")).click();
////Thread.sleep(5000);	
//}
//	
//@Then("^user enter deal details$")
//public void user_enter_deal_details(DataTable Details) throws InterruptedException {
//	for(Map<String, String> dealdata: Details.asMaps(String.class, String.class)) {
//		driver.findElement(By.name("title")).sendKeys(dealdata.get("Title"));
//		driver.findElement(By.name("probability")).sendKeys(dealdata.get("Probability"));
//		driver.findElement(By.name("commission")).sendKeys(dealdata.get("Commision"));
//		driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/button[2]")).click();
//		Thread.sleep(5000);
//		driver.findElement(By.linkText("Deals")).click();
//		driver.findElement(By.xpath("//*[@id=\"dashboard-toolbar\"]/div[2]/div/a[2]/button")).click();
//
//}}
//
//@Then("^close the browser$")
//public void close_the_broser() {
//driver.quit();
//	
//}
//	}
