document.getElementsByTagName('header')[0].innerHTML = `
<a href="/index.html">
<img src="https://raw.githubusercontent.com/Theozzzzzz/Gymnasiearbete/e154ee801d98ea93e61112e0196bc59be271fe2c/images/NormalLogo_Skalbagge_fixad_hojd.png" alt="Circus Normals logo" id="header-image">
</a>
<nav id="header-nav">
    <ul id="header-ul">
        <li>
            <a href="/index.html">
                <div class="navbar-button">Hem</div>
            </a>
        </li>
        <div class="dropdown">
            <li>
                    <a href="/index.html"> 
                        <div class="navbar-button dropbtn">Kurser</div>
                    </a>
            </li> 
                <div class="dropdown-content">
                    <a href="#">Minicirkus - Grön Grupper</a>
                    <a href="#">Introduktion - Gula Grupper</a>
                    <a href="#">Fortsättning - Blå Grupper</a>
                    <a href="#">Avancerad - Lila Grupper</a>
                    <a href="kurser/forestallningsgruppen.html">Föreställningsgruppen - Svart Grupp</a>
                </div>
        </div>
        <li>
            <a href="about.html">
                <div class="navbar-button">Events</div>
            </a>
        </li> 
        <li>
            <a href="contact.html">
                <div class="navbar-button">Om Oss</div>
            </a>
        </li> 
    </ul> 
</nav>`;


var style = document.createElement('style');
style.innerHTML = `


header {
    display: flex;
    position: fixed;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    background-color: var(--color-quaternary);
    border-radius: 0 0 30px 0;
    height: 60px;
    width: 100%;
}

#header-image {
    height: 100%;
    padding: 0;
    margin: 0;
}

body {
    margin: 0;
    padding: 0;
}

html {
    margin: 0;
    padding: 0;
}

#header-ul {
    display: flex;
    right: 0;
    flex-direction: row;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
    border-radius: 0 0 30px 0;
    background-color: inherit;
    > li {
        list-style-type: none;
        height: 100%;
        display: hidden;
        background-color: var(--color-quaternary);
        border-radius: 0 0 30px 0;
        > a {
        height: 100%;
        
        }
    }
    :last-child > a > .navbar-button {
        border-radius: 30px 0 30px 0;
        background-color: black;
        margin: 0;
        height: 101%;
        box-shadow: 0 0 10px 0 #999999;
    }
}


.navbar-button {
    font-size: x-large;
    text-align: center;
    line-height: 60px;
    padding: 0 50px;
    height: 100%;
    transition-property: background-color;
    transition-duration: 0.25s;
    background-color: var(--color-quaternary);
    color: white;
} 


#header-ul > li > a {
    text-decoration: none;
}

.navbar-button:hover {
    background-color: var(--color-tertiary);
}

.dropdown{
    list-style-type: none;
}
  
.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--color-tertiary);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    width: 11%;
}

.dropbtn{
    position: relative;
    display: inline-block;
}
  
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
  
  .dropdown-content a:hover {background-color: var(--color-quaternary);}
  
  .dropdown:hover .dropdown-content {display: block;}
  
`
document.head.appendChild(style);