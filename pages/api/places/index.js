import dbConnect from "../../../db/connect"
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect()

  switch (request.method) {
    case "GET":
      const location = await Location.find()
      response.status(200).json(location);
      break;
  
    default:
      break;
  }

}
