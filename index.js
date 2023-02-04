import {monsters} from "./monsters.js";
for(let monsterdiv of monsters)
{
    showMonster(monsterdiv);
}


function showMonster(monsterdiv)
{
    const monster=document.createElement('div');
    monster.className='monster';
    monster.style.cssText= 'display:inline-block; padding:30px';

    const img= document.createElement('img');
    img.src=`https://robohash.org/${monsterdiv.id}?set=set2`;
    img.alt=monsterdiv.name;
    img.style.padding= "0px";

    const mname=document.createElement('p');
    mname.className='name';
    mname.innerText=monsterdiv.name;
    const memail=document.createElement('p');
    memail.className='email';
    memail.innerText=monsterdiv.email;
    monster.append(img,mname,memail);
    document.querySelector('.monsters').append(monster);
}

notFoundMonster();
function notFoundMonster()
{
    const notFoundDiv=document.createElement('div');
    notFoundDiv.className='p-5 not-found';
    notFoundDiv.style.display='none';
    const span=document.createElement('span');
    span.innerText='404';
    const h1=document.createElement('h1');
    h1.innerText='😈Monster is Sleeping 💤😈';
    notFoundDiv.append(span,h1);
    document.querySelector('.monsters').append(notFoundDiv);
}

document.querySelector("#search-monster-form").addEventListener('keyup',function(e)
{   
    const keyword=e.target.value.toLowerCase();
    const findMonster=document.querySelectorAll('.monster');
    let notFound=true;
    for(let monster of findMonster)
    {
        const name=monster.children[1].innerText.toLowerCase();
        const email =monster.children[2].innerText.toLowerCase();
        if(name.includes(keyword) || email.includes(keyword))
        {
            monster.style.display = 'block';
            notFound=false;
            console.log('done');
        }
        else
        {
            monster.style.display = 'none';
        }
    }
    if(notFound)
    {
        document.querySelector(".not-found").style.display= "block";
    }
    else
    {
        document.querySelector(".not-found").style.display= "none";
    }
});