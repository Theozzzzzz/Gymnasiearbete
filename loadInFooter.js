
//loads in the footers HTML
document.getElementsByTagName('footer')[0].innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<div class="footer-logo-container">
    <img src="https://raw.githubusercontent.com/Theozzzzzz/Gymnasiearbete/f67c7ba91a42b353e13b780c89d3be45f9b4f91e/images/NormalLogo_endast_Skalbagge.png" alt="Circus Normals logo" id="footer-image">
</div>
<div class="Samarbetspartner">
    <h1>Samarbetspartner</h1>
    <h2> Fler bollar i luften AB</h2>
    <img src="/images/flerbollar.jpg" alt="Samarbetspartner">
</div>
<div class="socials-container">
    <ul>
        <p> Föj oss på sociala medier </p> <br>
        <a href="https://www.instagram.com/circusnormal/" target="_blank" class="footer-sociala-medier-link">
            <i class="fa-brands fa-instagram footer-sociala-medier-logo"></i>
        </a>
        <a href="https://www.facebook.com/circusnormal" target="_blank" class="footer-sociala-medier-link">
            <i class="fa-brands fa-facebook-f footer-sociala-medier-logo"></i>
        </a>
        <a href="https://www.youtube.com/cirkusnormal" target="_blank" class="footer-sociala-medier-link">
            <i class="fa-brands fa-youtube footer-sociala-medier-logo"></i>
        </a>
    </ul>
</div>
<div class="copyright">
    <p> Copyright 2024 Cirkus Normal | cirkusnormal.se | GA |</p>
</div>

`
//loads in the footer's CSS
if (document.getElementsByTagName('style').length == 0) {
    document.createElement('style');
}
var style = document.getElementsByTagName('style')[0];
style.innerHTML += `
footer {
    display: flex;
    justify-content: space-around;
    alaign-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin-top: -30px;
    background-color: var(--color-tertiary);
    border-radius: 0 30px 0 0;
    height: fit-content;
    min-height: 30vh;
    bottom: 0;
}

.copyright{
    display:flex;
    align-items: flex-end;
    
}
.footer-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    > img {
    height: 50%;
    }
}

.Samarbetspartner{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 25vh;
    with: fit-content;
    > h1 {
        
        font-size: 25px;
    }
    > h2 {
        
        font-size: 20px;
    }
    > img {
        max-height: 90%;
        margin: 5%;
    }
}

.footer-text {
    height: fit-content;
    margin: auto;
}

.footer-sociala-medier-logo {
    padding-right: 20px;
    font-size: 40px;
    height: 100%;
    margin: 0 5px;
}
.footer-sociala-medier-link {
    height: 50%;
}
.socials-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 100%;
    > ul{
        margin-right: 10vh;
        > a {
            margin-left: 2vh;
        }
        > p {
        font-size: 25px;
        }
    } 
}

@media (max-width: 480px) {
    .footer-logo-container{
        display:none;
    }
}


    
`