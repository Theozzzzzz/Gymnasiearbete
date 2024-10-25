document.getElementsByTagName('header')[0].innerHTML = `
<img src="images/NormalLogo_Skalbagge325.png" alt="Circus Normals logo">
<nav id="header-nav">
    <ul id="header-ul">
        <li>
            <a href="index.html"> 
                <div class="navbar-button">Kurser</div>
            </a>
        </li> 
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

* {
    --color-primary: #FBF8F1;
    --color-secondary: #F7ECDE;
    --color-tertiary: #E9DAC1;
    --color-quaternary: #54BAB9;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    background-color: var(--color-tertiary);
    border-radius: 0 0 30px 0;
    height: 80px;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--color-primary);
}

#header-ul {
    display: flex inline;
    right: 0px;
    flex-direction: row;
    padding: 0;
    margin: 0;
    height: 100%;
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
    }
}


.navbar-button {
    font-size: x-large;
    text-align: center;
    line-height: 80px;
    padding: 0 50px;
    height: 100%;
    transition-property: background-color;
    transition-duration: 0.25s;
    background-color: var(--color-quaternary);
    text-decoration: none;
    
    color: white;
} 


.navbar-button:hover {
    background-color: lightblue;
}`
document.head.appendChild(style);