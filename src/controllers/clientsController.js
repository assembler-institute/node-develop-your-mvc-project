import Clients from "../models/Clients.js";
/**
 * This function add clients to the database
 * @param {*} req request  {body}
 * @param {*} res response {json}
 * @param {*} next
 */
export const addClient = async (req, res, next) => {
  try {
    const { name, lastName, company, email, phoneNumber } = req.body;
    const newClient = new Clients({
      name,
      lastName,
      company,
      email,
      phoneNumber,
    });
    await newClient.save();
    res.json({ message: "Added!" });
  } catch (error) {
    res.json({ code: 11000 });
    next();
  }
};

/**
 * This function get all clients in the database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getClient = async (req, res, next) => {
  try {
    const clients = await Clients.find();
    res.json(clients);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function get a client by Id from the database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const getClientById = async (req, res, next) => {
  try {
    const client = await Clients.findById(req.params.clientId);
    client ? res.json(client) : res.json({ message: "Client not found" });
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function update a client by id
 * @param {*} req {req.params.clientId}
 * @param {*} res {json(client)}
 * @param {*} next
 */
export const updateClient = async (req, res, next) => {
  try {
    const client = await Clients.findByIdAndUpdate(
      req.params.clientId,
      req.body,
      { new: true }
    );
    res.json(client);
  } catch (error) {
    console.log(error);
    next();
  }
};

/**
 * This function delete a client by id
 * @param {*} req {req.params.clientId}
 * @param {*} res {json(message)}
 * @param {*} next
 */
export const deleteClient = async (req, res, next) => {
  try {
    await Clients.findByIdAndDelete(req.params.clientId);
    res.json({ message: "Deleted!" });
  } catch (error) {
    console.log(error);
    next();
  }
};
