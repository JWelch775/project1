var searchFormEl = document.querySelector("#user-form")
var artistInputEl = document.querySelector("#artist-search")
var eventContainerEl = document.querySelector("#event-container")
var artistSearchTerm = document.querySelector("#event-search-term")

function getEvents(keyword)
    {
        //format ticketmaster api url 
        var apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&dmaId=343&apikey=OsK3mvfl7RepNMB8j29ox4Yz0DY3KYvU"

        //make a request to the url
        fetch(apiUrl).then(function(response)
            {
                if(response.ok)
                    {
                        response.json().then(function(response)
                            {
                                displayEvents(response, keyword);
                                console.log(keyword, response);
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

function displayEvents(shows, searchTerm)
    {
        eventContainerEl.textContent = "";
        artistSearchTerm.textContent = searchTerm;
        


        //check if api returned any events
        if(shows.length === 0)
            {
                eventContainerEl.textContent = "No events found for this artist";
                return;
            }

        //loop over events
        for(var i = 0; i < shows.length; i++)
            {
                var eventTitle = shows[i].name.events._embedded;
                

                //create a container for each event
                var eventEl = document.createElement("div");
                eventEl.classList = "list-item";
                
                //create a span element to hold event names
                var eventTitleEl = document.createElement("span");
                eventTitleEl.textContent = eventTitle;

                //append to container 
                eventEl.appendChild(eventTitleEl);

                eventContainerEl.appendChild(eventEl);
            }
            
    }


searchFormEl.addEventListener("submit", formSubmitHandler);













//api key
//OsK3mvfl7RepNMB8j29ox4Yz0DY3KYvU

//nashville DMA
//343