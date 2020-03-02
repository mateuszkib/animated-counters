const counters = document.querySelectorAll(".counter");

counters.forEach(el => {
    const updateCount = () => {
        const speed = 200;
        const target = +el.getAttribute("data-target"); // 6000
        let counter = +el.innerText; // 0

        const inc = target / speed; // 30

        if (counter < target) {
            el.innerText = Math.ceil(counter + inc);
            setTimeout(updateCount, 1);
        } else {
            el.innerText = target;
        }
    };
    updateCount();
});
