exports.handler = async (event, context) => {
  
    const { PASSCODE } = process.env;
    const queryPasscode = event.queryStringParameters.queryPasscode;

    if (PASSCODE == queryPasscode) {
      return {
        statusCode: 200,
        body: 'Passcode correct!'
      };
    }   
    else {
      return { 
        statusCode: 200,
        body: 'Passcode invalid'
      }
      }
    }
