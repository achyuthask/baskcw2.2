
import './App.css';
import React from 'react';

function App() {

  const pic=  React.createElement('img', {src:'https://cdn.wallpapersafari.com/29/32/zdpXbg.jpg' ,alt:" "}, );
  const  para1=React.createElement('h1' , {}, 'Naruto uzumaki');
  const  para2=React.createElement('p' , {}, 'Lorem ipsum dolor sit amet');
  const  para3=React.createElement('p','br' , [], '100',<br></br>,'posts');
  const  para4=React.createElement('p' ,'br' ,[], '50',<br></br>,'following');
  const  para5=React.createElement('p' ,'br' ,[], '1.0B',<br></br>,'followers');
  const  para6=React.createElement('button' , {}, 'Follow');
  const  para7=React.createElement('button' , {}, 'message');







  return (
    <div className="card">
     {pic}
     {para1}
     {para2}
     <div className='card-part'>
     {para3}
     {para4}
     {para5}

     </div>
     <div className='card-part2'>
     {para6}
     {para7}

     </div>

    </div>
  );
}

export default App;
