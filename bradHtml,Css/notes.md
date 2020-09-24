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