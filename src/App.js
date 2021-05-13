import classes from './App.module.css';
import { useEffect,useState } from 'react';
import Recipe from './Recipe'
import DropDown from './DropDown'
import axios from 'axios'
import qs from 'qs'
import {Helmet} from 'react-helmet'
function App(){
  let healthLabels=[
    {value:'vegan',
    checked:false},
    {value:'alcohol-free',
    checked:false},
    {value:'vegetarian',
    checked:false},
  {
    value:'balanced',
    checked:false},
    {
    value:'high-fiber',
    checked:false},
    {
    value:'high protein',
    checked:false},
    {
    value:'low-carb',
    checked:false},
    {
    value:'low-fat',
    checked:false},
    {
    value:'peanut-free',
    checked:false},
   {value: 'sugar-conscious',
   checked:false},
    {value:'tree-nut-free',
    checked:false}];
  const APP_ID=process.env.REACT_APP_APP_ID;
  const APP_KEY=process.env.REACT_APP_APP_KEY;
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('');
  const [healthOptions,sethealthOptions]=useState(healthLabels);
  const [healthParameters,setHealthParameters]=useState([]);
  useEffect(()=>{
    if(query!=='' || healthParameters.length)
        getRecipes()
  },[query,healthParameters]
  );
  const getRecipes=async ()=>{
      let response=await axios.get(`https://api.edamam.com/search`,{params:{
        q:query,
        app_id:APP_ID,
        app_key:APP_KEY,
        health:healthParameters,
      },
      paramsSerializer:(params)=>{
        return qs.stringify(params,{arrayFormat:'repeat'})
      }
    });
    let hits=await response.data.hits;
   setRecipes(hits);
  }
  const collectHealthOptions=(event)=>{
    healthLabels=[...healthOptions];
      healthLabels.forEach((option)=>{
        if(event.target.value===option.value)
        {
            option.checked=!option.checked;
        }
      });
      let temp=[];
      for(let i=0;i<healthLabels.length;i++)
      {
        if(healthLabels[i].checked)
        {
           temp.push(healthLabels[i].value);
        }
        else
        {
          temp.push(undefined);
        }
      }
      setHealthParameters(temp);
      sethealthOptions(healthLabels);
  };
  return (
    <div className={classes.App}>
      <Helmet>
        <script src="https://developer.edamam.com/attribution/badge.js"></script>
      </Helmet>
      <div style={{display:'flex',flexFlow:"row"}}>
      <DropDown healthLabels={healthOptions} HealthOptions={collectHealthOptions}
      />
      <form onSubmit={(event)=>{
          event.preventDefault();
          setQuery(search);
        }} style={{margin:'auto',marginTop:'0px'}}>
        <div>
        <input type="text" className={classes.Input} value={search} onChange={(event)=>{
          setSearch(event.target.value)
        }}></input>
        </div>
        <div>
        <button type="submit" className={classes.Button}>submit</button>
        </div>
      </form>
      </div>
      <div className={classes.Recipe}>
      {
     recipes!==''?recipes.map((item,index)=>{return (<Recipe key={index} 
     title={item.recipe.label} 
     url={item.recipe.image} 
     cal={item.recipe.calories}
     ingredients={item.recipe.ingredients}
     />)}):null
          }     </div>
      <div id="edamam-badge" data-color="white" style={{marginTop:"100%"}}></div>
    </div>
  );
}

export default App;
