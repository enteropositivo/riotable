# RioTable  #

RioTable (Riot+Table) Is a flexible component to generate tables with [riot.js  lib](https://github.com/muut/riotjs) from a JSON source

(sources and sqamples very soon) 

## The simplest sample ##

```html
    <rtable ongetdata="getJSON">
    	<rcol name="id"/>
    	<rcol name="city"/>
    </rtable>
```

This is a simple definition of one table with 2 columns, that will be rendered on mount from the JSON data returned by the callback function getJSON

```javascript    
    function getJSON(){
      return [
    		 {id:101, city:'New York'},
    		 {id:202, city:'Berlin'},
    		 {id:205, city:'Madrid'}
    		 ]
    }
```   
    
    