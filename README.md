# TuPcIdeal_P1

#About this project

The project is going to be developed as a website that will allow the user to look up different types of computers and also give them information about the parts that every computer has, the result That will be shown are going to be based on information that the user will provide us before starting the search.

**Project setup**

The following guide will explain in detail how to configure the development environment and all the tools required for the project. Therefore, it is essential not to skip any installation step.

[[_TOC_]]

#**Programs**


##**1. Python**
Python will be used Version: 3.9.1 According to OS
- Windows: [Python](https://www.python.org/downloads/)
- Ubuntu on terminal type sudo apt-get update then sudo apt-get install python3.9.1
- To check if everything was fine, run in terminal
o Windows: Python –version
o Linux: Python3 --version

##**2. Pip**

To install pip, the Windows console will be used ('cmd') or using Linux from bash, the following command must be executed once Python is installed in the previous step.

- Command: python get-pip.py
o To check if everything was fine, run in terminal: pip --version

##**3. Django**

Django you must have the previous steps installed and after this using pip run in cmd for Windows or in bash for Linux
- Command: `pip install Django == 3.1.6`

##**4. Development environment**

Visual studio code is required for the environment. This can be downloaded from the official website: [Vs code](https://code.visualstudio.com/ )

- Once the development environment is installed, select the option ![image.png](/.attachments/image-eaf9dc49-13c6-4d8e-938f-86917e1cb0d8.png) to install the following extensions:

![image.png](/.attachments/image-69735118-6695-466e-89e9-d9e3fc6469ae.png)
![image.png](/.attachments/image-75121198-ccb3-4b3d-a2de-b6cd0ec5cfd6.png)
![image.png](/.attachments/image-51607e31-7648-4e38-bc33-1e3efcb25b2a.png)
![image.png](/.attachments/image-8716ea92-f0d3-41a4-af3b-a349aa7c31e8.png)
##**5. Git**

To install git it depends on your os

- **Windows**
Use the following link: [Git](https://git-scm.com/)
![image.png](/.attachments/image-44e7d458-0cd7-4442-8cde-d2c45e5ed810.png)

  Select download
  ![image.png](/.attachments/image-6b3f80c5-e5cc-4eae-95aa-fccceb5a0db1.png)

  Watch this video to install and set up git and put your username and mail [Tutorial](https://www.youtube.com/watch?v=GaaAdAdfRuQ&ab_channel=CodingLeader)

- **Linux**

  Depend on your distro run the command in your terminal [Git install](https://git-scm.com/download/linux)

- Some git commands 

  **Note: the first two commands are required to run if you are using git for the first time**

  ![carbon (21).png](/.attachments/carbon%20(21)-e069b2e3-8235-426b-88d9-01a199681448.png)

  for more info see [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)

##**6. Node**

To work on the frontend you need to install Node.js to run the frontend server

to install node on windows open this link and continue with the install [Node](https://nodejs.org/dist/v14.16.0/node-v14.16.0-x64.msi).

On Linux follow this tutorial [Installation of Node.js on Linux
](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)
###6.1 Npm 

To install react and the others require libraries to the project you need to install npm to do this you need to install first Node.js then on the terminal run `npm install npm@latest -g`

one you install npm and use a git-clone of our project you need to run this command to install all the dependencies for the project running `npm install` 
