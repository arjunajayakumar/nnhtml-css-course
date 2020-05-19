# Net Ninja HTML, CSS Course

## Tutorial 1
### Introduction

1.HTML is the markup language to structure content
2.CSS is the language for styling web pages.
3.HTML tags are used for structuring the content on a web page.

## Tutorial 2
### HTML Basics
#### HTML Tags - The HTML document is composed of a tree of HTML elements or tags. All the elements are represented using a opening tag and a closing tag. (< ></ >)

Common html elements

1. P - paragraph tag
   Used for writing paragraph text

2. h - heading tag
  Used for writing headings on a page. Headings tags are represented from h1 to h6 in the decreasing order of the text size.
3. small - small tag
  Used to make the text smaller
4. Strong - strong tag
  Used to make the text bold
5. ul - stands for unorderd list
  used for making bulletted lists

      syntax: <ul> 
      <li></li>
      </ul>
6. a - anchor tag
  used for adding hyperlinks
7. blockquote - used for adding block quotes
      The items should be listed will be between and opening and closing ul tags
6. div - division tag
  div tags makes division between elements. there will be no visual effect 
7. span - span tag
  it is an inline element 
8. br - line break
  for amking line breaks between elements
9. hr - horizondal rule
  for making a horizondal line
10. img - image tag
  for inserting a image to the web page

##### Attribute
  something inside an element which have sme property
  eg: href - for adding hyperlinks

## Tutorial 3
### HTML Forms

#### syntax
  <form> 
  <label for="ID">name</label>
  <input type = "text", id="name">
  </form>


##  TUTORIAL05

### css selectors and classes.


1. class selector - to specifically select a tag.  
   
eg:<p class="name">Hello world</P>

   	syntax: .name { } 

if we select p.name { } - This will only select the p tag with the      class name = name
we can also use multiple class names for a tag

eg: <p class="name hello">Hello world</P>

   	syntax: p.name.hello { } 
	
2. ID selector
 
eg: <p id ="name"> hello world  </p>

syntax = #name {}

3. descendant selector - selects the child element of a parent element

eg: div p {

will select only p tags of a div 
}



4. attribute selectors

	eg: a[href]

to select a href attrib with a specific href value

eg: a[href="https://thenetninja.co.uk"] will select all href with the value 'https://thenetninja.co.uk' 
or 
a[href*="thenetninja"] means any href starts with the net ninja

a[href$="thenetninja"] means any href ends with the net ninja

The cascade

HTML elements can inherit css properties that are applied to their parents

Eg HTML: <div>
<p></P
</div> 

If we apply a style to the div element
Div { color: red}

Font properties can only be inherited.

Specificity and precedence.

Div {
Color: orange;
}


P {
Color: cinnamon;
}
Div.p {
Color : tomato
}

the 3rd one is more specific than others so this will have first priority than others, followed by 2 and 1.

Doubt

1. Why to use multiple class names for a class
2. diff between descendant selector and multiple class selector

## Tutorial 06

### HTML Schematic Tags

Used for a better structuring of the HTML page or making the code more meaningful.

<main> - for the main content of a webpage. This is unique to a webpage.
 eg - navigation

<section> - Defines a certain section of a webpage.
eg - contact, blog list

<article> - defines a bit of content which makes up an article
   eg - a blog post
<aside> - defines some content related to something else
 Eg - similar blogs
<header> - for the header of a website - contains the nav, title etc..
 
<footer> - for the footer of a website
<nav>


## Tutorial 7
### Chrome Development tools

1.elements tab - list all the html tags and its properties
2.If any rule is cross ruled it means this is over written by a new rule
3.Sources tab - shows all the source files of the project









