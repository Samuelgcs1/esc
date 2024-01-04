class MobileNavbar {
    constructor(menumobile, navlist, navlinks) {
        this.menumobile = document.querySelector(menumobile);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeclass = "active";
        this.handleclick = this.handleclick.bind(this);
    }
   handleclick() {
        console.log(this);
        this.navlist.classList.toggle(this.activeclass);   
    }

    addclickevent() {
        this.menumobile.addEventListener("click", this.handleclick);
    }

    init() {
        if (this.menumobile) {
            this.addclickevent();  
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".menumobile",
    ".navlist",
    ".navlist li",
);
mobileNavbar.init();


