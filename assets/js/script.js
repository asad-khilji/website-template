const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
        <header>
        <h1>Title</h1>
    </header>
    `;
}

createHeader();

const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
        <a href="#">Category</a>
        <a href="#">Category</a>
        <a href="#">Category</a>
        <a href="#">Category</a>
        <a href="#">Category</a>
    </nav>
    `;
}

createNav();

const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <footer>
            <div class="row">
                <div class="col-4">
                    <h3>About Us</h3>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>Email address</p>
                    <p>Website</p>
                </div>
                <div class="col-4">
                    <h3>Shop</h3>
                    <p>Jackets</p>
                    <p>Vests</p>
                    <p>Shirts</p>
                    <p>Pants</p>
                    <p>Accessories</p>
                </div>
                <div class="col-4">
                    <h3>Quick Links</h3>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>Return Policy</p>
                    <p>Shipping Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
                <div class="col-4">
                    
                </div>
            </div>
        </footer>
    `;
}

createFooter();