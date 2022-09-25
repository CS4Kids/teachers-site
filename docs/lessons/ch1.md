# Lesson Plan: Chapter 1
---
#### Connecting to CSTA Standards

Grades | Concept | Subconcept | Standard Number | Practice
---|---|---|---|---
6-8 | Computing Systems | Hardware & Software | 2-CS-02 | Creating Computational Artifacts 5.1 |

#### Design projects that combine hardware and software components to collect and exchange data.

Collecting and exchanging data involves input, output, storage, and processing. When possible, students should select the hardware and software components for their project designs by considering factors such as functionality, cost, size, speed, accessibility, and aesthetics. For example, components for a mobile app could include accelerometer, GPS, and speech recognition. The choice of a device that connects wirelessly through a Bluetooth connection versus a physical USB connection involves a tradeoff between mobility and the need for an additional power source for the wireless device.

---

#### Learning Outcomes/Goals

In this lesson, students will use a story concept -- restoring fireflies to the forest -- to design a project that uses a Micro:bit emulator to simulate the collection and exchange of data. 

Discussions can be held as well about how sensors can be used to collect data about the real world, especially by services that monitor important data pertaining to air quality, soil humidity, water temperature, and barometric pressure.

Students can work individually or in groups to sketch out their design to make a firefly trapper, based on their research of how fireflies behave and their optimal environment.

Students should consider how they would design a device that has to work outside in diverse climate conditions. They should think about power sources and how to make the device work efficiently. While their optimal trapper may not be able to be fully designed in the Micro:bit terminal, their sketch could show how they would add additional functionality to the device outside of the project recipe.

---

#### Differentiated Instruction

Lower level students | Higher level students
---|---
Can complete the project recipe in the emulator and explain how they would enhance it | Can try the project on a real device and enhance it with a motion sensor

---

#### Transfer Learning

Designing a 'trap' concept brings to mind the many ways that scientists tag animals in the wild to track their movements. Discuss real-world ways that sensors are used right now in camera traps, smart tagging, and micro-chipping animals to determine populations and keep pets safe. Students can research interesting real-life 'trap' type projects, discovering how they are designed to gather and exchange data between devices.

---

#### Vocabulary

- **Booleans**: A data type that have either true or false as their value. 

- **Breadboard**: A breadboard is a physical board that is used to connect electronic components together. Use a breadboard to prototype a hardware project before any soldering is needed to make wired connections permanent.

- **Hardware**: In the context of computer science, hardware are the connected electronic components that make up a computer system.

- **Sensor**: A device that produces output as a signal as it senses a physical change. A good example are the parts of a smoke detector that can detect changes in the air quality.

- **Server**: In computing, a server connects to a client (such as a browser) to provide services such as data transfer.

- **Software**: The written programs that contain executable code for use in computer systems.

- **Variable**: In programming, a variable is a value that can be changed. For example, a variable named 'x' can be changed to a different value. Variables are used to store values in memory.

---

#### Assessment

In this chapter, the students are tasked with thinking about a hardware system and choosing the appropriate components to accomplish the goals of the system while considering its eventual use and context.

Formative | Summative
---|---
Research how decisions are made by engineers to build hardware and software solutions appropriate for the task at hand and for the environment where they will be embedded. Sketch out a design for an optimal trap for fireflies. | Write a summary of the trap's goals and outcome, and outline three ways that the trap would be designed to withstand outdoor conditions.

---

#### Quiz Answers

Micro:Bit devices must be run on actual hardware
 - True
 - <span class="highlight">False</span>

 The base color of the LED light on your Micro:Bit is
 - <span class="highlight">Red</span>
 - Blue
 - White

 Conditions in blocks allow your code to 
  - Run faster 
  - Help you create lists
  - <span class="highlight">Help you make decisions</span>

---

#### More Resources/Materials

- Learn about the Snow Leopard Conservancy, a camera trap project: [Snow Leopard Conservancy](https://snowleopardconservancy.org/2020/03/11/using-camera-trap-technology-to-monitor-snow-leopards/)
- Learn about [Project 15](https://docs.microsoft.com/en-us/shows/Azure-Videos/project-15), a way to use IoT to support elephant conservation (with video).
- Discover how [microchipping technologies](https://petkey.org/public/howitworks.aspx) use RFIDs to tag pets.
- Learn about a student startup in New Zealand, [ProTag](https://www.startupdaily.net/2022/02/kiwi-agritech-startup-protag-raises-1m/), is helping keep cows healthy and safe with 'smart' tags.

---

#### Solution Code

The full solution codebase can be found [in the micro:bit web site](https://makecode.microbit.org/_3sjgH4gxeLYH) and on [GitHub](https://github.com/CS4Kids/CS4Kids-firefly-trapper)

---

#### Assignment and Rubric: Let's Go Outside

> Using [this downloadable worksheet](https://cs4kids.club/ch1-worksheet.pdf), prototype a program for your micro:bit that could can be used outside. An example would be to build a system that could can be used to send you a message when someone comes to your door, or to light up when the sun goes down, or to make a garden gnome say something to unsuspecting passers-by who walk past your garden. A requirement of your system is that your hardware device should be able to connect to a web site to enhance its functionality. Think of all the parts that need to work together in this system: hardware, software, cameras, and other sensors. Make note of how much it would will cost to build the system, how it would will be powered, and what it would will look like, taking into consideration any protection needed by the hardware to keep it safe from damage. 

Exemplary | Adequate | Needs Improvement 
---|---|---
The student creates a creative prototype that includes a design for hardware, software, and at least one other sensor | The student creates a prototype that lacks creativity or one of the required elements | The student creates only a basic prototype that lacks sophistication

