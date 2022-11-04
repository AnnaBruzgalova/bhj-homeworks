const rotatorСase = Array.from(document.querySelectorAll('.rotator__case'));

let timerId = setInterval(() => {
    let index = rotatorСase.findIndex((value) => value.classList.contains('rotator__case_active'));
    if (rotatorСase[index].classList.contains('rotator__case_active'))
        rotatorСase[index].classList.remove('rotator__case_active');
    if (index == rotatorСase.length - 1) {
        rotatorСase[0].classList.add('rotator__case_active');
    } else {
        rotatorСase[index].nextElementSibling.classList.add('rotator__case_active');
    }
}, 1000);