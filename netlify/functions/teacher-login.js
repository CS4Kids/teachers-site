exports.handler = async (event, context) => {
  
    const { TEACHER_PASSCODE } = process.env;
    const queryTeacherPasscode = event.queryStringParameters.queryTeacherPasscode;
    
    if (TEACHER_PASSCODE == queryTeacherPasscode) {
      return {
        statusCode: 200,
       body: "Passcode correct!",
      };
    }   
    else {
      return { 
        statusCode: 200,
        body: "Passcode invalid",
      }
      }
    }
