package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions (
		features = "E:\\Selenium\\Workspace\\CucumberFramework\\src\\main\\java\\Features\\CreateContacts.feature", //the path of the feature files
		glue={"StepDefinition"}, //the path of the step definition files
		format ={"pretty","html:test-outout", "json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		monochrome = true, // display the console output in a proper readable format
		strict = true, // it will check if any step is not defined in step definition file
		dryRun = false  // to check the mapping is proper between feature file and step definition file
		)


public class testRunner {
	
	
	

}
