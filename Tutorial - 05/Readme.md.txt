																									CSS selectors

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

	a[href*="thenetninja"] means any href starts with the netninja

	a[href$="thenetninja"] means any href ends with the netninja

											The cascade

	HTML elements can inherit css properties that are applied to their parents

	Eg HTML: <div>
	<p></P
	</div> 

	If we apply a style to the div element
	Div { color: red}

	Font properties can only be inheritted.

	Specificity and precidence

	Div {
	Color: orange;
	}

	P {
	Color: cynnnamon;
	}
	Div.p {
	Color : tomato
	}

	3rd one is more specific than others so this will have first priority than others, followed by 2 and 1.

	Doubt

	1. Why to use multiple class names for a class
	2. diff between descendant selector and multiple class selector
