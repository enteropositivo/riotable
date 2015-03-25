# RioTable  #

RioTable (Riot+Table) Is a flexible component to generate tables with [riot.js  lib](https://github.com/muut/riotjs) from a JSON source

(sources and sqamples very soon) 

### The simplest sample ###

```html
    <rtable ongetdata="getJSON">
    </rtable>
```

This is a simple definition of one table that renders **all**  JSON data returned by the callback function getJSON

```javascript    
    function getJSON(){
      return [
    		 {id:101, city:'New York', flag:'ny.png'},
    		 {id:202, city:'Berlin', flag:'be.png'},
    		 {id:205, city:'Madrid', flag:'md.png'}
    		 ]
    }
```

### The columns ###

We can specify wich columns from JSON data to render 

```html
    <rtable ongetdata="getJSON">
      <rcol name="id"/>
      <rcol name="city"/>
    </rtable>   
```    

### Some basic options ###

Setting an id or a CSS class (for example to render table as BootStrap table),  and the width of any column is so simple:

```html
    <rtable ongetdata="getJSON" id="myrtable" class="table">
      <rcol name="id" width="20px"/>
      <rcol name="city"/>
    </rtable>   
``` 

### Formating data ###

It's very common to include our custom HTML tags inside our rendered cell like bold text, links, images, html snippets ...

As easy as:

```html
    <rtable ongetdata="getJSON" id="myrtable" class="table">
      <rcol name="id" width="20px"> </b>{id}</b> </rcol>
      <rcol name="city"/> <a href="details/?city={id}">{city}</a> </rcol>
	  <rcol name="flag"/> <img src="img/{flag}" /> </rcol>
    </rtable>   
```
 



    