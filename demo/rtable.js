riot.tag('rtable', '<table class="{opts.class}"> <th each="{ c in cols }" riot-style="{c.style}">{c.name}</th> <tr each="{ row in rows }" > <td each="{ colkey, colval in parent.cols }">{parent.parent.drawcell( parent.row, this, colkey)}</td></tr> </table>', function(opts) {

var self = this
var EL = self.root
this.cols = []
this.rows = []

this.on('mount', function() {
      
      for(c=0;c<EL.children.length;c++){
      		var child = EL.children[c]
      	  if(child.localName=='rcol'){

      		var col_style=''	
      		if(child.attributes['width']!=undefined)
      		col_style='width: '+ child.attributes['width'].value

          console.log(col_style);

      		self.cols.push({name:child.attributes['name'].value,
      		  				inner:child.innerHTML,
      		  				style:col_style
      		  				  })
      		}

      }

		
      if(opts.ongetdata){
      	self.rows = window[opts.ongetdata]() ;
      }
      

      self.update()

  	})


EL.load= function(newrows){
	self.rows=newrows
	self.update()
}.bind(this);

EL.append= function(newrows){
  self.rows.push(newrows)
  self.update()
}.bind(this);

 
 this.drawcell = function(rowdata, tr,  col) {
 	
 	 	
 	var idx = tr.root.children.length  //- index of the current painting cell
	
 	if(idx==0) return;

	

 	if( self.cols[idx-1].inner){

 		tr.root.children[idx-1].innerHTML=riot.util.tmpl( self.cols[idx-1].inner ,  rowdata )

 	}else{

		tr.root.children[idx-1].innerHTML=rowdata[self.cols[idx-1].name ]
 	}

 	

  
 }.bind(this);



});


riot.tag('rcol', '', function(opts) {
	var self = this
	this.on('mount', function(){ self.root.style.display='none'; })

});

