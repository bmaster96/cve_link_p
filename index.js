var data = GetFromLocalStorage("link-helper-knea");

var groups = []

// var string = '{"item":[{"Desc":"Item1"}, {"Desc":"Item2"}]}';

// localStorage.setItem('added-items', JSON.stringify(string));

// var retrievedOject = localStorage.getItem('added-items');

// var parseObject = JSON.parse(retrievedObject);


if (data) {
    var content = $('#content')
    data.forEach(element => {                                       
        groups.push(element["group"])
        const title = $("<h1></h1>").text(element["group"]);
        const ul = $("<ul></ul>")
        element["links"].forEach(
            link => {
                ul.append('<li><a href="' + link["link"] + '">' + link["title"] || link["link"] + '</a><li>')
            }
        )
        title.append(ul)
        content.append(title)
    });
}

$("#submit").click(e => {
    var title = $('#title').val();
    var link = $('#link').val();
    var group = $('#group').val();

    if (title && link && group) {

        if (confirm(group + " - " + title) == true) {
            if (data && groups.includes(group)) {
                data.forEach((element, index, array) => {
                    if (element["group"] == group) {
                        element["links"].push({
                            "title": title,
                            "link": link
                        })
                    }
                })
    
            }
            else {
                if (!data)
                    data = []
                data.push({
                    "group": group,
                    "links": [
                        {
                            "title": title,
                            "link": link
                        }
                    ]
                })
            }
            localStorage.setItem("link-helper-knea", AddToLocalStorage(data))
        } else {
            e.preventDefault()
        }
    } else {
        alert("fill form before submit")
        e.preventDefault()
    }
});


var data2 = {};

data2.projet = "CVE Links"
data2.items = data;

var mystring = JSON.stringify(data2);

function AddToLocalStorage(data) {
    if (typeof data != "string") {data = JSON.stringify(data, null, '\n');}
    return data;
  }

  function GetFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  

  $.getJSON('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', function (result) {
  console.log(result);
});

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
 //download(data2, 'json.txt', 'text/plain');

 function export2txt() {
    const originalData = {
      members: [{
          name: "cliff",
          age: "34"
        },
        {
          name: "ted",
          age: "42"
        },
        {
          name: "bob",
          age: "12"
        }
      ]
    };
  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }