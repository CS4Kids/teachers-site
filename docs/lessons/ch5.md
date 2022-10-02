# Lesson Plan: Chapter 5
---
#### Connecting to CSTA Standards

Grades | Concept | Subconcept | Standard Number | Practice
---|---|---|---|---
6-8 | Networks & the Internet | Network Communication & Organization | 2-NI-04 | Developing and Using Abstractions: 4.4 |

#### Model the role of protocols in transmitting data across networks and the Internet

Protocols are rules that define how messages between computers are sent. They determine how quickly and securely information is transmitted across networks and the Internet, as well as how to handle errors in transmission. Students should model how data is sent using protocols to choose the fastest path, to deal with missing information, and to deliver sensitive data securely. For example, students could devise a plan for resending lost information or for interpreting a picture that has missing pieces. The priority at this grade level is understanding the purpose of protocols and how they enable secure and errorless communication. Knowledge of the details of how specific protocols work is not expected.

---

#### Learning Outcomes/Goals

In this chapter, students explore the concepts behind how information is passed around the internet between local computers and servers either on-premesis or in the Cloud. To securely transmit data in an error-free state, protocols have been developed and are used systematically to ensure that data is securely passed from start to end. To encourage creative thought around this somewhat abstract topic, we use a metaphor of a beam of light that must find its way, quickly and fully-powered, from the sun to a patch of moss that needs the light to be able to survive. Students will build a simple game in MakeCode arcade, an online tool to build retro games, to visualize the process.

---

#### Differentiated Instruction

Lower level students | Higher level students
---|---
Can complete the project recipe and explain how the metaphor pertains to the way internet protocols work. They could also enhance the game to enhance the metaphor. | More advanced students could enhance the game by picking a particular protocol and mimicking it in the Arcade format.

---

#### Transfer Learning

Students can watch how data moves between browsers and servers by running a web page test using free tools such as [https://www.webpagetest.org/](https://www.webpagetest.org/). They can pick a web site and run an analysis on it to view its performance. 

---

#### Vocabulary

- **Byte**: A unit for use by the internet that consists of 8 bits, usually considered the smallest unit of memory that a computer can access.

- **Protocol**: Protocols enable the internet to be interconnected. Protocols are designed to offer standard formats and structures by means of which data can be transfered from one endpoint to another.

- **TCP/IP**: Actually two protocols, TCP is the Transmission Control Protocol, and IP is the Internet Protocol. As a suite, they allow a reliable way for data to be transmitted. The World Wide Web used everyday by millions of users relies on these protocols.

- **Tilemap**: In a game context, tilemaps are used to build mazes and walls around which characters can navigate.

---

#### Assessment

Students are not responsible for describing in detail the particularities of internet protocols, but understanding in general how they work and being able to name a few important ones are adequate to assess comprehension of this topic.

Formative | Summative
---|---
Research a few important protocols, how they evolved, what they were designed to solve, and how they are used today. | Write a summary of how a given protocol is particularly important for solving a problem of security, data transmission, or other common task.

---

#### Quiz Answers

A tilemap is used to create a::  

a. A wall  

b. A hedge  

c. <span class="highlight">Both Both of these</span> 

The Internet is set up in a way to allow fallbacks in case of error or dropped connections. 

a. <span class="highlight">True</span>

b. False 

TCP/IP is:  

a. A kind of server  

b. A kind of web site 

c. <span class="highlight">A set of communication protocols</span>

---

#### More Resources/Materials

- A list of 12 important internet [protocols](https://tyonote.com/internet_protocols_types/)

- Khan Academy module on internet [protocols](https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:the-internet-protocol-suite/a/the-internet-protocols)

- An interesting article on transmitting internet data via your [home's outlets](https://www.popularmechanics.com/home/interior-projects/how-to/a14101/how-to-transmit-internet-power-outlets/)

---

#### Solution Code

The full solution codebase can be found on [GitHub](https://github.com/CS4Kids/CS4Kids-Glowing-Moss) and accessed on [GitHub](https://cs4kids.github.io/CS4Kids-Glowing-Moss/) or on [MakeCode Arcade](https://makecode.com/_LCri8PVcvLy8)

---

#### Assignment and Rubric: Draw the Map

In this chapter, you learned about protocols and how they help the process of transmitting data across networks and the Internet. Protocols define how messages are transmitted, something like how you defined the best path for your sunbeam to travel to arrive at the moss. Now it’s time to apply your knowledge to the real world. Imagine that a message, stored in some server in the cloud, has to travel from that server to your inbox. 

Draw a map of the best, secure path for that message to take to arrive into your inbox, intact. Note that the message could be a large batch of text, an image, or a video. The message could also be coming from a server, and you want to receive it on your phone. Draw a map of a network to visualize your message’s route. Don’t forget to note the ways that messages can be corrupted or lost.  

Exemplary | Adequate | Needs Improvement 
---|---|---
The student creates a map notating different types of messages and endpoints and a minimum of five ways that it can be corrupted or lost | The student creates a basic map image that neglects one of the above elements | The student creates an incomplete map


