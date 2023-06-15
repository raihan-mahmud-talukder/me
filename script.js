setInterval(() => {
    $('.day')[0].innerHTML = `${new Date().toDateString()}, ${new Date().toLocaleTimeString('en-GB')}`
}, 1000)

$(document).ready(() => {
    $("#footer").load("component/footer.html")
})

$(".nav-link").on("click", function () {
    $(".nav-link.active").removeClass("active")
    $(this).addClass("active");
    if ($('#main')) {
        document.getElementById('main').style.display = 'none'
    }
})

document.getElementById("home").onclick = () => {
    document.getElementById('main').style.display = 'block'
    document.title = 'Home'
    $('#root').html('')
}

document.getElementById("contact").onclick = function () {
    document.title = 'Contact'
    $('#root').load('component/contact.html')
}

document.getElementById("about").onclick = function () {
    document.title = 'About'
    $("#root").load("component/about.html")
}

document.getElementById("education").onclick = function () {
    document.title = 'Education'
    $("#root").load("component/education.html")
}

document.getElementById("projects").onclick = function () {
    document.title = 'Projects'
    $("#root").load("component/projects.html")
}

document.getElementById("experience").onclick = function () {
    document.title = 'Experience'
    $("#root").load("component/experience.html")
}

document.getElementById("skills").onclick = function () {
    document.title = 'Skills'
    $("#root").load("component/skills.html")
}

document.getElementById("mission").onclick = function () {
    document.title = 'Mission'
    $("#root").load("component/mission.html")
}

document.getElementById("hire").onclick = function () {
    document.title = 'Hire'
    $("#root").load("component/hire.html")
}

