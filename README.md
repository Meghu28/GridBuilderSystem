# GridBuilderSystem
Grid Builder System
Grid Builder System

This project demonstrate the dynamic grid building system. The project is developed with help of Angular for the frontend and Spring Boot technology for the backend development. The web application presents a generic grid which presents a given list of records with specific styling based on engineer-defined configuration.

# Features
The developed web application has following features: 
(1) REST API end points to pass the row and configuration data. 
(2) Dynamic grid on frontend enabling data flow from rest API. 
(3) Configurable styles based on pass-on configuration settings.

# Technology
To develop this web application, the following technology has been used: 
Frontend Technology:
(1)	Angular version 19
(2)	Node version 22
(3)	Typescript version 5
(4)	R⨉JS for asynchronous API call
(5)	NgStyle for dynamic styling
Backend Technology:
(1)	Java version 17
(2)	Spring Boot version 3.4.4

# How to Run ?

Step-1
1)	Clone the repository from GitHub to your local device.

Step-2 Frontend Build
2)	Please perform the following command in power shell terminal to enter into frontend application.
cd frontend
3)	Please perform the following command in power shell terminal to build the frontend application.
ng build --configuration=production
 
4)	Please perform the following command in power shell terminal to go back to the parent folder.
.. cd
5)	Please perform the following command in power shell terminal to copy the files from frontend/dist folder to src/main/resources/static folder of JAVA application.
robocopy frontend/dist/frontend/browser src/main/resources/static /E /MIR
 

Step-3 Backend Build
6)	Please perform the following command in power shell terminal to build the entire JAVA application using MVN command.
mvn spring-boot:run

Step-4 Open Web Application
7)	Please access the web application with following URLs. 

http://localhost:8080/

localhost:8080/grid/configData

localhost:8080/grid/rowData

 

 

 

