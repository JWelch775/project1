


function getEvents()
    {
        //format ticketmaster api url 
        var apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=OsK3mvfl7RepNMB8j29ox4Yz0DY3KYvU"

        //make a request to the url
        fetch(apiUrl).then(function(response)
            {
                if(response.ok)
                    {
                        response.json().then(function(data)
                            {
                                console.log(data);
                            });
                    }
                else(function(error)
                    {
                        alert("Unable to connect to TicketMaster site");
                    })
            })
    }

getEvents("beth hart")















//api key
//OsK3mvfl7RepNMB8j29ox4Yz0DY3KYvU

//nashville DMA
//343