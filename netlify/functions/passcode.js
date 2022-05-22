exports.handler = async (event, context) => {
  
    const badNames = ['vista', 'empire', 'mbp'];
    const name = event.queryStringParameters.name;

    if (badNames.includes(name)) {
      return { 
        statusCode: 400,         
        body: JSON.stringify({error: 'Invalid name passed.'}) 
      }
    }

    return {
      statusCode: 204
    }

}