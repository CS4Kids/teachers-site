---
navbar: true
sidenav: true
lastUpdated: true
contributors: false
layout: PrintableLayout
---

<div class="home">
<h1 class="page-title">Lesson Plan: Chapter 4</h1>

## Connecting to CSTA Standards

Grades | Concept | Subconcept | Standard Number | Practice
---|---|---|---|---
6-8 | Impacts of Computing | Culture | 2-IC-21 | Fostering an Inclusive Computing Culture: 1.2 |

### Discuss issues of bias and accessibility in the design of existing technologies. 

Students should test and discuss the usability of various technology tools (e.g., apps, games, and devices) with  the teacher's guidance. For example, facial recognition software that works better for lighter skin tones was likely developed with a homogeneous testing group and could be improved by sampling a more diverse  population. When discussing accessibility, students may notice that allowing a user to change font sizes and colors will not only make an interface usable for people with low vision but also benefits users in various situations, such as in bright daylight or a dark room.

## Learning Outcomes/Goals

In this chapter, students start to understand how watching how users make use of the various systems that engineers create can inform them of flaws in their design. By watching how some users have difficulty actually using a piece of software or hardware, engineers can gather valuable feedback on how to improve the designs of their systems. 

This chapter discusses the important topic of accessibility - the simple idea that the web should be usable by everyone, regardless of abilility. It is a fascinating area of inquiry and in many parts of the world, it's the law. This chapter mentions several legal documents that students can reference to understand how important it is to make systems accessible to everyone.

By rethinking a system's design to include more users, students are encouraged to think more inclusively about software and hardware design. In the process, they can learn about many tools available to developers and ways that sites can be tested for accessibility.

## Differentiated Instruction

Lower level students | Higher level students
---|---
Students can follow the instructions to sketch out a more accessible version of their device to cater to a more diverse array of fireflies. Then they can build the device in the emulator. | More advanced students can work with actual devices, experimenting with sensors other than those listed in the project recipe, to create a more useful and accessible device.

## Transfer Learning

Study your school or town's web site and discover whether it is accessible. Where you find problems, recommend fixes to the person managing the web site.

## Vocabulary

- **Accessibility**: Defined as "The design of products, services, and environments for usability by disabled people" in wikipedia.
- **‘alt’ attribute**: Alternate text that is shown by screen readers and shown as a description of an element is not able to be rendered.
- **ARIA**: Accessible Rich Internet Applications, a specificiation published by W3C (the World Wide Web Consortium). It specifies how to make web assets more accessible.
- **Lighthouse**: A tool built by Google that assesses a site's accessibility, performance, and more.
- **Screen reader**: A hardware device designed to help people with vision impediments visualize web pages by reading them out, element by element. 
- **Semantic HTML**: HTML elements that are descriptive of their function, such as `<article>` or `<header>`.

## Assessment

Students should be able to describe why we need to build accessible web sites and some techniques to accomplish this goal.

Formative | Summative
---|---
Research the various ways that web sites can be made more accessible, performing a 'before and after' exercise to show how a given site has been made more accessible. | Write a summary of how a web site was penalized for not being accessible as required by law, and describe the steps that had to be taken to correct the issue. A good case study is [Beyonce's web site](https://www.boia.org/blog/beyonces-website-the-focus-of-an-accessibility-lawsuit).

## Quiz Answers

Which one of these is an example of Semantic HTML?  

a. `<div>`  

b. <span class="highlight">`<header>`</span>

c. `<div role="button">` 

ARIA stands for: 

a. Additive Rich Internet Applications

b. <span class="highlight">Assistive Rich Internet Applications</span> 

c. Assistive Ready Internet Applications 

Accessibility encompasses:  

a. Color contrast, motion awareness, and readability 

b. Alt tags, Semantic HTML, and well-written links  

c. <span class="highlight">Both the above</span> 

## More Resources/Materials

[The Beyonce lawsuit](https://www.boia.org/blog/beyonces-website-the-focus-of-an-accessibility-lawsuit)

[Lighthouse](https://developer.chrome.com/docs/lighthouse/)

Assistive technology, including [screen readers](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers)

An [infographic](https://webaim.org/resources/designers/) on web accessibility for designers

## Solution Code: 

The full solution codebase can be found [in the micro:bit web site](https://makecode.microbit.org/_Ar1LpRJaMid8) and on [GitHub](https://github.com/CS4Kids/CS4Kids-Accessible-Refuge)

## Assignment and Rubric: Usable or Not?

> Pick a mobile app or website that you enjoy using and build out an analysis of how usable it is, using [this worksheet](https://www.cs4kids.club/assets/ch4-worksheet.pdf). If it’s not accessible, how can you improve it? What could be enhanced to make it more accessible to other people? Then, dig deeper by considering the design thinking that went into the development of one part of the app or website. For example, if the app includes facial recognition or a fingerprint scan to log in, how do you think that technology was developed to ensure that everybody can log in? How was the design tested? How could it be improved? 

Exemplary | Adequate | Needs Improvement 
---|---|---
The student describes the targeted app and builds a report with screenshots paired with an analysis, based on the worksheet's rubric. | The student neglects to add screenshots | The student neglects to provide a complete analysis of the prolem and proposed solution.
</div>