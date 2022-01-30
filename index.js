var btn = document.getElementById("search");
var universities = document.getElementById("uni");

function get() {
    var country = document.getElementById("country").value;

    var url = "http://universities.hipolabs.com/search?country=" + country;

    fetch(url)
        .then((university) => {
            return university.json();
        })
        .then((data) => {
            console.log(data);
            universities.innerText = "";
            var table = document.createElement('table');
            var tr = document.createElement('tr');
            var td1 = document.createElement('th');
            td1.innerText = "Country";
            var td2 = document.createElement('th');
            td2.innerText = "University";
            var td3 = document.createElement('th');
            td3.innerText = "Website";
            tr.append(td1, td2, td3);
            table.appendChild(tr);
            universities.appendChild(table);
            for (var i = 0; i < data.length; i++) {
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                td1.innerText = data[i].country;
                td2.innerText = data[i].name;
                td3.innerText = data[i].web_pages;
                tr.append(td1, td2, td3);
                table.appendChild(tr);
                universities.appendChild(table);

            }
        }).catch(arg => {
            universities.innerText = "Error" + arg;
        });

}

btn.addEventListener('click', get);