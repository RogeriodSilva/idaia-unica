async function tempo(request, response){
     const dynamicDate = new Date();

     const subsResponse = await fetch("https://brasilapi.com.br/api/cvm/corretoras/v1");
     const subsResponseJSON = await subsResponse.json();
     const inscritos = subsResponseJSON.length;

     response.json({
          date: dynamicDate.toGMTString(),
          subs: inscritos
     });
}

export default tempo;