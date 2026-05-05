document.addEventListener("DOMContentLoaded", () => {

    const groups = document.querySelectorAll(".letter-boxes, .phone-boxes");

    groups.forEach(group => {

        const boxes = Array.from(group.querySelectorAll(".box"));

        boxes.forEach((box, index) => {

            box.addEventListener("input", e => {

                let val = e.target.value;

                if (val.length > 1) {
                    val = val.slice(-1);
                    e.target.value = val;
                }

                e.target.value = val.toUpperCase();

                if (val !== "") {
                    if (index < boxes.length - 1) {
                        boxes[index + 1].focus();
                        boxes[index + 1].select();
                    } else {
                        box.blur();
                    }
                }

            });

            box.addEventListener("keydown", e => {

                if (e.key === "Backspace") {

                    if (box.value === "" && index > 0) {
                        boxes[index - 1].value = "";
                        boxes[index - 1].focus();
                        e.preventDefault();
                    }

                }

                if (e.key === "ArrowLeft" && index > 0) {
                    boxes[index - 1].focus();
                }

                if (e.key === "ArrowRight" && index < boxes.length - 1) {
                    boxes[index + 1].focus();
                }

            });

            box.addEventListener("focus", () => box.select());

        });

    });

    groups.forEach(group => {

        const boxes = Array.from(group.querySelectorAll(".box"));

        group.addEventListener("paste", e => {

            e.preventDefault();

            const pasted = (e.clipboardData || window.clipboardData)
                .getData("text")
                .replace(/\s+/g, "")
                .toUpperCase();

            pasted.split("").forEach((char, i) => {
                if (boxes[i]) boxes[i].value = char;
            });

            const next = Math.min(pasted.length, boxes.length - 1);
            boxes[next].focus();

        });

    });


    const signaturePads = ["sig1", "sig2"];

    signaturePads.forEach(id => {

        const canvas = document.getElementById(id);
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        let drawing = false;

        function setupCanvas() {

            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.strokeStyle = "#111";

        }

        setupCanvas();
        window.addEventListener("resize", setupCanvas);

        function position(e) {

            const rect = canvas.getBoundingClientRect();

            if (e.touches) {
                return {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
            }

            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

        }

        function start(e) {

            drawing = true;

            const pos = position(e);

            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);

            e.preventDefault();

        }

        function move(e) {

            if (!drawing) return;

            const pos = position(e);

            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();

            e.preventDefault();

        }

        function stop() {
            drawing = false;
        }

        canvas.addEventListener("mousedown", start);
        canvas.addEventListener("mousemove", move);
        canvas.addEventListener("mouseup", stop);
        canvas.addEventListener("mouseleave", stop);

        canvas.addEventListener("touchstart", start, { passive: false });
        canvas.addEventListener("touchmove", move, { passive: false });
        canvas.addEventListener("touchend", stop);
      
        const clearBtn = document.querySelector(`.clear-sig[data-target="${id}"]`);

        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
        }

    });

    const fields = Array.from(
        document.querySelectorAll("input, textarea")
    );

    fields.forEach((field, i) => {

        field.addEventListener("keydown", e => {

            if (e.key === "Enter") {

                e.preventDefault();

                if (fields[i + 1]) {
                    fields[i + 1].focus();
                }

            }

        });

    });

    const page = document.querySelector(".page");

    if (page) {

        page.addEventListener("dblclick", () => {

            page.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.01)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 400
                }
            );

        });

    }
    console.log("🏁 My Panana Go-Karting Form Loaded Successfully");
});
