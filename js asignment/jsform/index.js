

        function error() {
            let title = document.getElementById("title").value.length;
            if (title >= 31) {
                document.getElementById('show').innerHTML = "Maximum 30 characters are allowed";
                document.getElementById('show').style.color = "red";
            }
            else {
                document.getElementById('show').innerHTML = "";
            }
        }

        function errorMessage() {
            let description = document.getElementById("description").value.length
            if (description >= 500) {
                document.getElementById('show2').innerHTML = "Maximum 500 characters are allowed";
                document.getElementById('show2').style.color = "red";
            }
            else {
                document.getElementById('show2').innerHTML = "";
            }


        }
        function priceError()

        {
            let price = document.getElementById("inp").value;
            if (price >= 1000  || price == 0 || price == "101")
            {
                document.getElementById('show3').innerHTML = "Maximum 1000 char allowed";
                document.getElementById('show3').style.color = "red";
            }
            
               
        }
       

        function showbox(id) {

            let box = document.getElementById('box' + id)
            if (box.style.display === "none") {
                box.style.display = "block";

            }
            else {
                box.style.display = " none";
            }
        }
        function comnt_show(id) {
            let data = document.getElementById('data' + id);

            if (data.style.display === "none") {
                data.style.display = "block"
            }
            else {
                data.style.display = "none";
            }
        }

        let array = [];
        function valueGet() {
            let title = document.getElementById('title')
            let description = document.getElementById('description')
            let price = document.getElementById('inp')
            let object = {
                title: title.value,
                description: description.value,
                price: price.value
            }
           
            if (checkValidation()) {
                array.push(object);
                console.log(array)
                dataSet();


               
            }
            document.getElementById("form").reset();
        }
        function dataSet() {
            let cards = document.getElementById('cards');
            cards.innerHTML = ""
            let a = "";
            array.map((i, id) => {
                a += ` <div class="card">
            <div class="elipse">
                <div class="box">
                    <ul id="box${id}">
                        <li id ="${id}"onclick="viewCard(id)">view</li>
                        <li>edit</li>
                        <li id=${id} onclick="deleteCARD(this.id)">delete</li>
                    </ul>
                </div>

                <i class="fa-solid fa-ellipsis-vertical" id="${id}" onclick="showbox(this.id)"> </i>
            </div>
            <div class="content-data">
                <h3>${i.title}</h3>
                <h3  class= "cont-data">${i.description}</h3>
                <h3>${i.price}</h3>
            </div>

            <div class="icons">



                <button class="card-btn" id="green${id}"><i class="fa fa-thumbs-up fa-lg" aria-hidden="true" id=${id}  onclick="like(this.id)" ></i></button>


                <i class="fa-regular fa-comment fa-lg"   onclick="comnt_show(this.id)" id="${id}" ></i><span> comment</span>


                <div id="data${id}" class="sel">
                    <input type="text" class="data">
                </div>

            </div>
        </div>`


            })
            cards.innerHTML += a
            
        }
        function like(id) {
            let green = document.getElementById('green' + id)
            if (green.style.color === "black") {
                green.style.color = "red";

            }
            else {
                green.style.color = "black";
            }
        }
        function checkValidation() {
            let t = document.getElementById('title').value
            let p = document.getElementById('inp').value
            if (t == "" || p == "") {
                document.getElementById('INP').innerText = "title req"
                document.getElementById('INP').style.color = "red"
                document.getElementById('PRICE').innerText = "Price req"
                document.getElementById('PRICE').style.color = "red"
                setTimeout(function () {
                    document.getElementById('INP').innerText = ""
                    document.getElementById('PRICE').innerText = ""
                }, 2000)
                return false
            }
            else {
                document.getElementById('INP').innerText = ""
                return true
            }
        }
        function deleteCARD(index)
            {
              let   card= document.getElementById("cards")
                if(confirm ("are you shure to delete"))
                {
                    array.splice(index,1)
                    card.style.display = "none";
                    return true

                }
                else
                {
                    return false
                }
            }

 

            


