import dbConnect from "../../../db/connect";
import Location from "../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const location = await Location.find();
      response.status(200).json(location);
      break;
    case "POST":
      try {
        const locationData = request.body;
        const location = new Location(locationData);
        await location.save();
        response.status(201).json({ status: "product created" });
      } catch (e) {
        console.error(e);
        response.status(400).json({ error: e.message });
      }
      break;

    default:
      break;
  }
}
