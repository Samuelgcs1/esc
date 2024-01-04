class mobilenavbar {
    constructor(menumobile) {
        this.menumobile = document.querySelector(menumobile);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeclass = "active";
}
addclickevent() {
    this.menumobile.addeventlistener("click" , () => console.log
    ("hey"));
}
init() {
    if (this.menumobile) {
        this.addclickevent ();  
    }
    return this;
}
}
const mobilenavbar = new mobilenavbar (
    ".menumobile",
    ".navlist",
    ".navlist li",
    
)
