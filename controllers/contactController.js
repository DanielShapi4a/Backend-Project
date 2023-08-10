const asyncHandler = require("express-async-handler");

//@desc Get all contact
//@route Get /api/contacts
//@acess public

const getContacts = asyncHandler(async (req,res) =>{
  res.status(200).json({message: "Get all contacts"});
});

//@desc Get contact
//@route GET /api/contacts/:id
//@acess public

const getContact = asyncHandler(async (req,res) =>{
  res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

//@desc Create New contact
//@route POST /api/contacts
//@acess public

const createContact = asyncHandler(async (req,res) =>{
  console.log("The request body is:",req.body);
  const {name,email,phome}= req.body;
  if(!name||!email||!phone){
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({message: "Create Contact"});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@acess public

const updateContact = asyncHandler(async (req,res) =>{
  res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@acess public

const deleteContact = async (req,res) =>{
  res.status(200).json({message: `Delete Contact for ${req.params.id}`});
}
module.exports = {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
  };