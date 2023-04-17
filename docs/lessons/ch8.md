---
navbar: true
sidenav: true
lastUpdated: true
contributors: false
layout: PrintableLayout
---

<div class="home">
<h1 class="page-title">Lesson Plan: Chapter 8</h1>

## Connecting to CSTA Standards

Grades | Concept | Subconcept | Standard Number | Practice
---|---|---|---|---
6-8 | Algorithms & Programming | Program Development | 2-AP-17 | Testing and Refining Computational Artifacts: 6.1 |

## Systematically test and refine programs using a range of test cases.

Use cases and test cases are created and analyzed to better meet the needs of users and to evaluate whether programs function as intended. At this level, testing should become a deliberate process that is more iterative, systematic, and proactive than at lower levels. Students should begin to test programs by considering potential errors, such as what will happen if a user enters invalid input (e.g., negative numbers and 0 instead of positive numbers).

## Connecting to NGS Standards

Grades | Standard Number | Concept | Practice
---|---|---|---
6-8 | MS-ETS1-3 | Engineering Design | Analyze data from tests to determine similarities and differences among several design solutions to identify the best characteristics of each that can be combined into a new solution to better meet the criteria for success | Analyze and interpret data to determine similarities and differences in findings | 

---

## Learning Outcomes/Goals

In this chapter, students learn about the important mandate to test software to discover bugs, fix them, and improve the quality of the product. The storyline talks about how the various parts of the moss-protection strategy seem to have fit together into a full system that could probably be tested so as to ensure that it continues to function as expected and keep the moss safe.

Students discover the various types of testing, including unit tests, regression testing, integration testing, and a full system test. They are encouraged to look at a real software test that checks a form to check whether a field is filled in. This software can be found on [GitHub](https://github.com/CS4Kids/Sample-Test).

---

## Differentiated Instruction

Lower level students | Higher level students
---|---
Students should be able to construct a fully-documented testing plan  | More advanced students can write a real test using Playwright

---

## Transfer Learning

Students can explore various aspects of [software testing](https://www.youtube.com/c/QAMadness) in this YouTube channel.

---

## Vocabulary

- **Integration test**: Designed to test a larger group of components, such as an entire authentication strategy
- **Regression test**: Designed to catch bugs that appear as software changes, ensuring the quality of the software remains high over its evolution
- **System test**: Designed to test an entire system
- **Unit test**: Designed to test a single component of an application such as a login form

---

## Assessment

Students should be able to write an entire testing strategy around a test and design a test suite to expose its weak points.

Formative | Summative
---|---
Research how the various elements of a test suite are written | Write a summary of how the test suite designed in the lesson can be created and maintained

---

## Quiz Answers

One Which one of of these is a testing framework: ? 

a.	Playful 

b.	Playpretty 

c.	<span class="highlight">Playwright</span>

TDD stands for:  

a.	Taco-driven development 

b.	<span class="highlight">Test-driven development</span>

c.	Training-driven development

A test can uncover faults in coding logic:  

a. 	<span class="highlight">True</span> 

b. 	False 

---

## More Resources/Materials

- [Software Testing Explained on YouTube](https://www.youtube.com/watch?v=oLc9gVM8FBM)

- [Playwright](https://playwright.dev/)

- [Creating a test suite on Microsoft Azure](https://learn.microsoft.com/azure/devops/test/create-a-test-plan?view=azure-devops)

- [Automation testing on Code Academy](https://www.codecademy.com/resources/blog/what-is-automation-testing/)

- [A free trial for automated testing](https://smartbear.com/ppc/testcomplete/web-testing/?msclkid=3332095bcfe01c7f8f426a61c31b1692&gclsrc=ds)

---

## Solution Code

The software to be tested and its test are found [on GitHub](https://github.com/CS4Kids/Sample-Test)

---

## Assignment and Rubric: Time to Test

> Now that you have practiced designing a test suite for your Secure Moss prototype, create a five-part test suite outline for a system in real life. Find a web site that you can test. Think about the elements on the site that would benefit from having a solid test behind them. An example would be a login form on Fidelity.com, which has several fields and a button to log in. Even a simple form could have many tests to check for the integrity of the form. Use the attached worksheet on our web site to build out a suite for one element of a public-facing web site. 

Exemplary | Adequate | Needs Improvement 
---|---|---
The student creates a five part test suite with detailed instructions on the elements to test, and how to handle their various states | The student creates a minimal test plan | The student fails to show the minimal plan with its various states outlined
</div>