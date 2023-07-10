const toggleFAQ = (id) => {
    if (id != "map") {
        document.getElementById("map").classList.add("visible");
    }
    if (id != "pay") {
        document.getElementById("pay").classList.add("visible");
    }
    if (id != "enter") {
        document.getElementById("enter").classList.add("visible");
    }

    var division = document.getElementById(id);
    console.log(id, division);
    division.classList.toggle("visible");
};

const sendTo = (url) => {
    document.location.href = url;
};
