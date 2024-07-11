import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import './Sidebar.css'
import { yellow } from '@mui/material/colors';
import argentina from '../assets/argentina.png'
import Trophy from '../assets/Trophy.png'
import Home from '../assets/Home.png'


export default function Sidebar() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 150, bgcolor: '#17573d' }}
      aria-label="Sidebar"
    >
      <a href="/" className='home-text' >
        <ListItem className='home'>
          <img src={Home} alt="Home" height={21} width={21} className='img-home' />
          <ListItemText primary="Home" className='li-text' />
        </ListItem>
      </a>
      {/* Featured section */}
      <ListItem className='Header'>
        <StarIcon sx={{ fontSize: 18, color: yellow[600] }} />
        <ListItemText primary="Featured" className='Header-Text' />
      </ListItem>
      <a href="/primera" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Liga Argentina" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/premier-league" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Premier League" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/serie-a" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Serie A" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/copa-america" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Copa America" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/euro" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Euro cup" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/libertadores" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Libertadores" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/champions" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Champions" className='list-item-text'/>
        </ListItem>
      </a>
      {/* Argentina's League section*/}
      <ListItem className='Header'>
        <img src={argentina} alt="Argentina" height={18} width={18} />
        <ListItemText primary="Argentina" className='Header-Text' />
      </ListItem>
      <a href="/primera" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Liga Argentina" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/copa-de-la-liga" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Copa de la liga" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/b-nacional" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="B Nacional" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/copa-argentina" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Copa Argentina" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/b-metro" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="B Metro" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/federal-a" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Federal A" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/primera-c" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Primera C" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/amateur" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Avg Amateur" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/reserves" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Reserva" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/female" className='li-text'>
        <ListItem className='li2'>
          <ListItemText primary="Female" className='list-item-text'/>
        </ListItem>
      </a>
      <a href="/argentina-titles-ranking" className='li-text'>
        <ListItem className='li1'>
          <ListItemText primary="Titles Ranking" className='list-item-text'/>
        </ListItem>
      </a>
      {/* International cups section*/}
      <ListItem className='Header'>
        <img src={Trophy} alt="Trophy" height={18} width={18} />
        <ListItemText primary="Int. cups" className='Header-Text' />
      </ListItem>
      <a href="/libertadores" className='li-text'>
      <ListItem className='li1'>
        <ListItemText primary="Libertadores" className='list-item-text'/>
      </ListItem>
      </a>
      <a href="/sudamericana" className='li-text'>
      <ListItem className='li2'>
        <ListItemText primary="Sudamericana" className='list-item-text'/>
      </ListItem>
      </a>
      <a href="/champions" className='li-text'>
      <ListItem className='li1'>
       <ListItemText primary="Champions" className='list-item-text'/>
      </ListItem>
      </a>
      <a href="/europa-league" className='li-text'>
      <ListItem className='li2'>
        <ListItemText primary="Europa League" className='list-item-text'/>
      </ListItem>
      </a>
      <a href="/conference" className='li-text'>
      <ListItem className='li1'>
        <ListItemText primary="Conference" className='list-item-text' />
      </ListItem>
      </a>
      <a href="/uefa-titles-ranking" className='li-text'>
      <ListItem className='li2'>
        <ListItemText primary="UEFA cups" className='list-item-text'/>
      </ListItem>
      </a>
      <a href="/conmebol-titles-ranking" className='li-text'>
      <ListItem className='li1'>
        <ListItemText primary="Conmebol cups"  className='list-item-text'/>
      </ListItem>
      </a>
    </List>
  );
}