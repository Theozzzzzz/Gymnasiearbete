document.getElementsByTagName('header')[0].innerHTML = `
<a href="index.html">
<img src="https://github.com/Theozzzzzz/Gymnasiearbete/blob/d3604a751e4880a8845172fcf7847b62c30b1d9d/images/NormalLogo_Skalbagge_fixad_h%C3%B6jd.png" alt="Circus Normals logo" id="header-image">
</a>
<nav id="header-nav">
    <ul id="header-ul">
        <li>
            <a href="index.html">
                <div class="navbar-button">Hem</div>
            </a>
        </li>
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
    --color-primary: #F7F9F9;
    --color-secondary: #386150;
    --color-tertiary: #386150;
    --color-quaternary: #58B09C;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    background-color: var(--color-quaternary);
    border-radius: 0 0 30px 0;
    height: 80px;
}

#header-image {
    height: 100%;
    padding: 0;
    margin: 0;
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
    
    color: white;
} 


#header-ul > li > a {
    text-decoration: none;
}

.navbar-button:hover {
    background-color: var(--color-tertiary);
}`
document.head.appendChild(style);