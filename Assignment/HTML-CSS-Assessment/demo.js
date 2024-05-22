const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };
  const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };

  function gtcVersion(visitor) {
  if(visitor.gtc?.version){
    return `${visitor.gtc[version]}`
  }else{
    return 'undefined'
  }
  }
  console.log(gtcVersion(visitorNew));
console.log(gtcVersion(visitorOld));
    