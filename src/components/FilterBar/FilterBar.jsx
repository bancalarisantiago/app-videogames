//Libraries, Hooks
import React, {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

//Actions
import { genresFilter, sortBy, clearFilter } from '../../redux/actions/index.js'

//Styles
import { Wrapper ,WrapperBox, BtnWrapper, CheckList, InputCheck, LabelCheck, Btn, BtnIco} from './FilterBar.styles.js'

//Images
import img from '../../images/icons/sort-az.png'
import img2 from '../../images/icons/sort-za.png'

const FilterBar = () => {

    const dispatch = useDispatch();
    const stateCopy = useSelector(state => state.videogamesCopy)
    const [show, setShow] = useState(false)
    var stateGenres = useSelector(state => state.genres)
    var stateGenresFilter = useSelector(state => state.genresFilter)
    
        function  handleOnClick  (event) {

            if(event.target.attributes.value.nodeValue) {
                return dispatch(sortBy(event.target.attributes.value.nodeValue,[...stateCopy]))
            }
            dispatch(sortBy(event.target.value,[...stateCopy]))
        }


        function handelOnClickList (event) {
            event.preventDefault();
            
            if(!show) {
                //console.log(document.getElementById('btn-filter'))
                let btn = document.getElementById('btn-filter')
                btn.innerHTML = "Hide Category Filter";
                dispatch(clearFilter())
                clearCheck()
                    setShow(true)
            } else {
                let btn = document.getElementById('btn-filter')
                btn.innerHTML = "Show Category Filter";
                setShow(false)
            }
        }

        function updateInputValue (evt) {
            
            if(evt.target.checked) {
                stateGenresFilter.push(evt.target.value)  
            } else if (!evt.target.checked) {
            stateGenresFilter = [...stateGenresFilter.filter( g => g !== evt.target.value)]
            }
            dispatch(genresFilter(stateGenresFilter))
        }

        function clearCheck () {
            if(stateGenresFilter.length < 1) {
                var list = document.getElementsByClassName('check');
                if(list.length > 0) {
                    for(let input of list) {
                        input.checked = false;
                    }   
                }
            }
        }
        
        useEffect(()=>{
           // clearCheck()
        },[])
        
    return (
        <Wrapper>
            <BtnWrapper>        
            <BtnIco value="nameAsc"onClick={handleOnClick}><img value='nameAsc' src={img} alt="icon A-Z"></img></BtnIco>
            <BtnIco value="nameDesc" onClick={handleOnClick}><img value='nameDesc' src={img2} alt="icon Z-A"></img></BtnIco>
            <Btn className='ratingDesc' value="ratAsd" onClick={handleOnClick}>Rating 5 - 0</Btn>
            <Btn value="ratDesc" onClick={handleOnClick}>Rating 0 - 5</Btn>
            <Btn value='checklist' id='btn-filter' onClick={handelOnClickList}>Show Category Filter</Btn>
            </BtnWrapper>
        <WrapperBox>
            {show ? <CheckList name='category'>
                {stateGenres?.map(opt => <LabelCheck key={opt.id}><InputCheck 
                className='check' 
                type='checkbox' 
                value={opt.name} 
                key={opt.id} 
                onChange={updateInputValue}/>{opt.name}</LabelCheck>)}    
            </CheckList> : null
              }
        </WrapperBox> 
        </Wrapper>

)}

export default FilterBar