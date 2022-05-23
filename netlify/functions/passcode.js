exports.handler = async (event, context) => {
  
    const { PASSCODE } = process.env;
    const queryPasscode = event.queryStringParameters.queryPasscode;

    if (PASSCODE == queryPasscode) {
      return {
        body: "Passcode correct!",
      };
    }   
    else {
      return { 
        body: 'Passcode invalid'}
      }
    }

    
}