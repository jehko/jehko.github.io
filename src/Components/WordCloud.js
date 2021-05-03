import React from 'react';
import ReactWordcloud from 'react-wordcloud';


const words = [
  {
    text: 'JAVA',
    value: 80
  },
  {
    text: 'JAVASCRIPT',
    value: 80
  },
  {
    text: 'REACT',
    value: 20
  },
  {
    text: 'ORACLE',
    value: 20
  }
]



function Wordcloud() {
  return (
    <ReactWordcloud size={[300, 200]} words={words}></ReactWordcloud>
  )
}

export default Wordcloud;