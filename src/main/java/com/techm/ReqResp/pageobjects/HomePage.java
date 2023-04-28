package com.techm.ReqResp.pageobjects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.techm.ReqResp.utils.RespositoryParser;

import io.restassured.path.json.JsonPath;

public class HomePage extends BaseClass {
	
    private WebDriver driver;
	
	private RespositoryParser parser;
	
	public HomePage(WebDriver driver){
		super(driver);
		this.driver=driver;
		try {
			parser=new RespositoryParser("HomePage.properties");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void isSupportReqRespHomePageButton() {
		assertTrue(isElementDisplayed(parser.getObjectLocator("supportReqRespHomePageButton")));
	}
	
	public void clickSupportReqRespHomePageButton() {
		clickElement(parser.getObjectLocator("supportReqRespHomePageButton"));
	}
	
	public void clickEachMethodAndVerify(String methodType,String value) {
			WebElement linkToBeClicked= driver.findElement(By.xpath("//section[@id='console']//ul//li[@data-http='"+methodType+"']/child::a[contains(text(),'"+value+"')]"));
			scrollIntoView(linkToBeClicked);		
			linkToBeClicked.click();					
			
		}
	
	public void verifyDetailsForEachMethod(String reqUrl,String respStatusCode,String valueToBeVerifiedInResponse) {
		try {
			WebElement responseCode= driver.findElement(parser.getObjectLocator("responseCode"));
			assertEquals(respStatusCode,responseCode.getText());
			scrollIntoView(responseCode);
			
			WebElement responseJson=driver.findElement(parser.getObjectLocator("responseJson"));
			scrollIntoView(responseCode);
			String jsonOutput=responseJson.getText().trim();

			WebElement reqUrlem=driver.findElement(parser.getObjectLocator("responseUrl"));
			assertEquals(reqUrl, reqUrlem.getText().trim());			
			
			JsonPath objJsonPath=new JsonPath(jsonOutput);
			System.out.println(jsonOutput);
			System.out.println(valueToBeVerifiedInResponse.split(",")[0]);
			
			if(!valueToBeVerifiedInResponse.contains("{}")) {
				String attributeValueFromJson=objJsonPath.getString(valueToBeVerifiedInResponse.split(",")[0]);
				String attributeValue=valueToBeVerifiedInResponse.split(",")[1];
				assertEquals(attributeValueFromJson, attributeValue);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}	
	
	}	
	
	
	

}
