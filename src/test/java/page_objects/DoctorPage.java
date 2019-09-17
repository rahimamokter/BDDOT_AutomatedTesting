package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DoctorPage { 


	private static WebDriver driver;
	public static By Doctor_link= By.linkText("DOCTOR");
	
	public static boolean isDisplayed(WebDriver driver, By xPath){
		return driver.findElement(xPath).isDisplayed();
	}


	public DoctorPage(WebDriver driver) {
		System.out.println("DoctorPage constructor initiated....");
		//		super(driver);
		//		this.driver = driver;
	}



}