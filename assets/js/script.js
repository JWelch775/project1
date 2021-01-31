var searchFormEl = document.querySelector("#index-form")
var artistInputEl = document.querySelector("#artist")
var cityInputEl = document.querySelector("#citySearch")


function getEvents(keyword)
    {
        //format ticketmaster api url 
        var apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&dmaId=343&apikey=OsK3mvfl7RepNMB8j29ox4Yz0DY3KYvU"

        //make a request to the url
        fetch(apiUrl).then(function(response)
            {
                if(response.ok)
                    {
                        response.json().then(function(data)
                            {
                                console.log(data, keyword);
                            });
                    }
                else(function(error)
                    {
                        alert("Unable to connect to TicketMaster site");
                    })
            })
        .catch(function(error)
            {
                alert("Unable to connect to TicketMaster");
            })
    }

function formSubmitHandler(event)
    {
        event.preventDefault();

        //get value from input element
        var artist = artistInputEl.value.trim();

        if(artist)
            {
                getEvents(artist);
                artistInputEl.value = "";
            }
        else
            {
                alert("Please enter an artist name");
            }
    };


function displayEvents()
    {

    }


searchFormEl.addEventListener("submit", formSubmitHandler);













//api key
//OsK3mvfl7RepNMB8j29ox4Yz0DY3KYvU

//nashville DMA
//343