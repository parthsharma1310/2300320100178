const axios = require("axios")

async function Log(stack,level,pkg,message){
    try{
        const response=await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: pkg,
                message
            }
        )
        console.log(response.data)
    }
    catch(error) {

   console.log(
      "Logging failed:",
      error.response?.status
   )

}
}
module.exports =Log