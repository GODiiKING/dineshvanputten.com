<!--badges-->
  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<a name="readme-top"></a>

<!--Title-->
<div align="center">

## Rekening Website
</div>

My name is Dinesh van Putten, and this is a Math Base Website that I created by leveraging my foundational skills and utilizing resources from Google search. This README outlines the steps involved in building this website, which incorporates HTML, CSS, and JavaScript.

Additionally, I had prior experience in web development through courses I completed on freeCodeCamp, which made this project manageable. In this document, I will provide links and explain the resources and concepts I learned to develop the website using HTML, CSS, and JavaScript.

[JavaScript](https://www.w3schools.com/js/DEFAULT.asp) is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with [HTML](https://www.w3schools.com/html/) and [CSS](https://www.w3schools.com/Css/), and is supported by all modern browsers.

This is a simple website that anyone can create with the help of online resources and code repositories. The website consists of four pages, each offering a different math operation:

1. Addition
2. Subtraction
3. Multiplication
4. Division

The website is built with straightforward commands to ensure smooth functionality.

* [Math website Made With HTML CSS & JavaScript](https://www.bing.com/search?q=math+website+made+with+html+css+and+javascript&qs=n&form=QBRE&sp=-1&ghc=2&lq=0&pq=math+website+made+with+html+css+and+javascript&sc=8-46&sk=&cvid=9CEDE721B754495E8D49A5333D77D702&ghsh=0&ghacc=0&ghpl=)
* [Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
* [JavaScript Algorithms and Data Structures (Beta)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)
* [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/)
* [YouTube: Number website HTML](https://www.youtube.com/results?search_query=number+website+html)


[freeCodeCamp](https://www.freecodecamp.org/learn) is a non-profit organization that offers free online coding courses. They have a wide range of courses on web development, data science, and more.

If you’re interested in learning [JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/), I recommend checking out the JavaScript by [Learn JavaScript - Full Course for Beginners](https://youtu.be/PkZNo7MFNFg?si=g4rnDjpwuXQp7WmJ). This tutorial provides an overview of the most important concepts and fundamentals of JavaScript, including variables, arrays, objects, loops, and functions.

<!--Installation-->
## Installation
Currently using [(version 1.93)](https://code.visualstudio.com/updates/v1_84) of [Visual Studio Code](https://code.visualstudio.com/) but was made using a downgraded update of VSCODE.

* Install
```
  Visual Studio Code
```

- [x] Download `Visual Studio Code`
- [x] Make `Folder`
- [x] Add `index.html`
- [x] Add `subtract.html`
- [x] Add `multiply.html`
- [x] Add `divide.html`
- [x] Add `style.css`
- [x] Add `add.js`
- [x] Add `subtract.js`
- [x] Add `multiply.js`
- [x] Add `divide.js`
- [x] Add `wrong.mp3`
- [x] Add `README`
- [ ] Multi-language Support
    - [ ] English

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Sub-title-->


<!--Table of Contents-->
## Table of Contents
- [Rekening Website](#rekening-website)
- [Installation](#installation)
- [Table of Contents](#table-of-contents)
- [Walkthrough](#walkthrough)
        - [```!DOCTYPE```](#doctype)
        - [```Link``` to Font Awesome for icons](#link-to-font-awesome-for-icons)
        - [```Audio``` tag ```wrong.mp3```](#audio-tag-wrongmp3)
        - [```Header```/```container```/```nav```](#headercontainernav)
        - [```nav```/```ul```/````li````](#navulli)
        - [```a href```/```class```](#a-hrefclass)
        - [```div```/```wrapper```/```h1```](#divwrapperh1)
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
        - [](#-23)
        - [](#-24)
        - [](#-25)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Walkthrough

<!--Walkthrough-->
This is a walkthrough that guides users through the process of building this project. Walkthroughs can be more complex and detailed depending on the software and the task at hand. They are designed to help users complete a process step-by-step and ensure that they don’t miss any important steps along the way. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 1-->
> Step 1
###### ```!DOCTYPE```


```
<!DOCTYPE html>
<html lang="en">
<head>
 <!-- Meta tags for character encoding and responsive design -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Link to external CSS file for styling -->
  <link rel="stylesheet" href="style.css">
  
  <!-- Website title -->
  <title>Rekening Website</title>
</head>
<body>

  <!-- Link to external JavaScript file for functionality -->
  <script src="add.js"></script>
  
</body>
</html>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 2-->
> Step 2
###### ```Link``` to Font Awesome for icons

[Google Fonts](https://developers.google.com/fonts/)
[Luckiest Guy Font](https://fonts.google.com/specimen/Luckiest+Guy?query=luckie)

```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 3-->
> Step 3
###### ```Audio``` tag ```wrong.mp3```


```
  <audio id="myAudio">
    <source src="wrong.mp3" type="audio/mpeg">
  </audio>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 4-->
> Step 4
###### ```Header```/```container```/```nav```


```
<header>
    <div class="container">
      <div class="nav">
        
      </div>
    </div>
</header>
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 5-->
> Step 5
###### ```nav```/```ul```/````li````


```
<header>
    <div class="container">
      <div class="nav">
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Step 6-->
> Step 6
###### ```a href```/```class```


```
<header>
    <div class="container">
      <div class="nav">
        <h2><span><i class="fa fa-trophy" aria-hidden="true"></i></span> REKENING</h2>
        <nav>
          <ul>
            <li class="current"><a href="index.html">Optellen</a></li>
            <li><a href="subtract.html">Aftrekken</a></li>
            <li><a href="multiply.html">Vermenigvuldigen</a></li>
            <li><a href="divide.html">Verdeling</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 7-->
> Step 7
###### ```div```/```wrapper```/```h1```

```
  <div class="wrapper">
    <div class="equation">
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1
    </div>
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 8-->
> Step 8
######




```

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 9-->
> Step 9
######


```

```




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--Step 10-->
> Step 10
######


```

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


`Top 3 things cats hate:`

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
<a href="https://twitter.com/godiiking" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="godiiking" height="30" width="40" /></a>
<a href="https://www.linkedin.com/in/dinesh-van-putten-69441b18a/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="dinesh van putten" height="30" width="40" /></a>
<a href="https://instagram.com/god_no_kami" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="god_no_kami" height="30" width="40" /></a>
</p>

Dinesh van Putten - 📫 How to reach me **dineshvanputten@outlook.com**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!--Acknowledgments-->
## Acknowledgments

List of resources I find helpful and would like to give credit to.

* [Responsive Web Design by freeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
* [Choose an Open Source License](https://choosealicense.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


