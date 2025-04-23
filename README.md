<!--badges-->
<div align="center">
  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
</div>

<a name="readme-top"></a>

<!--Title-->
<div align="center">

## Dinesh van Putten Portfolio Website

</div>



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Sub-title-->
<div align="left">

## Overview

This is a personal portfolio website created by Dinesh van Putten, a software development student at Alfa College in Groningen, Europapark. This website showcases my skills, projects, and achievements in the field of software development. It serves as a school assignment for Alfa College as part of my ongoing studies in web development.

The website includes various sections such as my introduction, a detailed overview of my projects, and links to my social media profiles. The layout is responsive, ensuring a seamless experience across different devices, from desktops to mobile phones.
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Description-->

<div align="left">

## Features
- Introduction Section: A brief overview of who I am and what I do as a software development student.
- Projects Section: A showcase of some of my key projects, including game development, web design, and more. 
- Each project features an image preview and a description.
- Social Media Links: Easy access to my social media profiles (LinkedIn, GitHub, and freeCodeCamp) to connect with me.
- Contact Information: Information on how to reach out to me directly.

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Description-->

<div align="left">

## Technologies Used
- HTML5: For the structure of the web pages.
- CSS3: For styling and layout, including responsive design features.

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Table of Contents-->
## Table of Contents
- [Dinesh van Putten Portfolio Website](#dinesh-van-putten-portfolio-website)
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Walkthrough](#walkthrough)
        - [HTML: Structure of the Home Page](#html-structure-of-the-home-page)
        - [Header Section](#header-section)
        - [Main title text with your name](#main-title-text-with-your-name)
        - [Profile image and bio text](#profile-image-and-bio-text)
        - [JavaScript: Smooth Page Transition](#javascript-smooth-page-transition)
        - [HTML: About Page Structure](#html-about-page-structure)
        - [Body: Content and Structure](#body-content-and-structure)
        - [About Me Section with Personal Description](#about-me-section-with-personal-description)
        - [Footer Section](#footer-section)
        - [JavaScript: Smooth Page Transition](#javascript-smooth-page-transition-1)
        - [](#)
        - [](#-1)
        - [](#-2)
        - [](#-3)
        - [](#-4)
        - [](#-5)
        - [](#-6)
        - [](#-7)
        - [](#-8)
        - [](#-9)
        - [](#-10)
        - [](#-11)
        - [](#-12)
        - [](#-13)
        - [](#-14)
        - [](#-15)
        - [](#-16)
        - [](#-17)
        - [](#-18)
        - [](#-19)
        - [](#-20)
        - [](#-21)
        - [](#-22)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!--Installation-->
## Installation
Currently using [(version 1.84)](https://code.visualstudio.com/updates/v1_84) of [Visual Studio Code](https://code.visualstudio.com/) but was made using a downgraded update of VSCODE.

* Install
```
  Visual Studio Code
```

- [x] Download `Visual Studio Code`
- [x] Make `New Text File`
- [x] Called `Portfolio Home Page.html`
- [x] Called `style.css`
- [x] Called `Portfolio About Page.html`
- [x] Called `Portfolio Project Page.html`
- [x] Called `Portfolio CV Page.html`
- [x] Called `Portfolio Contact Page.html`
- [x] Called `images folder`
- [ ] Multi-language Support
    - [ ] English


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Walkthrough

<!--Walkthrough-->


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 1-->
> Step 1 
###### HTML: Structure of the Home Page

<p>This is the Home Page of my personal portfolio website, created as part of my software development studies at Alfa College in Groningen Europapark. This project demonstrates my skills in web development, including HTML, CSS, and JavaScript. The website introduces myself as a software development student and provides links to other sections of my portfolio, such as About, Projects, CV, and Contact pages.</p>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags for character encoding, browser compatibility, and responsive layout -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Page title displayed in the browser tab -->
    <title>Dinesh van Putten Home Portfolio</title>
    
    <!-- Link to the external CSS file for styling -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Favicon for the webpage -->
    <link rel="icon" type="image/png" href="images/icon.png"/>
    
    <!-- Preconnect to Google Fonts to optimize font loading -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google Fonts link for custom font styling -->
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Giga&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
</head>

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 2-->
> Step 2
###### Header Section


```
<body class="dark-theme">
    <!-- Header section containing logo, navigation, and intro text -->
    <section class="header">
        <div class="nav-container">
            <!-- Navigation bar with logo and links -->
            <nav class="logo">
                <div class="nav-links">
                    <ul>
                        <!-- Navigation links to other pages in the portfolio -->
                        <li><a href="Portfolio Home Page.html">HOME</a></li>
                        <li><a href="Portfolio About Page.html">ABOUT</a></li>
                        <li><a href="Portfolio Project Page.html">PROJECTS</a></li>
                        <li><a href="Portfolio CV Page.html">CV</a></li>
                        <li><a href="Portfolio Contact Page.html">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </div>

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 3-->
> Step 3
###### Main title text with your name 


```
        <!-- Main title text with your name -->
        <div class="text-box">
            <h1>Dinesh <br>van Putten</h1>
        </div>

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 4-->
> Step 4
###### Profile image and bio text


```
        <!-- Profile image and bio text -->
        <div class="image-container">
            <!-- Profile image displayed in a circular style -->
            <img src="images/myphoto.jpg" alt="MyPh" class="circular-image">
            <br>
            
            <!-- Profile description text -->
            <p class="profile-text">My name is Dinesh van Putten.</p>
            <p class="profile-text">I am a software development student.</p>
            <p class="profile-text">
                Dedicated to fostering a supportive environment not only to demonstrate my capabilities as a developer
                but also reflect my commitment to growth, collaboration, and integrity within the tech world.
            </p>
            
            <!-- Social media links with icons -->
            <div class="social-icons">
                <a href="https://www.linkedin.com/in/dinesh-van-putten-69441b18a/" target="_blank">
                    <img src="images/linkedin1.png" alt="LinkedIn" class="social-icon">
                </a>
                <a href="https://github.com/GODiiKING" target="_blank">
                    <img src="images/github1.png" alt="GitHub" class="social-icon">
                </a>
                <a href="https://www.freecodecamp.org/GODiKING" target="_blank">
                    <img src="images/ffc1.jpeg" alt="freeCodeCamp" class="social-icon">
                </a>
            </div>
        </div>
    </section>

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 5-->
> Step 5
###### JavaScript: Smooth Page Transition


```
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Select all anchor links in the document
        const links = document.querySelectorAll('a');
    
        links.forEach(link => {
            // Add a click event listener to each link
            link.addEventListener('click', function (event) {
                const href = this.getAttribute('href'); // Get the link's href attribute
    
                // Check if the link is not an anchor (#) link
                if (href && !href.startsWith('#')) {
                    event.preventDefault(); // Prevent the default navigation behavior
    
                    // Add a fade-out animation to the body
                    document.body.style.animation = 'fadeOut 0.2s ease-out';
                    
                    // Delay navigation to allow the animation to complete
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500); // Matches the duration of the fade-out animation
                }
            });
        });
    });
</script>

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 6-->
> Step 6
###### HTML: About Page Structure

<p>This is the About page of my personal portfolio website, created as part of my software development studies at Alfa College in Groningen Europapark. The page introduces me as a software development student and provides a deeper look into my educational background, learning journey, and future goals.</p>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags for character encoding, browser compatibility, and responsive design -->
    <meta charset="UTF-8"> <!-- Sets character encoding to UTF-8 for proper text display -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Ensures compatibility with older versions of IE -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Enables responsive design for different screen sizes -->
    
    <!-- Page title displayed on the browser tab -->
    <title>Dinesh van Putten About Portfolio</title>
    
    <!-- Link to the external CSS file for styling -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Favicon for the webpage -->
    <link rel="icon" type="image/png" href="images/icon.png"/>
    
    <!-- Preconnect to Google Fonts for improved font loading performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google Fonts link for the 'Poppins' font family with various font weights -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
</head>

```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 7-->
> Step 7
###### Body: Content and Structure

```
<body class="dark-theme"> <!-- Sets a dark theme for the body -->
    <!-- Header and Navigation Menu -->
    <section class="header-2">
        <div class="nav-container">
            <nav class="logo"> <!-- Logo container for navigation -->
                <div class="nav-links">
                    <ul> <!-- Unordered list for navigation links -->
                        <li><a href="Portfolio Home Page.html">HOME</a></li> <!-- Link to the Home page -->
                        <li><a href="Portfolio About Page.html">ABOUT</a></li> <!-- Link to the About page -->
                        <li><a href="Portfolio Project Page.html">PROJECTS</a></li> <!-- Link to the Projects page -->
                        <li><a href="Portfolio CV Page.html">CV</a></li> <!-- Link to the CV page -->
                        <li><a href="Portfolio Contact Page.html">CONTACT</a></li> <!-- Link to the Contact page -->
                    </ul>
                </div>
            </nav>
        </div>
    </section>

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 8-->
> Step 8
###### About Me Section with Personal Description 




```
    <!-- About Me Section with Personal Description -->
    <section>
        <div class="para-4"> <!-- Main container for the About Me section -->
            <p class="para-3x"></p> <!-- Placeholder for the section title -->
            <p class="para-5"> <!-- Container for the detailed personal introduction -->
                My name is Dinesh van Putten, and I am a software development student currently enrolled at Alfa College in Groningen Europapark. My journey into the world of coding began with a natural curiosity about technology and how it shapes our everyday lives.</p>
                <p class="para-5">To enhance my skills and knowledge, I actively engage with educational platforms like freeCodeCamp. These resources have been invaluable in my learning journey, offering comprehensive curricula that cover a wide range of programming languages and frameworks.</p>
                <p class="para-5">Looking ahead, I am excited about the future of my programming journey. I plan to continue expanding my skill set by exploring new technologies and frameworks. My goal is to stay at the forefront of technological advancements, continually learning and adapting as the industry evolves.</p>
                <p class="para-5">In conclusion, I am Dinesh van Putten—a software development student. My journey is one of exploration, growth, and creativity, and I am excited to see where it leads me next.</p>
            </p>
        </div>
    </section>

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 9-->
> Step 9
###### Footer Section


```
    <!-- Footer Section -->
    <!-- Uncomment the section below to display the footer -->
    <!--
    <section class="footer footer1">
        <p>© 2024 Dinesh van Putten. All rights reserved.</p> <--- Footer text with copyright notice -->
    </section>

```




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 10-->
> Step 10
###### JavaScript: Smooth Page Transition


```
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Select all anchor links on the page
        const links = document.querySelectorAll('a');
            
        links.forEach(link => {
            // Add a click event listener to each link
            link.addEventListener('click', function (event) {
                const href = this.getAttribute('href'); // Get the 'href' attribute of the clicked link
                    
                // Skip anchor links (e.g., #section-name)
                if (href && !href.startsWith('#')) {
                    event.preventDefault(); // Prevent default link behavior
                    
                    // Apply fade-out animation to the body
                    document.body.style.animation = 'fadeOut 0.2s ease-out';
                    
                    // Delay navigation to the new page to match animation duration
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                }
            });
        });
    });
</script>

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 11-->
> Step 11
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 12-->
> Step 12
######




```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 13-->
> Step 13
######


```

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 14-->
> Step 14
######


```

```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 15-->
> Step 15
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 16-->
> Step 16
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 17-->
> Step 17
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 18-->
> Step 18
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 19-->
> Step 19
######


```

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 20-->
> Step 20
######


```

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 21-->
> Step 21
######


```

```


```

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 22-->
> Step 22
######


```

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 23-->
> Step 23
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 24-->
> Step 24
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 25-->
> Step 25
######


```

```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 26-->
> Step 26
######



```

```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 27-->
> Step 27
######


```

```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 28-->
> Step 28
######

```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 29-->
> Step 29
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 30-->
> Step 30
######

```

```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 31-->
> Step 31
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 32-->
> Step 32
######


```

```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 33-->
> Step 33
######


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 34-->
> Step 34



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 35-->
> Step 35



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 36-->
> Step 36



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 37-->
> Step 37



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 38-->
> Step 38



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 39-->
> Step 39



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 40-->
> Step 40



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 41-->
> Step 41



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 42-->
> Step 42



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 43-->
> Step 43



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 44-->
> Step 44





```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 45-->
> Step 45



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 46-->
> Step 46



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 47-->
> Step 47



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 48-->
> Step 48



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 49-->
> Step 49



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 50-->
> Step 50



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 51-->
> Step 51



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 52-->
> Step 52



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 53-->
> Step 53



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 54-->
> Step 54



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 55-->
> Step 55



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 56-->
> Step 56



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 57-->
> Step 57



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 58-->
> Step 58



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 59-->
> Step 59



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 60-->
> Step 60



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 61-->
> Step 61



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 62-->
> Step 62





```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 63-->
> Step 63



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 64-->
> Step 64



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 65-->
> Step 65



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 66-->
> Step 66



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 67-->
> Step 67



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 68-->
> Step 68



```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 69-->
> Step 69


```
    
```


```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--License-->
## License
Distributed under the [MIT License](https://choosealicense.com/licenses/mit/). See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Contact -->
## Contact

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://www.linkedin.com/in/dinesh-van-putten-69441b18a/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="dinesh van putten" height="30" width="40" /></a>
</p>

Dinesh van Putten - 📫 How to reach me **dineshvanputten@outlook.com**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Acknowledgments-->
## Acknowledgments

List of resources I find helpful and would like to give credit to.

* [Responsive Web Design by freeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
* [Choose an Open Source License](https://choosealicense.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


