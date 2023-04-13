import dbConnect from "../../../../db/connect";
import Location from "../../../../db/models/Location";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET":
      const location = await Location.findById(id);
      response.status(200).json(location);
      break;
    case "PUT":
      const locationToUpdate = await Location.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json(locationToUpdate);
      break;
    // case "POST":
    //   try {
    //     const locationData = request.body;
    //     const location = new Location(locationData);
    //     await location.save();
    //     response.status(201).json({ status: "product created" });
    //   } catch (e) {
    //     console.error(e);
    //     response.status(400).json({ error: e.message });
    //   }
    //   break;

    default:
      return response.status(404).json({ status: "Not found" });
  }
}
