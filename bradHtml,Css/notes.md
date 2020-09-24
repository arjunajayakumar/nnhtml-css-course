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
