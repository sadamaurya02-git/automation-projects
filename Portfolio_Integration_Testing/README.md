### PIT: Porfolio Integration Testing

**1. Project Overview**

A brief summary of the automation framework:

 - Hybrid (Keyword + Data driven)

 - Supports Web, Mobile & Terminal applications

 - Tools: Selenium, Appium, Ranorex (C#), JMeter

 - CI/CD ready with Jenkins and Bitbucket

**2. Features**

- Modular, reusable test components

- Separation of scripts and test data

- Record-and-playback + manual script creation

- Batch mode & scheduled execution

- Object-based & image-based UI automation

- Support for large-scale test suites

- Custom library expansion in Java

**3. Architecture**

Explains the high-level structure:

 - Folder structure (src, testdata, reports, config)

 - Keyword-driven layer

 - Data-driven layer

 - Core engine (Ranorex/Selenium/Appium)

 - Utility libraries

 - Reporting module


**4. Tools & Technologies**

- Selenium WebDriver

- Appium

- Ranorex (using C#)

- JMeter (Orchestration)

- Java

- Jenkins (CI/CD)

- Bitbucket (Version control)

**5. Setup Instructions**

Steps for users to set up the framework:

 - Clone the repository

 - Install Java/JDK + dependencies

 - Configure drivers (Chrome, Edge, Firefox)

 - Set up test data path

 - Configure Jenkins job (optional)

**6. How to Run Tests**

Explains all execution modes:

 - CLI Mode (via Jenkins or direct)

 - JMeter Execution (CLI & non-CLI)

 - Batch Execution (Run test cases using IDs)

 - Remote Execution

**7. Test Data Handling**

 - Excel/CSV-based data input

 - No script changes needed when data changes

**8. Reporting**

 - Includes screenshots of failed test cases in the Extent Report:

 - Summary report (Passed/Failed/Execution Time)

 - Logs

**9. Challenges Faced**

 - High execution time

 - UI locator changes

 - High maintenance for dynamic elements

 - Troubleshooting multi-step workflows

**10. Future Enhancements**

- Integrate Allure Report

- Add Docker support

- Parallel execution
