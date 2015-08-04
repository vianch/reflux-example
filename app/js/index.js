     import React from 'react';
     import ImageGrid from './components/ImageGrid';  
     import ImageActions from './actions/imageActions';
   
   setTimeout(() => { 
   	ImageActions.fetchList();
   },2500)
	React.render( 
     	<ImageGrid />,
     	document.getElementById('container')
     )
