async function tempo(request, response){
     const dynamicDate = new Date();

     const subsResponse = await fetch("https://api.convertkit.com/v3/subscribers?api_secret=ZJwL0hi01EvB90CIpsyw1e0fGRzPfw1Q");
     const subsResponseJSON = await subsResponse.json();
     const inscritos = subsResponseJSON.total_subscribers;

     response.json({
          date: dynamicDate.toGMTString(),
          subs: inscritos
     });
}

export default tempo;