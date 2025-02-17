import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function CategoryList(props) {
  // let list = [];

  // list.push(itemData[0].title);
  // list.push(itemData[1].title);

  // const finalList = list.toString();
  // props.update("term",finalList);

  const [list, setList] = React.useState([]);


  const handleClick = event => {
    console.log(event.target.alt);
    if(list.indexOf(event.target.alt) === -1) {
      console.log(`pushing ${event.target.alt}`)
      list.push(event.target.alt);
    }
    else {
      console.log("splicing")
      let itemToRemove = list.indexOf(event.target.alt)
      list.splice(itemToRemove,1);
    }
    props.update("term", list);
    console.log(list);
  };


  return (
    <section className="App-question">
      <h4>1. Choose categories!</h4>
      <ImageList cols={4} rowHeight={120}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              value={item.title}
              onClick={handleClick}
            />
            <ImageListItemBar
              title={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 4,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 4,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 4,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
];
