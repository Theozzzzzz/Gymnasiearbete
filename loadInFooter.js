
//loads in the footers HTML
document.getElementsByTagName('footer')[0].innerHTML = `
<div class="footer-logo-container">
    <img src="https://raw.githubusercontent.com/Theozzzzzz/Gymnasiearbete/f67c7ba91a42b353e13b780c89d3be45f9b4f91e/images/NormalLogo_endast_Skalbagge.png" alt="Circus Normals logo" id="footer-image">
</div>
<p>copyright theozzz 2024</p>
<div class="socials-container">
    <p> föj oss på sociala medier: </p>
    <a href="https://www.instagram.com/circusnormal/" target="_blank" class="footer-sociala-medier-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" class="footer-sociala-medier-logo" alt="instagram">
    </a>
    <a href="https://www.facebook.com/circusnormal" target="_blank" class="footer-sociala-medier-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" class="footer-sociala-medier-logo" alt="facebook">
    </a>
    <a href="https://www.youtube.com/cirkusnormal" target="_blank" class="footer-sociala-medier-link">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg" class="footer-sociala-medier-logo" alt="youtube">
    </a>
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
    justify-content: space-between;
    alaign-items: center;
    padding: 0;
    margin: 0;
    background-color: var(--color-tertiary);
    border-radius: 0 30px 0 0;
    height: 70px;
    bottom: 0;
}

.footer-logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
    height: 70%;
    }
}

.footer-text {
    height: fit-content;
    margin: auto;
}

.footer-sociala-medier-logo {
    filter: grayscale(100%);
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
}
`