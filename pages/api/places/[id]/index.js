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
    case "DELETE":
      const locationToDelete = await Location.findByIdAndDelete(id);
      response.status(200).json(locationToDelete);
    default:
      return response.status(404).json({ status: "Not found" });
  }
}
