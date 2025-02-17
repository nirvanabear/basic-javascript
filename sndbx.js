 <script>
        var global_ans;

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); 
            // The maximum is exclusive and the minimum is inclusive
        }

// --------
/*      move question generator to separate function
        function will be called by both the initial page setup
            and by the yes button
        yes and no buttons will appear upon correct answer  */

        function mathProblem(num) {
            let int1 = getRandomInt(0, 10);
            let int2 = getRandomInt(0, 10);
            num.textContent = int1 + " × " + int2 + " = ";
            global_ans = int1 * int2;
            // bBlock.style.display = "none";
        }



        document.addEventListener("DOMContentLoaded", function () {
            const btn = document.getElementById("yes");
            let num = document.getElementById("question");
            var bBlock = document.getElementById("bBlock");

            btn.addEventListener("click", mathProblem(num)); 
            mathProblem(num);
            // bBlock.style.display = "none";

            const take = document.getElementById("answer");
            const show = document.getElementById("output");
            const reply = document.getElementById("response");
            take.addEventListener("input", updateValue);

            function updateValue(e) {
                show.textContent = e.target.value;
                if (e.target.value == global_ans) {
                    reply.textContent = "Good job!";
                    // bBlock.style.display = "block";
                }
                else {
                    reply.textContent = "Keep trying!";
                }
            }


            // function updateValue(e) {
            //     show.textContent = e.target.value;
            //     if (e.target.value == global_ans) {
            //         reply.textContent = "Good job! Click yes to go again! Click no to quit.";
            //         bBlock.style.display = "block";
            //     }
            //     else {
            //         reply.textContent = "Keep trying!";
            //     }
            // }

            // function hiddenButtons() {
            //     let bBlock = document.getElementById("bBlock");
            //     if (bBlock.style.display === "none") {
            //         bBlock.style.display = "block";
            //     } 
            //     else {
            //         bBlock.style.display = "none";
            //     }
            // }
        
        });


// -------

        // document.addEventListener("DOMContentLoaded", function () {
        //     const btn = document.getElementById("yes");
        //     btn.addEventListener("click", function () {
        //         let num = document.getElementById("question");
        //         let int1 = getRandomInt(0, 10);
        //         let int2 = getRandomInt(0, 10);
        //         num.textContent = int1 + " × " + int2 + " = ";
        //         global_ans = int1 * int2;
        //     });

        //     const take = document.getElementById("answer");
        //     const show = document.getElementById("output");
        //     const reply = document.getElementById("response");
        //     take.addEventListener("input", updateValue);
        //     function updateValue(e) {
        //         show.textContent = e.target.value;
        //         if (e.target.value == global_ans) {
        //             reply.textContent = "Good job!";
        //         }
        //         else {
        //             reply.textContent = "Keep trying!";
        //         }
        //     }
        // });
    </script>