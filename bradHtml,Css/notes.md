#### More CSS concepts
##### Direct child     
```
div > p {
            background: #ddd;
        }
```
##### Directly after
```
select p after div
div + p {
    background: #333;
    color: #fff;
}
```        

##### By Attribute
```        
a[target] {
    background: red;
    color: #fff;
}
```

##### Specific attribute values
```         
input[type='text'],
input[type='email'] {
    width: 100%;
    margin-bottom: 5px;
}
```
##### nth-child Pseudo selectors

##### first child
```
li:first-child {
    background: red;
}
```
##### last child
``` 
li:last-child {
    background-color: blueviolet;
}
```
##### position 3 (nth child) */
```
li:nth-child(3) {
    background-color: crimson;
}
```
##### Every 3rd
```
li:nth-child(3n) {
    background-color: orange;
}
```
##### Every 3 after 7
``` 
li:nth-child(3n +7) {
    background-color: orchid;
}
```
##### Every odd
```
li:nth-child(odd) {
    background-color: #ccc;
}
```
##### Every even
```
li:nth-child(even) {
    background-color: #ddd;
}
``` 

#### Before & After
##### After
```
* adding content after an element

.is-required:after {
    content: '*';
    color: red;
    padding-left: 2px;
}
```    
##### Before
```
* adding content before an element

.is-required:before {
    content: '#';
    color: orchid;
    padding-right: 2px;
}
```  
###### ovreley eg using before
```
header:before {
    content: '';
    background: url('https://source.unsplash.com/random') no-repeat center center/cover;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
```  
##### Box shadows
```
.box {
    padding: 1rem;
    margin: 1rem;
    background: coral;
    color: #fff;

    /* offset-x | offset-y | color */
    box-shadow: 10px 10px teal;

    /* offset-x | offset-y | blur-radius */
    box-shadow: 5px 5px 20px teal;

    /* Negative values */
    box-shadow: -5px -5px 20px teal;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);

    /* Inset | offset-x | offset-y | color */
    box-shadow: inset -3px -3px teal;

    /* Multiple shadow */
    box-shadow: 3px 3px teal, -3px -3px 10px olive;
}
```

#### Text shadow
```
h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 4rem;
    }

    h1.a {
        /* h-shadow | v-shadow | color */
        text-shadow: 0.2rem 0.2rem steelblue;
    }

    h1.b {
        /* h-shadow | v-shadow | blur | color */
        text-shadow:0.4rem 0.3rem 0.7rem steelblue ;
    }

    h1.c {
        /* White Text */
        color: #fff;
        text-shadow:0.2rem 0.2rem 1rem steelblue ;
    }

    h1.d {
        /* Negative values */
        text-shadow:-0.4rem -0.3rem 0.7rem steelblue ;
}
```

#### Keyframes
```
.box {
    background: #fff;
    width: 200px;
    height: 200px;
    position: relative;
    /* animation-name: animate1;
    animation-duration:5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    animation-direction: alternate;
    animation-timing-function: ease-in-out; */
    animation: animate1 5s forwards 1s ease-in-out;
}

@keyframes animate1 {
    from {
        top: 0;
    }

    to {
        width: 600px;
        background-color: brown;
        top: 300px;
    }   
}
```
###### eg with percentage value
```
.box {
    background-color: #fff;
    width: 200px;
    height: 200px;
    position: relative;
    top: 0;
    left: 0;
    animation: animate1 5s forwards ease-in-out;
}

@keyframes animate1 {
25% {
    top: 0;
    left: 300px;
    background-color: red;
    border-radius: 50% 0 0 0;
}

50% {
    top: 300px;
    left: 300px;
    background-color: green;
    border-radius: 50% 0 0 0;
}

75% {
    top: 300px;
    left: 0;
    background-color: blue;
    border-radius: 50% 0 0 0;
}

100% {
    top: 0;
    left: 0;
    background-color: #fff;
    border-radius: 50%;
}
```

##### TRANSITIONAL PROPERTIES
###### Properties that have an identifiable halfway point

* background-color 
* background-position 
* border-color 
* border-width 
* border-spacing 
* bottom 
* color
* font-size 
* font-weight 
* height left 
* letter-spacing 
* line-height 
* margin 
* max-height 
* max-width 
* min-height 
* min-width 
* opacity 
* outline-color 
* outline-offset 
* outline-width 
* padding right 
* text-indent 
* text-shadow 
* top 
* vertical-align 
* visibility 
* width 
* word-spacing 
* z-index 


#### CSS Grid Layout
* Similar to flexbox
* Two-dimensional layouts
* can use "align-items", "justify-content", etc
* All direct child elements are "grid items"
* flex is one dimensional where as grid is two dimensional
* In grid there is a new unit called fraction(fr)
* User grid for outer elements and grid-like layouts
* use flex for simple alignment (inner elements, menu items, etc)
##### Syntax:
```
* display: grid          - creates a grid
* grid-template-coloumns - defines width & number of coloumns
* grid-template-rows     - defines width & number of rows
* grid-auto-rows         - setting auto width  for other rows
* grid-gap               - setting space between grids        

```

##### examples:
###### 1. basic setup
```
.grid {
    display: grid;
    grid-template-columns: 200px auto 200px; - setting 200px width for 1st and 3rd element and auto width for 2nd element
    grid-template-columns: auto auto auto;   - setting auto width for all elements 
    grid-template-columns: repeat(3, auto);  - setting all the 3 elelemnts auto width
    grid-template-columns: 1fr 2fr 2fr;      - setting elements a fractional width
    grid-gap: 1rem;                          - settng gap between grid elements   
}

```
###### 2. Two dimensional setup
```
.grid {
    display: grid;
    grid-template-columns: repeat(2, 2fr);  - Setting 2 coloumn with 1fr width
    grid-template-rows: 2fr 1fr;            - Setting rows with 2fr & 1fr width
    grid-auto-rows: 2fr;                    - setting remaining row elements 2 fr width
    grid-gap: 1rem;
}
```

